# Stage 1: Builder
FROM node:16-slim AS builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Production
FROM node:16-slim AS final
WORKDIR /app

# Copy only the necessary files
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./

EXPOSE 3000
CMD ["npm", "start"]
