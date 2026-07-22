import { AsyncLocalStorage } from "node:async_hooks";

/**
 * The signed-in user for the current request, if any.
 *
 * requireAuth runs each request inside this store; the Prisma extension in
 * client.ts reads it to stamp createdById/updatedById without every route
 * having to thread the user through by hand. Writes that run outside a request
 * — the seed scripts — see an empty store and leave the columns null.
 */
export const auditContext = new AsyncLocalStorage<{ userId: string }>();

export const currentUserId = () => auditContext.getStore()?.userId ?? null;
