import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card.js";
import { Skeleton } from "../components/ui/skeleton.js";
import { Input } from "../components/ui/input.js";
import { Label } from "../components/ui/label.js";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select.js";
import { ClubIcon, type ClubType } from "../components/ClubIcon.js";
import api from "../lib/api.js";

type SwingLength = "Full" | "Shoulder" | "Chest" | "Hip";

interface DistanceRow {
  id: string;
  clubId: string;
  swing: SwingLength;
  yards: number;
}

interface ClubRow {
  id: string;
  name: string;
  type: ClubType;
  sortOrder: number;
  distances: DistanceRow[];
}

const fullYards = (club: ClubRow) => club.distances.find((d) => d.swing === "Full")?.yards ?? null;

// Sequential single-hue ramp (matches the app's green primary hue, 152) — order
// encodes bag position, not category identity, so one hue light→dark is correct.
function rampColor(i: number, n: number) {
  const t = n <= 1 ? 0 : i / (n - 1);
  const L = 0.74 - t * 0.32;
  const C = 0.09 + t * 0.09;
  return `oklch(${L.toFixed(3)} ${C.toFixed(3)} 152)`;
}

const WEDGE_NAMES = ["60°", "56°", "52°", "PW"] as const;
const SWING_COLUMNS: SwingLength[] = ["Hip", "Chest", "Shoulder", "Full"];

const WIND_TABLE = [
  { mph: 5, yd: 4 },
  { mph: 10, yd: 11 },
  { mph: 15, yd: 16 },
  { mph: 20, yd: 20 },
  { mph: 25, yd: 23 },
];
const CROSSWIND_YD_PER_5MPH = 3;

// Piecewise-linear interpolation through (0,0) and the measured breakpoints;
// extrapolates past 25mph using the last segment's slope.
function headwindLoss(mph: number): number {
  if (mph <= 0) return 0;
  const pts = [{ mph: 0, yd: 0 }, ...WIND_TABLE];
  for (let i = 1; i < pts.length; i++) {
    if (mph <= pts[i].mph) {
      const a = pts[i - 1];
      const b = pts[i];
      const t = (mph - a.mph) / (b.mph - a.mph);
      return a.yd + t * (b.yd - a.yd);
    }
  }
  const last = pts[pts.length - 1];
  const prev = pts[pts.length - 2];
  const slope = (last.yd - prev.yd) / (last.mph - prev.mph);
  return last.yd + slope * (mph - last.mph);
}

