FROM node:16-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Production
FROM builder AS final
WORKDIR /app
RUN npm install --production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
