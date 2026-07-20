import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Pencil, Check, X, Download, Crosshair } from "lucide-react";
import { Link } from "react-router-dom";
import {
  centroid,
  distanceYards,
  greenDistances,
  interpolate,
  type LatLng,
  type Ring,
} from "@clam/core";
import { GpsMap, type GreenCandidate } from "../components/gps/GpsMap.js";
import { Button } from "../components/ui/button.js";
import { Skeleton } from "../components/ui/skeleton.js";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select.js";
import { useClubs } from "../hooks/useClubs.js";
import {
  useCourses,
  useAssignGreen,
  useSetAimPoint,
  type CourseRow,
  type HoleRow,
} from "../hooks/useCourses.js";
import { useGeolocation } from "../hooks/useGeolocation.js";
import { bagOptions, nearestClub, longestCarry, fullSwingYardages } from "../lib/clubSuggestion.js";
import { downloadCourseTiles, type TileProgress } from "../lib/tilePrefetch.js";
import geometry from "../data/richmond-park-geometry.json";

const CANDIDATES: GreenCandidate[] = (geometry.greens as GreenCandidate[]).map((g) => ({
  osmId: g.osmId,
  ring: g.ring as Ring,
  centre: g.centre,
}));

const yd = (n: number) => Math.round(n);

/** Remembers the course, tees and hole across app restarts — you play a round in sittings. */
function useStickyState(key: string, initial: string) {
  const [value, setValue] = useState(() => localStorage.getItem(key) ?? initial);
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);
  return [value, setValue] as const;
}

