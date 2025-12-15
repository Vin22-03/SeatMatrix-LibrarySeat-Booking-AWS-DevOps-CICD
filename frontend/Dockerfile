# ---------- Stage 1: Build React App ----------
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


# ---------- Stage 2: Serve via NGINX ----------
FROM nginx:stable-alpine

# Remove default config
RUN rm /etc/nginx/conf.d/default.conf

# Add our custom SPA config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build artifacts
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 for ALB/ECS
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
