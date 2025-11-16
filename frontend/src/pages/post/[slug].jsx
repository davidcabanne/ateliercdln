import groq from "groq";
import { useRouter } from "next/router";
import client from "@/lib/sanityClient";

import Project from "@/components/pages/Project";
import EmailDesktop from "@/components/email/EmailDesktop";
import Footer from "@/components/Layout/Footer";

/* ──────────────────────────────────────────────────────────────── */
/*  Page Component                                                  */
/* ──────────────────────────────────────────────────────────────── */

/**
 * Slug
 *
 * Dynamic route page responsible for rendering a single project/post.
 * Fetches Sanity data via `getStaticProps` and displays:
 *  - <Project /> component (full project content)
 *  - <EmailDesktop /> (newsletter signup)
 *  - <Footer />
 *
 * Behavior:
 *  - Handles Next.js fallback rendering for ISR (Incremental Static Regeneration)
 *  - Avoids rendering broken UI if data is not yet available
 *
 * @param {Object} props
 * @param {Object|null} props.post - Single post document returned by Sanity.
 */
const Slug = ({ post }) => {
  const router = useRouter();

  // If fallback page is being generated (ISR), do not render the UI yet.
  if (router.isFallback) {
    return null;
  }

  // If Sanity returns no post (404), avoid rendering broken content.
  if (!post) {
    return null;
  }

  return (
    <>
      <Project post={post} />
      <EmailDesktop />
      <Footer />
    </>
  );
};

/* ──────────────────────────────────────────────────────────────── */
/*  GROQ Query                                                      */
/* ──────────────────────────────────────────────────────────────── */

/**
 * GROQ query that fetches a single post based on its slug.
 *
 * It returns:
 *  - Basic fields: id, title, subtitle, city, tags, description, published date
 *  - Gallery:
 *      • alt text (from the image field)
 *      • asset id
 *      • URL
 *      • full metadata (including Sanity LQIP + BlurHash if available)
 *      • custom blurhash fallback for older plugins
 *  - slug
 */
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

/* ──────────────────────────────────────────────────────────────── */
/*  getStaticPaths                                                  */
/* ──────────────────────────────────────────────────────────────── */

/**
 * Generates all valid dynamic routes for posts at build time.
 *
 * - Fetches all slugs from Sanity
 * - Creates paths in the form `/post/[slug]`
 * - Enables fallback rendering for ISR
 */
export async function getStaticPaths() {
  // Convert ["slug1", "slug2"] → [{ params: { slug: "slug1" }}, ...]
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true, // Allow ISR to generate new pages on demand
  };
}

/* ──────────────────────────────────────────────────────────────── */
/*  getStaticProps                                                  */
/* ──────────────────────────────────────────────────────────────── */

/**
 * Fetches a single post based on route params.
 *
 * - Runs at build time for initial paths from getStaticPaths
 * - Runs again at runtime when fallback = true (ISR)
 * - Regenerates every 10 seconds thanks to `revalidate`
 *
 * @param {Object} context
 * @param {Object} context.params
 * @param {string} context.params.slug - Dynamic route segment
 */
export async function getStaticProps(context) {
  try {
    // Avoid undefined slug causing GROQ query errors
    const { slug = "" } = context.params;

    const post = await client.fetch(query, { slug });

    // Return 404 if the slug exists but no document is found
    if (!post) {
      return { notFound: true };
    }

    return {
      props: {
        post,
      },
      revalidate: 10, // ISR: regenerate page every 10 seconds when traffic occurs
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    return { notFound: true };
  }
}

export default Slug;
