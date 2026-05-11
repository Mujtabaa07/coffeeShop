FROM node:20.14.0-bookworm-slim AS frontend-build

WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm ci

COPY . /app/
RUN npm run build

FROM nginx:1.27.0-alpine AS frontend

COPY --from=frontend-build /app/build /app/html/
RUN printf 'server {\n  listen 80;\n  server_name _;\n  root /app/html;\n  index index.html;\n\n  location / {\n    try_files $uri /index.html;\n  }\n}\n' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

FROM node:20.14.0-bookworm-slim AS backend

WORKDIR /app

COPY backend/package.json backend/package-lock.json /app/
RUN npm ci --omit=dev

COPY backend/ /app/

ENV NODE_ENV=production

EXPOSE 8080

USER node
CMD ["node", "server.js"]