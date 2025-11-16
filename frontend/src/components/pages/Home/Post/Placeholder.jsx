import React, { useContext } from "react";
import Image from "next/image";
import styled from "styled-components";
import * as _var from "../../../../styles/variables";

import { MouseContext } from "@/context/mouseContext";

/** Hover zoom animation duration in ms */
const animationTiming = 500;

/**
 * Wrapper for the post preview image.
 *
 * - Uses a fixed aspect ratio (21:10)
 * - Overflow is hidden for hover zoom effect
 * - Custom mouse cursor is handled via MouseContext
 */
const Container = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 21 / 10;
  cursor: none;

  @media ${_var.device.tablet_max} {
    cursor: pointer !important;
  }

  &:hover :first-child {
    transform: scale(1.03);
  }
`;

/**
 * Next.js Image styled for:
 * - absolute fill
 * - object-fit cover
 * - smooth opacity + scale animation
 */
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

/**
 * Placeholder
 *
 * Displays a single preview image for a post on the homepage.
 * Includes:
 * - hover zoom animation
 * - custom cursor integration
 * - Next.js blur placeholder using Sanity’s LQIP
 *
 * @param {Object} props
 * @param {Object} props.mainImage - Sanity image object for this post.
 * @param {string} props.mainImage.url
 * @param {string} props.mainImage.alt
 * @param {Object} props.mainImage.metadata
 * @param {string} props.mainImage.metadata.lqip - Base64 LQIP for blur.
 *
 * @returns {JSX.Element}
 */
const Placeholder = ({ mainImage }) => {
  const { cursorChangeHandler } = useContext(MouseContext);

  // Reset the custom cursor when leaving the image
  const handleMouseLeave = () => {
    setTimeout(() => {}, animationTiming);
    cursorChangeHandler("");
  };

  return (
    <Container
      // Only show custom cursor on desktop
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
      />
    </Container>
  );
};

export default Placeholder;
