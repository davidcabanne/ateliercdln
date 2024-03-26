import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as _var from "../styles/variables";

import useWindowWidth from "@/hooks/useWindowWidth";
import useElementOnScreen from "@/hooks/useElementOnScreen";

import Placeholder from "@/components/Placeholder";
import CallToAction from "./CallToAction";

const Container = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 80px;
  padding: 0px ${_var.spaceM};
  margin-bottom: 256px;

  @media ${_var.device.laptop_min} {
    padding-top: 128px;
  }

  @media ${_var.device.laptop_max} {
    grid-template-columns: 1fr;
    gap: ${_var.spaceL};
    padding: 0px ${_var.spaceM};
    margin-bottom: 0px;
  }
`;

const Post = styled.div`
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
  /* font-size: 24px; */
  font-size: clamp(8px, 1.15vw, 24px);
  font-weight: 400;
  text-transform: uppercase;

  @media ${_var.device.laptop_max} {
    font-size: clamp(8px, 3.5vw, 24px);
  }

  @media ${_var.device.tablet_max} {
    /* font-size: 18px; */
    font-size: clamp(8px, 3.25vw, 24px);
  }
`;

const PostWrapper = ({ post }) => {
  const { id, title, Image, gallery, gridItemSize } = post;
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.05,
  });

  return (
    <Post
      ref={containerRef}
      key={id}
      $gridItemSize={gridItemSize}
      className={isVisible ? "active" : ""}
    >
      <Placeholder image={Image} gallery={gallery} alt={title} />
      <Title>{title}</Title>
    </Post>
  );
};

const Posts = ({ posts }) => {
  const [activePosts, setActivePosts] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const innerWidth = useWindowWidth();

  useEffect(() => {
    const updatePostsDisplay = () => {
      if (innerWidth <= 768 && !activePosts) {
        setFilteredPosts(posts.slice(0, 7));
      }
      if (innerWidth <= 768 && !activePosts) {
        setFilteredPosts(posts.slice(0, 7));
      } else if (innerWidth > 768 || activePosts) {
        setFilteredPosts(posts);
      }
    };

    updatePostsDisplay();
  }, [innerWidth, activePosts, posts]);

  const handleRenderProjects = () => {
    setActivePosts(true);
    setFilteredPosts(posts);
  };

  return (
    <Container>
      {filteredPosts.map((post) => (
        <PostWrapper key={post.id} post={post} />
      ))}
      <CallToAction
        activePosts={activePosts}
        handleRenderProjects={handleRenderProjects}
      />
    </Container>
  );
};

export default Posts;
