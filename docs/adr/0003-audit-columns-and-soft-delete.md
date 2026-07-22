# Audit columns everywhere; soft-delete on the scoring tables

Every domain table now carries `createdAt`, `updatedAt`, and nullable
`createdById` / `updatedById` foreign keys to `user`. The `*ById` columns are
stamped automatically by a Prisma client extension that reads the current user
from an `AsyncLocalStorage` set in `requireAuth`. Deletion is soft on the
scoring tables — `Round`, `Player`, `HoleScore` gain `deletedAt` / `deletedById`
and are hidden rather than removed, so a mis-tap on the course is recoverable.

## Considered Options

- **`*By` as a denormalised string (name/email)** — no FK, no join. Rejected: we
  want referential integrity and the option to resolve back to the account
  later, even though today there is exactly one user.
- **`*By` as a Prisma relation on `User`** — the "correct" Prisma way, but it
  forces ~16 back-relations (`createdClubs`, `updatedRounds`, …) onto the auth
  library's `User` model, which we otherwise leave untouched. Rejected as noise.
- **`*ById` scalar column with a raw-SQL foreign key (chosen)** — Prisma sees a
  plain nullable `String`; the `REFERENCES "user"("id")` constraint is written in
  the hand-authored migration. Real integrity at the DB, zero pollution of the
  auth models. We never `include` the auditor, so losing navigation costs
  nothing.

## Consequences

- `createdById` will be the same user on every row until account-linking exists
  (see ADR 0001's reserved `Player.userId`). That is expected, not a bug — the
  column is there so history survives the day a second person signs in.
- The audited tables are ours only. Better Auth's `user` / `session` / `account`
  / `verification` are left alone; adding columns there risks the library.
- Soft-delete is deliberately **not** a global query-rewriting extension.
  Rewriting `findUnique` and every read to filter `deletedAt` is fragile, and a
  slip would break the GPS read path. Instead the three scoring tables filter
  `deletedAt: null` explicitly where they are listed, and their delete routes set
  the timestamp. `Club` keeps its existing `isActive` flag; it is not re-modelled.
