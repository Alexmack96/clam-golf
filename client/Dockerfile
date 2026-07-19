# Stage 1: Install monorepo dependencies
# server/package.json is needed even though the server is built elsewhere — bun
# refuses to install a workspace whose member manifests are missing.
FROM oven/bun:1 AS install
WORKDIR /app
COPY package.json bun.lock* ./
COPY core/package.json ./core/
COPY client/package.json ./client/
COPY server/package.json ./server/
RUN bun install

# Stage 2: Build the React bundle
FROM oven/bun:1 AS build
WORKDIR /app
COPY package.json ./
COPY core ./core
COPY client ./client
# Source is copied first, then dependencies — .dockerignore strips */node_modules
# from the build context, so every workspace's deps must come from the install
# stage. core/node_modules matters as much as client's: bun installs per
# workspace rather than hoisting to the root, so core's zod lives only there.
COPY --from=install /app/node_modules ./node_modules
COPY --from=install /app/client/node_modules ./client/node_modules
COPY --from=install /app/core/node_modules ./core/node_modules
# Vite inlines VITE_* vars at build time, so they must arrive as build args
# (Railway forwards service variables declared with ARG) rather than as plain
# runtime env vars, which vite build would never see.
ARG VITE_SENTRY_DSN
ARG VITE_SENTRY_ENVIRONMENT
ENV VITE_SENTRY_DSN=$VITE_SENTRY_DSN
ENV VITE_SENTRY_ENVIRONMENT=$VITE_SENTRY_ENVIRONMENT
RUN cd client && bunx vite build

# Stage 3: Production — nginx serves the static bundle and proxies /api to the
# server service, so the browser only ever talks to one origin.
FROM nginx:1.27-alpine AS production
COPY --from=build /app/client/dist /usr/share/nginx/html
COPY client/nginx.conf.template /etc/nginx/templates/default.conf.template
COPY client/docker-entrypoint.d/05-resolver.sh /docker-entrypoint.d/05-resolver.sh
RUN chmod +x /docker-entrypoint.d/05-resolver.sh
ENV PORT=8080
ENV API_UPSTREAM=http://server.railway.internal:3000
EXPOSE 8080
