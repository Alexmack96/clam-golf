import { z } from "zod";

export const shotTypeSchema = z.enum(["Driver", "Iron", "Pitch", "Chip", "Putt", "Bunker"]);
export type ShotType = z.infer<typeof shotTypeSchema>;

export const swingPhaseSchema = z.enum(["Setup", "Backswing", "Downswing", "Finish"]);
export type SwingPhase = z.infer<typeof swingPhaseSchema>;

export const swingThoughtInputSchema = z.object({
  shotType: shotTypeSchema,
  phase: swingPhaseSchema,
  rank: z.number().int().min(0, "0–100").max(100, "0–100"),
  text: z.string().min(1, "Say the thought").max(120, "Keep it short"),
  note: z.string().max(500, "Too long").optional(),
});

export type SwingThoughtInput = z.infer<typeof swingThoughtInputSchema>;
