import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Ring } from "@clam/core";
import api from "../lib/api.js";

export type TeeColour = "Yellow" | "White" | "Red" | "Blue";

export interface HoleTeeRow {
  id: string;
  holeId: string;
  teeSetId: string;
  yards: number;
  par: number;
  strokeIndex: number;
  teeLat: number | null;
  teeLng: number | null;
}

export interface HoleRow {
  id: string;
  courseId: string;
  number: number;
  greenPolygon: Ring | null;
  greenLat: number | null;
  greenLng: number | null;
  aimLat: number | null;
  aimLng: number | null;
  tees: HoleTeeRow[];
}

export interface TeeSetRow {
  id: string;
  courseId: string;
  colour: TeeColour;
  name: string;
}

export interface CourseRow {
  id: string;
  name: string;
  venue: string;
  sortOrder: number;
  teeSets: TeeSetRow[];
  holes: HoleRow[];
}

export function useCourses() {
  return useQuery<CourseRow[]>({
    queryKey: ["courses"],
    queryFn: () => api.get("/api/courses").then((r) => r.data),
    // Course geometry changes only when somebody edits it, and the page has to
    // keep working in a car park with no signal. Hold it and let the service
    // worker revalidate.
    staleTime: 1000 * 60 * 60,
  });
}

export function useAssignGreen() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ holeId, greenPolygon }: { holeId: string; greenPolygon: Ring | null }) =>
      api.patch(`/api/courses/holes/${holeId}/green`, { greenPolygon }).then((r) => r.data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["courses"] }),
  });
}

export function useSetAimPoint() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({
      holeId,
      aimLat,
      aimLng,
    }: {
      holeId: string;
      aimLat: number | null;
      aimLng: number | null;
    }) => api.patch(`/api/courses/holes/${holeId}/aim`, { aimLat, aimLng }).then((r) => r.data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["courses"] }),
  });
}

export function useSetTeePosition() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({
      holeTeeId,
      teeLat,
      teeLng,
    }: {
      holeTeeId: string;
      teeLat: number | null;
      teeLng: number | null;
    }) =>
      api
        .patch(`/api/courses/hole-tees/${holeTeeId}/position`, { teeLat, teeLng })
        .then((r) => r.data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["courses"] }),
  });
}
