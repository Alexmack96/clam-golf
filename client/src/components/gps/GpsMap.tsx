import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLng, Ring } from "@clam/core";

export interface GreenCandidate {
  osmId: number;
  ring: Ring;
  centre: [number, number];
}

interface GpsMapProps {
  you: LatLng | null;
  accuracy?: number | null;
  green: Ring | null;
  greenCentre: LatLng | null;
  tee?: LatLng | null;
  aim?: LatLng | null;
  onAimMove?: (p: LatLng) => void;
  measure?: LatLng | null;
  onMapClick?: (p: LatLng) => void;
  /** Editor mode: unassigned green outlines offered for assignment. */
  candidates?: GreenCandidate[];
  onCandidateClick?: (c: GreenCandidate) => void;
  /**
   * Changes whenever the map should reframe itself from scratch — a new hole,
   * or entering the editor. Any manual pan or zoom is respected until this
   * changes, so the view stops fighting you a second after you move it.
   */
  fitKey?: string;
  className?: string;
}

const FALLBACK_CENTRE: L.LatLngExpression = [51.4447, -0.2491]; // Richmond Park

/**
 * Esri's World Imagery basemap. Satellite rather than street tiles because a
 * street map renders a golf course as one undifferentiated green shape — no
 * fairway, no bunkers, no green edges, which is all of the useful information.
 */
const TILE_URL =
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";

// Circular markers rather than Leaflet's default pin: the default icon is a
// PNG referenced by a relative path that bundlers rewrite and then fail to
// find, and a dot is easier to read against aerial imagery anyway.
function dotIcon(className: string, size: number) {
  return L.divIcon({
    className: "",
    html: `<div class="${className}" style="width:${size}px;height:${size}px"></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}

export function GpsMap({
  you,
  accuracy,
  green,
  greenCentre,
  tee,
  aim,
  onAimMove,
  measure,
  onMapClick,
  candidates,
  onCandidateClick,
  fitKey,
  className,
}: GpsMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const layersRef = useRef<L.LayerGroup | null>(null);
  const userMovedRef = useRef(false);
  const fittingRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: FALLBACK_CENTRE,
      zoom: 16,
      zoomControl: false,
      attributionControl: true,
    });

    L.tileLayer(TILE_URL, {
      maxZoom: 19,
      attribution: "Esri, Maxar, Earthstar Geographics",
    }).addTo(map);

    // fitBounds raises the same movestart/zoomstart events a finger does, so
    // the auto-fit below flags itself while it runs and these listeners ignore
    // anything during that window. Without it the map would treat its own
    // first fit as the user taking over and never reframe again.
    const claim = () => {
      if (!fittingRef.current) userMovedRef.current = true;
    };
    map.on("dragstart", claim);
    map.on("zoomstart", claim);

    mapRef.current = map;
    layersRef.current = L.layerGroup().addTo(map);

    return () => {
      map.remove();
      mapRef.current = null;
      layersRef.current = null;
    };
  }, []);

  // Rebind rather than read the latest handler through a ref, so the closure
  // the map holds is always the one from the current render.
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !onMapClick) return;
    const handler = (e: L.LeafletMouseEvent) => onMapClick({ lat: e.latlng.lat, lng: e.latlng.lng });
    map.on("click", handler);
    return () => {
      map.off("click", handler);
    };
  }, [onMapClick]);

  // A new hole, or switching in or out of the editor, is a fresh view: forget
  // that the map was panned so the next draw reframes on the new subject.
  // Declared above the draw effect so the flag is already cleared when it runs.
  useEffect(() => {
    userMovedRef.current = false;
  }, [fitKey]);

  // Redraw everything on each change. A hole has a handful of shapes, so
  // diffing layers would cost more in complexity than it saves in work.
  useEffect(() => {
    const map = mapRef.current;
    const layers = layersRef.current;
    if (!map || !layers) return;
    layers.clearLayers();

    const fitPoints: L.LatLngExpression[] = [];

    for (const c of candidates ?? []) {
      // In the editor the outlines are the whole point of the view, so they
      // decide the framing. Without this the map fits to your position alone
      // and lands at street zoom with no green in sight to tap.
      fitPoints.push(...c.ring);
      L.polygon(c.ring, {
        color: "#fbbf24",
        weight: 2,
        fillOpacity: 0.25,
        // Candidates exist to be tapped, so keep them above the drawn hole.
        interactive: true,
      })
        .on("click", (e) => {
          L.DomEvent.stopPropagation(e);
          onCandidateClick?.(c);
        })
        .addTo(layers);
    }

    if (green) {
      L.polygon(green, { color: "#22c55e", weight: 2, fillOpacity: 0.35 }).addTo(layers);
      fitPoints.push(...green);
    }

    if (tee) {
      L.marker([tee.lat, tee.lng], { icon: dotIcon("gps-dot-tee", 12) }).addTo(layers);
    }

    if (you) {
      if (accuracy != null) {
        L.circle([you.lat, you.lng], {
          radius: accuracy,
          color: "#38bdf8",
          weight: 1,
          fillOpacity: 0.1,
        }).addTo(layers);
      }
      L.marker([you.lat, you.lng], { icon: dotIcon("gps-dot-you", 16) }).addTo(layers);
      fitPoints.push([you.lat, you.lng]);
    }

    // The line of play: you to the green, bending through the aim point when
    // the hole has one.
    if (you && greenCentre) {
      const via: L.LatLngExpression[] = aim
        ? [
            [you.lat, you.lng],
            [aim.lat, aim.lng],
            [greenCentre.lat, greenCentre.lng],
          ]
        : [
            [you.lat, you.lng],
            [greenCentre.lat, greenCentre.lng],
          ];
      L.polyline(via, { color: "#f8fafc", weight: 2, opacity: 0.8, dashArray: "6 6" }).addTo(
        layers,
      );
    }

    if (aim) {
      const marker = L.marker([aim.lat, aim.lng], {
        icon: dotIcon("gps-dot-aim", 22),
        draggable: Boolean(onAimMove),
      }).addTo(layers);
      marker.on("dragend", () => {
        const p = marker.getLatLng();
        onAimMove?.({ lat: p.lat, lng: p.lng });
      });
      fitPoints.push([aim.lat, aim.lng]);
    }

    if (measure) {
      L.marker([measure.lat, measure.lng], { icon: dotIcon("gps-dot-measure", 16) }).addTo(layers);
      if (you) {
        L.polyline(
          [
            [you.lat, you.lng],
            [measure.lat, measure.lng],
          ],
          { color: "#f59e0b", weight: 2, opacity: 0.9 },
        ).addTo(layers);
      }
      fitPoints.push([measure.lat, measure.lng]);
    }

    if (greenCentre) fitPoints.push([greenCentre.lat, greenCentre.lng]);
    if (!you && tee) fitPoints.push([tee.lat, tee.lng]);

    if (fitPoints.length > 0 && !userMovedRef.current) {
      fittingRef.current = true;
      map.fitBounds(L.latLngBounds(fitPoints), { padding: [40, 40], maxZoom: 18, animate: false });
      fittingRef.current = false;
    }
  }, [
    you,
    accuracy,
    green,
    greenCentre,
    tee,
    aim,
    measure,
    candidates,
    onAimMove,
    onCandidateClick,
  ]);

  // The container is sized by CSS, but Leaflet caches its pixel dimensions and
  // renders grey where it thinks the map ends. Re-measure whenever it resizes.
  useEffect(() => {
    if (!containerRef.current || !mapRef.current) return;
    const observer = new ResizeObserver(() => mapRef.current?.invalidateSize());
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={containerRef} className={className} />;
}
