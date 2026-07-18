import { z } from "zod";

export const clubTypeSchema = z.enum(["Driver", "Wood", "Hybrid", "Iron", "Wedge", "Putter"]);

export const createClubSchema = z.object({
  name: z.string().min(1, "Name is required").max(40, "Name is too long"),
  type: clubTypeSchema,
});

export type CreateClubInput = z.infer<typeof createClubSchema>;
