import { useEffect, useRef, useState } from "react";

export interface Fix {
  lat: number;
  lng: number;
  /** Radius of 68% confidence, in metres, as reported by the device. */
  accuracy: number;
  at: number;
}

export type GeolocationStatus = "idle" | "locating" | "tracking" | "denied" | "unavailable";

/**
 * A fix this loose is a wifi or IP lookup rather than a satellite one — which
 * is what a desktop browser reports, and what a phone falls back to indoors.
 * Quoting a yardage off it would be confidently wrong, so the page shows the
 * yardage book instead.
 */
export const USABLE_ACCURACY_M = 50;

/**
 * Watches the device position for as long as the page is visible.
 *
 * The watch is torn down on visibilitychange rather than left running: a round
 * is four hours, continuous high-accuracy GPS is the single biggest drain on
 * the page, and a phone in a pocket has no one reading it. Re-acquiring on
 * wake costs a second or two against hours of battery.
 */
export function useGeolocation(enabled = true) {
  const [fix, setFix] = useState<Fix | null>(null);
  // Support is a property of the browser, not something that changes while the
  // page is open, so settle it before the first render rather than in an effect.
  const [status, setStatus] = useState<GeolocationStatus>(() =>
    typeof navigator === "undefined" || !navigator.geolocation ? "unavailable" : "idle",
  );
  const watchId = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;
    if (typeof navigator === "undefined" || !navigator.geolocation) return;

    function start() {
      if (watchId.current !== null) return;
      setStatus((s) => (s === "tracking" ? s : "locating"));
      watchId.current = navigator.geolocation.watchPosition(
        (pos) => {
          setFix({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
            accuracy: pos.coords.accuracy,
            at: pos.timestamp,
          });
          setStatus("tracking");
        },
        (err) => {
          setStatus(err.code === err.PERMISSION_DENIED ? "denied" : "unavailable");
        },
        {
          enableHighAccuracy: true,
          // Never serve a fix from before the last shot; on a golf course a
          // stale position is a wrong yardage.
          maximumAge: 5000,
          timeout: 20000,
        },
      );
    }

    function stop() {
      if (watchId.current === null) return;
      navigator.geolocation.clearWatch(watchId.current);
      watchId.current = null;
    }

    function onVisibility() {
      if (document.visibilityState === "visible") start();
      else stop();
    }

    if (document.visibilityState === "visible") start();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      stop();
    };
  }, [enabled]);

  return {
    fix,
    status,
    /** Whether the fix is tight enough to quote a yardage from. */
    usable: fix !== null && fix.accuracy <= USABLE_ACCURACY_M,
  };
}
