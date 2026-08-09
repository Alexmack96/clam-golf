import { useEffect } from "react";

/**
 * Works around a long-standing Radix bug where an overlay (Select, Dialog,
 * Popover…) sets `pointer-events: none` on <body> while open, but the cleanup
 * that restores it fails to run on close — most reliably when one layer is
 * nested in another (a Select inside a Dialog) or two open/close in quick
 * succession. The body is left dead to every tap until the next re-render,
 * which reads as "buttons randomly stop working".
 * See radix-ui/primitives #1241, #3445, #3645.
 *
 * We watch <body> for that inline style and, whenever it appears with no Radix
 * layer actually open, clear it. While a layer is legitimately open the guard
 * elements below exist, so we leave it alone and modality is preserved.
 */
const OPEN_LAYER_SELECTOR = [
  "[data-radix-popper-content-wrapper]", // popper-positioned Popover/Dropdown/Tooltip
  '[role="dialog"][data-state="open"]', // Dialog, AlertDialog
  '[role="alertdialog"][data-state="open"]',
  '[data-slot="select-content"]', // item-aligned Select isn't popper-wrapped
].join(",");

export function useReleaseStuckPointerEvents() {
  useEffect(() => {
    function release() {
      if (document.body.style.pointerEvents !== "none") return;
      if (document.querySelector(OPEN_LAYER_SELECTOR)) return; // a layer really is open
      document.body.style.pointerEvents = "";
    }

    const observer = new MutationObserver(release);
    observer.observe(document.body, { attributes: true, attributeFilter: ["style"] });
    return () => observer.disconnect();
  }, []);
}
