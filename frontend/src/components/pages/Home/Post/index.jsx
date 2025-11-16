import React from "react";
import Link from "next/link";
import styled from "styled-components";
import * as _var from "../../../../styles/variables";

import useElementOnScreen from "@/hooks/useElementOnScreen";

import Placeholder from "./Placeholder";
import Skeleton from "./Skeleton";

/**
 * Animated container for a single post preview.
 *
 * - Uses `Link` as wrapper so the entire block is clickable => Project post
 * - Starts invisible (opacity + downward translation)
 * - Activated when visible via IntersectionObserver
 */
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

/**
 * Post
 *
 * Renders a clickable preview for a post inside the homepage grid.
 * Animates into view when scrolled into viewport.
 *
 * @param {Object} props
 * @param {Object} props.post - Post data coming from Sanity.
 * @param {string} props.post.id
 * @param {Object} props.post.slug
 * @param {string} props.post.slug.current - Slug for the post URL.
 * @param {Array}  props.post.landingPageGallery - Images used for preview.
 *
 * @returns {JSX.Element}
 */
const Post = ({ post }) => {
  const { id, slug, landingPageGallery } = post;

  /**
   * A post is considered valid if:
   * - it has an ID
   * - it has a slug
   * - it has at least one image in the landing gallery
   */
  const isPostValid =
    Boolean(id) && Boolean(slug?.current) && landingPageGallery.length > 0;

  /**
   * Intersection Observer hook: reveals component when in viewport.
   * threshold: 0.15 → activates when ~15% of the component is visible.
   */
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.15,
  });

  return (
    <Container
      ref={containerRef}
      className={isVisible ? "active" : ""}
      href={isPostValid ? `/post/${encodeURIComponent(slug.current)}` : ""}
    >
      {isPostValid ? (
        <Placeholder mainImage={landingPageGallery[0]} />
      ) : (
        <Skeleton>Empty</Skeleton>
      )}
    </Container>
  );
};

export default Post;
