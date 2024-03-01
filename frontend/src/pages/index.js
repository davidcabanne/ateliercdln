import styled from "styled-components";

import client from "@/lib/sanityClient";

import Layout from "@/components/Layout";
import Placeholder from "@/components/Placeholder";
import * as _var from "../styles/variables";

const Container = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${_var.spaceL};
  padding: ${_var.spaceL};
`;

const Post = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${_var.spaceS};
`;

const Title = styled.h4`
  text-transform: uppercase;
  font-weight: 400;
`;

export default function Home({ posts }) {
  const handleRenderPosts = (posts) => {
    return posts.map((post) => {
      const { id, title, imageUrl } = post;
      return (
        <Post key={id}>
          <Placeholder url={imageUrl} alt={title} />
          <Title>{title}</Title>
        </Post>
      );
    });
  };

  return <Container>{handleRenderPosts(posts)}</Container>;
}

export async function getStaticProps() {
  const query = `*[_type == "post"]{
    'id': _id,
    title,
    "imageUrl": Image.asset._ref
  }`;
  const posts = await client.fetch(query);
  return {
    props: {
      posts,
    },
  };
}