function GappingWheel({ clubs }: { clubs: ClubRow[] }) {
  const data = clubs
    .filter((c) => c.type !== "Putter")
    .map((c) => ({ name: c.name, yards: fullYards(c) ?? 0 }))
    .filter((d) => d.yards > 0);

  // recharts' PieLabelRenderProps typing doesn't line up cleanly with a custom
  // label renderer's actual (fully-populated) call signature — narrow at the door.
  const renderLabel = (props: unknown) => {
    const { cx, cy, midAngle, outerRadius, index, name, value } = props as {
      cx: number;
      cy: number;
      midAngle: number;
      outerRadius: number;
      index: number;
      name: string;
      value: number;
    };
    const RAD = Math.PI / 180;
    const r = outerRadius + 22;
    const x = cx + r * Math.cos(-midAngle * RAD);
    const y = cy + r * Math.sin(-midAngle * RAD);
    const anchor = x > cx + 2 ? "start" : x < cx - 2 ? "end" : "middle";
    return (
      <g key={`label-${index}`}>
        <text x={x} y={y - 6} textAnchor={anchor} className="fill-foreground text-[11px] font-medium">
          {name}
        </text>
        <text x={x} y={y + 8} textAnchor={anchor} className="fill-muted-foreground text-[10px]">
          {value}y
        </text>
      </g>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={320}>
      <PieChart margin={{ top: 10, right: 40, bottom: 0, left: 40 }}>
        <Pie
          data={data}
          dataKey="yards"
          nameKey="name"
          cx="50%"
          cy="92%"
          startAngle={180}
          endAngle={0}
          innerRadius="38%"
          outerRadius="88%"
          paddingAngle={2}
          stroke="var(--card)"
          strokeWidth={2}
          isAnimationActive={false}
          label={renderLabel}
          labelLine={false}
        >
          {data.map((d, i) => (
            <Cell key={d.name} fill={rampColor(i, data.length)} />
          ))}
        </Pie>
        <Tooltip
          formatter={(value) => `${value} yd`}
          contentStyle={{
            background: "var(--popover)",
            border: "1px solid var(--border)",
            borderRadius: 8,
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

function WedgeMatrix({ clubs }: { clubs: ClubRow[] }) {
  const wedges = WEDGE_NAMES.map((name) => clubs.find((c) => c.name === name)).filter(
    (c): c is ClubRow => !!c,
  );

  if (wedges.length === 0) return null;

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
        {wedges.map((club) => (
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

function BagList({ clubs }: { clubs: ClubRow[] }) {
  return (
    <ul className="space-y-1.5">
      {clubs.map((club) => {
        const yards = fullYards(club);
        return (
          <li
            key={club.id}
            className="flex items-center gap-3 rounded-lg px-2.5 py-2 hover:bg-accent/40 transition-colors"
          >
            <div className="size-8 rounded-full bg-primary/10 grid place-items-center shrink-0">
              <ClubIcon type={club.type} className="size-4 text-primary" />
            </div>
            <span className="text-sm font-medium text-foreground flex-1">{club.name}</span>
            <span className="text-sm text-muted-foreground tabular-nums">
              {yards != null ? `${yards} yd` : "—"}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function WindTable() {
  return (
    <div>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-[11px] uppercase tracking-wide text-muted-foreground">
            <th className="font-medium pb-2">Wind</th>
            <th className="font-medium pb-2 text-right">Headwind loss</th>
          </tr>
        </thead>
        <tbody>
          {WIND_TABLE.map((row) => (
            <tr key={row.mph} className="border-t border-border">
              <td className="py-1.5 text-foreground">{row.mph} mph</td>
              <td className="py-1.5 text-right text-foreground tabular-nums">−{row.yd} yd</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-3 text-xs text-muted-foreground">
        Tailwind adds back roughly half the headwind loss. Crosswind: ~{CROSSWIND_YD_PER_5MPH} yd of
        lateral drift per 5 mph — doesn't change the carry number, only your aim.
      </p>
    </div>
  );
}

type WindDir = "head" | "tail" | "cross";

function Calculator({ clubs }: { clubs: ClubRow[] }) {
  const [distance, setDistance] = useState("150");
  const [elevation, setElevation] = useState("0");
  const [windMph, setWindMph] = useState("0");
  const [windDir, setWindDir] = useState<WindDir>("head");

  const options = useMemo(
    () =>
      clubs
        .flatMap((c) => c.distances.map((d) => ({ label: `${c.name} · ${d.swing}`, yards: d.yards })))
        .filter((o) => o.yards > 0),
    [clubs],
  );

  const result = useMemo(() => {
    const d = parseFloat(distance) || 0;
    const elev = parseFloat(elevation) || 0;
    const mph = parseFloat(windMph) || 0;
    const loss = headwindLoss(mph);
    const windAdj = windDir === "head" ? loss : windDir === "tail" ? -loss * 0.5 : 0;
    const playsLike = Math.round(d + elev + windAdj);

    let nearest = options[0];
    let bestDelta = Infinity;
    for (const o of options) {
      const delta = Math.abs(o.yards - playsLike);
      if (delta < bestDelta) {
        bestDelta = delta;
        nearest = o;
      }
    }
    return { playsLike, nearest, drift: windDir === "cross" ? (mph / 5) * CROSSWIND_YD_PER_5MPH : 0 };
  }, [distance, elevation, windMph, windDir, options]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <Label htmlFor="dist" className="text-xs text-muted-foreground">
            Distance to pin (yd)
          </Label>
          <Input id="dist" type="number" value={distance} onChange={(e) => setDistance(e.target.value)} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="elev" className="text-xs text-muted-foreground">
            Elevation (+up / −down, yd)
          </Label>
          <Input id="elev" type="number" value={elevation} onChange={(e) => setElevation(e.target.value)} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="wind" className="text-xs text-muted-foreground">
            Wind (mph)
          </Label>
          <Input id="wind" type="number" value={windMph} onChange={(e) => setWindMph(e.target.value)} />
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs text-muted-foreground">Direction</Label>
          <Select value={windDir} onValueChange={(v) => setWindDir(v as WindDir)}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="head">Headwind</SelectItem>
              <SelectItem value="tail">Tailwind</SelectItem>
              <SelectItem value="cross">Crosswind</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-xl bg-primary/10 border border-primary/20 p-4 text-center">
        <div className="text-[11px] uppercase tracking-wide text-muted-foreground">Plays like</div>
        <div className="text-4xl font-bold text-foreground tabular-nums">{result.playsLike} yd</div>
        {result.nearest && (
          <div className="mt-1 text-sm text-muted-foreground">
            Closest club: <span className="text-foreground font-medium">{result.nearest.label}</span> (
            {result.nearest.yards} yd)
          </div>
        )}
        {windDir === "cross" && result.drift > 0 && (
          <div className="mt-1 text-xs text-muted-foreground">
            Allow ~{Math.round(result.drift)} yd of lateral drift for the crosswind.
          </div>
        )}
      </div>
    </div>
  );
}

export function DistancesPage() {
  const { data, isPending } = useQuery<ClubRow[]>({
    queryKey: ["clubs"],
    queryFn: () => api.get("/api/distances").then((r) => r.data),
  });

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Distances</h1>
        <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">Know your numbers</p>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-xs uppercase tracking-wide text-muted-foreground">
            Gapping Wheel
          </CardTitle>
          <CardDescription>Full-swing carry, bag order — 60° through driver</CardDescription>
        </CardHeader>
        <CardContent>
          {isPending ? <Skeleton className="w-full h-[320px] rounded-md" /> : <GappingWheel clubs={data!} />}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs uppercase tracking-wide text-muted-foreground">
              The Bag
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isPending ? (
              <div className="space-y-2">
                {Array.from({ length: 8 }).map((_, i) => (
                  <Skeleton key={i} className="h-10 w-full rounded-lg" />
                ))}
              </div>
            ) : (
              <BagList clubs={data!} />
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs uppercase tracking-wide text-muted-foreground">
              Wedge Matrix
            </CardTitle>
            <CardDescription>Partial-swing yardages by club-face position</CardDescription>
          </CardHeader>
          <CardContent>
            {isPending ? <Skeleton className="w-full h-[220px] rounded-md" /> : <WedgeMatrix clubs={data!} />}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs uppercase tracking-wide text-muted-foreground">
              Wind Reduction
            </CardTitle>
          </CardHeader>
          <CardContent>
            <WindTable />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs uppercase tracking-wide text-muted-foreground">
              Plays-Like Calculator
            </CardTitle>
            <CardDescription>Distance + elevation + wind → the number you actually play</CardDescription>
          </CardHeader>
          <CardContent>
            {isPending ? <Skeleton className="w-full h-[220px] rounded-md" /> : <Calculator clubs={data!} />}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
