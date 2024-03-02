import styled from "styled-components";

import client from "@/lib/sanityClient";

import Hero from "@/components/Hero";
import Placeholder from "@/components/Placeholder";
import * as _var from "../styles/variables";

const Posts = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${_var.spaceL};
  padding: 0px ${_var.spaceL};

  @media ${_var.device.tablet_max} {
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

  return (
    <>
      <Hero />
      <Posts>{handleRenderPosts(posts)}</Posts>
    </>
  );
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
