import styled, { css } from "styled-components";
import Image from "next/image";

import * as _var from "../../../styles/variables";

import Header from "./ProjectHeader";

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

  & :nth-child(1) div {
    transform: translateX(32px);
  }
`;

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

const PlaceholderRegular = styled.div`
  position: relative;
  width: calc(100% - (120px * 2));
  justify-self: center;
  overflow: hidden;
  aspect-ratio: 21 / 10;
  cursor: none;

  @media ${_var.device.laptop_max} {
    width: calc(100% - (${_var.spaceL} * 2));
  }

  @media ${_var.device.tablet_max} {
    cursor: pointer !important;
    width: calc(100% - (${_var.spaceM} * 2));
  }

  @media ${_var.device.mobileL_max} {
    width: calc(100% - (${_var.spaceS} * 2));
  }
`;

const PlaceholderHalf = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  cursor: none;

  @media ${_var.device.tablet_max} {
    cursor: pointer !important;
  }
`;

const PlaceholderFull = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 21 / 10;
  cursor: none;

  @media ${_var.device.tablet_max} {
    cursor: pointer !important;
  }
`;

const StyledImage = styled(Image)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
  -webkit-user-select: none;
`;

const Description = styled.p`
  font-weight: 400;
  font-style: Regular;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0%;
  vertical-align: middle;
  font-size: clamp(16px, 3.5vw, 24px);
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

const handleRenderImages = (gallery, index) => {
  if (!Array.isArray(gallery) || !gallery[index]) {
    return null;
  }

  const image = gallery[index];
  const blurDataURL =
    image?.metadata?.blurHash ?? image?.metadata?.blurhash ?? undefined;

  return (
    <StyledImage
      src={image.url}
      alt={image.alt || ""}
      fill
      sizes="(min-width: 600px) 50vw, 100vw"
      placeholder={blurDataURL ? "blur" : "empty"}
      blurDataURL={blurDataURL}
    />
  );
};

const PostTemplate = ({ post }) => {
  if (!post) {
    return null;
  }

  const {
    title = "",
    subtitle = "",
    city = "",
    tags = [],
    gallery = [],
    postDescription = "",
  } = post ?? {};

  return (
    <Container>
      <Header
        data={{
          title: title,
          subtitle: subtitle,
          city: city,
          tags: tags,
        }}
      />
      <Grid>
        {/* IMAGE 1: REGULAR */}
        <PlaceholderRegular>
          {handleRenderImages(gallery, 0)}
        </PlaceholderRegular>

        {/* POST DESCRIPTION */}
        <Description>{postDescription}</Description>

        {/* IMAGE 2 & 3: ROWS */}
        <Row $gridTemplateColumns="1fr 1fr">
          <PlaceholderHalf>{handleRenderImages(gallery, 1)}</PlaceholderHalf>
          <PlaceholderHalf>{handleRenderImages(gallery, 2)}</PlaceholderHalf>
        </Row>

        {/* IMAGE 4: REGULAR */}
        <PlaceholderRegular>
          {handleRenderImages(gallery, 4)}
        </PlaceholderRegular>

        {/* IMAGE 5: FULL */}
        <PlaceholderFull>{handleRenderImages(gallery, 5)}</PlaceholderFull>

        {/* IMAGE 6: REGULAR */}
        <PlaceholderRegular>
          {handleRenderImages(gallery, 6)}
        </PlaceholderRegular>
      </Grid>
    </Container>
  );
};

export default PostTemplate;
