# Stage 1: Build the React app
FROM node:16-slim as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the built app with a lightweight web server
FROM nginx:alpine

# Copy the build output to the NGINX html directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 3000 (or the port your app is configured to listen on)
EXPOSE 3000

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
