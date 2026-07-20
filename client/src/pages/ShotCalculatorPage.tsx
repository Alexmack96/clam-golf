import { useMemo, useState } from "react";
import { Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card.js";
import { Skeleton } from "../components/ui/skeleton.js";
import { Input } from "../components/ui/input.js";
import { Label } from "../components/ui/label.js";
import { Button } from "../components/ui/button.js";
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover.js";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select.js";
import { useClubs, type ClubRow } from "../hooks/useClubs.js";

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
        .filter((c) => c.isActive)
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
          <div className="flex items-center gap-1">
            <Label htmlFor="wind" className="text-xs text-muted-foreground">
              Wind (mph)
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-xs"
                  className="text-muted-foreground hover:text-primary"
                  aria-label="Wind reduction chart"
                >
                  <Info className="size-3.5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-72">
                <WindTable />
              </PopoverContent>
            </Popover>
          </div>
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

export function ShotCalculatorPage() {
  const { data, isPending } = useClubs();

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground">Shot Calculator</h1>
        <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">
          Distance + elevation + wind
        </p>
      </div>

      <Card className="border-primary/20 bg-gradient-to-b from-primary/[0.06] to-transparent shadow-lg shadow-primary/5">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-2xl font-bold text-foreground">Plays-Like Calculator</CardTitle>
          <CardDescription>The number you actually play, and the closest club for it</CardDescription>
        </CardHeader>
        <CardContent>
          {isPending ? <Skeleton className="w-full h-[220px] rounded-md" /> : <Calculator clubs={data!} />}
        </CardContent>
      </Card>
    </div>
  );
}
