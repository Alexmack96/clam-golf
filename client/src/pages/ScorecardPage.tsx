import { Link } from "react-router-dom";
import { Flag, Trash2 } from "lucide-react";
import { isGreenInRegulation } from "@clam/core";
import { Button } from "../components/ui/button.js";
import { Skeleton } from "../components/ui/skeleton.js";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog.js";
import { useCourses, type CourseRow } from "../hooks/useCourses.js";
import { useActiveRound, useRounds, type RoundSummary } from "../hooks/useActiveRound.js";

/** Colour a score the way you would ring it on paper. */
function scoreClass(strokes: number, par: number) {
  const d = strokes - par;
  if (d <= -2) return "bg-amber-400/30 font-semibold";
  if (d === -1) return "bg-primary/25 font-semibold";
  if (d === 0) return "";
  if (d >= 2) return "text-destructive";
  return "text-muted-foreground";
}

interface Row {
  number: number;
  whiteYards: number;
  redYards: number;
  yellowYards: number;
  whitePar: number;
  yellowPar: number;
  redPar: number;
  strokeIndex: number;
  redStrokeIndex: number;
  strokes: number | null;
  putts: number | null;
}

function buildRows(course: CourseRow, scores: { holeId: string; strokes: number; putts: number | null }[]): Row[] {
  const byColour = (colour: string) => course.teeSets.find((t) => t.colour === colour);
  const white = byColour("White");
  const yellow = byColour("Yellow");
  const red = byColour("Red");

  return course.holes.map((h) => {
    const tee = (setId?: string) => h.tees.find((t) => t.teeSetId === setId);
    const w = tee(white?.id);
    const y = tee(yellow?.id);
    const r = tee(red?.id);
    const score = scores.find((s) => s.holeId === h.id);
    return {
      number: h.number,
      whiteYards: w?.yards ?? 0,
      yellowYards: y?.yards ?? 0,
      redYards: r?.yards ?? 0,
      whitePar: w?.par ?? 4,
      yellowPar: y?.par ?? 4,
      redPar: r?.par ?? 4,
      strokeIndex: y?.strokeIndex ?? 0,
      redStrokeIndex: r?.strokeIndex ?? 0,
      strokes: score?.strokes ?? null,
      putts: score?.putts ?? null,
    };
  });
}

const sum = (rows: Row[], pick: (r: Row) => number) => rows.reduce((n, r) => n + pick(r), 0);

/**
 * The par printed between the white and yellow yardages. They agree on every
 * hole at Richmond Park except Duke's 17th, which the paper card annotates
 * "5/4" — so do the same rather than silently picking one.
 */
function sharedPar(r: Row) {
  return r.whitePar === r.yellowPar ? String(r.whitePar) : `${r.whitePar}/${r.yellowPar}`;
}

const TH = "px-1 py-1.5 font-medium";
const TD = "px-1 py-1 tabular-nums";

function TotalRow({ rows, label }: { rows: Row[]; label: string }) {
  const played = rows.filter((r) => r.strokes !== null);
  return (
    <tr className="border-y border-border bg-muted/40 font-semibold">
      <td className={`${TD} text-left`}>{label}</td>
      <td className={TD}>{sum(rows, (r) => r.whiteYards)}</td>
      <td className={TD}>{sum(rows, (r) => r.whitePar)}</td>
      <td className={`${TD} bg-amber-300/25`}>{sum(rows, (r) => r.yellowYards)}</td>
      <td className={TD} />
      <td className={`${TD} border-l border-border`}>
        {played.length ? sum(played, (r) => r.strokes ?? 0) : "–"}
      </td>
      <td className={TD}>
        {played.some((r) => r.putts !== null) ? sum(played, (r) => r.putts ?? 0) : "–"}
      </td>
      <td className={`${TD} bg-red-500/15`}>{sum(rows, (r) => r.redYards)}</td>
      <td className={`${TD} bg-red-500/15`}>{sum(rows, (r) => r.redPar)}</td>
      <td className={`${TD} bg-red-500/15`} />
    </tr>
  );
}

