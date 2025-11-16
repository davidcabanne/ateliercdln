import { useCallback, useContext, useMemo } from "react";

import { MouseContext } from "@/context/mouseContext";

/* ──────────────────────────────────────────────────────────────── */
/*  Constants / Helpers                                             */
/* ──────────────────────────────────────────────────────────────── */

/**
 * Minimum viewport width considered "desktop".
 * On smaller screens, the custom cursor is disabled to let the native cursor
 * behave normally (touch devices, tablets, etc.).
 *
 * This mirrors the CSS rule used in styled-components
 * where the custom cursor is hidden at `${_var.device.tablet_max}`.
 */
const DESKTOP_MIN_WIDTH = 769; // px

/**
 * Utility to determine whether the current viewport is desktop-sized.
 * Checks `window.innerWidth` safely (server-side safe guard included).
 *
 * @returns {boolean}
 */
const isDesktopViewport = () =>
  typeof window !== "undefined" && window.innerWidth >= DESKTOP_MIN_WIDTH;

/* ──────────────────────────────────────────────────────────────── */
/*  useCursorHoverHandlers Hook                                     */
/* ──────────────────────────────────────────────────────────────── */

/**
 * useCursorHoverHandlers
 *
 * Generates stable `onMouseEnter` and `onMouseLeave` handlers used to control
 * the **custom cursor** through MouseContext.
 *
 * Behavior:
 *  - On desktop: hovering triggers the `"hovered"` cursor style.
 *  - On tablet/mobile: handlers do nothing, letting the native cursor remain.
 *
 * Why useCallback?
 *  - Ensures handlers are stable, preventing unnecessary re-renders.
 *
 * Why useMemo?
 *  - Returns a stable `{ onMouseEnter, onMouseLeave }` object so it can be safely
 *    spread into JSX (e.g., `<div {...handlers} />`) without regenerating every render.
 *
 * @returns {{ onMouseEnter: Function, onMouseLeave: Function }}
 *   Handlers ready to be spread into component props.
 *
 * Example:
 *   const hoverHandlers = useCursorHoverHandlers();
 *   <div {...hoverHandlers}>Hover me</div>
 */
const useCursorHoverHandlers = () => {
  const { cursorChangeHandler } = useContext(MouseContext);

  /**
   * Handle pointer entering a hover zone.
   * Only activates the custom cursor on desktop viewports.
   */
  const handleMouseEnter = useCallback(() => {
    if (isDesktopViewport()) {
      cursorChangeHandler("hovered");
    }
  }, [cursorChangeHandler]);

  /**
   * Handle pointer leaving a hover zone.
   * Resets custom cursor state.
   */
  const handleMouseLeave = useCallback(() => {
    cursorChangeHandler("");
  }, [cursorChangeHandler]);

  /**
   * Memoize the handlers object so it remains stable
   * when spread as JSX props.
   */
  return useMemo(
    () => ({ onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave }),
    [handleMouseEnter, handleMouseLeave]
  );
};

export default useCursorHoverHandlers;
