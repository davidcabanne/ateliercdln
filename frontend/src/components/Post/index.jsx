import React from "react";

import styled from "styled-components";
import * as _var from "../../styles/variables";

import useElementOnScreen from "@/hooks/useElementOnScreen";

import Placeholder from "./Placeholder";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${_var.spaceS};
  opacity: 0;
  transform: translateY(16px);
  transition: 500ms ${_var.cubicBezier};
  transition-property: opacity, transform;

  &.active {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const Title = styled.h4`
  font-size: clamp(8px, 1.15vw, 24px);
  font-weight: 400;
  text-transform: uppercase;

  &::selection {
    color: white;
    background: black;
  }

  @media ${_var.device.laptop_max} {
    font-size: clamp(8px, 3.5vw, 24px);
  }

  @media ${_var.device.tablet_max} {
    font-size: clamp(8px, 3.25vw, 24px);
  }
`;

const Post = ({ post }) => {
  const { id, title, Image, gallery, gridItemSize } = post;

  const mainImage = Image.asset;
  const hoverImage = gallery[0];

  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.15,
  });

  return (
    <Container
      ref={containerRef}
      key={id}
      $gridItemSize={gridItemSize}
      className={isVisible ? "active" : ""}
    >
      <Placeholder mainImage={mainImage} hoverImage={hoverImage} alt={title} />
      <Title>{title}</Title>
    </Container>
  );
};

export default Post;
