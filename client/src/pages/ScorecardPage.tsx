import { useState } from "react";
import { Link } from "react-router-dom";
import { Trash2, Lock, LockOpen, Check, Pencil } from "lucide-react";
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
import { NewRoundDialog } from "../components/scorecard/NewRoundDialog.js";
import { useCourses, type CourseRow } from "../hooks/useCourses.js";
import {
  useActiveRound,
  useRounds,
  deleteRound,
  type ActiveRound,
  type LocalPlayer,
  type RoundSummary,
} from "../hooks/useActiveRound.js";
import { buildLines, scoreClass, sum, type Line } from "../lib/scorecard.js";
import { useQueryClient } from "@tanstack/react-query";

function ScoreInput({
  value,
  min,
  max,
  editable,
  cls,
  placeholder,
  onCommit,
}: {
  value: number | null;
  min: number;
  max: number;
  editable: boolean;
  cls: string;
  placeholder: string;
  onCommit: (v: number | null) => void;
}) {
  function commit(raw: string) {
    const t = raw.trim();
    if (t === "") return onCommit(null);
    const n = parseInt(t, 10);
    if (Number.isNaN(n)) return onCommit(null);
    onCommit(Math.max(min, Math.min(max, n)));
  }

  if (!editable) {
    return (
      <span className={`inline-flex size-6 items-center justify-center ${value !== null ? cls : ""}`}>
        {value ?? <span className="text-muted-foreground/30">–</span>}
      </span>
    );
  }

  return (
    <input
      // Reset the uncontrolled field whenever the stored value changes.
      key={value ?? "empty"}
      defaultValue={value ?? ""}
      inputMode="numeric"
      placeholder={placeholder}
      onFocus={(e) => e.currentTarget.select()}
      onBlur={(e) => commit(e.currentTarget.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") e.currentTarget.blur();
      }}
      className={`h-6 w-full min-w-0 rounded bg-transparent text-center tabular-nums outline-none focus:bg-muted focus:ring-1 focus:ring-primary ${cls}`}
    />
  );
}

const TH = "px-1 py-1 font-medium";
const TD = "px-0.5 py-0.5 tabular-nums";

/**
 * The play card: compact, thumb-first, and editable in place. Every player's own
 * yardage lives in their tee, so only the solo card has room to print it; a
 * fourball trades that column for the extra scores. See ADR 0001.
 */
