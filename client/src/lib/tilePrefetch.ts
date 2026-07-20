/**
 * Pulls every satellite tile covering Richmond Park into the browser cache, so
 * the map still draws in a dead spot rather than going grey.
 *
 * Distances never need this — the maths is local and GNSS is a passive radio
 * receiver that works with no network at all. This is only the imagery.
 */

const TILE_URL =
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";

/** Must match the runtime-caching cacheName in vite.config.ts. */
const CACHE_NAME = "golf-tiles";

// The Richmond Park Golf Course boundary, padded slightly so tiles at the edge
// of the 1st tee and 18th green are included too.
const BOUNDS = { south: 51.4365, north: 51.4520, west: -0.2560, east: -0.2430 };

// 16 frames the whole hole, 18 is as tight as you would ever zoom in to read a
// green's edges. Below 16 the imagery is too coarse to be worth the bytes.
const ZOOMS = [16, 17, 18];

function lngToX(lng: number, z: number) {
  return Math.floor(((lng + 180) / 360) * 2 ** z);
}

function latToY(lat: number, z: number) {
  const rad = (lat * Math.PI) / 180;
  return Math.floor(((1 - Math.log(Math.tan(rad) + 1 / Math.cos(rad)) / Math.PI) / 2) * 2 ** z);
}

function tileUrls(): string[] {
  const urls: string[] = [];
  for (const z of ZOOMS) {
    const x0 = lngToX(BOUNDS.west, z);
    const x1 = lngToX(BOUNDS.east, z);
    // Y runs north to south, so the northern edge gives the lower index.
    const y0 = latToY(BOUNDS.north, z);
    const y1 = latToY(BOUNDS.south, z);
    for (let x = x0; x <= x1; x++) {
      for (let y = y0; y <= y1; y++) {
        urls.push(TILE_URL.replace("{z}", String(z)).replace("{x}", String(x)).replace("{y}", String(y)));
      }
    }
  }
  return urls;
}

export interface TileProgress {
  done: number;
  total: number;
}

export async function downloadCourseTiles(onProgress: (p: TileProgress) => void): Promise<void> {
  const urls = tileUrls();
  onProgress({ done: 0, total: urls.length });

  if (!("caches" in window)) return;
  const cache = await caches.open(CACHE_NAME);

  let done = 0;
  // Six at a time: enough to saturate a phone connection without opening
  // hundreds of sockets against a free tile service.
  const CONCURRENCY = 6;
  let cursor = 0;

  async function worker() {
    while (cursor < urls.length) {
      const url = urls[cursor++];
      try {
        // Skip anything already cached — re-running this after a partial
        // download should be cheap.
        if (!(await cache.match(url))) {
          const res = await fetch(url, { mode: "cors" });
          if (res.ok) await cache.put(url, res.clone());
        }
      } catch {
        // A missing tile is a grey square, not a failure worth aborting for.
      }
      done++;
      onProgress({ done, total: urls.length });
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
}

/** Exposed for the test: how many tiles a full download would fetch. */
export const plannedTileCount = () => tileUrls().length;
