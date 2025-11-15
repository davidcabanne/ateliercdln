import groq from "groq";
import { useRouter } from "next/router";
import client from "@/lib/sanityClient";

import Post from "@/components/pages/Home/Post";
import Email from "@/components/Email";
import Footer from "@/components/Layout/Footer";

const Slug = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return null;
  }

  if (!post) {
    return null;
  }

  return (
    <>
      <Post post={post} />
      <Email />
      <Footer />
    </>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
 'id': _id,
  title,
  subtitle,
  city,
  tags,
  postDescription,
  publishedAt,
  // Gallery: alt from the image field, everything else from the asset
  gallery[]{
  alt,
  crop,
  hotspot,
  "id": asset->_id,
  "url": asset->url,
  "metadata": asset->metadata,
  // If you specifically want just the blurhash (plugin-dependent):
  "blurhash": coalesce(asset->metadata.blurHash, asset->metadata.blurhash)
  },
  slug
}`;

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  try {
    const { slug = "" } = context.params;
    const post = await client.fetch(query, { slug });

    if (!post) {
      return { notFound: true };
    }

    return {
      props: {
        post,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.log(error);
  }
}
export default Slug;
