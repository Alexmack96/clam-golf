import { Link } from "react-router-dom";
import { Settings2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card.js";
import { Skeleton } from "../components/ui/skeleton.js";
import { ClubIcon } from "../components/ClubIcon.js";
import { useClubs, type ClubRow, type SwingLength } from "../hooks/useClubs.js";

const SWING_COLUMNS: SwingLength[] = ["Hip", "Chest", "Shoulder", "Full"];

function ClubMatrix({ clubs }: { clubs: ClubRow[] }) {
  const rows = clubs
    .filter((c) => c.isActive && (c.type === "Iron" || c.type === "Wedge"))
    .sort((a, b) => a.sortOrder - b.sortOrder);

  if (rows.length === 0) return null;

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[420px]">
        <div className="grid grid-cols-[64px_repeat(4,1fr)] gap-2 mb-2">
          <div />
          {SWING_COLUMNS.map((s) => (
            <div key={s} className="text-center text-[11px] uppercase tracking-wide text-muted-foreground">
              {s}
            </div>
          ))}
        </div>
        {rows.map((club) => (
          <div key={club.id} className="grid grid-cols-[64px_repeat(4,1fr)] gap-2 mb-2">
            <div className="flex items-center gap-1.5 text-sm font-medium text-foreground">
              <ClubIcon type={club.type} className="size-4 text-primary shrink-0" />
              {club.name}
            </div>
            {SWING_COLUMNS.map((swing, i) => {
              const yards = club.distances.find((d) => d.swing === swing)?.yards;
              return (
                <div
                  key={swing}
                  className="rounded-lg border border-border py-2 text-center"
                  style={{ background: `oklch(0.9 ${0.02 + i * 0.015} 152 / ${0.35 + i * 0.12})` }}
                >
                  <span className="text-sm font-semibold text-foreground">{yards ?? "—"}</span>
                </div>
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
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-2xl font-bold text-foreground">Wedge & Iron Matrix</CardTitle>
          <CardDescription>Partial-swing yardages by club-face position — active bag only</CardDescription>
        </CardHeader>
        <CardContent>
          {isPending ? <Skeleton className="w-full h-[320px] rounded-md" /> : <ClubMatrix clubs={data!} />}
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
