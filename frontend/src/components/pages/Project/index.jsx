import styled, { css } from "styled-components";
import Image from "next/image";
import * as _var from "../../../styles/variables";

import useElementOnScreen from "@/hooks/useElementOnScreen";

import Header from "./ProjectHeader";

/* ──────────────────────────────────────────────────────────────── */
/*  Shared Horizontal Padding                                       */
/* ──────────────────────────────────────────────────────────────── */

/**
 * Shared horizontal padding used across rows and text blocks.
 * Ensures consistent alignment with the header and overall grid,
 * adapting responsively to each breakpoint.
 */
const PADDING = css`
  padding: 0 120px;

  @media ${_var.device.laptop_max} {
    padding: 0 ${_var.spaceL};
  }

  @media ${_var.device.tablet_max} {
    padding: 0 ${_var.spaceM};
  }

  @media ${_var.device.mobileL_max} {
    padding: 0 ${_var.spaceS};
  }
`;

/* ──────────────────────────────────────────────────────────────── */
/*  Page-Level Containers                                           */
/* ──────────────────────────────────────────────────────────────── */

/**
 * Outer wrapper for the entire project page.
 * Adds top margin depending on header size and viewport.
 */
const Container = styled.div`
  position: relative;
  width: 100%;
  margin-top: ${_var.spaceXL};

  @media ${_var.device.laptop_max} {
    margin-top: ${_var.spaceL};
  }

  @media ${_var.device.mobileL_max} {
    margin-top: ${_var.spaceM};
  }
`;

/**
 * Vertical Grid layout stacking the different content sections:
 * - Hero image
 * - Description text
 * - Image rows
 * - Additional full-width or regular images
 *
 * Uses large vertical spacing that decreases on smaller breakpoints.
 */
const Grid = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 120px;
  margin-top: ${_var.spaceML};

  @media ${_var.device.laptop_max} {
    gap: ${_var.spaceL};
  }

  @media ${_var.device.tablet_max} {
    gap: ${_var.spaceM};
  }

  @media ${_var.device.mobileL_max} {
    gap: ${_var.spaceS};
  }
`;

/**
 * A responsive grid row for two side-by-side images.
 * Automatically collapses to a single-column stack on smaller screens.
 */
const Row = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: ${(props) =>
    props.$gridTemplateColumns ? props.$gridTemplateColumns : "1fr"};
  gap: ${_var.spaceS};
  ${PADDING}

  @media ${_var.device.tablet_max} {
    grid-template-columns: 1fr;
  }
`;

/* ──────────────────────────────────────────────────────────────── */
/*  Image Placeholders (motion + aspect-ratio wrappers)             */
/* ──────────────────────────────────────────────────────────────── */

const fadeIn = css`
  opacity: 0;
  transform: translateY(16px);
  transition: 500ms ${_var.cubicBezier};
  transition-property: opacity, transform;

  &.active {
    opacity: 1;
    transform: translateY(0px);
  }
`;

/**
 * Base wrapper for all image placeholders.
 *
 * Shared:
 *  - positioning
 *  - overflow handling
 *  - custom cursor behavior
 *  - fade-in animation on scroll
 */
const PlaceholderBase = styled.div`
  position: relative;
  overflow: hidden;
  cursor: none;
  ${fadeIn}

  @media ${_var.device.tablet_max} {
    cursor: pointer !important;
  }
`;

/**
 * Wrapper for "regular" horizontal images.
 * Uses a fixed aspect ratio (21:10) and a reduced inner width
 * to align with the page padding.
 */
const PlaceholderRegular = styled(PlaceholderBase)`
  width: calc(100% - (120px * 2));
  justify-self: center;
  aspect-ratio: 21 / 10;

  @media ${_var.device.laptop_max} {
    width: calc(100% - (${_var.spaceL} * 2));
  }

  @media ${_var.device.tablet_max} {
    width: calc(100% - (${_var.spaceM} * 2));
  }

  @media ${_var.device.mobileL_max} {
    width: calc(100% - (${_var.spaceS} * 2));
  }
`;

/**
 * Wrapper for square images (1:1 aspect ratio),
 * typically used in the 2-column row.
 */
const PlaceholderHalf = styled(PlaceholderBase)`
  aspect-ratio: 1 / 1;
`;

/**
 * Wrapper for full-width horizontal images
 * that span the available container width.
 */
const PlaceholderFull = styled(PlaceholderBase)`
  aspect-ratio: 21 / 10;
`;

