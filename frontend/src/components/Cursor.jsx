import { useContext, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import * as _var from "../styles/variables";

import useMousePosition from "../hooks/useMousePosition";
import { MouseContext } from "../context/mouseContext";

/** Duration for the cursor SVG animation. */
const animationDuration = "150ms";

/** Shared animation options for the custom cursor SVGs */
const animationOptions = `
transform-origin: center;
  transform: translate(-16px, -16px) rotate(0deg);
  -webkit-transition-duration: ${animationDuration};
  transition-duration: ${animationDuration};
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  transition-property: top, left, opacity, transform;
  will-change: top, left, opacity, transform;
`;

/**
 * Base SVG for the custom cursor icons.
 *
 * - Fixed at the top-left and moved via inline styles based on mouse position.
 * - Uses mix-blend-mode: difference for an inverted look over the page.
 * - Hidden on tablet/mobile (falls back to native cursor).
 */
const Svg = styled.svg`
  position: fixed;
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  pointer-events: none;
  fill: white;
  mix-blend-mode: difference;
  z-index: 9998;

  ${animationOptions}

  &.active {
    transform: translate(-16px, -16px) rotate(90deg);

    ${(props) =>
      props.$triangle &&
      css`
        transform: translate(-11px, -16px) rotate(90deg);
      `}
  }

  @media ${_var.device.tablet_max} {
    display: none;
  }
`;

/**
 * Small white dot that always follows the mouse.
 *
 * - Acts as the "core" cursor.
 * - Hidden on tablet/mobile.
 */
const Dot = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  transform: translate(-8px, -8px);
  background: white;
  border-radius: 128px;
  pointer-events: none;
  mix-blend-mode: difference;

  z-index: 9999;

  @media ${_var.device.tablet_max} {
    display: none;
  }
`;

/**
 * Polygon used for the square "shapeHovered" state.
 *
 * - Scales in/out based on cursor type via inline `transform`.
 */
const Polygon = styled.polygon`
  opacity: 1;
  transition: transform 200ms ${_var.cubicBezier};
`;

/**
 * Cursor
 *
 * Global custom cursor component that:
 *  - Tracks mouse position via `useMousePosition`
 *  - Reads cursor state from `MouseContext`
 *  - Renders:
 *    - A small dot that always follows the mouse
 *    - A triangle icon when `cursorType === "hovered"`
 *    - A circle + scaling square when not hovered, or when `cursorType === "shapeHovered"`
 *
 * Cursor behavior:
 *  - On desktop: custom cursor is visible and animated.
 *  - On tablet/mobile: component is hidden via media queries.
 *
 * @returns {JSX.Element}
 */
const Cursor = () => {
  const [cursorActive, setCursorActive] = useState(false);
  const { cursorType } = useContext(MouseContext);
  const { x, y } = useMousePosition();

  useEffect(() => {
    if (x > 0) {
      setCursorActive(true);
    }
  }, [x]);

  const isHovered = cursorType === "hovered";
  const isShapeHovered = cursorType === "shapeHovered";

  return (
    <>
      {/* Core dot following the mouse */}
      <Dot
        style={{
          left: `${x}px`,
          top: `${y}px`,
          zIndex: 9999,
        }}
      />

      {/* Triangle cursor: visible when `cursorType === "hovered"` */}
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 90 90"
        style={{
          opacity: isHovered ? 1 : 0,
          left: `${x}px`,
          top: `${y}px`,
        }}
        className={isHovered ? "active" : ""}
        $triangle
      >
        <polygon points="90,90 0,90 45,0 " />
      </Svg>

      {/* Circle + scaling square cursor:
          - Circle is always present when NOT hovered (`opacity` toggled)
          - Inner square scales in only for `cursorType === "shapeHovered"`.
       */}
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 32 32"
        className={isHovered ? "active" : ""}
        style={{
          opacity: isHovered ? 0 : 1,
          left: `${x}px`,
          top: `${y}px`,
        }}
      >
        <g>
          <Polygon
            points="0,0 32,0 32,32 0,32"
            style={{
              transform: isShapeHovered ? "scale(1)" : "scale(0)",
            }}
          />
          <circle cx="16" cy="16" r="16" />
        </g>
      </Svg>
    </>
  );
};

export default Cursor;
