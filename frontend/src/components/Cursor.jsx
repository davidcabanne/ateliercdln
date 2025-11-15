import { useContext, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import * as _var from "../styles/variables";

import useMousePosition from "../hooks/useMousePosition";
import { MouseContext } from "../context/mouseContext";

const animationDuration = "150ms";

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

const Polygon = styled.polygon`
  opacity: 1;
  transition: transform 200ms ${_var.cubicBezier};
`;

const Cursor = () => {
  const [cursorActive, setCursorActive] = useState(false);
  const { cursorType } = useContext(MouseContext);
  const { x, y } = useMousePosition();

  useEffect(() => {
    if (x > 0) {
      setCursorActive(true);
    }
  }, [x]);

  return (
    <>
      <Dot
        style={{
          left: `${x}px`,
          top: `${y}px`,
          zIndex: 9999,
        }}
      />
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 90 90"
        style={{
          opacity: cursorType === "hovered" ? 1 : 0,
          left: `${x}px`,
          top: `${y}px`,
        }}
        className={cursorType === "hovered" ? "active" : ""}
        $triangle
      >
        <polygon points="90,90 0,90 45,0 " />
      </Svg>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 32 32"
        className={cursorType === "hovered" ? "active" : ""}
        style={{
          opacity: cursorType === "hovered" ? 0 : 1,
          left: `${x}px`,
          top: `${y}px`,
        }}
      >
        <g>
          <Polygon
            points="0,0 32,0 32,32 0,32"
            style={{
              transform:
                cursorType === "shapeHovered" ? "scale(1)" : "scale(0)",
            }}
          />
          <circle cx="16" cy="16" r="16" />
        </g>
      </Svg>
    </>
  );
};

export default Cursor;