function CardTable({ course, rows }: { course: CourseRow; rows: Row[] }) {
  // Duke's is printed in blue on the card, Prince's in red.
  const banner =
    course.name === "Prince's"
      ? "text-red-600 dark:text-red-400"
      : "text-blue-700 dark:text-blue-400";

  const body = (r: Row) => (
    <tr key={r.number} className="border-b border-border/50">
      <td className={`${TD} text-left font-medium`}>{r.number}</td>
      <td className={TD}>{r.whiteYards}</td>
      <td className={TD}>{sharedPar(r)}</td>
      {/* The card prints the yellow yardage on a yellow ground and the whole
          red block on red. That colour coding is how you find your row at a
          glance, so it is not decoration. */}
      <td className={`${TD} bg-amber-300/25 font-medium`}>{r.yellowYards}</td>
      <td className={`${TD} text-red-600/90 dark:text-red-400/90`}>{r.strokeIndex}</td>
      <td className="border-l border-border px-1 py-1">
        {r.strokes === null ? (
          <span className="text-muted-foreground/40">–</span>
        ) : (
          <span
            className={`inline-flex size-6 items-center justify-center rounded tabular-nums ${scoreClass(r.strokes, r.yellowPar)}`}
          >
            {r.strokes}
          </span>
        )}
      </td>
      <td className={`${TD} text-muted-foreground`}>
        {r.putts ?? <span className="text-muted-foreground/40">–</span>}
      </td>
      <td className={`${TD} bg-red-500/15`}>{r.redYards}</td>
      <td className={`${TD} bg-red-500/15`}>{r.redPar}</td>
      <td className={`${TD} bg-red-500/15 text-red-700 dark:text-red-300`}>{r.redStrokeIndex}</td>
    </tr>
  );

  return (
    <div className="surface-card overflow-hidden rounded-xl">
      <div className={`px-3 py-2 text-center text-[12px] font-semibold tracking-[0.18em] ${banner}`}>
        {course.name.toUpperCase()} COURSE
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-fixed text-center text-[11px]">
          <colgroup>
            <col className="w-7" />
            <col />
            <col className="w-7" />
            <col />
            <col className="w-6" />
            <col className="w-9" />
            <col className="w-7" />
            <col />
            <col className="w-6" />
            <col className="w-6" />
          </colgroup>
          <thead className="text-[9px] uppercase tracking-wide text-muted-foreground">
            <tr className="border-y border-border">
              <th className={`${TH} text-left`}>Hole</th>
              <th className={TH}>White</th>
              <th className={TH}>Par</th>
              <th className={`${TH} bg-amber-300/40`}>Yellow</th>
              <th className={TH}>SI</th>
              {/* Ruled off, as the paper card rules off the scoring block —
                  without it "SCORE" and "PUTT" run together into one word. */}
              <th className={`${TH} border-l border-border text-foreground`}>Score</th>
              <th className={TH}>Putt</th>
              <th className={`${TH} bg-red-500/25`}>Red</th>
              <th className={`${TH} bg-red-500/25`}>Par</th>
              <th className={`${TH} bg-red-500/25`}>SI</th>
            </tr>
          </thead>
          <tbody>
            {rows.slice(0, 9).map(body)}
            <TotalRow rows={rows.slice(0, 9)} label="Out" />
            {rows.slice(9).map(body)}
            <TotalRow rows={rows.slice(9)} label="In" />
            <TotalRow rows={rows} label="Tot" />
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ActiveCard({ courses }: { courses: CourseRow[] }) {
  const { round, syncState, finish, discard } = useActiveRound();

  if (!round) {
    return (
      <div className="surface-card rounded-xl px-4 py-8 text-center">
        <Flag className="mx-auto mb-3 size-6 text-muted-foreground/50" />
        <p className="text-[13px] text-muted-foreground">
          No round in progress. Enter a score on the GPS page and one starts itself.
        </p>
      </div>
    );
  }

  const course = courses.find((c) => c.id === round.courseId);
  const teeSet = course?.teeSets.find((t) => t.id === round.teeSetId);
  if (!course || !teeSet) return null;

  const rows = buildRows(course, round.scores);
  const played = rows.filter((r) => r.strokes !== null);
  const total = sum(played, (r) => r.strokes ?? 0);
  const toPar = total - sum(played, (r) => r.yellowPar);
  const girs = played.filter((r) => isGreenInRegulation(r.strokes!, r.putts, r.yellowPar)).length;
  const nextHole = rows.find((r) => r.strokes === null)?.number ?? 18;

  return (
    <div className="space-y-3">
      <div className="surface-card rounded-xl px-4 py-4">
        <div className="flex items-start justify-between">
          <div>
            <div className="eyebrow">
              {round.completedAt ? "Finished · waiting for signal" : "In progress"}
            </div>
            <div className="font-display text-xl">
              {course.name} · {teeSet.name}
            </div>
            <div className="mt-0.5 text-[12px] text-muted-foreground">
              {new Date(round.playedOn).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
              })}{" "}
              · {played.length} of 18 holes
              {syncState === "offline" && " · saved on this phone"}
            </div>
          </div>
          <div className="text-right">
            <div className="font-numeric text-4xl leading-none tabular-nums">{total || "–"}</div>
            {played.length > 0 && (
              <div className="text-[12px] text-muted-foreground tabular-nums">
                {toPar === 0 ? "level" : toPar > 0 ? `+${toPar}` : toPar}
              </div>
            )}
          </div>
        </div>

        {played.some((r) => r.putts !== null) && (
          <div className="mt-3 flex gap-5 border-t border-border pt-3 text-[12px] text-muted-foreground">
            <span>
              Putts{" "}
              <span className="text-foreground tabular-nums">
                {sum(played, (r) => r.putts ?? 0)}
              </span>
            </span>
            <span>
              Greens in reg{" "}
              <span className="text-foreground tabular-nums">
                {girs}/{played.length}
              </span>
            </span>
          </div>
        )}
      </div>

      <CardTable course={course} rows={rows} />

      <p className="px-1 text-center text-[11px] text-muted-foreground">
        Scores are entered on the{" "}
        <Link to={`/gps?hole=${nextHole}`} className="text-primary underline-offset-2 hover:underline">
          GPS page
        </Link>
        , hole by hole.
      </p>

      <div className="flex gap-2">
        <Button
          className="flex-1"
          onClick={finish}
          disabled={played.length === 0 || round.completedAt !== null}
        >
          {round.completedAt ? "Uploading when there's signal…" : "Finish round"}
        </Button>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Discard round">
              <Trash2 className="size-4" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Discard this round?</AlertDialogTitle>
              <AlertDialogDescription>
                {played.length} scored {played.length === 1 ? "hole" : "holes"} will be thrown away.
                This cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Keep playing</AlertDialogCancel>
              <AlertDialogAction onClick={discard}>Discard</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}

function PastRound({ round }: { round: RoundSummary }) {
  const strokes = round.scores.reduce((n, s) => n + s.strokes, 0);
  return (
    <div className="surface-card flex items-center justify-between rounded-xl px-4 py-3">
      <div>
        <div className="text-[14px] font-medium">
          {round.course.name} · {round.teeSet.name}
        </div>
        <div className="text-[12px] text-muted-foreground">
          {new Date(round.playedOn).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}{" "}
          · {round.scores.length} holes
        </div>
      </div>
      <div className="font-numeric text-2xl tabular-nums">{strokes}</div>
    </div>
  );
}

export function ScorecardPage() {
  const { data: courses, isLoading } = useCourses();
  const { data: rounds } = useRounds();
  const { round: active } = useActiveRound();

  if (isLoading || !courses) {
    return (
      <div className="mx-auto w-full max-w-lg space-y-3">
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  const past = (rounds ?? []).filter((r) => r.id !== active?.id);

  return (
    <div className="mx-auto w-full max-w-lg space-y-6">
      <ActiveCard courses={courses} />

      {past.length > 0 && (
        <div className="space-y-2">
          <h2 className="eyebrow px-1">Previous rounds</h2>
          {past.map((r) => (
            <PastRound key={r.id} round={r} />
          ))}
        </div>
      )}
    </div>
  );
}
