import client from "@/lib/sanityClient";

import Hero from "@/components/pages/Home/Hero";
import Posts from "@/components/pages/Home/Posts";
import EmailDesktop from "@/components/email/EmailDesktop";
// import EmailMobile from ""@/components/email/EmailMobile";
import Footer from "@/components/Layout/Footer";

export default function Home({ posts }) {
  return (
    <>
      <Hero />
      {/* <EmailMobile /> */}
      <Posts posts={posts} />
      <EmailDesktop />
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
