import { useEffect, useState, useRef } from "react";

/* ──────────────────────────────────────────────────────────────── */
/*  useElementOnScreen Hook                                         */
/* ──────────────────────────────────────────────────────────────── */

/**
 * useElementOnScreen
 *
 * A custom React hook that detects whether a DOM element is currently
 * visible in the viewport using the Intersection Observer API.
 *
 * Useful for:
 *  - Lazy loading images
 *  - Triggering animations when elements appear on screen
 *  - Infinite scrolling
 *
 * @param {IntersectionObserverInit} options
 *   Configuration for the observer (root, rootMargin, threshold)
 *
 * @returns {[React.RefObject, boolean]}
 *   - containerRef: a React ref to attach to the target element
 *   - isVisible: boolean indicating if the element intersects the viewport
 *
 * Example:
 *   const [ref, isVisible] = useElementOnScreen({ threshold: 0.2 });
 *   <div ref={ref}>Hello!</div>
 */
const useElementOnScreen = (options) => {
  const containerRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  /**
   * callbackFunction
   *
   * Intersection Observer callback that runs whenever visibility changes
   */
  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Cleanup: unobserve on unmount or ref change
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [options]);

  return [containerRef, isVisible];
};

export default useElementOnScreen;
