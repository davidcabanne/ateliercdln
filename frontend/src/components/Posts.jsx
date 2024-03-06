import styled from "styled-components";
import Placeholder from "@/components/Placeholder";

import * as _var from "../styles/variables";

const Container = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${_var.spaceL};
  padding: 0px ${_var.spaceL};

  @media ${_var.device.laptop_min} {
    padding-top: 128px;
  }

  @media ${_var.device.laptop_max} {
    grid-template-columns: 1fr;
    gap: ${_var.spaceL};
    padding: 0px ${_var.spaceM};
  }
`;

const Post = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${_var.spaceS};

  @media ${_var.device.laptop_min} {
    grid-row: ${(props) => (props.$gridItemSize === "large" ? "span 2" : "")};
    grid-column: ${(props) =>
      props.$gridItemSize === "large" ? "span 2" : ""};
    grid-row: ${(props) => (props.$gridItemSize === "medium" ? "span 2" : "")};

    &:first-child {
      transform: translateY(-128px);
    }
    &:nth-child(3) {
      transform: translateY(-128px);
    }
    &:nth-child(5) {
      transform: translateY(-128px);
    }
  }
`;

const Title = styled.h4`
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;

  @media ${_var.device.tablet_max} {
    font-size: 18px;
  }
`;

const Posts = ({ posts }) => {
  return (
    <Container>
      {posts.map((post) => {
        const { id, title, Image, gallery, gridItemSize } = post;

        return (
          <Post key={id} $gridItemSize={gridItemSize}>
            <Placeholder image={Image} gallery={gallery} alt={title} />
            <Title>{title}</Title>
          </Post>
        );
      })}
    </Container>
  );
};

export default Posts;
