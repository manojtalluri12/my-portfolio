# Stage 1: Builder
FROM node:16-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --only=production
COPY . .
RUN npm run build

# Stage 2: Production
FROM node:16-alpine AS final
WORKDIR /app

# Copy only the necessary files
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./

EXPOSE 3000
CMD ["npm", "start"]