export function GpsPage() {
  const { data: courses, isLoading } = useCourses();
  const { data: clubs } = useClubs();
  const { fix, status, usable } = useGeolocation();

  const [courseName, setCourseName] = useStickyState("gps.course", "Duke's");
  const [teeColour, setTeeColour] = useStickyState("gps.tee", "Yellow");
  const [holeNumber, setHoleNumber] = useState(1);
  const [measure, setMeasure] = useState<LatLng | null>(null);
  const [editing, setEditing] = useState(false);
  const [dismissedHint, setDismissedHint] = useState<number | null>(null);
  const [tileProgress, setTileProgress] = useState<TileProgress | null>(null);

  const assignGreen = useAssignGreen();
  const setAimPoint = useSetAimPoint();

  const course: CourseRow | undefined =
    courses?.find((c) => c.name === courseName) ?? courses?.[0];
  const teeSet = course?.teeSets.find((t) => t.colour === teeColour) ?? course?.teeSets[0];
  const hole: HoleRow | undefined = course?.holes.find((h) => h.number === holeNumber);
  const holeTee = hole?.tees.find((t) => t.teeSetId === teeSet?.id);

  const you: LatLng | null = fix ? { lat: fix.lat, lng: fix.lng } : null;
  const green = (hole?.greenPolygon as Ring | null) ?? null;
  // Everything below is derived straight from render state rather than wrapped
  // in useMemo: the React Compiler handles the caching, and one hole's worth of
  // geometry is a few dozen points either way.
  const greenCentre =
    hole?.greenLat != null && hole?.greenLng != null
      ? { lat: hole.greenLat, lng: hole.greenLng }
      : green
        ? centroid(green)
        : null;
  const tee =
    holeTee?.teeLat != null && holeTee?.teeLng != null
      ? { lat: holeTee.teeLat, lng: holeTee.teeLng }
      : null;

  // Distances are quoted from wherever you are; with no usable fix the page
  // falls back to the tee, which turns it into a yardage book rather than a
  // rangefinder. That is the honest answer on a desktop.
  const origin = usable ? you : tee;

  const distances = green && origin ? greenDistances(green, origin) : null;

  const options = bagOptions(clubs ?? []);
  const maxCarry = longestCarry(options);
  const fullClubs = fullSwingYardages(options);

  const savedAim =
    hole?.aimLat != null && hole?.aimLng != null
      ? { lat: hole.aimLat, lng: hole.aimLng }
      : null;

  // Two shots are on the table whenever the green is beyond anything in the
  // bag. Once you have hit your drive the number drops under that threshold
  // and the panel takes itself away.
  const needsLayup = distances != null && maxCarry > 0 && distances.middle > maxCarry;

  // Start halfway, then slide the marker until what is left is a yardage you
  // have a full swing for — a number you can actually hit beats a tidy split.
  function computeDefaultAim(): LatLng | null {
    if (!needsLayup || !origin || !greenCentre || !distances) return null;
    const half = distances.middle / 2;
    const approach =
      fullClubs
        .filter((y) => y < distances.middle)
        .sort((a, b) => Math.abs(a - half) - Math.abs(b - half))[0] ?? half;
    return interpolate(origin, greenCentre, (distances.middle - approach) / distances.middle);
  }
  const defaultAim = computeDefaultAim();

  const aim = savedAim ?? (needsLayup ? defaultAim : null);

  // An aim point only means anything while it is still in front of you.
  const aimAhead =
    aim != null &&
    greenCentre != null &&
    origin != null &&
    distanceYards(origin, greenCentre) > distanceYards(aim, greenCentre) + 15;

  const layup =
    aim && aimAhead && origin && greenCentre
      ? { first: distanceYards(origin, aim), second: distanceYards(aim, greenCentre) }
      : null;

  // Which green is nearest, regardless of which hole is selected. Only ever a
  // suggestion — Richmond Park's holes run close and parallel, and a wrong
  // auto-switch mid-round is worse than a tap.
  function findNearestHole() {
    if (!usable || !you || !course) return null;
    let best: { number: number; yards: number } | null = null;
    for (const h of course.holes) {
      if (h.greenLat == null || h.greenLng == null) continue;
      const d = distanceYards(you, { lat: h.greenLat, lng: h.greenLng });
      if (!best || d < best.yards) best = { number: h.number, yards: d };
    }
    return best;
  }
  const nearestHole = findNearestHole();

  const hint =
    nearestHole && nearestHole.number !== holeNumber && nearestHole.number !== dismissedHint
      ? nearestHole
      : null;

  // A candidate outline counts as taken when some hole already sits on its
  // centre. The centroid is derived from the outline, so this is an identity
  // check rather than a guess at proximity.
  function findUnassigned() {
    if (!course) return CANDIDATES;
    const taken = course.holes
      .filter((h) => h.greenLat != null && h.greenLng != null)
      .map((h) => ({ lat: h.greenLat!, lng: h.greenLng! }));
    return CANDIDATES.filter(
      (c) => !taken.some((t) => distanceYards(t, { lat: c.centre[0], lng: c.centre[1] }) < 2),
    );
  }
  const unassigned = findUnassigned();

  const assignedCount = course?.holes.filter((h) => h.greenPolygon != null).length ?? 0;

  function handleMapClick(p: LatLng) {
    if (editing) return;
    // Tapping the marker again clears it, so you are never stuck with a stale
    // measurement pinned to the map.
    setMeasure((prev) => (prev && distanceYards(prev, p) < 5 ? null : p));
  }

  function handleAimMove(p: LatLng) {
    if (!hole) return;
    setAimPoint.mutate({ holeId: hole.id, aimLat: p.lat, aimLng: p.lng });
  }

  function handleCandidateClick(c: GreenCandidate) {
    if (!hole) return;
    assignGreen.mutate({ holeId: hole.id, greenPolygon: c.ring });
  }

  function step(delta: number) {
    setHoleNumber((n) => ((n - 1 + delta + 18) % 18) + 1);
    setMeasure(null);
    setDismissedHint(null);
  }

  async function handleDownload() {
    setTileProgress({ done: 0, total: 0 });
    await downloadCourseTiles(setTileProgress);
    setTimeout(() => setTileProgress(null), 2500);
  }

  if (isLoading) {
    return (
      <div className="mx-auto w-full max-w-lg space-y-3">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-28 w-full" />
        <Skeleton className="h-80 w-full" />
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col gap-3">
      {/* Course and tees. Both are pickers because Richmond Park is two courses
          sharing one clubhouse, and the yardage on the card depends on which
          markers you played from. */}
      <div className="flex items-center gap-2">
        <Select value={course?.name ?? ""} onValueChange={setCourseName}>
          <SelectTrigger className="h-9 flex-1 text-[13px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {courses?.map((c) => (
              <SelectItem key={c.id} value={c.name}>
                {c.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={teeSet?.colour ?? ""} onValueChange={setTeeColour}>
          <SelectTrigger className="h-9 w-[130px] text-[13px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {course?.teeSets.map((t) => (
              <SelectItem key={t.id} value={t.colour}>
                {t.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          variant={editing ? "default" : "ghost"}
          size="icon-sm"
          onClick={() => setEditing((e) => !e)}
          aria-label={editing ? "Finish assigning greens" : "Assign greens"}
          title={editing ? "Finish assigning greens" : "Assign greens"}
        >
          {editing ? <Check className="size-4" /> : <Pencil className="size-4" />}
        </Button>
      </div>

      {/* Hole switcher — the source of truth for which hole you are on. */}
      <div className="surface-card flex items-center justify-between rounded-xl px-2 py-2">
        <Button variant="ghost" size="icon" onClick={() => step(-1)} aria-label="Previous hole">
          <ChevronLeft className="size-6" />
        </Button>
        <div className="text-center">
          <div className="eyebrow">Hole</div>
          <div className="font-display text-4xl leading-none">{holeNumber}</div>
          {holeTee && (
            <div className="mt-1 text-[12px] text-muted-foreground tabular-nums">
              par {holeTee.par} · {holeTee.yards} yd · SI {holeTee.strokeIndex}
            </div>
          )}
        </div>
        <Button variant="ghost" size="icon" onClick={() => step(1)} aria-label="Next hole">
          <ChevronRight className="size-6" />
        </Button>
      </div>

      {hint && (
        <button
          onClick={() => {
            setHoleNumber(hint.number);
            setMeasure(null);
          }}
          className="surface-card flex items-center justify-between rounded-xl px-3 py-2 text-left text-[13px]"
        >
          <span className="text-muted-foreground">
            Looks like you're on <span className="text-foreground font-medium">hole {hint.number}</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="text-primary font-medium">Jump</span>
            <X
              className="size-4 text-muted-foreground"
              onClick={(e) => {
                e.stopPropagation();
                setDismissedHint(hint.number);
              }}
            />
          </span>
        </button>
      )}

      {editing ? (
        <EditorPanel
          holeNumber={holeNumber}
          assigned={green != null}
          assignedCount={assignedCount}
          unassignedCount={unassigned.length}
          cardYards={holeTee?.yards ?? null}
          computed={tee && greenCentre ? distanceYards(tee, greenCentre) : null}
          onClear={() => hole && assignGreen.mutate({ holeId: hole.id, greenPolygon: null })}
        />
      ) : (
        <DistancePanel
          distances={distances}
          status={status}
          accuracy={fix?.accuracy ?? null}
          usable={usable}
          hasGreen={green != null}
          hasOrigin={origin != null}
          options={options}
        />
      )}

      {!editing && layup && (
        <LayupPanel first={layup.first} second={layup.second} options={options} saved={savedAim != null} />
      )}

      {/* Above the map, not below it: on a phone the map runs to the bottom of
          the screen, and a readout underneath would be off-screen at the exact
          moment you tapped for it. */}
      {!editing && measure && (
        <MeasurePanel
          measure={measure}
          origin={origin}
          greenCentre={greenCentre}
          onClear={() => setMeasure(null)}
        />
      )}

      <GpsMap
        className="h-[46vh] min-h-[260px] w-full overflow-hidden rounded-xl border border-border"
        you={you}
        accuracy={usable ? fix?.accuracy : null}
        green={green}
        greenCentre={greenCentre}
        tee={tee}
        aim={editing ? null : aim}
        onAimMove={handleAimMove}
        measure={editing ? null : measure}
        onMapClick={handleMapClick}
        candidates={editing ? unassigned : undefined}
        onCandidateClick={handleCandidateClick}
        fitKey={`${course?.id}-${holeNumber}-${editing}-${green != null}`}
      />

      {!editing && !measure && (
        <p className="px-1 text-center text-[11.5px] text-muted-foreground">
          <Crosshair className="mr-1 inline size-3" />
          Tap anywhere on the map to measure — a ditch to carry, a spot to lay up to.
        </p>
      )}

      <div className="flex items-center justify-between px-1 pb-2 text-[11px] text-muted-foreground">
        <span>
          {status === "denied"
            ? "Location permission denied"
            : fix
              ? `GPS ±${Math.round(fix.accuracy)} m`
              : "Acquiring GPS…"}
        </span>
        <button
          onClick={handleDownload}
          disabled={tileProgress != null}
          className="flex items-center gap-1.5 hover:text-foreground disabled:opacity-60"
        >
          <Download className="size-3.5" />
          {tileProgress
            ? tileProgress.total === 0
              ? "Preparing…"
              : tileProgress.done >= tileProgress.total
                ? "Saved for offline"
                : `${tileProgress.done}/${tileProgress.total}`
            : "Save map offline"}
        </button>
      </div>
    </div>
  );
}

function DistancePanel({
  distances,
  status,
  accuracy,
  usable,
  hasGreen,
  hasOrigin,
  options,
}: {
  distances: { front: number; middle: number; back: number } | null;
  status: string;
  accuracy: number | null;
  usable: boolean;
  hasGreen: boolean;
  hasOrigin: boolean;
  options: ReturnType<typeof bagOptions>;
}) {
  if (!hasGreen) {
    return (
      <div className="surface-card rounded-xl px-4 py-5 text-center text-[13px] text-muted-foreground">
        <MapPin className="mx-auto mb-2 size-5 opacity-50" />
        This hole has no green assigned yet — tap the pencil to place it.
      </div>
    );
  }

  if (!distances || !hasOrigin) {
    return (
      <div className="surface-card rounded-xl px-4 py-5 text-center text-[13px] text-muted-foreground">
        {status === "denied"
          ? "Allow location access to see live distances."
          : "Waiting for a position fix. Tap the map to measure in the meantime."}
      </div>
    );
  }

  const club = nearestClub(options, distances.middle);

  return (
    <div className="surface-card rounded-xl px-4 py-4">
      {!usable && (
        // A wifi or IP-derived fix can be kilometres out. Rather than quote a
        // confident wrong number, say where these came from: the tee.
        <div className="mb-3 rounded-lg bg-muted/60 px-3 py-2 text-[11.5px] text-muted-foreground">
          {accuracy ? `Fix is only accurate to ±${Math.round(accuracy)} m` : "No precise fix"} — showing
          yardages from the tee. Tap the map to measure from any point.
        </div>
      )}

      <div className="grid grid-cols-3 items-end gap-2 text-center">
        <div>
          <div className="eyebrow">Front</div>
          <div className="font-numeric text-2xl tabular-nums text-muted-foreground">
            {yd(distances.front)}
          </div>
        </div>
        <div>
          <div className="eyebrow text-primary">Middle</div>
          <div className="font-numeric text-5xl leading-none tabular-nums text-foreground">
            {yd(distances.middle)}
          </div>
        </div>
        <div>
          <div className="eyebrow">Back</div>
          <div className="font-numeric text-2xl tabular-nums text-muted-foreground">
            {yd(distances.back)}
          </div>
        </div>
      </div>

      {club && (
        <Link
          to={`/shot-calculator?distance=${yd(distances.middle)}`}
          className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-muted/60 px-3 py-2 text-[13px] transition-colors hover:bg-muted"
        >
          <span className="font-medium text-foreground">{club.clubName}</span>
          <span className="text-muted-foreground tabular-nums">{club.yards} yd</span>
          <span className="text-[11px] text-muted-foreground">· no wind or elevation</span>
        </Link>
      )}
    </div>
  );
}

function LayupPanel({
  first,
  second,
  options,
  saved,
}: {
  first: number;
  second: number;
  options: ReturnType<typeof bagOptions>;
  saved: boolean;
}) {
  const firstClub = nearestClub(options, first);
  const secondClub = nearestClub(options, second);

  return (
    <div className="surface-card rounded-xl px-4 py-3">
      <div className="mb-2 flex items-center justify-between">
        <span className="eyebrow">Two shots in</span>
        <span className="text-[11px] text-muted-foreground">
          {saved ? "Saved for this hole" : "Drag the marker to adjust"}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2 text-center">
        {[
          { label: "Shot 1", yards: first, club: firstClub },
          { label: "Shot 2", yards: second, club: secondClub },
        ].map((s) => (
          <div key={s.label} className="rounded-lg bg-muted/50 px-3 py-2">
            <div className="eyebrow">{s.label}</div>
            <div className="font-numeric text-2xl tabular-nums">{yd(s.yards)}</div>
            {s.club && <div className="text-[11.5px] text-muted-foreground">{s.club.clubName}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

function MeasurePanel({
  measure,
  origin,
  greenCentre,
  onClear,
}: {
  measure: LatLng | null;
  origin: LatLng | null;
  greenCentre: LatLng | null;
  onClear: () => void;
}) {
  if (!measure) return null;

  return (
    <div className="surface-card flex items-center justify-between rounded-xl px-4 py-3">
      <div className="flex gap-6">
        <div>
          <div className="eyebrow">To point</div>
          <div className="font-numeric text-2xl tabular-nums">
            {origin ? yd(distanceYards(origin, measure)) : "—"}
          </div>
        </div>
        <div>
          <div className="eyebrow">Point to green</div>
          <div className="font-numeric text-2xl tabular-nums text-muted-foreground">
            {greenCentre ? yd(distanceYards(measure, greenCentre)) : "—"}
          </div>
        </div>
      </div>
      <Button variant="ghost" size="icon-sm" onClick={onClear} aria-label="Clear measurement">
        <X className="size-4" />
      </Button>
    </div>
  );
}

function EditorPanel({
  holeNumber,
  assigned,
  assignedCount,
  unassignedCount,
  cardYards,
  computed,
  onClear,
}: {
  holeNumber: number;
  assigned: boolean;
  assignedCount: number;
  unassignedCount: number;
  cardYards: number | null;
  computed: number | null;
  onClear: () => void;
}) {
  // Straight-line tee-to-green is shorter than the card on a dogleg, because
  // the card follows the line of play. Only a gap far bigger than any dogleg
  // could explain means the wrong green has been picked.
  const mismatch =
    cardYards != null && computed != null && Math.abs(cardYards - computed) > 60;

  return (
    <div className="surface-card rounded-xl px-4 py-3 text-[13px]">
      <div className="mb-2 flex items-center justify-between">
        <span className="eyebrow">Assign greens</span>
        <span className="text-[11px] text-muted-foreground tabular-nums">
          {assignedCount}/18 placed · {unassignedCount} outlines free
        </span>
      </div>

      {assigned ? (
        <div className="flex items-center justify-between gap-3">
          <span className="text-muted-foreground">
            Hole {holeNumber} has a green.
            {computed != null && cardYards != null && (
              <>
                {" "}
                Tee to green {yd(computed)} yd, card says {cardYards}.
              </>
            )}
          </span>
          <Button variant="ghost" size="sm" onClick={onClear}>
            Clear
          </Button>
        </div>
      ) : (
        <p className="text-muted-foreground">
          Tap the amber outline on the map that is hole {holeNumber}'s green.
        </p>
      )}

      {mismatch && (
        <p className="mt-2 rounded-lg bg-destructive/10 px-3 py-2 text-[12px] text-destructive">
          That is {Math.abs(yd(computed! - cardYards!))} yd away from the card — too far to be a
          dogleg. Probably the wrong green.
        </p>
      )}
    </div>
  );
}
