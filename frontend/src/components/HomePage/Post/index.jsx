import React from "react";
import Link from "next/link";
import styled from "styled-components";
import * as _var from "../../../styles/variables";

import useElementOnScreen from "@/hooks/useElementOnScreen";

import Placeholder from "./Placeholder";

const Container = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${_var.spaceS};
  opacity: 0;
  color: inherit;
  text-decoration: none;
  transform: translateY(16px);
  transition: 500ms ${_var.cubicBezier};
  transition-property: opacity, transform;

  &.active {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const Post = ({ post }) => {
  const { id, slug, landingPageGallery } = post;

  const mainImage = landingPageGallery[0];
  const hoverImage = landingPageGallery[1];

  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.15,
  });

  return (
    <Container
      href={`/post/${encodeURIComponent(slug.current)}`}
      ref={containerRef}
      key={id}
      className={isVisible ? "active" : ""}
    >
      <Placeholder mainImage={mainImage} hoverImage={hoverImage} />
    </Container>
  );
};

export default Post;
