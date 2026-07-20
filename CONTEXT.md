# Clam Golf

A personal golf app for one player: knowing how far you hit each club, and how far
you are from where you're aiming.

## Language

### Equipment

**Club**:
One implement in the bag. Never deleted — a club swapped out is deactivated so its
measured distances survive.
_Avoid_: Stick, iron (an iron is one kind of club)

**Swing Length**:
How far back the club is taken — Full, Shoulder, Chest, Hip. Only wedges carry
partial-swing entries.
_Avoid_: Swing type, backswing

**Distance**:
A club's carry yardage at one swing length, as measured on a given day. Carry, not
total — roll is never included.
_Avoid_: Yardage (reserved for a hole's length), range

### Course

**Course**:
One 18-hole layout. Richmond Park has two — Duke's and Prince's — which are two
Courses, not one.
_Avoid_: Club (means equipment here), venue

**Hole**:
One numbered hole on a Course, identified by its green. A Hole's geometry is
course-wide and independent of which tees you play.

**Green**:
The putting surface, held as its full outline rather than a single point. Its
outline is what makes Front, Middle and Back meaningful.

**Middle**:
The centroid of the Green. The default number quoted.
_Avoid_: Centre, pin, flag — the pin's real position is unknown to the app

**Front** / **Back**:
The near and far edges of the Green, measured along the line of play from the tee.
Derived from the Green's outline, never stored separately.

**Tee Set**:
A Course played from one set of tee markers, e.g. Men's Yellow. Carries a Yardage,
Par and Stroke Index for every Hole, and optionally a tee position. Par and Stroke
Index belong to the Tee Set, not the Hole — Duke's 17th is a par 5 off white and a
par 4 off yellow.
_Avoid_: Tee colour, tee box (that's the physical ground)

**Yardage**:
A Hole's published length from a given Tee Set, as printed on the scorecard. Measured
along the line of play, so on a dogleg it exceeds the straight-line tee-to-green
distance. Fixed — distinct from the live distance to the Green.
_Avoid_: Distance (reserved for club carry), length

**Stroke Index**:
A Hole's difficulty rank, 1–18, from a given Tee Set. Determines where handicap
strokes fall.
_Avoid_: SI, handicap (that's the player's)

**Assignment**:
Binding a piece of imported map geometry — a green outline, a teeing ground — to a
specific Hole. The map data arrives unnumbered, so Assignment is a deliberate,
correctable step rather than an import detail.

### Scoring

**Round**:
One trip round a Course from one Tee Set on one day. Exists from the first score
entered, not from a deliberate "start" — and stays open until it is finished, so an
abandoned nine is still a Round.
_Avoid_: Game, scorecard (that's the view of it), session

**Hole Score**:
What a Hole cost in one Round: strokes always, putts when the player bothered.
Strokes are gross — no handicap is applied anywhere in this app.
_Avoid_: Score (ambiguous between one hole and the whole round)

**Green in Regulation**:
Reaching the putting surface with at least two strokes left for par. Never recorded —
always derived, as strokes minus putts being at most par minus two.
_Avoid_: GIR in prose, though the abbreviation is fine in a column heading

### On the course

**Aim Point**:
A chosen spot short of the Green that a Hole is played through — a dogleg corner or a
layup target. A property of the Hole, not of a Tee Set, and once set it persists
between rounds. Also what makes a dogleg's Yardage reconcile with its geometry.
_Avoid_: Waypoint, target, layup point (that's the act, not the place)

**Layup**:
Playing a Hole in two shots to the Green because it is longer than the player can
carry, splitting the distance at an Aim Point.
_Avoid_: Two-shotter, lay-up

**Fix**:
One reading of the phone's position, with its own accuracy. A Fix is trusted or
distrusted; a poor Fix suppresses distances rather than quoting a wrong one.
_Avoid_: Location, GPS (the system), position

**Playing Hole**:
The Hole the player has selected. The player chooses it; position data may only
suggest a change.
_Avoid_: Current hole, active hole
