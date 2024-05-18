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

  @media ${_var.device.laptop_min} {
    grid-row: ${(props) => (props.$gridItemSize === "large" ? "span 2" : "")};
    grid-column: ${(props) =>
      props.$gridItemSize === "large" ? "span 2" : ""};
    grid-row: ${(props) => (props.$gridItemSize === "medium" ? "span 2" : "")};

    &:first-child {
    }
    &:nth-child(2) {
    }
    &:nth-child(3) {
      height: calc(100% + 256px);
    }
    &:nth-child(4) {
    }
    &:nth-child(5) {
      transform: translateY(256px);
    }
    &:nth-child(6) {
    }
    &:nth-child(7) {
      transform: translateY(256px);
    }
    &:nth-child(8) {
      transform: translateY(256px);
    }
    &:nth-child(9) {
      height: calc(100% + 256px);
    }
    &:nth-child(10) {
      transform: translateY(256px);
    }
    &:nth-child(11) {
      transform: translateY(256px);
    }
    &:nth-child(12) {
      transform: translateY(256px);
    }
    &:nth-child(13) {
      transform: translateY(256px);
    }
  }
`;

const Title = styled.h4`
  font-size: clamp(8px, 1.15vw, 24px);
  font-weight: 400;
  text-transform: uppercase;

  @media ${_var.device.laptop_max} {
    font-size: clamp(8px, 3.5vw, 24px);
  }

  @media ${_var.device.tablet_max} {
    font-size: clamp(8px, 3.25vw, 24px);
  }
`;

const Post = ({ post }) => {
  const { id, title, Image, gallery, gridItemSize } = post;
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.05,
  });

  return (
    <Container
      ref={containerRef}
      key={id}
      $gridItemSize={gridItemSize}
      className={isVisible ? "active" : ""}
    >
      <Placeholder
        image={Image}
        gallery={gallery}
        alt={title}
        gridItemSize={gridItemSize}
      />
      <Title>{title}</Title>
    </Container>
  );
};

export default Post;
