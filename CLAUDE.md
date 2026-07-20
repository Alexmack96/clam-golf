# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Clam Golf is a single-player golf app: club distances, a shot calculator, and a GPS
rangefinder. See [CONTEXT.md](./CONTEXT.md) for the domain vocabulary — use those
terms in code and in conversation.

## Express 5 Error Handling

Express 5 automatically forwards async errors to the error handler — no `try/catch`
needed for generic propagation. Only use `try/catch` when mapping a specific error to
a specific HTTP response (e.g. Prisma `P2025` → 404, `P2002` → 409). Never wrap async
DB calls in `try/catch` just to `throw err` or call `next(err)`.

## Enums

Always use Prisma-generated enums (e.g. `ClubType.Wedge`, `TeeColour.Yellow`) instead
of hardcoding string literals. Import from `../generated/prisma/index.js`.

## Context7

Always use Context7 (`npx ctx7@latest library <name>` then `npx ctx7@latest docs <id>`)
when working with any library or API here — Prisma, Express, React, Vite, Tailwind,
Zod, Leaflet, Better Auth, Bun.

## Dev Commands

All commands use **Bun**.

```bash
bun run dev          # both services from the repo root
```

Or separately:

```bash
cd server && bun run dev      # bun --watch, port 3000
cd client && bun run dev      # Vite, port 5173
```

Both have a `predev` that frees their port first. If a page loads but shows the wrong
app or routes do not match, something else is squatting on the port — run
`bun scripts/free-ports.mjs 3000 5173` and restart.

Database is **SQLite** (`server/prisma/dev.db`).

### Server DB commands

```bash
bun run db:migrate:deploy   # apply migrations (migrate dev needs a TTY)
bun run db:generate         # regenerate the client after a schema change
bun run db:seed             # admin user
bun run db:seed:clubs       # the bag
bun run db:seed:courses     # Richmond Park scorecards
bun run db:studio
```

The seed scripts read `DATABASE_URL` from the repo-root `.env`, which Bun only picks
up in `dev`. To run one by hand: `bun --env-file ../.env src/db/seedCourses.ts`.

All seeds are **fill-only** — they create what is missing and never update what
exists, because the data they touch is data you edit in the app.

**Adding a migration:** `prisma migrate dev` requires an interactive TTY. Instead:
1. Write the SQL in `server/prisma/migrations/<timestamp>_<name>/migration.sql`
2. `bun run db:migrate:deploy`
3. `bun run db:generate`

### Lint and tests

```bash
cd server && bun run lint
cd client && bun run lint      # React Compiler rules are on — see below
cd client && bunx vitest run
npx playwright test
```

Use the **playwright-e2e-writer** agent for e2e tests. Do not write them inline.

## React Compiler

The client lints with `eslint-plugin-react-hooks` v7 and the compiler rules enabled.
Hand-written `useMemo` / `useCallback` is an **error** whenever the compiler cannot
prove your dependency list matches what it infers. Prefer plain expressions and plain
functions and let the compiler memoize; only reach for a manual hook when the
dependencies are genuinely exact. Refs must not be written during render.

## Forms

**React Hook Form** + **Zod**. Shared schemas go in `@clam/core`; local-only schemas
stay in the page. Wire with `useForm({ resolver: zodResolver(schema) })`.

## Shared code (`core/`)

`@clam/core` is the third workspace, imported by both server and client.

- `core/src/schemas/` — one file per domain
- `core/src/geo.ts` — geospatial maths (distance, bearing, centroid, green distances)
- `core/src/index.ts` — barrel re-export

Anything both sides need lives here. Never duplicate it — a copy of the centroid
function in a script once drifted from the shared one by 26cm.

## Architecture

Bun monorepo: `server/`, `client/`, `core/`.

### Server (`server/src/`)

Express + TypeScript. Entry: `src/index.ts`.

- `config/env.ts` — Zod-validated env vars
- `db/client.ts` — Prisma singleton on the libSQL adapter
- `middleware/auth.ts` — `requireAuth`. There is no role gate; every signed-in user
  reaches every route
- `routes/clubs.ts` — the bag, including the 14-club swap rule
- `routes/distances.ts` — measured yardages
- `routes/courses.ts` — courses, green assignment, aim points, tee positions
- `routes/rounds.ts` — scorecards; `PUT /:id` replaces a whole round

### Client (`client/src/`)

React 18 + React Router v6 + Tailwind v4 + shadcn/ui.

- `lib/api.ts` — Axios instance. **Always use this; never `fetch` for the API.**
- `hooks/` — one file per resource, `useQuery` + mutations that invalidate
- `pages/DistancesPage.tsx` — the gapping table
- `pages/ShotCalculatorPage.tsx` — plays-like distance; accepts `?distance=` from /gps
- `pages/ClubsPage.tsx` — bag management
- `pages/GpsPage.tsx` — the rangefinder
- `pages/ScorecardPage.tsx` — the card in progress, plus past rounds

Query keys are descriptive noun arrays: `["clubs"]`, `["courses"]`.

### Authentication

