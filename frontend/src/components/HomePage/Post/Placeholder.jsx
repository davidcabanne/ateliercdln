import React, { useContext } from "react";
import Image from "next/image";
import styled from "styled-components";
import * as _var from "../../../styles/variables";

import { MouseContext } from "@/context/mouseContext";

const animationTiming = 500;

const Container = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  cursor: none;

  @media ${_var.device.tablet_max} {
    cursor: pointer !important;
  }

  &:hover :first-child {
    opacity: 0;
  }

  &:hover :nth-child(2) {
    transform: scale(1.03);
  }
`;

const StyledImage = styled(Image)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
  -webkit-user-select: none;
  transition: ${animationTiming}ms ${_var.cubicBezier};
  transition-property: opacity, transform;
  will-change: transform, opacity;
`;

const Placeholder = ({ mainImage, hoverImage }) => {
  const { cursorChangeHandler } = useContext(MouseContext);

  const handleMouseLeave = () => {
    setTimeout(() => {}, animationTiming);
    cursorChangeHandler("");
  };

  return (
    <Container
      onMouseEnter={() => {
        if (window.innerWidth >= 768) {
          cursorChangeHandler("hovered");
        }
      }}
      onMouseLeave={handleMouseLeave}
    >
      <StyledImage
        src={mainImage.url}
        alt={mainImage.alt}
        fill
        sizes="(min-width: 600px) 50vw, 100vw"
        placeholder="blur"
        blurDataURL={mainImage.metadata.blurHash}
        style={{ zIndex: 1 }}
      />
      <StyledImage
        src={hoverImage.url}
        alt={hoverImage.alt}
        fill
        sizes="(min-width: 600px) 50vw, 100vw"
        placeholder="blur"
        blurDataURL={hoverImage.metadata.blurHash}
        style={{ zIndex: 0 }}
      />
    </Container>
  );
};

export default Placeholder;
