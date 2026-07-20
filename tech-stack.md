## Tech Stack

### Runtime
- **Bun** — runtime and package manager for all three workspaces

### Frontend
- **React 18** — UI
- **React Router v6** — client-side routing
- **TanStack Query v5** — all server state
- **Axios** — the only HTTP client
- **Tailwind CSS v4** — styling, via `@tailwindcss/vite` (no config file)
- **shadcn/ui** (new-york) + **Radix** — components
- **Leaflet** — map rendering on `/gps`
- **Esri World Imagery** — satellite tiles, no API key
- **Recharts**, **AG Grid** — charts and tables
- **Vite** — build tool
- **vite-plugin-pwa** / Workbox — installable, offline-capable

### Backend
- **Express 5** (TypeScript) — REST API
- **Helmet**, **CORS**, **express-rate-limit** — hardening

### Shared
- **`@clam/core`** — Zod schemas and geospatial maths shared by client and server

### Database
- **SQLite** via **libSQL** — primary data store
- **Prisma 7** with the libSQL driver adapter — ORM

### Authentication
- **Better Auth** — server-side sessions in SQLite, no JWTs. Sign-up disabled.

### Monitoring
- **Sentry** — client and server

### Deployment
- **Railway** — two services (client behind nginx, server), see `railway.*.toml`
- **Docker** — images for both

### Testing
- **Vitest** + React Testing Library — component and unit tests
- **Playwright** — e2e
