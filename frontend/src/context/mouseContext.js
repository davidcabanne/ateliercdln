import { createContext, useCallback, useState } from "react";

/* ──────────────────────────────────────────────────────────────── */
/*  Context Shape                                                   */
/* ──────────────────────────────────────────────────────────────── */

/**
 * MouseContext
 *
 * A global React context used to control your custom cursor system.
 *
 * It exposes:
 *  - cursorType (string): active cursor mode ("", "hovered", "shapeHovered", etc.)
 *  - cursorChangeHandler: function to update the cursor type
 *
 * Default values are placeholders so components don’t crash when used
 * outside a provider.
 */
export const MouseContext = createContext({
  cursorType: "",
  cursorChangeHandler: () => {},
});

/* ──────────────────────────────────────────────────────────────── */
/*  Provider Component                                              */
/* ──────────────────────────────────────────────────────────────── */

/**
 * MouseContextProvider
 *
 * Wraps your application (or any subtree) to provide stateful cursor data.
 *
 * Responsibilities:
 *  - Stores the current cursor type in React state
 *  - Exposes a stable callback to update the state
 *  - Makes cursor state available to components like:
 *      - Custom <Cursor />
 *      - Hoverable elements that change cursor appearance
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Elements receiving access to the context.
 *
 * @returns {JSX.Element}
 */
const MouseContextProvider = (props) => {
  const [cursorType, setCursorType] = useState("");

  /**
   * Updates the global cursor type.
   *
   * Wrapped in useCallback to ensure stable identity
   * (important for preventing re-renders of deeply nested consumers).
   *
   * @param {string} nextCursorType
   */
  const cursorChangeHandler = useCallback((nextCursorType) => {
    setCursorType(nextCursorType);
  }, []);

  return (
    <MouseContext.Provider
      value={{
        cursorType: cursorType,
        cursorChangeHandler: cursorChangeHandler,
      }}
    >
      {props.children}
    </MouseContext.Provider>
  );
};

export default MouseContextProvider;
