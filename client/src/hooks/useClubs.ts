import { useQuery } from "@tanstack/react-query";
import type { ClubType } from "../components/ClubIcon.js";
import api from "../lib/api.js";

export type SwingLength = "Full" | "Shoulder" | "Chest" | "Hip";
export type DistanceUnit = "Yards" | "Metres";

export interface DistanceRow {
  id: string;
  clubId: string;
  swing: SwingLength;
  yards: number;
  unit: DistanceUnit;
  measuredAt: string;
}

export interface ClubRow {
  id: string;
  name: string;
  type: ClubType;
  sortOrder: number;
  isActive: boolean;
  distances: DistanceRow[];
}

export const fullYards = (club: ClubRow) =>
  club.distances.find((d) => d.swing === "Full")?.yards ?? null;

export const MAX_ACTIVE_CLUBS = 14;

export function useClubs() {
  return useQuery<ClubRow[]>({
    queryKey: ["clubs"],
    queryFn: () => api.get("/api/clubs").then((r) => r.data),
  });
}