/* ──────────────────────────────────────────────────────────────── */
/*  Images                                                          */
/* ──────────────────────────────────────────────────────────────── */

/**
 * Shared Next.js Image component used inside each Placeholder wrapper.
 * Uses absolute positioning to fill its parent entirely.
 */
const StyledImage = styled(Image)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
  -webkit-user-select: none;
`;

/**
 * Styled paragraph for the long project description.
 * Uses responsive font sizes and layout-aligned horizontal padding.
 */
const Description = styled.p`
  font-weight: 400;
  font-style: Regular;
  font-size: clamp(16px, 3.5vw, 24px);
  line-height: 100%;
  letter-spacing: 0%;
  vertical-align: middle;
  padding: 0px calc(120px * 2);

  @media ${_var.device.laptop_max} {
    padding: 0px calc(${_var.spaceL} * 2);
  }

  @media ${_var.device.tablet_max} {
    font-size: clamp(8px, 3.5vw, 16px);
    padding: 0px ${_var.spaceM};
  }

  @media ${_var.device.mobileL_max} {
    padding: 0px ${_var.spaceS};
  }
`;

/* ──────────────────────────────────────────────────────────────── */
/*  PostImage helper                                                */
/* ──────────────────────────────────────────────────────────────── */

/**
 * Renders one image from the gallery inside the given placeholder wrapper.
 * Includes:
 *   - LQIP blur loading (from Sanity metadata)
 *   - IntersectionObserver fade-in animation
 *
 * @param {Object} props.gallery - Sanity gallery array
 * @param {number} props.index   - Index of the desired image
 * @param {React.FC} props.Wrapper - Styled wrapper component
 */
const PostImage = ({ gallery, index, Wrapper }) => {
  const image = gallery?.[index];
  if (!image) return null;

  const blurDataURL = image?.metadata?.lqip;

  /**
   * Intersection Observer hook: reveals component when in viewport.
   * threshold: 0.15 → activates when ~15% of the component is visible.
   */
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.15,
  });

  return (
    <Wrapper ref={containerRef} className={isVisible ? "active" : ""}>
      <StyledImage
        src={image.url}
        alt={image.alt || ""}
        fill
        sizes="(min-width: 600px) 50vw, 100vw"
        placeholder={blurDataURL ? "blur" : "empty"}
        blurDataURL={blurDataURL}
      />
    </Wrapper>
  );
};

/**
 * ProjectPost
 *
 * Responsible for rendering a full project page:
 *  - header (title, subtitle, city, tags)
 *  - a sequence of images with specific layout rules
 *  - the project textual description
 *
 * The image layout is currently:
 *  1. Main "regular" image
 *  2. Description text
 *  3. Row of two square images
 *  4. Regular image
 *  5. Full-width image
 *  6. Regular image
 *
 * @param {Object} props
 * @param {Object} props.post
 * @param {string} [props.post.title]
 * @param {string} [props.post.subtitle]
 * @param {string} [props.post.city]
 * @param {Array}  [props.post.tags]
 * @param {Array}  [props.post.gallery] - Image objects with `url`, `alt`, and `metadata.lqip`.
 * @param {string} [props.post.postDescription]
 *
 * @returns {JSX.Element | null} Renders the project view or null if post is missing.
 */
const ProjectPost = ({ post }) => {
  if (!post) return null;

  const {
    title = "",
    subtitle = "",
    city = "",
    tags = [],
    gallery = [],
    postDescription = "",
  } = post || {};

  return (
    <Container>
      <Header data={{ title, subtitle, city, tags }} />

      <Grid>
        {/* IMAGE 1: REGULAR */}
        <PostImage gallery={gallery} index={0} Wrapper={PlaceholderRegular} />

        {/* POST DESCRIPTION */}
        <Description>{postDescription}</Description>

        {/* IMAGE 2 & 3: ROWS */}
        <Row $gridTemplateColumns="1fr 1fr">
          <PostImage gallery={gallery} index={1} Wrapper={PlaceholderHalf} />
          <PostImage gallery={gallery} index={2} Wrapper={PlaceholderHalf} />
        </Row>

        {/* IMAGE 4: REGULAR */}
        <PostImage gallery={gallery} index={3} Wrapper={PlaceholderRegular} />

        {/* IMAGE 5: FULL */}
        <PostImage gallery={gallery} index={4} Wrapper={PlaceholderFull} />

        {/* IMAGE 6: REGULAR */}
        <PostImage gallery={gallery} index={5} Wrapper={PlaceholderRegular} />
      </Grid>
    </Container>
  );
};

export default ProjectPost;
