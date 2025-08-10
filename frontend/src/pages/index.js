import client from "@/lib/sanityClient";

import Hero from "@/components/HomePage/Hero";
import Posts from "@/components/HomePage/Posts";
import Email from "@/components/Email";
import EmailMobile from "@/components/EmailMobile";
import Footer from "@/components/Layout/Footer";

export default function Home({ posts }) {
  return (
    <>
      <Hero />
      <EmailMobile />
      <Posts posts={posts} />
      <Email />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const query = `
    *[_type == "post"] | order(publishedAt desc) {
      'id': _id,
      title,
      slug,
      postDescription,
      publishedAt,
      // Gallery: alt from the image field, everything else from the asset
      landingPageGallery[]{
        alt,
        crop,
        hotspot,
        "id": asset->_id,
        "url": asset->url,
        "metadata": asset->metadata,
        // If you specifically want just the blurhash (plugin-dependent):
        "blurhash": coalesce(asset->metadata.blurHash, asset->metadata.blurhash)
      }
    }
  `;

  const posts = await client.fetch(query);
  return { props: { posts }, revalidate: 10 };
}
