/**
 * Pulls Richmond Park's green and tee outlines from OpenStreetMap into a
 * checked-in JSON file, so neither the build nor the app ever depends on
 * Overpass being up.
 *
 * Run with: bun scripts/fetch-osm-geometry.mjs
 *
 * OSM tags these as bare golf=green / golf=tee with no hole number, no par and
 * no tee colour, and both of Richmond Park's courses sit inside one boundary.
 * So this script deliberately does NOT try to work out which outline is which
 * hole — that is the assignment step in the /gps editor. All it does is fetch
 * geometry and label each outline with a stable OSM way id.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
// The same centroid the app quotes distances from. Importing it rather than
// reimplementing it here keeps the cached centres identical to what the server
// computes on assignment — an earlier copy of this function drifted 26cm.
// Relative rather than "@clam/core": scripts/ is not a workspace package, so
// the workspace alias does not resolve from here.
import { centroid } from "../core/src/geo.js";

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = join(HERE, "..", "client", "src", "data", "richmond-park-geometry.json");

// way/4268580 is the Richmond Park Golf Course boundary. Clipping to it keeps
// neighbouring courses (Roehampton Club is a few hundred metres north) out.
const QUERY = `
[out:json][timeout:90];
way(4268580);
map_to_area->.rp;
(
  way["golf"="green"](area.rp);
  way["golf"="tee"](area.rp);
);
out geom;
`;

const MIRRORS = [
  "https://overpass-api.de/api/interpreter",
  "https://overpass.kumi.systems/api/interpreter",
  "https://overpass.private.coffee/api/interpreter",
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchWithFallback() {
  let lastError;
  // Overpass rate-limits aggressively; a mirror that refuses now often works
  // 20 seconds later, so cycle the mirrors twice before giving up.
  for (let attempt = 0; attempt < 2; attempt++) {
    for (const url of MIRRORS) {
      process.stdout.write(`  ${url} ... `);
      try {
        // Overpass answers 406 to a form-encoded POST that carries no named
        // User-Agent — Bun's default is rejected outright.
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "clam-golf/1.0 (personal golf app; one-off course geometry import)",
          },
          body: "data=" + encodeURIComponent(QUERY),
        });
        const text = await res.text();
        if (!res.ok || text.trimStart().startsWith("<")) {
          console.log(res.ok ? "rate limited" : `HTTP ${res.status}`);
          lastError = new Error(`${url}: ${res.status}`);
          await sleep(5000);
          continue;
        }
        console.log("ok");
        return JSON.parse(text);
      } catch (err) {
        console.log("failed");
        lastError = err;
        await sleep(5000);
      }
    }
  }
  throw lastError ?? new Error("all Overpass mirrors failed");
}

console.log("Fetching Richmond Park geometry from Overpass:");
const data = await fetchWithFallback();

const shapes = { greens: [], tees: [] };
for (const el of data.elements ?? []) {
  if (!el.geometry) continue;
  // Overpass repeats the first node as the last on a closed way; drop it so
  // the centroid maths doesn't double-count that vertex.
  const ring = el.geometry.map((p) => [p.lat, p.lon]);
  if (ring.length > 1 && ring[0][0] === ring.at(-1)[0] && ring[0][1] === ring.at(-1)[1]) ring.pop();
  if (ring.length < 3) continue;

  const c = centroid(ring);
  const shape = { osmId: el.id, ring, centre: [c.lat, c.lng] };
  if (el.tags?.golf === "green") shapes.greens.push(shape);
  else if (el.tags?.golf === "tee") shapes.tees.push(shape);
}

shapes.greens.sort((a, b) => a.osmId - b.osmId);
shapes.tees.sort((a, b) => a.osmId - b.osmId);

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(
  OUT,
  JSON.stringify(
    {
      source: "OpenStreetMap contributors, ODbL — way/4268580 Richmond Park Golf Course",
      fetchedAt: new Date().toISOString().slice(0, 10),
      ...shapes,
    },
    null,
    1,
  ),
);

console.log(`\n${shapes.greens.length} greens, ${shapes.tees.length} tees → ${OUT}`);
console.log(
  shapes.greens.length < 36
    ? `Only ${shapes.greens.length} greens for 36 holes — some will need tracing by hand in the editor.`
    : "Enough greens for both courses; assign them in the /gps editor.",
);
