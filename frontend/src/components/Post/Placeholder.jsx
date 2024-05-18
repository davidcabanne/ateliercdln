import React, { useRef } from "react";
import Image from "next/image";
import styled, { css } from "styled-components";
import * as _var from "../../styles/variables";

const getGridItemSizeStyles = (size) => {
  switch (size) {
    case "normal":
    case "large":
      return css`
        aspect-ratio: 16 / 9;
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

  @media ${_var.device.laptop_min} {
    ${(props) => getGridItemSizeStyles(props.$gridItemSize)}
  }

  @media ${_var.device.laptop_max} {
    ${(props) => getGridItemSizeStyles(props.$gridItemSize)}
  }
`;

const StyledImage = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Gallery = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  cursor: pointer;

  & img {
    opacity: 0;
  }
`;

const Placeholder = ({ image, gallery, alt, gridItemSize }) => {
  const galleryRef = useRef();

  return (
    <Container $gridItemSize={gridItemSize}>
      <StyledImage
        src={image.asset.url}
        alt={alt}
        fill
        sizes="(min-width: 600px) 50vw, 100vw"
        placeholder="blur"
        blurDataURL={image.asset.metadata.blurHash}
      />
      <Gallery ref={galleryRef}>
        {gallery?.map((image) => (
          <StyledImage
            key={image._id}
            src={image.url}
            alt={alt}
            fill
            sizes="(min-width: 600px) 50vw, 100vw"
            placeholder="blur"
            blurDataURL={image.metadata.blurHash}
          />
        ))}
      </Gallery>
    </Container>
  );
};

export default Placeholder;
