# ShotType is its own enum, distinct from ClubType

Swing Thoughts are filed by the kind of shot they serve: Driver, Iron, Pitch, Chip,
Putt, Bunker. Several of those names already exist in `ClubType` (Driver, Iron, Putter),
so we could have reused that enum. We deliberately added a **separate `ShotType` enum**
instead. A ShotType is a shot you play; a ClubType is an implement in the bag. Pitch,
Chip and Bunker are shots with no club of their own, and a future reader seeing two
overlapping enums would otherwise wonder why they weren't merged.

## Considered Options

- **Reuse `ClubType`** — no new enum. Rejected: Pitch, Chip and Bunker aren't clubs, so
  the shots you most want swing thoughts for can't be expressed. Forcing them in would
  corrupt `ClubType`, which the bag and gapping table depend on.
- **One shared enum renamed to cover both** — collapses a real distinction (a Wedge
  club plays Pitch, Chip *and* Bunker shots) and drags equipment code into a swing-cue
  feature. Rejected.
- **Separate `ShotType` enum (chosen)** — the two dimensions stay independent and each
  stays honest to its own domain.

## Consequences

- Two enums share value *names* (Driver, Iron) but never the same type. Code and the
  glossary must keep them apart — `ShotType.Iron` and `ClubType.Iron` are not
  interchangeable, and there is no mapping between them.
- There is intentionally **no link** from a Swing Thought to a Club. Ranking a shot is
  independent of which club is in the bag for it.
