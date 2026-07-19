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
COPY package.json ./
COPY core ./core
COPY server ./server
# Source is copied first, then dependencies — .dockerignore strips */node_modules
# from the build context, so every workspace's deps must come from the install
# stage. core/node_modules matters as much as server's: bun installs per
# workspace rather than hoisting to the root, so core's zod lives only there.
COPY --from=install /app/node_modules ./node_modules
COPY --from=install /app/server/node_modules ./server/node_modules
COPY --from=install /app/core/node_modules ./core/node_modules
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
# Both seeds are fill-only and safe to re-run on every boot: seed.ts returns
# early once the admin exists, seedClubs.ts creates missing rows without
# touching existing ones.
CMD ["sh", "-c", "cd server && bunx prisma migrate deploy && bun src/db/seed.ts && bun src/db/seedClubs.ts && bun src/index.ts"]
