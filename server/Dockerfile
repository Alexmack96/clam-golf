# Stage 1: Install monorepo dependencies
# Package manifests are copied first so this layer only rebuilds when deps change.
# client/package.json is needed even though the client is built elsewhere — bun
# refuses to install a workspace whose member manifests are missing.
FROM oven/bun:1 AS install
WORKDIR /app
COPY package.json bun.lock* ./
COPY core/package.json ./core/
COPY server/package.json ./server/
COPY client/package.json ./client/
RUN bun install

# Stage 2: Build — generate the Prisma client
FROM oven/bun:1 AS build
WORKDIR /app
COPY --from=install /app/node_modules ./node_modules
COPY --from=install /app/server/node_modules ./server/node_modules
COPY package.json ./
COPY core ./core
COPY server ./server
# Ensure zod is resolvable from core/ (peer dep not hoisted to root)
RUN mkdir -p core/node_modules && \
    if [ -d node_modules/zod ]; then cp -r node_modules/zod core/node_modules/zod; fi
RUN cd server && DATABASE_URL=file:./prisma/dev.db bunx prisma generate

# Stage 3: Production — server source plus the generated Prisma client only
FROM oven/bun:1 AS production
WORKDIR /app
COPY --from=install /app/node_modules ./node_modules
COPY --from=install /app/server/node_modules ./server/node_modules
COPY --from=build /app/server ./server
COPY --from=build /app/core ./core
COPY package.json ./
ENV NODE_ENV=production
# The SQLite file lives here, on its own volume. It deliberately sits outside
# server/prisma — mounting a volume over that directory would mask schema.prisma
# and migrations/, and migrate deploy would fail on first boot.
RUN mkdir -p /app/data
EXPOSE 3000
# seedClubs is NOT run here: it rewrites distances to hardcoded defaults on every
# boot, which would wipe real data now that the volume persists it. Run it by
# hand once on a fresh database instead — bun run db:seed:clubs
CMD ["sh", "-c", "cd server && bunx prisma migrate deploy && bun src/db/seed.ts && bun src/index.ts"]