function PlayCard({
  course,
  players,
  scores,
  editable,
  linkHoles,
  onScore,
}: {
  course: CourseRow;
  players: LocalPlayer[];
  scores: ActiveRound["scores"];
  editable: boolean;
  linkHoles: boolean;
  onScore: (playerId: string, holeId: string, strokes: number | null, putts: number | null) => void;
}) {
  const lines = buildLines(course, players, scores);
  const solo = players.length === 1;
  const p1 = players[0];

  const holeCell = (l: Line) =>
    linkHoles ? (
      <Link to={`/gps?hole=${l.number}`} className="text-primary underline-offset-2 hover:underline">
        {l.number}
      </Link>
    ) : (
      l.number
    );

  const bodyRow = (l: Line) => (
    <tr key={l.number} className="border-b border-border/40">
      <td className={`${TD} text-left font-medium`}>{holeCell(l)}</td>
      {solo && <td className={`${TD} text-muted-foreground`}>{l.cells[0]?.yards || ""}</td>}
      <td className={`${TD} text-muted-foreground`}>{l.par}</td>
      <td className={`${TD} border-l border-border`}>
        <ScoreInput
          value={l.cells[0]?.strokes ?? null}
          min={1}
          max={20}
          editable={editable}
          cls={l.cells[0] ? scoreClass(l.cells[0].strokes ?? 0, l.cells[0].par) : ""}
          placeholder="–"
          onCommit={(v) => onScore(p1.id, l.holeId, v, v === null ? null : (l.cells[0]?.putts ?? null))}
        />
      </td>
      <td className={`${TD} text-muted-foreground`}>
        <ScoreInput
          value={l.cells[0]?.putts ?? null}
          min={0}
          max={10}
          editable={editable}
          cls=""
          placeholder="–"
          onCommit={(v) => onScore(p1.id, l.holeId, l.cells[0]?.strokes ?? null, v)}
        />
      </td>
      {l.cells.slice(1).map((c, i) => (
        <td key={players[i + 1].id} className={`${TD} border-l border-border/60`}>
          <ScoreInput
            value={c.strokes}
            min={1}
            max={20}
            editable={editable}
            cls={scoreClass(c.strokes ?? 0, c.par)}
            placeholder="–"
            onCommit={(v) => onScore(c.playerId, l.holeId, v, null)}
          />
        </td>
      ))}
    </tr>
  );

  const totalRow = (rows: Line[], label: string) => {
    const parSum = sum(rows.map((r) => r.par));
    return (
      <tr className="border-y border-border bg-muted/40 font-semibold">
        <td className={`${TD} text-left`}>{label}</td>
        {solo && <td className={TD}>{sum(rows.map((r) => r.cells[0]?.yards ?? 0)) || ""}</td>}
        <td className={TD}>{parSum}</td>
        <td className={`${TD} border-l border-border`}>
          {playerTotal(rows, 0)}
        </td>
        <td className={TD}>
          {(() => {
            const putts = rows.filter((r) => r.cells[0]?.putts != null);
            return putts.length ? sum(putts.map((r) => r.cells[0]!.putts ?? 0)) : "";
          })()}
        </td>
        {players.slice(1).map((p, i) => (
          <td key={p.id} className={`${TD} border-l border-border/60`}>
            {playerTotal(rows, i + 1)}
          </td>
        ))}
      </tr>
    );

    function playerTotal(rs: Line[], idx: number) {
      const played = rs.filter((r) => r.cells[idx]?.strokes != null);
      return played.length ? sum(played.map((r) => r.cells[idx]!.strokes ?? 0)) : "–";
    }
  };

  return (
    <div className="surface-card overflow-hidden rounded-xl">
      <div className="overflow-x-auto">
        <table className="w-full table-fixed text-center text-[12px]">
          <thead className="text-[9px] uppercase tracking-wide text-muted-foreground">
            <tr className="border-y border-border">
              <th className={`${TH} text-left`}>#</th>
              {solo && <th className={TH}>Yds</th>}
              <th className={TH}>Par</th>
              <th className={`${TH} border-l border-border text-foreground`}>
                <span className="block max-w-[52px] truncate">{p1.name}</span>
              </th>
              <th className={TH}>Putt</th>
              {players.slice(1).map((p) => (
                <th key={p.id} className={`${TH} border-l border-border/60 text-foreground`}>
                  <span className="block max-w-[52px] truncate">{p.name}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {lines.slice(0, 9).map(bodyRow)}
            {totalRow(lines.slice(0, 9), "Out")}
            {lines.slice(9).map(bodyRow)}
            {totalRow(lines.slice(9), "In")}
            {totalRow(lines, "Tot")}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SummaryHeader({
  course,
  round,
  editable,
}: {
  course: CourseRow;
  round: ActiveRound;
  editable: boolean;
}) {
  const p1 = round.players[0];
  const lines = buildLines(course, round.players, round.scores);
  const played = lines.filter((l) => l.cells[0]?.strokes != null);
  const total = sum(played.map((l) => l.cells[0]!.strokes ?? 0));
  const toPar = total - sum(played.map((l) => l.cells[0]!.par ?? 0));
  const anyPutts = played.some((l) => l.cells[0]?.putts != null);
  const girs = played.filter((l) =>
    isGreenInRegulation(l.cells[0]!.strokes ?? 0, l.cells[0]?.putts ?? null, l.cells[0]!.par),
  ).length;

  return (
    <div className="surface-card rounded-xl px-4 py-4">
      <div className="flex items-start justify-between">
        <div>
          <div className="eyebrow">
            {round.completedAt ? (editable ? "Finished · editing" : "Finished") : "In progress"}
          </div>
          <div className="font-display text-xl">{course.name}</div>
          <div className="mt-0.5 text-[12px] text-muted-foreground">
            {new Date(round.playedOn).toLocaleDateString("en-GB", { day: "numeric", month: "long" })} ·{" "}
            {round.players.length === 1 ? p1.name : `${round.players.length} players`} · {played.length}/18
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
      {anyPutts && (
        <div className="mt-3 flex gap-5 border-t border-border pt-3 text-[12px] text-muted-foreground">
          <span>
            Putts <span className="text-foreground tabular-nums">{sum(played.map((l) => l.cells[0]?.putts ?? 0))}</span>
          </span>
          <span>
            Greens in reg <span className="text-foreground tabular-nums">{girs}/{played.length}</span>
          </span>
        </div>
      )}
    </div>
  );
}

function ActiveCard({ courses, round }: { courses: CourseRow[]; round: ActiveRound }) {
  const { syncState, setScore, finish, release, discard } = useActiveRound();
  const [unlocked, setUnlocked] = useState(false);

  const course = courses.find((c) => c.id === round.courseId);
  if (!course) return null;

  const finished = round.completedAt !== null;
  const editable = !finished || unlocked;
  const linkHoles = course.holes.some((h) => h.greenPolygon != null);
  const played = round.scores.filter((s) => round.players[0] && s.playerId === round.players[0].id);

  return (
    <div className="space-y-3">
      <SummaryHeader course={course} round={round} editable={editable} />

      {finished && (
        <div className="surface-card flex items-center justify-between rounded-xl px-4 py-2.5 text-[13px]">
          <span className="flex items-center gap-2 text-muted-foreground">
            {unlocked ? <LockOpen className="size-4 text-primary" /> : <Lock className="size-4" />}
            {unlocked ? "Editing a finished round" : "This round is finished and locked."}
          </span>
          <Button variant={unlocked ? "secondary" : "outline"} size="sm" onClick={() => setUnlocked((u) => !u)}>
            {unlocked ? "Lock" : "Unlock to edit"}
          </Button>
        </div>
      )}

      <PlayCard
        course={course}
        players={round.players}
        scores={round.scores}
        editable={editable}
        linkHoles={linkHoles}
        onScore={setScore}
      />

      {syncState === "offline" && (
        <p className="px-1 text-center text-[11px] text-muted-foreground">Saved on this phone · will sync when there's signal</p>
      )}

      {finished ? (
        <Button className="w-full" variant="secondary" onClick={release}>
          <Check className="mr-1.5 size-4" /> Done
        </Button>
      ) : (
        <div className="flex gap-2">
          <Button className="flex-1" onClick={finish} disabled={played.length === 0}>
            Finish round
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
      )}
    </div>
  );
}

function HistoryRow({
  round,
  canEdit,
  onEdit,
}: {
  round: RoundSummary;
  canEdit: boolean;
  onEdit: () => void;
}) {
  const qc = useQueryClient();
  const p1 = round.players.find((p) => p.position === 1) ?? round.players[0];
  const total = sum((p1?.scores ?? []).map((s) => s.strokes));

  async function remove() {
    await deleteRound(round.id);
    qc.invalidateQueries({ queryKey: ["rounds"] });
  }

  return (
    <div className="surface-card flex items-center justify-between rounded-xl px-4 py-3">
      <div className="min-w-0">
        <div className="truncate text-[14px] font-medium">
          {round.course.name}
          {round.players.length > 1 && (
            <span className="text-muted-foreground"> · {round.players.length} players</span>
          )}
        </div>
        <div className="text-[12px] text-muted-foreground">
          {new Date(round.playedOn).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}{" "}
          · {p1?.scores.length ?? 0} holes
          {round.completedAt === null && " · unfinished"}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-numeric text-2xl tabular-nums">{total || "–"}</span>
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Edit round"
          disabled={!canEdit}
          title={canEdit ? "Edit" : "Finish your current round first"}
          onClick={onEdit}
        >
          <Pencil className="size-4" />
        </Button>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="ghost" size="icon-sm" aria-label="Delete round">
              <Trash2 className="size-4" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete this round?</AlertDialogTitle>
              <AlertDialogDescription>
                It's removed from your history but kept recoverable, not wiped.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Keep</AlertDialogCancel>
              <AlertDialogAction onClick={remove}>Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}

export function ScorecardPage() {
  const { data: courses, isLoading } = useCourses();
  const { data: rounds } = useRounds();
  const { round: active, start, load } = useActiveRound();

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
      {active ? (
        <ActiveCard key={active.id} courses={courses} round={active} />
      ) : (
        <NewRoundDialog courses={courses} onCreate={start} />
      )}

      {past.length > 0 && (
        <div className="space-y-2">
          <h2 className="eyebrow px-1">Previous rounds</h2>
          {past.map((r) => (
            <HistoryRow key={r.id} round={r} canEdit={!active} onEdit={() => load(r)} />
          ))}
        </div>
      )}
    </div>
  );
}
