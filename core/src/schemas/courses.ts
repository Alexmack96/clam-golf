import { z } from "zod";

export const teeColourSchema = z.enum(["Yellow", "White", "Red", "Blue"]);

const latSchema = z.number().min(-90).max(90);
const lngSchema = z.number().min(-180).max(180);

/** A closed ring of [lat, lng] pairs. Three points is the minimum that encloses area. */
export const ringSchema = z.tuple([latSchema, lngSchema]).array().min(3);

/**
 * Binds a green outline to a hole. The outline and its centre always travel
 * together — front and back distances are derived by projecting the outline
 * onto the line of play, so a centre that drifted away from its own outline
 * would silently produce wrong numbers.
 */
export const assignGreenSchema = z.object({
  greenPolygon: ringSchema,
  osmId: z.number().int().optional(),
});

/** Clears a hole's green assignment, freeing that outline for another hole. */
export const clearGreenSchema = z.object({ greenPolygon: z.null() });

/**
 * A spot the hole is played through: a dogleg corner, or a layup target on a
 * hole longer than the player can carry. Null removes it.
 */
export const setAimPointSchema = z.object({
  aimLat: latSchema.nullable(),
  aimLng: lngSchema.nullable(),
});

/** Positions one tee set's teeing ground on one hole. */
export const setTeePositionSchema = z.object({
  teeLat: latSchema.nullable(),
  teeLng: lngSchema.nullable(),
});

// The Ring type itself lives in geo.ts, alongside the maths that consumes it.
export type AssignGreenInput = z.infer<typeof assignGreenSchema>;
export type SetAimPointInput = z.infer<typeof setAimPointSchema>;
export type SetTeePositionInput = z.infer<typeof setTeePositionSchema>;
