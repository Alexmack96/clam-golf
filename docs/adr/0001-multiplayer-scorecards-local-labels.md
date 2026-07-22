# Multi-player scorecards as local labels; sharing deferred

Clam Golf was built single-player: a `Round` had one `teeSetId` and a `HoleScore` was
one strokes value per hole. We want fourball cards (up to four players, each off their
own tees) and, eventually, to link cards with friends who also have the app. We decided
to make cards multi-player **now** by adding a `Player` (name + tee set + own scores +
an unused, reserved `userId`), but to **defer** real account-linking and shared editing
to a separate project. Scoring also moves off `/gps` onto the card itself; GPS becomes a
stateless rangefinder the card can link out to.

## Considered Options

- **Full shared accounts now** — enable sign-up, build friends/linking, and let two
  phones edit one card. Rejected for this iteration: it forces abandoning the
  whole-document-replace sync (see Consequences) and is a much larger project.
- **Stay single-player, tee per round** — cheapest, but can't represent a mixed
  fourball at all, which is the actual need.
- **Multi-player local labels (chosen)** — you (Player 1) mark everyone on your phone,
  exactly like paper. Delivers the fourball card immediately while leaving a clean
  migration path (`userId` already on `Player`) to linking later.

## Consequences

- The load-bearing sync model stays intact: **one device, one writer, whole-document
  replace** (`PUT /rounds/:id` deletes and recreates the card). This is only safe with a
  single writer. Real sharing means concurrent writers and therefore a merge engine —
  that is exactly why sharing is a separate project, not a flag flip.
- `Round.teeSetId` is removed; tee is per-`Player`. `HoleScore` is keyed
  `[playerId, holeId]`. Existing rounds migrate by moving their `teeSetId` onto an
  auto-created Player 1 named "You".
- Sign-up stays disabled; `Player.userId` is reserved but unused until the sharing work.