Better Auth, server-side sessions in SQLite via the Prisma adapter. No JWT. Sign-up
is disabled; the admin account is seeded from `ADMIN_EMAIL` / `ADMIN_PASSWORD`.

## The GPS rangefinder (`/gps`)

### How a hole is modelled

`Course` → `Hole` → `HoleTee`, with `TeeSet` naming the colour.

- **`Hole`** holds geometry true regardless of which tees you play: the green
  outline, its centroid, and an optional aim point.
- **`HoleTee`** holds what the scorecard prints per colour: yardage, par, stroke
  index, and optionally that tee's coordinates.

Par is on `HoleTee`, not `Hole`, because Duke's 17th is a par 5 off white and a par 4
off yellow.

### Where course geometry comes from

`scripts/fetch-osm-geometry.mjs` pulls green and tee outlines from OpenStreetMap into
`client/src/data/richmond-park-geometry.json`, checked in so neither the build nor the
app depends on Overpass.

Overpass rejects a POST without a named `User-Agent` (406) and rate-limits hard, so
the script sets one and cycles mirrors.

**OSM has no hole numbers, no par and no tee colours.** Binding an outline to a hole
is therefore a deliberate step: the pencil toggle on `/gps` opens the assignment
editor, which offers every unclaimed outline and writes the one you tap to that hole.
The outline and its centroid always move together — front and back are projections of
the outline, so a centre belonging to a different green would produce plausible wrong
numbers.

The editor flags a hole where straight-line tee-to-green differs from the card by more
than 60 yards. A dogleg legitimately reads short, because the card follows the line of
play; a gap that large means the wrong green.

### Distances

All maths is in `core/src/geo.ts` and runs locally, so yardages work with no network.

- **Middle** is the area-weighted centroid of the green outline, not the mean of its
  vertices — hand-traced outlines have far more points on some edges than others.
- **Front / back** project the outline onto the line of play, rather than taking the
  nearest and furthest points of the outline. The same green reads deeper attacked
  end-on than from the side, which is correct.

`client/src/test/geo.test.ts` covers these; both behaviours were bugs the tests caught.

### Position

`useGeolocation` watches with `enableHighAccuracy` and **tears the watch down on
`visibilitychange`**. A round is four hours and continuous GPS is the biggest drain on
the page.

A fix looser than `USABLE_ACCURACY_M` (50m) is a wifi or IP lookup, not a satellite
one — which is what a desktop reports. The page then suppresses live yardages and
falls back to measuring from the tee, plus tap-to-measure. That is the desktop story;
there is no separate desktop layout.

Hole selection is **manual**. Nearest-green detection only ever offers a dismissible
hint, because Richmond Park's holes run close and parallel.

### Offline

Numbers never need the network. For imagery:

- Workbox runtime-caches Esri tiles `CacheFirst` into `golf-tiles`
- `lib/tilePrefetch.ts` fills that same cache up front from the "Save map offline"
  button — roughly 310 tiles, 5–10MB, for both courses at z16–18

The cache name is shared between `vite.config.ts` and `tilePrefetch.ts`; changing one
without the other silently splits them.

### Map

Leaflet with Esri World Imagery. Street tiles are useless here — a golf course renders
as one undifferentiated green shape.

**North-up, always.** Leaflet core has no rotation; play-direction-up would need a
third-party fork. The you-to-green line carries the orientation instead.

The map auto-fits to whatever is on screen, but stops as soon as you pan or zoom, and
resumes on the next hole or on entering the editor (`fitKey`). `fitBounds` raises the
same events a finger does, so the fit flags itself while running.

Markers are `divIcon` circles, never Leaflet's default pin — the default icon is a PNG
on a relative path that bundlers rewrite and then fail to resolve.

## Scorecards

A `Round` (course + tee set + day) holds a `HoleScore` per hole: gross strokes, and
putts when you bothered. **No handicap is applied anywhere** — nothing computes nett
or stableford. Green in regulation is derived from strokes minus putts, never stored,
so it cannot disagree with the score beside it.

Entry is a stepper on `/gps` under the hole switcher, because that is where you
already are with the par in front of you. `/scorecard` is the full card plus history.

### Why the round is local-first

`useActiveRound` keeps the round in progress in **localStorage**, and that is the
source of truth while you play. Entering a score is a synchronous local write that
cannot fail — a dead spot on the course must never lose a hole you have walked past.
A debounced `PUT /api/rounds/:id` then replaces the server's copy of the whole card.

Consequences worth knowing before changing any of it:

- **The id is minted on the phone** (`crypto.randomUUID`), so `rounds.id` has no
  database default. The round exists before the server has heard of it, which is what
  makes the push a retryable upsert rather than create-then-update.
- **The push is a whole-document replace**, not a patch. One player, one device, so
  there is nothing to merge and a dropped request needs no queue — the next edit
  sends everything again. `PUT` deletes and recreates the round's scores.
- **Finishing does not clear the local copy until the push succeeds.** You often
  finish in a car park with no signal. Until it lands the card reads "waiting for
  signal", and the `online` listener retries.
- The store is **module-level with `useSyncExternalStore`**, not `useState`. Three
  components read the round at once, and per-hook state let them drift apart the
  moment one of them finished or discarded it.
