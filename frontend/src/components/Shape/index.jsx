import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Draggable from "react-draggable";

import * as _var from "../../styles/variables";

const size = 256;
const backgroundColor = "transparent";

const DraggableContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  & .circle,
  .square {
    background: ${backgroundColor};
    z-index: 90;
  }
`;

const Circle = styled.div`
  width: ${size}px;
  height: ${size}px;
  border-radius: ${size}px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: ${_var.cardShadowLarge};
`;

const Square = styled.div`
  width: ${size}px;
  height: ${size}px;
  border-radius: 4px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: ${_var.cardShadowLarge};
`;

const CSSshape = ({ shape }) => {
  return (
    <>
      {shape === "circle" && <Circle className="circle" />}
      {shape === "square" && <Square className="square" />}
    </>
  );
};

const Shape = ({ shape }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const randomPosition = () => {
      const docWidth = document.documentElement.clientWidth - size;
      const docHeight =
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.offsetHeight,
          document.body.clientHeight,
          document.documentElement.clientHeight
        ) - size;

      const x = Math.floor(Math.random() * docWidth);
      const y = Math.floor(Math.random() * docHeight);

      return { x, y };
    };

    setPosition(randomPosition());
  }, [shape]);

  const handleStop = (e, data) => {
    setPosition({ x: data.x, y: data.y });
  };

  return (
    <Draggable bounds="body" position={position} onStop={handleStop}>
      <DraggableContainer>
        <CSSshape shape={shape} />
      </DraggableContainer>
    </Draggable>
  );
};

export default Shape;
