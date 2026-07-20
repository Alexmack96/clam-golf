import { z } from "zod";

export const swingLengthSchema = z.enum(["Full", "Shoulder", "Chest", "Hip"]);

export const upsertDistanceSchema = z.object({
  yards: z.coerce
    .number()
    .int("Yards must be a whole number")
    .positive("Yards must be positive")
    .max(400, "That's further than any golf shot"),
});

export type UpsertDistanceInput = z.infer<typeof upsertDistanceSchema>;
