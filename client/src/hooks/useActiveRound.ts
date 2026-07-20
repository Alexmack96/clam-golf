import { useCallback, useEffect, useSyncExternalStore } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../lib/api.js";

const STORAGE_KEY = "gps.activeRound";
const SYNC_DEBOUNCE_MS = 3000;

export interface LocalScore {
  holeId: string;
  strokes: number;
  putts: number | null;
}

export interface ActiveRound {
  id: string;
  courseId: string;
  teeSetId: string;
  playedOn: string;
  completedAt: string | null;
  scores: LocalScore[];
}

export interface RoundSummary {
  id: string;
  playedOn: string;
  completedAt: string | null;
  course: { name: string };
  teeSet: { name: string; colour: string };
  scores: { holeId: string; strokes: number; putts: number | null; hole: { number: number } }[];
}

export type SyncState = "synced" | "pending" | "offline";

function read(): ActiveRound | null {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as ActiveRound;
  } catch {
    // A card corrupted beyond parsing is not worth crashing the page over on
    // the 4th tee; drop it and start clean.
    localStorage.removeItem(STORAGE_KEY);
    return null;
  }
}

/*
 * One store for the whole app rather than state per hook call.
 *
 * The round is read by the GPS page and by two components on the scorecard at
 * once. With useState each of those would hold its own copy and they would
 * drift apart the moment one of them finished or discarded the round, so the
 * card is kept here and every caller subscribes to the same value.
 */
let snapshot: ActiveRound | null = read();
let syncSnapshot: SyncState = "synced";
const listeners = new Set<() => void>();
let timer: ReturnType<typeof setTimeout> | null = null;

function emit() {
  for (const l of listeners) l();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

const getRound = () => snapshot;
const getSyncState = () => syncSnapshot;

function setSyncState(next: SyncState) {
  if (syncSnapshot === next) return;
  syncSnapshot = next;
  emit();
}

async function push(r: ActiveRound, onSynced?: () => void) {
  try {
    await api.put(`/api/rounds/${r.id}`, {
      courseId: r.courseId,
      teeSetId: r.teeSetId,
      playedOn: r.playedOn,
      completedAt: r.completedAt,
      scores: r.scores,
    });
    setSyncState("synced");
    onSynced?.();
  } catch {
    // Nothing to recover: the card is safe locally and the next edit pushes it
    // again in full.
    setSyncState("offline");
  }
}

/** Persist immediately, sync lazily. */
function commit(next: ActiveRound | null) {
  snapshot = next;
  if (next) localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  else localStorage.removeItem(STORAGE_KEY);
  emit();

  if (timer) clearTimeout(timer);
  if (!next) return;
  setSyncState("pending");
  timer = setTimeout(() => push(next), SYNC_DEBOUNCE_MS);
}

function blankRound(courseId: string, teeSetId: string): ActiveRound {
  return {
    id: crypto.randomUUID(),
    courseId,
    teeSetId,
    playedOn: new Date().toISOString(),
    completedAt: null,
    scores: [],
  };
}

/**
 * The round in progress, held on the phone.
 *
 * localStorage is the source of truth while you play. Entering a score is a
 * synchronous local write that cannot fail, so no dead spot on the course can
 * lose a hole you have already walked past. A debounced PUT then replaces the
 * server's copy of the whole card — one player, one device, so there is nothing
 * to merge and a dropped request needs no queue, just the next change.
 */
export function useActiveRound() {
  const round = useSyncExternalStore(subscribe, getRound, getRound);
  const syncState = useSyncExternalStore(subscribe, getSyncState, getSyncState);
  const qc = useQueryClient();

  // A round left unsynced when the app was closed still needs to reach the
  // server, so retry whenever the connection comes back.
  useEffect(() => {
    function retry() {
      if (snapshot) push(snapshot, () => qc.invalidateQueries({ queryKey: ["rounds"] }));
    }
    window.addEventListener("online", retry);
    return () => window.removeEventListener("online", retry);
  }, [qc]);

  const start = useCallback((courseId: string, teeSetId: string) => {
    commit(blankRound(courseId, teeSetId));
  }, []);

  /** Records a hole, starting a round implicitly if this is the first score. */
  const setScore = useCallback(
    (
      holeId: string,
      strokes: number | null,
      putts: number | null,
      courseId: string,
      teeSetId: string,
    ) => {
      const base = snapshot ?? blankRound(courseId, teeSetId);
      const scores = base.scores.filter((s) => s.holeId !== holeId);
      if (strokes !== null) scores.push({ holeId, strokes, putts });
      commit({ ...base, courseId, teeSetId, scores });
    },
    [],
  );

  const finish = useCallback(() => {
    if (!snapshot) return;
    const done: ActiveRound = { ...snapshot, completedAt: new Date().toISOString() };
    if (timer) clearTimeout(timer);

    // Mark it finished locally and push immediately rather than on the
    // debounce, but do NOT drop the local copy yet. You often finish in the car
    // park with no signal, and clearing before the push landed would throw the
    // round away. The local card is cleared only once the server has it; until
    // then the "online" listener keeps retrying.
    snapshot = done;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(done));
    emit();
    setSyncState("pending");

    push(done, () => {
      localStorage.removeItem(STORAGE_KEY);
      snapshot = null;
      emit();
      qc.invalidateQueries({ queryKey: ["rounds"] });
    });
  }, [qc]);

  const discard = useCallback(() => commit(null), []);

  return { round, syncState, start, setScore, finish, discard };
}

export function useRounds() {
  return useQuery<RoundSummary[]>({
    queryKey: ["rounds"],
    queryFn: () => api.get("/api/rounds").then((r) => r.data),
  });
}
