import { useState } from "react";
import { Link } from "react-router-dom";
import { Settings2 } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card.js";
import { Skeleton } from "../components/ui/skeleton.js";
import { ClubIcon } from "../components/ClubIcon.js";
import api from "../lib/api.js";
import { useClubs, type ClubRow, type SwingLength } from "../hooks/useClubs.js";

// Full swing first (LHS) — it's the number you actually reach for most.
const SWING_COLUMNS: SwingLength[] = ["Full", "Shoulder", "Chest", "Hip"];

const yardsSchema = z.coerce.number().int("Whole numbers only").positive("Must be > 0").max(400, "Max 400");

function DistanceCell({
  yards,
  tint,
  isPending,
  onSave,
  onClear,
}: {
  yards: number | undefined;
  tint: string;
  isPending: boolean;
  onSave: (yards: number) => void;
  onClear: () => void;
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState("");
  const [error, setError] = useState<string | null>(null);

  function commit() {
    const trimmed = draft.trim();
    if (trimmed === "") {
      if (yards !== undefined) onClear();
      setEditing(false);
      setError(null);
      return;
    }
    const result = yardsSchema.safeParse(trimmed);
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Invalid number");
      return;
    }
    if (result.data !== yards) onSave(result.data);
    setEditing(false);
    setError(null);
  }

  if (editing) {
    return (
      <div className="relative">
        <input
          autoFocus
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          defaultValue={yards ?? ""}
          disabled={isPending}
          onChange={(e) => {
            setDraft(e.target.value);
            if (error) setError(null);
          }}
          onBlur={commit}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              e.currentTarget.blur();
            }
            if (e.key === "Escape") {
              setError(null);
              setEditing(false);
            }
          }}
          className={`w-full rounded-lg border bg-background py-1.5 text-center text-xs font-semibold text-foreground outline-none ring-2 sm:py-2 sm:text-sm ${
            error ? "border-destructive ring-destructive/20" : "border-primary ring-primary/20"
          }`}
        />
        {error && (
          <span className="absolute left-1/2 top-full z-10 mt-1 -translate-x-1/2 whitespace-nowrap rounded bg-destructive px-1.5 py-0.5 text-[10px] font-medium text-destructive-foreground shadow">
            {error}
          </span>
        )}
      </div>
    );
  }

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={() => {
        setDraft(String(yards ?? ""));
        setEditing(true);
      }}
      className="w-full rounded-lg border border-border py-1.5 text-center transition-colors hover:border-primary/50 disabled:opacity-50"
      style={{ background: tint }}
    >
      <span className="text-xs font-semibold text-foreground sm:text-sm">{yards ?? "—"}</span>
    </button>
  );
}

function ClubChart({ clubs }: { clubs: ClubRow[] }) {
  const queryClient = useQueryClient();
  const invalidate = () => queryClient.invalidateQueries({ queryKey: ["clubs"] });

  const saveMutation = useMutation({
    mutationFn: ({ clubId, swing, yards }: { clubId: string; swing: SwingLength; yards: number }) =>
      api.patch(`/api/distances/${clubId}/${swing}`, { yards }),
    onSuccess: invalidate,
  });

  const clearMutation = useMutation({
    mutationFn: ({ clubId, swing }: { clubId: string; swing: SwingLength }) =>
      api.delete(`/api/distances/${clubId}/${swing}`),
    onSuccess: invalidate,
  });

  const pendingKey =
    saveMutation.isPending && saveMutation.variables
      ? `${saveMutation.variables.clubId}:${saveMutation.variables.swing}`
      : clearMutation.isPending && clearMutation.variables
        ? `${clearMutation.variables.clubId}:${clearMutation.variables.swing}`
        : null;

  const rows = clubs
    .filter((c) => c.isActive && (c.type === "Iron" || c.type === "Wedge"))
    .sort((a, b) => a.sortOrder - b.sortOrder);

  if (rows.length === 0) return null;

  return (
    <div className="overflow-x-auto">
      <div className="min-w-0 sm:min-w-[420px]">
        <div className="grid grid-cols-[44px_repeat(4,1fr)] gap-1.5 mb-2 sm:grid-cols-[64px_repeat(4,1fr)] sm:gap-2">
          <div />
          {SWING_COLUMNS.map((s) => (
            <div
              key={s}
              className="text-center text-[10px] uppercase tracking-wide text-muted-foreground sm:text-[11px]"
            >
              {s}
            </div>
          ))}
        </div>
        {rows.map((club) => (
          <div
            key={club.id}
            className="grid grid-cols-[44px_repeat(4,1fr)] gap-1.5 mb-2 sm:grid-cols-[64px_repeat(4,1fr)] sm:gap-2"
          >
            <div className="flex min-w-0 items-center gap-1 text-xs font-medium text-foreground sm:gap-1.5 sm:text-sm">
              <ClubIcon type={club.type} className="size-3.5 text-primary shrink-0 sm:size-4" />
              <span className="truncate">{club.name}</span>
            </div>
            {SWING_COLUMNS.map((swing, i) => {
              const yards = club.distances.find((d) => d.swing === swing)?.yards;
              // Full (i=0) stays the most prominent column now it's on the left.
              const emphasis = SWING_COLUMNS.length - 1 - i;
              return (
                <DistanceCell
                  key={swing}
                  yards={yards}
                  tint={`oklch(0.9 ${0.02 + emphasis * 0.015} 152 / ${0.35 + emphasis * 0.12})`}
                  isPending={pendingKey === `${club.id}:${swing}`}
                  onSave={(newYards) => saveMutation.mutate({ clubId: club.id, swing, yards: newYards })}
                  onClear={() => clearMutation.mutate({ clubId: club.id, swing })}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export function DistancesPage() {
  const { data, isPending } = useClubs();

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground">Distances</h1>
        <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">Know your numbers</p>
      </div>

      <Card className="border-primary/20 bg-gradient-to-b from-primary/[0.06] to-transparent shadow-lg shadow-primary/5">
        <CardHeader className="px-4 text-center pb-2 sm:px-6">
          <CardTitle className="text-2xl font-bold text-foreground">Wedge & Iron Chart</CardTitle>
          <CardDescription>Tap a number to edit — partial-swing yardages, active bag only</CardDescription>
        </CardHeader>
        <CardContent className="px-3 sm:px-6">
          {isPending ? <Skeleton className="w-full h-[320px] rounded-md" /> : <ClubChart clubs={data!} />}
          <div className="mt-4 text-center">
            <Link
              to="/clubs"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <Settings2 className="size-3.5" />
              Manage clubs
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
