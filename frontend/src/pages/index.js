import client from "@/lib/sanityClient";

import HeroAlt from "@/components/Hero/HeroAlt";
import Posts from "@/components/Posts";

export default function Home({ posts }) {

  return (
    <>
      <HeroAlt />
      <Posts posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const query = `
  *[_type == "post"] | order(publishedAt desc) {
    'id': _id,
    title,
    Image {
      asset->
    },
    gridItemSize,
    "gallery": gallery[].asset->{
      _id,
      url,
      metadata {
        blurHash,
      }
    },
    publishedAt
  }  
  `;
  const posts = await client.fetch(query);
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}
