import React from "react";
import styled from "styled-components";
import * as _var from "../styles/variables";

import Post from "@/components/Post";

const Grid = styled.section`
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

  @media ${_var.device.tablet_max} {
    margin-bottom: 64px;
  }
`;

const Posts = ({ posts }) => {
  return (
    <Grid>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </Grid>
  );
};

export default Posts;
