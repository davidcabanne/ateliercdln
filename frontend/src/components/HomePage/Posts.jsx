import React from "react";
import styled from "styled-components";
import * as _var from "../../styles/variables";

import Post from "@/components/HomePage/Post";

const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 0px ${_var.spaceL};

  @media ${_var.device.laptop_max} {
    padding: 0px ${_var.spaceM};
  }

  @media ${_var.device.mobileL_max} {
    padding: 0px ${_var.spaceS};
  }
`;

const Grid = styled.section`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: ${_var.spaceL};

  @media ${_var.device.tablet_max} {
    gap: ${_var.spaceM};
    margin-bottom: ${_var.spaceL};
  }

  @media ${_var.device.mobileL_max} {
    gap: ${_var.spaceS};
    margin-bottom: ${_var.spaceM};
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
