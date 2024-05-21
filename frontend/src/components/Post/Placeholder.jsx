import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import styled, { css } from "styled-components";
import * as _var from "../../styles/variables";

import { MouseContext } from "@/context/mouseContext";

const animationTiming = 500;

const getGridItemSizeStyles = (size) => {
  switch (size) {
    case "normal":
    case "large":
      return css`
        aspect-ratio: 16 / 10;
      `;
    case "medium":
      return css`
        height: 100%;

        @media ${_var.device.laptop_max} {
          height: calc((100vw - 64px) * 2);
          width: calc(100vw - 64px);
        }
      `;
    default:
      return null;
  }
};

const Container = styled.div`
  position: relative;
  overflow: hidden;
  ${(props) => getGridItemSizeStyles(props.$gridItemSize)}

  cursor: none;
  @media ${_var.device.tablet_max} {
    cursor: pointer !important;
  }
`;

const handleTransition = (index, active) => {
  if (active) {
    return animationTiming;
  }
  if (!active && index === 0) {
    return animationTiming;
  }
  if (!active && index > 0) {
    return 0;
  }
};

const handleAnimationDelay = (index, active) => {
  if (active && index === 0) {
    return 0;
  }
  if (active && index === 1) {
    return index * animationTiming * 2;
  }
  if (active && index > 1) {
    return index * animationTiming + index * animationTiming;
  }

  if (!active && index > 0) {
    return animationTiming;
  }
};

const StyledImage = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${(props) => (props.$active && !props.$isLast ? 0 : 1)};
  transition: ${(props) => handleTransition(props.$index, props.$active)}ms
    ${_var.cubicBezier};
  transition-delay: ${(props) =>
    handleAnimationDelay(props.$index, props.$active)}ms;
  z-index: ${(props) => props.$zIndex};
`;

const Placeholder = ({ image, gallery, alt, gridItemSize }) => {
  const [active, setActive] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  const combinedGallery = [
    {
      metadata: image.asset.metadata,
      _id: `${image.asset._id}copy_0`,
      url: image.asset.url,
    },
    ...gallery,
    {
      metadata: image.asset.metadata,
      _id: `${image.asset._id}copy_1`,
      url: image.asset.url,
    },
  ];

  const handleStartAnimation = () => {
    setActive(false);
    setAnimationKey((prev) => prev + 1);
    setTimeout(() => {
      setActive(true);
    }, 1);
  };

  useEffect(() => {
    if (active) {
      const timer = setTimeout(() => {
        setActive(false);
      }, animationTiming * combinedGallery.length + animationTiming);
      return () => clearTimeout(timer);
    }
  }, [active, combinedGallery.length]);

  return (
    <Container
      $gridItemSize={gridItemSize}
      onMouseEnter={() => {
        setActive(true), cursorChangeHandler("hovered");
      }}
      onMouseLeave={() => {
        setActive(false), cursorChangeHandler("");
      }}
      onClick={() => handleStartAnimation()}
    >
      {combinedGallery?.map((image, index) => {
        return (
          <StyledImage
            key={`${image._id}_${animationKey}`}
            src={image.url}
            alt={alt}
            fill
            sizes="(min-width: 600px) 50vw, 100vw"
            placeholder="blur"
            blurDataURL={image.metadata.blurHash}
            $index={index}
            $active={active}
            $isLast={index === combinedGallery.length - 1}
            $zIndex={combinedGallery.length - index}
          />
        );
      })}
    </Container>
  );
};

export default Placeholder;
