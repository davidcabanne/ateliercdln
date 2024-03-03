import React, { useState, useRef } from "react";
import styled from "styled-components";
import Image from "next/image";
import * as _var from "../styles/variables";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  aspect-ratio: 16 / 9;
  border-radius: clamp(16px, 2vw, 32px);
  overflow: hidden;
`;

const Gallery = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  cursor: pointer;

  & div {
    position: relative;
    height: 100%;
    opacity: 0;
    z-index: 10;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;

    &:hover {
      opacity: 1;
    }
  }

  & img {
    opacity: 0;
    transform: translateX(-8px);
    transition: 175ms ${_var.cubicBezier};
    transition-property: opacity, transform;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;

    &.active {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;

const Placeholder = ({ image, gallery, alt }) => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const galleryRef = useRef();

  const handleTouchMove = (event) => {
    const touchLocation = event.touches[0];
    const galleryBounds = galleryRef.current.getBoundingClientRect();
    const touchX = touchLocation.clientX - galleryBounds.left;
    const eachItemWidth = galleryBounds.width / gallery.length;

    const newIndex = Math.floor(touchX / eachItemWidth);
    if (newIndex !== hoverIndex && newIndex >= 0 && newIndex < gallery.length) {
      setHoverIndex(newIndex);
    }
  };

  return (
    <Container>
      <Image
        src={image.asset.url}
        alt={alt}
        fill
        sizes="(min-width: 600px) 50vw, 100vw"
        style={{ objectFit: "cover" }}
        placeholder="blur"
        blurDataURL={image.asset.metadata.blurHash}
      />
      <Gallery ref={galleryRef}>
        {gallery?.map((image, index) => (
          <React.Fragment key={image._id}>
            <div
              style={{
                width: `calc(100% / ${gallery.length})`,
              }}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              onTouchStart={() => setHoverIndex(index)}
              onTouchMove={handleTouchMove}
              onTouchEnd={() => setHoverIndex(null)}
            ></div>
            <Image
              src={image.url}
              alt={alt}
              fill
              sizes="(min-width: 600px) 50vw, 100vw"
              style={{ objectFit: "cover" }}
              placeholder="blur"
              blurDataURL={image.metadata.blurHash}
              className={index === hoverIndex ? "active" : ""}
            />
          </React.Fragment>
        ))}
      </Gallery>
    </Container>
  );
};

export default Placeholder;
