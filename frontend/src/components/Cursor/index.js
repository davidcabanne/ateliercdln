import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import * as _var from "../../styles/variables";
import useMousePosition from "../../hooks/useMousePosition";
import { MouseContext } from "../../context/mouseContext";

const animationDuration = "150ms";

const Container = styled.div`
  position: fixed;
  z-index: 911;
  background: white;
  mix-blend-mode: difference;
`;

const Svg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  pointer-events: none;
  fill: white;
  transform-origin: center;
  transform: translate(-16px, -16px) rotate(0deg) scale(1);
  -webkit-transition-duration: ${animationDuration};
  transition-duration: ${animationDuration};
  -webkit-transition-timing-function: ${_var.cubicBezier};
  transition-timing-function: ${_var.cubicBezier};
  transition: ${animationDuration} ${_var.cubicBezier};
  transition-property: opacity, transform;
  opacity: ${(props) => (props.$cursorActive ? 1 : 0)};

  &.active {
    transform: translate(-16px, -16px) rotate(90deg) scale(1.5);
  }

  @media ${_var.device.tablet_max} {
    display: none;
  }
`;

const Cursor = () => {
  const [cursorActive, setCursorActive] = useState(false);
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const { x, y } = useMousePosition();

  useEffect(() => {
    if (x > 0) {
      setCursorActive(true);
    }
  }, [x]);

  return (
    <Container style={{ left: `${x}px`, top: `${y}px` }}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 90 90"
        style={{ opacity: cursorType === "hovered" ? 1 : 0 }}
        className={cursorType === "hovered" ? "active" : ""}
        $cursorActive={cursorActive}
      >
        <polygon points="90,90 0,90 45,0 " />
      </Svg>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 32 32"
        className={cursorType === "hovered" ? "active" : ""}
        style={{ opacity: cursorType === "hovered" ? 0 : 1 }}
        $cursorActive={cursorActive}
      >
        <g>
          <circle cx="16" cy="16" r="16" />
        </g>
      </Svg>
    </Container>
  );
};

export default Cursor;
