import { Minus, Plus, Cloud, CloudOff, Check } from "lucide-react";
import { Button } from "../ui/button.js";

interface ScoreEntryProps {
  par: number;
  strokes: number | null;
  putts: number | null;
  syncState: "synced" | "pending" | "offline";
  onChange: (strokes: number | null, putts: number | null) => void;
  onAdvance: () => void;
}

/** Birdie, par, bogey… — the word golfers actually use for a number. */
function scoreLabel(strokes: number, par: number): string {
  const d = strokes - par;
  if (strokes === 1) return "Ace";
  if (d <= -3) return "Albatross";
  if (d === -2) return "Eagle";
  if (d === -1) return "Birdie";
  if (d === 0) return "Par";
  if (d === 1) return "Bogey";
  if (d === 2) return "Double";
  return `+${d}`;
}

function Stepper({
  label,
  value,
  placeholder,
  min,
  onChange,
}: {
  label: string;
  value: number | null;
  placeholder: string;
  min: number;
  onChange: (v: number | null) => void;
}) {
  return (
    <div className="flex-1">
      <div className="eyebrow mb-1 text-center">{label}</div>
      <div className="flex items-center justify-center gap-1.5">
        <Button
          variant="outline"
          size="icon-sm"
          className="size-8 shrink-0 rounded-full"
          aria-label={`One fewer ${label.toLowerCase()}`}
          disabled={value === null || value <= min}
          onClick={() => onChange(value !== null && value > min ? value - 1 : null)}
        >
          <Minus className="size-4" />
        </Button>
        {/* Boxed, because an unboxed numeral sits between two round icon
            buttons whose glyphs are also short horizontal strokes — the row
            reads as three dashes and you cannot tell which one is the score. */}
        <span
          className={`font-numeric flex h-9 w-11 items-center justify-center rounded-lg border text-2xl tabular-nums ${
            value === null
              ? "border-dashed border-border text-muted-foreground/40"
              : "border-border bg-muted/40 text-foreground"
          }`}
        >
          {value ?? placeholder}
        </span>
        <Button
          variant="outline"
          size="icon-sm"
          className="size-8 shrink-0 rounded-full"
          aria-label={`One more ${label.toLowerCase()}`}
          onClick={() => onChange((value ?? min - 1) + 1)}
        >
          <Plus className="size-4" />
        </Button>
      </div>
    </div>
  );
}

export function ScoreEntry({
  par,
  strokes,
  putts,
  syncState,
  onChange,
  onAdvance,
}: ScoreEntryProps) {
  return (
    <div className="surface-card rounded-xl px-3 py-3">
      <div className="mb-1 flex items-center justify-between px-1">
        <span className="eyebrow">Score</span>
        <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
          {syncState === "offline" ? (
            <>
              <CloudOff className="size-3" /> saved on this phone
            </>
          ) : syncState === "pending" ? (
            <>
              <Cloud className="size-3" /> saving…
            </>
          ) : (
            strokes !== null && (
              <>
                <Check className="size-3" /> saved
              </>
            )
          )}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <Stepper
          label="Strokes"
          value={strokes}
          placeholder="–"
          min={1}
          onChange={(v) => onChange(v, v === null ? null : putts)}
        />
        <div className="h-9 w-px bg-border" />
        <Stepper
          label="Putts"
          value={putts}
          placeholder="–"
          min={0}
          onChange={(v) => onChange(strokes ?? par, v)}
        />
        <Button
          size="sm"
          variant="secondary"
          className="shrink-0"
          onClick={onAdvance}
          disabled={strokes === null}
        >
          Next
        </Button>
      </div>

      {strokes !== null && (
        <div className="mt-2 text-center text-[12px] text-muted-foreground">
          {scoreLabel(strokes, par)}
        </div>
      )}
    </div>
  );
}
