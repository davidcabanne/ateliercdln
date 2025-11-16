import React from "react";
import styled from "styled-components";
import * as _var from "../../../styles/variables";

import Post from "@/components/pages/Home/Post";

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

const Posts = ({ posts }) => {
  console.log(posts)
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
