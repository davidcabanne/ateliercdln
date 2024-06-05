import React, { useState, useEffect, useContext, useCallback } from "react";
import Image from "next/image";
import styled, { css } from "styled-components";
import * as _var from "../../styles/variables";

import { MouseContext } from "@/context/mouseContext";
import useElementOnScreen from "@/hooks/useElementOnScreen";

const animationTiming = 500;
const extraPause = 1000;

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
        @media ${_var.device.mobileL_max} {
          height: calc((100vw - 32px) * 2);
          width: calc(100vw - 32px);
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

const handleTransition = (index, active, transitioningToFirst, length) => {
  if (active || transitioningToFirst) {
    return animationTiming;
  }
  return 0;
};

const handleAnimationDelay = (index, active, length, transitioningToFirst) => {
  if (active) {
    return index * (animationTiming + extraPause);
  }
  if (transitioningToFirst) {
    return 0;
  }
  return 0;
};

const StyledImage = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
  -webkit-user-select: none;
  opacity: ${(props) => (props.$active && !props.$isLast ? 0 : 1)};
  transition: ${(props) =>
      handleTransition(
        props.$index,
        props.$active,
        props.$transitioningToFirst,
        props.$length
      )}ms
    ${_var.cubicBezier};
  transition-delay: ${(props) =>
    handleAnimationDelay(
      props.$index,
      props.$active,
      props.$length,
      props.$transitioningToFirst
    )}ms;
  z-index: ${(props) => props.$zIndex};
`;

const Placeholder = ({ gallery, alt, gridItemSize }) => {
  const [active, setActive] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [transitioningToFirst, setTransitioningToFirst] = useState(false);

  const { cursorChangeHandler } = useContext(MouseContext);
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "-50% 0px",
    threshold: 0,
  });

  const startAnimation = useCallback(() => {
    setActive(false);
    setAnimationKey((prev) => prev + 1);
    setTimeout(() => {
      setActive(true);
    }, 1);
  }, []);

  useEffect(() => {
    let timer;
    if (active && (hovered || (window.innerWidth < 768 && isVisible))) {
      timer = setTimeout(() => {
        startAnimation();
      }, (animationTiming + extraPause) * gallery.length);
    }
    return () => clearTimeout(timer);
  }, [active, hovered, isVisible, startAnimation, gallery.length]);

  useEffect(() => {
    if (window.innerWidth < 768) {
      if (isVisible) {
        setActive(true);
      } else {
        setHovered(false);
        setActive(false);
        setTransitioningToFirst(true);
        setTimeout(() => {
          setAnimationKey(0);
          setTransitioningToFirst(false);
        }, animationTiming);
      }
    }
  }, [isVisible]);

  const handleMouseLeave = () => {
    setHovered(false);
    setActive(false);
    setTransitioningToFirst(true);
    setTimeout(() => {
      setAnimationKey(0);
      setTransitioningToFirst(false);
    }, animationTiming);
    cursorChangeHandler("");
  };

  return (
    <Container
      $gridItemSize={gridItemSize}
      ref={containerRef}
      onMouseEnter={() => {
        if (window.innerWidth >= 768) {
          setHovered(true);
          setActive(true);
          cursorChangeHandler("hovered");
        }
      }}
      onMouseLeave={handleMouseLeave}
    >
      {gallery.map((image, index) => {
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
            $isLast={index === gallery.length - 1}
            $zIndex={gallery.length - index}
            $length={gallery.length}
            $transitioningToFirst={transitioningToFirst}
          />
        );
      })}
    </Container>
  );
};

export default Placeholder;
