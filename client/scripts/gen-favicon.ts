/**
 * Generate the browser-tab favicon (icon.svg + favicon.ico) from
 * public/clam-app-logo.png, matching the icons gen-icons.ts produces.
 * Run: cd client && bun run scripts/gen-favicon.ts
 */
import sharp from "sharp";
import path from "path";

const PUBLIC = path.resolve(import.meta.dir, "..", "public");
const SOURCE = path.join(PUBLIC, "clam-app-logo.png");

/** Center-crop to `keep` fraction of the shorter side, then resize square. */
async function cropSquare(size: number, keep: number) {
  const meta = await sharp(SOURCE).metadata();
  const side = Math.floor(Math.min(meta.width!, meta.height!) * keep);
  const left = Math.floor((meta.width! - side) / 2);
  const top = Math.floor((meta.height! - side) / 2);

  return sharp(SOURCE)
    .extract({ left, top, width: side, height: side })
    .resize(size, size, { fit: "cover" })
    .flatten({ background: "#ffffff" })
    .png()
    .toBuffer();
}

/** Wrap a single PNG buffer in a minimal valid ICO container. */
function pngToIco(png: Buffer, size: number): Buffer {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(1, 4); // image count

  const entry = Buffer.alloc(16);
  entry.writeUInt8(size >= 256 ? 0 : size, 0); // width (0 = 256)
  entry.writeUInt8(size >= 256 ? 0 : size, 1); // height (0 = 256)
  entry.writeUInt8(0, 2); // palette
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // color planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(png.length, 8); // image data size
  entry.writeUInt32LE(header.length + entry.length, 12); // offset

  return Buffer.concat([header, entry, png]);
}

// Favicon SVG: embed a small raster crop as a data URI so browsers get a
// crisp, resolution-independent tab icon without hand-drawn vector art.
const svgPng = await cropSquare(128, 0.85);
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
  <image width="128" height="128" href="data:image/png;base64,${svgPng.toString("base64")}"/>
</svg>
`;
await Bun.write(path.join(PUBLIC, "icon.svg"), svg);
console.log("✓ icon.svg");

const icoPng = await cropSquare(48, 0.85);
await Bun.write(path.join(PUBLIC, "favicon.ico"), pngToIco(icoPng, 48));
console.log("✓ favicon.ico");
