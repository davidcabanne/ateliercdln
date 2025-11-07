import styled from "styled-components";
import Image from "next/image";

import * as _var from "../../styles/variables";

import PostTemplateHeader from "./PostTemplateHeader";

const Container = styled.div`
  position: relative;
  width: 100%;

  padding: 0px ${_var.spaceM};
  margin-top: ${_var.spaceXL};

  @media ${_var.device.laptop_max} {
    padding: 0px ${_var.spaceM};
    margin-top: ${_var.spaceL};
  }

  @media ${_var.device.tablet_max} {
    margin-bottom: ${_var.spaceL};
  }

  @media ${_var.device.mobileL_max} {
    padding: 0px ${_var.spaceS};
    margin-top: ${_var.spaceM};
    margin-bottom: ${_var.spaceM};
  }
`;

const Grid = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: ${_var.spaceS};
  margin-top: ${_var.spaceXL};

  @media ${_var.device.laptop_max} {
    margin-top: ${_var.spaceL};
  }

  @media ${_var.device.tablet_max} {
    margin-top: ${_var.spaceM};
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

  @media ${_var.device.tablet_max} {
    grid-template-columns: 1fr;
  }
`;

const PlaceholderFull = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  cursor: none;

  @media ${_var.device.tablet_max} {
    cursor: pointer !important;
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

const PlaceholderThird = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 10 / 15;
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
  /* font-size: 40px; */
  font-size: clamp(24px, 3.5vw, 40px);
  padding: ${_var.spaceL};

  @media ${_var.device.laptop_max} {
    padding: ${_var.spaceL};
  }

  @media ${_var.device.tablet_max} {
    font-size: clamp(16px, 3.5vw, 32px);
    line-height: 100%;
    padding: ${_var.spaceM};
  }

  @media ${_var.device.mobileL_max} {
    padding: ${_var.spaceS};
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
      <PostTemplateHeader
        data={{
          title: title,
          subtitle: subtitle,
          city: city,
          tags: tags,
        }}
      />
      <Grid>
        <PlaceholderFull>{handleRenderImages(gallery, 0)}</PlaceholderFull>
        <Description>{postDescription}</Description>
        <Row $gridTemplateColumns="1fr 1fr">
          <PlaceholderHalf>{handleRenderImages(gallery, 1)}</PlaceholderHalf>
          <PlaceholderHalf>{handleRenderImages(gallery, 2)}</PlaceholderHalf>
        </Row>
        <PlaceholderFull>{handleRenderImages(gallery, 3)}</PlaceholderFull>
        <Row $gridTemplateColumns="1fr 1fr 1fr">
          <PlaceholderThird>{handleRenderImages(gallery, 4)}</PlaceholderThird>
          <PlaceholderThird>{handleRenderImages(gallery, 5)}</PlaceholderThird>
          <PlaceholderThird>{handleRenderImages(gallery, 6)}</PlaceholderThird>
        </Row>
        <PlaceholderFull>{handleRenderImages(gallery, 7)}</PlaceholderFull>
      </Grid>
    </Container>
  );
};

export default PostTemplate;
