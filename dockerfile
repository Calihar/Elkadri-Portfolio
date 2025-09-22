# ---- Builder ----
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# Adjust these to your scripts (Angular Universal usually has "build:ssr")
RUN npm run build:ssr || (npm run build && npm run build:server)

# ---- Runtime ----
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/dist/ /app/dist/
# If your SSR entry differs, update the start cmd.
EXPOSE 4000
CMD ["node", "dist/server/main.js"]
