import React from "react";
import Image from "next/image";
import styled, { css } from "styled-components";
import * as _var from "../../styles/variables";

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

const imageStyles = `
position: absolute;
width: 100%;
height: 100%;
object-fit: cover;
`;

const MainImage = styled(Image)`
  ${imageStyles}
  z-index: 30;
`;

const StyledImage = styled(Image)`
  ${imageStyles}
  transition-property: opacity;
`;

const Gallery = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  z-index: 1;
`;

const Container = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;

  ${(props) => getGridItemSizeStyles(props.$gridItemSize)}

  & img {
    transform: scale(1.005);
  }

  & ${Gallery} {
    & img {
      transition: ${animationTiming}ms ${_var.cubicBezier};
      transition-delay: 0ms;
      transition-property: opacity;
    }

    & img:nth-child(1) {
      z-index: 10;
    }

    & img:nth-child(2) {
      z-index: 9;
    }

    & img:nth-child(3) {
      z-index: 8;
    }

    & img:nth-child(4) {
      z-index: 7;
    }

    & img:nth-child(5) {
      z-index: 6;
    }

    & img:nth-child(6) {
      z-index: 5;
    }

    & img:nth-child(7) {
      z-index: 4;
    }

    & img:nth-child(8) {
      z-index: 3;
    }

    & img:nth-child(9) {
      z-index: 2;
    }

    & img:nth-child(10) {
      z-index: 1;
    }
    & img:last-child {
      z-index: -1;
    }
  }

  & ${MainImage} {
    opacity: 1;
    transition: 200ms ${_var.cubicBezier};
    transition-property: opacity;
  }

  &:hover {
    & ${MainImage} {
      opacity: 0;
      transition: ${animationTiming}ms ${_var.cubicBezier};
      transition-property: opacity;
    }

    & ${Gallery} {
      & img {
        opacity: 0;
        transition: ${animationTiming}ms ${_var.cubicBezier};
        transition-property: opacity;
      }
      & img:nth-child(1) {
        transition-delay: ${1 * animationTiming + animationTiming}ms;
      }

      & img:nth-child(2) {
        transition-delay: ${2 * animationTiming + animationTiming * 2}ms;
      }

      & img:nth-child(3) {
        transition-delay: ${3 * animationTiming + animationTiming * 3}ms;
      }

      & img:nth-child(4) {
        transition-delay: ${4 * animationTiming + animationTiming * 4}ms;
      }

      & img:nth-child(5) {
        transition-delay: ${5 * animationTiming + animationTiming * 5}ms;
      }

      & img:nth-child(6) {
        transition-delay: ${6 * animationTiming + animationTiming * 6}ms;
      }

      & img:nth-child(7) {
        transition-delay: ${7 * animationTiming + animationTiming * 7}ms;
      }

      & img:nth-child(8) {
        transition-delay: ${8 * animationTiming + animationTiming * 8}ms;
      }

      & img:nth-child(9) {
        transition-delay: ${9 * animationTiming + animationTiming * 9}ms;
      }

      & img:nth-child(10) {
        transition-delay: ${10 * animationTiming + animationTiming * 10}ms;
      }

      & img:last-child {
        opacity: 1;
        z-index: -1;
      }
    }
  }
`;

const Placeholder = ({ image, gallery, alt, gridItemSize }) => {
  const combinedGallery = [
    ...gallery,
    {
      metadata: image.asset.metadata,
      _id: image.asset._id,
      url: image.asset.url,
    },
  ];

  return (
    <Container $gridItemSize={gridItemSize}>
      <MainImage
        src={image.asset.url}
        alt={alt}
        fill
        sizes="(min-width: 600px) 50vw, 100vw"
        placeholder="blur"
        blurDataURL={image.asset.metadata.blurHash}
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
            // style={{
            //   transitionDelay: `${
            //     animationTiming + index * (animationTiming * 2)
            //   }ms`,
            // }}
          />
        ))}
      </Gallery>
    </Container>
  );
};

export default Placeholder;
