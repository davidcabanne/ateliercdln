import styled from "styled-components";
import * as _var from "../../../../styles/variables";

/**
 * Container for the skeleton state.
 *
 * - Fixed aspect ratio (16:10) to match the shape of a preview image
 * - Centers its content both horizontally and vertically
 * - Black background acts as a placeholder
 * - Cursor hidden on desktop, but becomes pointer on touch/tablet
 */
const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  cursor: none;
  background: black;

  @media ${_var.device.tablet_max} {
    cursor: pointer !important;
  }
`;

/**
 * Message displayed when a post preview cannot load.
 *
 * - Uses medium padding
 * - Muted primary color for subtle contrast
 */
const Span = styled.span`
  position: relative;
  color: ${_var.primary_070};
  text-align: center;
  padding: ${_var.spaceM};
`;

/**
 * Skeleton
 *
 * Fallback UI used when a post cannot load properly (e.g. missing image or slug).
 * This appears in place of the landingPageGallery preview.
 *
 * @returns {JSX.Element}
 */
const Skeleton = () => {
  return (
    <Container>
      <Span>
        The requested link is not available anymore, please try again later.
      </Span>
    </Container>
  );
};

export default Skeleton;
