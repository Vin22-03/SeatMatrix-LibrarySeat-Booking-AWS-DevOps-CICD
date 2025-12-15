# ---------- Stage 1: Build React App ----------
FROM node:22-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the source code
COPY . .

# Build production files
RUN npm run build


# ---------- Stage 2: Serve via NGINX ----------
FROM nginx:stable-alpine

# Remove default NGINX config
RUN rm /etc/nginx/conf.d/default.conf

# Add custom SPA routing config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build output from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 for ECS/ALB
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
