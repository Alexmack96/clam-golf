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
par 4 off yellow. Chosen per Player, not per Round: a mixed fourball plays off
different tees on the same card.
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
One trip round a Course by a group of up to four Players, on a chosen date and tee
time. Created deliberately — you pick the Course and tee time — not from the first
score entered. Stays open until it is finished, so an abandoned nine is still a
Round, and only one Round is open at a time. A finished Round is locked; editing it
takes a deliberate unlock and leaves it finished.
_Avoid_: Game, scorecard (that's the view of it), session

**Player**:
One person on a Round's card — one to four of them. Carries a name, the Tee Set they
played, and their own Hole Scores. You are always Player 1, added for you. A Player
is a name you key in; linking one to a real account is a later, separate feature.
_Avoid_: Competitor, marker (you mark the whole group), user (that's the account)

**Hole Score**:
What a Hole cost one Player in one Round: strokes always, putts when bothered — in
practice putts are entered only for you, Player 1. Strokes are gross — no handicap is
applied anywhere in this app.
_Avoid_: Score (ambiguous between one hole and the whole round)

**Green in Regulation**:
Reaching the putting surface with at least two strokes left for par. Never recorded —
always derived, as strokes minus putts being at most par minus two.
_Avoid_: GIR in prose, though the abbreviation is fine in a column heading

### Swing thoughts

**Swing Thought**:
One cue you want to hold in mind for a kind of shot — "weight forward", "slow
takeaway". Belongs to exactly one Shot Type and one Swing Phase, carries a Rank and
an optional Note. The same cue wanted for two shots is two Swing Thoughts, ranked
independently — you think about one shot at a time.
_Avoid_: Tip, cue, key

**Shot Type**:
The kind of shot a Swing Thought is for — Driver, Iron, Pitch, Chip, Putt, Bunker.
A shot you play, deliberately distinct from Club (the implement) and its Club Type:
Pitch, Chip and Bunker are shots with no club of their own.
_Avoid_: Club, Club Type (that's equipment)

**Swing Phase**:
Where in the motion a Swing Thought applies — Setup, Backswing, Downswing, Finish.
The phase of the stroke, unrelated to Swing Length (which is depth of backswing on a
wedge, not a moment in the swing).
_Avoid_: Backswing as a Swing Length, swing type

**Rank**:
How much a Swing Thought is worth thinking about, 0–100. Orders the thoughts within a
Shot Type, highest first, so the highest-impact cue sits on top. Relative within its
Shot Type, not across the whole game; ties allowed.
_Avoid_: Score, priority, weight

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
