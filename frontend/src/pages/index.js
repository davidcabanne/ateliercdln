import client from "@/lib/sanityClient";

import Hero from "@/components/Hero";
import Posts from "@/components/Posts";
import Email from "@/components/Email";
import EmailMobile from "@/components/EmailMobile";
import Footer from "@/components/Layout/Footer";
import RandomShape from "@/components/RandomShape";

export default function Home({ posts }) {
  return (
    <>
      <Hero />
      <EmailMobile />
      <Posts posts={posts} />
      <Email />
      <Footer />
      <RandomShape />
      <RandomShape />
      <RandomShape />
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
