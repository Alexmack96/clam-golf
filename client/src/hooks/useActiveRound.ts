import { useCallback, useEffect, useSyncExternalStore } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../lib/api.js";

// v2: the round became multi-player (players + per-player scores). An old
// single-player card in storage has no `players` and is dropped on read.
const STORAGE_KEY = "gps.activeRound.v2";
const SYNC_DEBOUNCE_MS = 3000;

export interface LocalPlayer {
  id: string;
  position: number;
  name: string;
  teeSetId: string;
}

export interface LocalScore {
  playerId: string;
  holeId: string;
  strokes: number;
  putts: number | null;
}

export interface ActiveRound {
  id: string;
  courseId: string;
  playedOn: string;
  completedAt: string | null;
  players: LocalPlayer[];
  scores: LocalScore[];
}

export interface RoundPlayerSummary {
  id: string;
  position: number;
  name: string;
  teeSetId: string;
  teeSet: { name: string; colour: string };
  scores: { holeId: string; strokes: number; putts: number | null; hole: { number: number } }[];
}

export interface RoundSummary {
  id: string;
  courseId: string;
  playedOn: string;
  completedAt: string | null;
  course: { name: string; venue: string };
  players: RoundPlayerSummary[];
}

export type SyncState = "synced" | "pending" | "offline";

function read(): ActiveRound | null {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as ActiveRound;
    // A card from before multi-player, or corrupted beyond recognition, is not
    // worth crashing the page over on the 4th tee — drop it and start clean.
    if (!Array.isArray(parsed.players) || !Array.isArray(parsed.scores)) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return null;
  }
}

/*
 * One store for the whole app rather than state per hook call.
 *
 * The round is read by the GPS page and by several components on the scorecard
 * at once. With useState each would hold its own copy and they would drift apart
 * the moment one finished or discarded the round, so the card is kept here and
 * every caller subscribes to the same value.
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

/** The shape the server expects: players carrying their own scores. */
function toUpsertBody(r: ActiveRound) {
  return {
    courseId: r.courseId,
    playedOn: r.playedOn,
    completedAt: r.completedAt,
    players: r.players.map((p) => ({
      id: p.id,
      position: p.position,
      name: p.name,
      teeSetId: p.teeSetId,
      scores: r.scores
        .filter((s) => s.playerId === p.id)
        .map((s) => ({ holeId: s.holeId, strokes: s.strokes, putts: s.putts })),
    })),
  };
}

async function push(r: ActiveRound, onSynced?: () => void) {
  try {
    await api.put(`/api/rounds/${r.id}`, toUpsertBody(r));
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

export interface NewPlayer {
  name: string;
  teeSetId: string;
}

function blankRound(courseId: string, players: NewPlayer[]): ActiveRound {
  return {
    id: crypto.randomUUID(),
    courseId,
    playedOn: new Date().toISOString(),
    completedAt: null,
    players: players.map((p, i) => ({
      id: crypto.randomUUID(),
      position: i + 1,
      name: p.name.trim() || (i === 0 ? "You" : `Player ${i + 1}`),
      teeSetId: p.teeSetId,
    })),
    scores: [],
  };
}

/** Maps a server round back into the local shape, for editing a finished card. */
function fromSummary(r: RoundSummary): ActiveRound {
  return {
    id: r.id,
    courseId: r.courseId,
    playedOn: r.playedOn,
    completedAt: r.completedAt,
    players: r.players.map((p) => ({
      id: p.id,
      position: p.position,
      name: p.name,
      teeSetId: p.teeSetId,
    })),
    scores: r.players.flatMap((p) =>
      p.scores.map((s) => ({
        playerId: p.id,
        holeId: s.holeId,
        strokes: s.strokes,
        putts: s.putts,
      })),
    ),
  };
}

/**
 * The round in progress, held on the phone.
 *
 * localStorage is the source of truth while you play. Editing a score is a
 * synchronous local write that cannot fail, so no dead spot on the course can
 * lose a hole you have already walked past. A debounced PUT then replaces the
 * server's copy of the whole card — one device, one writer, so there is nothing
 * to merge and a dropped request needs no queue, just the next change. The round
 * is created deliberately on the scorecard now, never implicitly from GPS.
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

  /** Starts a new round with its players. Player 1 is you, at position 1. */
  const start = useCallback((courseId: string, players: NewPlayer[]) => {
    commit(blankRound(courseId, players));
  }, []);

  /** Pulls a finished round back onto this device so its card can be edited. */
  const load = useCallback((r: RoundSummary) => {
    commit(fromSummary(r));
  }, []);

  const setScore = useCallback(
    (playerId: string, holeId: string, strokes: number | null, putts: number | null) => {
      if (!snapshot) return;
      const scores = snapshot.scores.filter(
        (s) => !(s.playerId === playerId && s.holeId === holeId),
      );
      if (strokes !== null) scores.push({ playerId, holeId, strokes, putts });
      commit({ ...snapshot, scores });
    },
    [],
  );

  /** Renames or re-tees the players, or adds/removes a guest (Player 1 stays). */
  const setPlayers = useCallback((players: LocalPlayer[]) => {
    if (!snapshot) return;
    const keep = new Set(players.map((p) => p.id));
    commit({
      ...snapshot,
      players,
      scores: snapshot.scores.filter((s) => keep.has(s.playerId)),
    });
  }, []);

  const finish = useCallback(() => {
    if (!snapshot) return;
    const done: ActiveRound = { ...snapshot, completedAt: new Date().toISOString() };
    if (timer) clearTimeout(timer);

    // Mark it finished locally and push immediately rather than on the debounce,
    // but do NOT drop the local copy yet. You often finish in the car park with
    // no signal, and clearing before the push landed would throw the round away.
    // The local card is cleared only once the server has it; until then the
    // "online" listener keeps retrying.
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

  /** Stops editing a finished round: drop the local copy, leave the server's. */
  const release = useCallback(() => {
    if (timer) clearTimeout(timer);
    snapshot = null;
    localStorage.removeItem(STORAGE_KEY);
    setSyncState("synced");
    emit();
    qc.invalidateQueries({ queryKey: ["rounds"] });
  }, [qc]);

  /** Discards the round: clears it locally and soft-deletes the server copy. */
  const discard = useCallback(() => {
    const id = snapshot?.id;
    commit(null);
    if (id) {
      api
        .delete(`/api/rounds/${id}`)
        .then(() => qc.invalidateQueries({ queryKey: ["rounds"] }))
        .catch(() => {
          // A failed delete leaves the round on the server; it is harmless and
          // can be removed again from history.
        });
    }
  }, [qc]);

  return { round, syncState, start, load, setScore, setPlayers, finish, release, discard };
}

export function useRounds() {
  return useQuery<RoundSummary[]>({
    queryKey: ["rounds"],
    queryFn: () => api.get("/api/rounds").then((r) => r.data),
  });
}

/** Soft-deletes a round from history. */
export async function deleteRound(id: string) {
  await api.delete(`/api/rounds/${id}`);
}
