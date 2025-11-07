import React, { useState } from "react";
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

const CallToAction = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${_var.spaceM};

  & button {
    border: none;
    background: none;

    & :hover {
      cursor: pointer;
    }
  }
`;

const Posts = ({ posts }) => {
  const [displayedPosts, setDisplayedPosts] = useState(false);

  return (
    <Container>
      <Grid>
        {posts.map((post, index) => {
          if (!displayedPosts && index <= 4) {
            return <Post key={post.id} post={post} />;
          }
          if (displayedPosts) {
            return <Post key={post.id} post={post} />;
          }
        })}
        <CallToAction onClick={() => setDisplayedPosts(!displayedPosts)}>
          <button>
            {!displayedPosts ? "Voir plus de projets" : "Voir moins de projets"}
          </button>
        </CallToAction>
      </Grid>
    </Container>
  );
};

export default Posts;
