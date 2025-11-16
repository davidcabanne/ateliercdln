import React from "react";
import styled from "styled-components";
import * as _var from "../../../styles/variables";

import Post from "@/components/pages/Home/Post";

/**
 * Outer container for the `Home` posts list.
 *
 * - Handles horizontal padding across breakpoints
 * - Keeps the grid aligned with the rest of the layout
 */
const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 0px 120px;

  @media ${_var.device.laptop_max} {
    padding: 0px ${_var.spaceL};
  }

  @media ${_var.device.tablet_max} {
    padding: 0px ${_var.spaceM};
  }

  @media ${_var.device.mobileL_max} {
    padding: 0px ${_var.spaceS};
  }
`;

/**
 * Grid that holds all individual Post cards.
 *
 * - Single column on all breakpoints for now
 * - Vertical gap scales down on smaller screens
 */
const Grid = styled.section`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 120px;

  @media ${_var.device.laptop_max} {
    gap: ${_var.spaceL};
  }

  @media ${_var.device.tablet_max} {
    gap: ${_var.spaceM};
  }

  @media ${_var.device.mobileL_max} {
    gap: ${_var.spaceS};
  }
`;

/**
 * Posts
 *
 * Renders a list/grid of Post components.
 *
 * @param {Object} props
 * @param {Array}  [props.posts] - Array of post objects, each passed down to <Post />.
 *
 * Each post is expected to have a unique `id` used as React key.
 *
 * @returns {JSX.Element | null}
 */

const Posts = ({ posts }) => {
  if (!posts.length) return null;

  return (
    <Container>
      <Grid>
        {posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </Grid>
    </Container>
  );
};

export default Posts;
