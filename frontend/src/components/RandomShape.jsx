import { useEffect, useState, useRef, useContext } from "react";
import styled from "styled-components";
import * as _var from "../styles/variables";

import { MouseContext } from "@/context/mouseContext";

const circleSize = 256;

const Shape = styled.div`
  position: absolute;
  width: 100%;
  max-width: 256px;
  aspect-ratio: 1 / 1;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: ${_var.cardShadowLarge};
  z-index: 50;

  @media ${_var.device.tablet_max} {
    display: none;
  }
`;

const RandomShape = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const shapeRef = useRef(null);

  const { cursorChangeHandler } = useContext(MouseContext);

  const getRandomPosition = () => {
    const maxWidth = document.documentElement.scrollWidth - circleSize;
    const maxHeight = document.documentElement.scrollHeight - circleSize;
    const top = Math.floor(Math.random() * maxHeight);
    const left = Math.floor(Math.random() * maxWidth);
    return { top, left };
  };

  const adjustPosition = () => {
    if (shapeRef.current) {
      const { top, left } = position;
      const maxWidth = document.documentElement.scrollWidth - circleSize;
      const maxHeight = document.documentElement.scrollHeight - circleSize;

      const newTop = Math.min(Math.max(0, top), maxHeight);
      const newLeft = Math.min(Math.max(0, left), maxWidth);

      if (newTop !== top || newLeft !== left) {
        setPosition({ top: newTop, left: newLeft });
      }
    }
  };

  useEffect(() => {
    setPosition(getRandomPosition());

    const handleResize = () => {
      adjustPosition();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const rect = shapeRef.current.getBoundingClientRect();
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const newTop = e.clientY - offset.y + window.scrollY;
    const newLeft = e.clientX - offset.x + window.scrollX;
    const maxWidth = document.documentElement.scrollWidth - circleSize;
    const maxHeight = document.documentElement.scrollHeight - circleSize;
    setPosition({
      top: Math.min(Math.max(0, newTop), maxHeight),
      left: Math.min(Math.max(0, newLeft), maxWidth),
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <Shape
      ref={shapeRef}
      onMouseDown={handleMouseDown}
      onMouseEnter={() => {
        cursorChangeHandler("shapeHovered");
      }}
      onMouseLeave={() => {
        cursorChangeHandler("");
      }}
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
    />
  );
};

export default RandomShape;
