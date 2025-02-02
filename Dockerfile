# Stage 1: Builder
FROM node:16-alpine AS builder
WORKDIR /app

# Copy package.json and package-lock.json files separately to optimize cache usage
COPY package*.json ./

# Install dependencies
RUN npm install --only=production \
    && npm cache clean --force \
    && rm -rf /tmp/*

# Copy the rest of the application code and build the application
COPY . .
RUN npm run build

# Stage 2: Production
FROM scratch
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# Install minimal dependencies and remove unnecessary files
RUN rm -rf /tmp/*

EXPOSE 3000
CMD ["node", "build/index.js"]
