import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { ShotType, SwingPhase, SwingThoughtInput } from "@clam/core";
import api from "../lib/api.js";

export interface SwingThoughtRow {
  id: string;
  shotType: ShotType;
  phase: SwingPhase;
  rank: number;
  text: string;
  note: string | null;
  createdAt: string;
  updatedAt: string;
}

const key = ["swing-thoughts"];

export function useSwingThoughts() {
  return useQuery<SwingThoughtRow[]>({
    queryKey: key,
    queryFn: () => api.get("/api/swing-thoughts").then((r) => r.data),
  });
}

export function useSwingThoughtMutations() {
  const queryClient = useQueryClient();
  const invalidate = () => queryClient.invalidateQueries({ queryKey: key });

  const create = useMutation({
    mutationFn: (input: SwingThoughtInput) => api.post("/api/swing-thoughts", input),
    onSuccess: invalidate,
  });

  const update = useMutation({
    mutationFn: ({ id, input }: { id: string; input: SwingThoughtInput }) =>
      api.put(`/api/swing-thoughts/${id}`, input),
    onSuccess: invalidate,
  });

  const remove = useMutation({
    mutationFn: (id: string) => api.delete(`/api/swing-thoughts/${id}`),
    onSuccess: invalidate,
  });

  return { create, update, remove };
}
