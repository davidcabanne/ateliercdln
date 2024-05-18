import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled, { css, keyframes } from "styled-components";
import * as _var from "../../styles/variables";

import useWindowWidth from "@/hooks/useWindowWidth";
import useElementOnScreen from "@/hooks/useElementOnScreen";

const animationTiming = 500;

const fadeOut = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

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
      `;
    default:
      return null;
  }
};

const Container = styled.div`
  position: relative;
  cursor: pointer;

  @media ${_var.device.laptop_min} {
    ${(props) => getGridItemSizeStyles(props.$gridItemSize)}
  }

  @media ${_var.device.laptop_max} {
    aspect-ratio: 16 / 10;
  }

  @media ${_var.device.tablet_min} {
    &:hover {
      & > div > img {
        animation: ${fadeOut} ${animationTiming}ms forwards;
      }
    }
  }
`;

const imageStyles = `
position: absolute;
width: 100%;
height: 100%;
object-fit: cover;
`;

const MainImage = styled(Image)`
  ${imageStyles}
  z-index: 0;
`;

const StyledImage = styled(Image)`
  ${imageStyles}
  transition: ${animationTiming}ms ${_var.cubicBezier};
  transition-property: opacity;
  opacity: ${(props) => (props.$isActive ? 1 : 0)};
`;

const Gallery = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  z-index: 1;
`;

const Placeholder = ({ image, gallery, alt, gridItemSize }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const innerWidth = useWindowWidth();
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px ",
    threshold: 1,
  });

  const combinedGallery = [
    ...gallery,
    {
      metadata: image.asset.metadata,
      _id: image.asset._id,
      url: image.asset.url,
    },
  ];

  useEffect(() => {
    if (innerWidth <= 768 && isVisible) {
      const timer = setTimeout(() => {
        setActiveIndex((prevIndex) => prevIndex + 1);
      }, animationTiming * 2);
      return () => clearTimeout(timer);
    }
    if (!isVisible) {
      setActiveIndex(0);
    }
  }, [activeIndex, combinedGallery.length, isVisible]);

  return (
    <Container ref={containerRef} $gridItemSize={gridItemSize}>
      <MainImage
        src={image.asset.url}
        alt={alt}
        fill
        sizes="(min-width: 600px) 50vw, 100vw"
        placeholder="blur"
        blurDataURL={image.asset.metadata.blurHash}
        $isActive={activeIndex === 0}
      />
      <Gallery>
        {combinedGallery?.map((image, index) => (
          <StyledImage
            key={image._id}
            src={image.url}
            alt={alt}
            fill
            sizes="(min-width: 600px) 50vw, 100vw"
            placeholder="blur"
            blurDataURL={image.metadata.blurHash}
            $isActive={activeIndex === index + 1}
            style={{
              animationDelay: `${index * (animationTiming * 2)}ms`,
            }}
            className={index === combinedGallery.length - 1 ? "last-image" : ""}
          />
        ))}
      </Gallery>
    </Container>
  );
};

export default Placeholder;
