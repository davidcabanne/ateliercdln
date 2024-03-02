import React, { useState } from "react";

import styled from "styled-components";
import Image from "next/image";

import * as _var from "../styles/variables";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  aspect-ratio: 16 / 9;
  border-radius: clamp(8px, 2vw, 32px);
  overflow: hidden;

  @media ${_var.device.tablet_max} {
    border-radius: ${_var.spaceXS};
  }
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

    &:hover {
      opacity: 1;
    }
  }

  & img {
    opacity: 0;
    transition: 75ms ${_var.cubicBezier};
    transition-property: opacity;

    &.active {
      opacity: 1;
    }
  }
`;

const Placeholder = ({ image, gallery, alt }) => {
  const [hoverIndex, setHoverIndex] = useState(null);

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
      <Gallery>
        {gallery.map((image, index) => {
          return (
            <React.Fragment key={image._id}>
              <div
                style={{ width: `calc(100% / ${gallery.length})` }}
                index={index}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              ></div>
              <Image
                index={index}
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
          );
        })}
      </Gallery>
    </Container>
  );
};

export default Placeholder;
