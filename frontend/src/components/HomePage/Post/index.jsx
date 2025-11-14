import React from "react";
import Link from "next/link";
import styled from "styled-components";
import * as _var from "../../../styles/variables";

import useElementOnScreen from "@/hooks/useElementOnScreen";

import Placeholder from "./Placeholder";
import Skeleton from "./Skeleton";

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

  const isPostValid = id && slug?.current && landingPageGallery.length > 0;

  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.15,
  });

  return (
    <Container
      href={isPostValid ? `/post/${encodeURIComponent(slug.current)}` : ""}
      ref={containerRef}
      key={id}
      className={isVisible ? "active" : ""}
    >
      {isPostValid ? (
        <Placeholder mainImage={landingPageGallery?.[0] || null} />
      ) : (
        <Skeleton>Empty</Skeleton>
      )}
    </Container>
  );
};

export default Post;
