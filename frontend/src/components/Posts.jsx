import React from "react";
import styled from "styled-components";
import * as _var from "../styles/variables";

import Post from "@/components/Post";

const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 0px ${_var.spaceM};
  margin-bottom: 256px;

  @media ${_var.device.laptop_max} {
    padding: 0px ${_var.spaceM};
    margin-bottom: 0px;
  }

  @media ${_var.device.tablet_max} {
    margin-bottom: 64px;
  }
  @media ${_var.device.mobileL_max} {
    padding: 0px ${_var.spaceS};
  }
`;

const Grid = styled.section`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 80px;

  @media ${_var.device.laptop_max} {
    grid-template-columns: 1fr;
    gap: ${_var.spaceL};
  }
`;

const Posts = ({ posts }) => {
  return (
    <Container>
      <Grid>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </Grid>
    </Container>
  );
};

export default Posts;
