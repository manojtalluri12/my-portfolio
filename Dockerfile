# Stage 1: Builder
FROM node:16-alpine AS builder
WORKDIR /app

# Copy package.json and package-lock.json files separately
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Remove unnecessary files
RUN rm -rf /app/node_modules \
    && npm install --only=production \
    && rm -rf /root/.npm \
    && rm -rf /tmp/*

# Stage 2: Production
FROM node:16-alpine AS final
WORKDIR /app

# Install minimal dependencies
RUN apk add --no-cache tini

# Copy only the necessary files
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

EXPOSE 3000
ENTRYPOINT ["/sbin/tini", "--"]
CMD ["npm", "start"]
