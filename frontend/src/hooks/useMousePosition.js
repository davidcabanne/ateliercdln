import { useEffect, useState } from "react";

/* ──────────────────────────────────────────────────────────────── */
/*  useMousePosition Hook                                           */
/* ──────────────────────────────────────────────────────────────── */

/**
 * useMousePosition
 *
 * Tracks the user's mouse cursor position across the screen.
 *
 * This hook:
 *  - Listens to the `mousemove` event on `document`
 *  - Stores the latest `{ x, y }` coordinates
 *  - Cleans up automatically on unmount
 *
 * Useful for:
 *  - Custom cursors
 *  - Parallax effects
 *  - Tooltip positioning
 *  - Hover interactions
 *
 * @returns {{ x: number|null, y: number|null }}
 *   The current mouse coordinates in viewport pixels.
 *
 * Example:
 *   const { x, y } = useMousePosition();
 *   <div style={{ left: x, top: y }} />
 */
export default function useMousePosition() {
  // Store mouse position (null until movement occurs)
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    /**
     * mouseMoveHandler
     *
     * Extracts viewport coordinates from the mouse event
     * and updates the hook state.
     */
    const mouseMoveHandler = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };

    // Attach global mouse movement listener
    document.addEventListener("mousemove", mouseMoveHandler);

    // Cleanup: remove event listener on unmount
    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []); // Empty deps ⇒ only register the listener once

  return mousePosition;
}
