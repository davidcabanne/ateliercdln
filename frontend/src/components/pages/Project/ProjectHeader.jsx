import React from "react";
import styled, { css } from "styled-components";

import * as _var from "../../../styles/variables";

/**
 * Container for the project post header section.
 *
 * - Handles horizontal padding across breakpoints
 * - Stacks title, subtitle, divider line and tags vertically
 * - Normalizes typographic settings for basic text elements inside
 */
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${_var.spaceS};
  padding: 0px 120px;

  @media ${_var.device.laptop_max} {
    padding: 0px ${_var.spaceL};
  }

  @media ${_var.device.tablet_max} {
    padding: 0px ${_var.spaceM};
  }

  @media ${_var.device.mobileL_max} {
    padding: 0px ${_var.spaceS};
  }

  /* Apply consistent text styling only to elements inside this container */
  & h1,
  & h2,
  & h3,
  & p,
  & li {
    line-height: 100%;
    vertical-align: middle;
    letter-spacing: 0%;
  }
`;

/**
 * Main post title.
 *
 * - Uses a responsive clamp for font size
 * - Slightly lighter weight than a full bold for a more refined look
 */
const Title = styled.h1`
  font-weight: 600;
  font-style: Semi Bold;
  font-size: clamp(40px, 7vw, 56px);

  @media ${_var.device.tablet_max} {
    font-size: clamp(32px, 7vw, 40px);
  }
  @media ${_var.device.mobileL_max} {
    font-size: clamp(24px, 7vw, 32px);
  }
`;

/**
 * Subtitle / secondary line below the main title.
 */
const SubTitle = styled.h2`
  font-weight: 400;
  font-style: Regular;
  font-size: clamp(16px, 3.5vw, 24px);

  @media ${_var.device.tablet_max} {
    font-size: clamp(16px, 7vw, 24px);
  }
  @media ${_var.device.mobileL_max} {
    font-size: clamp(12px, 7vw, 16px);
  }
`;

/**
 * Container for the tag list.
 * - Flex row with wrapping and small responsive gaps.
 */
const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: clamp(2px, 3vw, 8px);
`;

/**
 * Single tag item.
 *
 * Adds a comma after the tag when `$isNotLast` is true,
 * otherwise uses a final dot for the last tag.
 */
const Tag = styled.li`
  width: max-content;
  font-weight: 400;
  font-style: Italic;
  font-size: 24px;
  font-size: clamp(12px, 3.5vw, 20px);
  text-transform: capitalize;

  &::after {
    content: ".";
  }

  ${(props) =>
    props.$isNotLast &&
    css`
      &::after {
        content: ",";
      }
    `}

  @media ${_var.device.tablet_max} {
    font-size: clamp(8px, 3.5vw, 12px);
  }
`;

/**
 * Thin horizontal separator line between subtitle and tags.
 */
const Line = styled.span`
  position: relative;
  width: 100%;
  height: 1px;
  background: black;
  opacity: 0.12;
  margin: 32px 0px;

  @media ${_var.device.tablet_max} {
    margin: clamp(8px, 3.5vw, 16px) 0px;
  }

  @media ${_var.device.mobileL_max} {
    margin: 4px 0px;
  }
`;

/**
 * PostTemplateHeader
 *
 * Renders the header section for a post, including:
 *  - title
 *  - subtitle
 *  - divider line
 *  - list of tags
 *
 * @param {Object} props
 * @param {Object} props.data
 * @param {string} [props.data.title]    - Main title of the post.
 * @param {string} [props.data.subtitle] - Subtitle / short description.
 * @param {Array}  [props.data.tags]     - List of tag strings.
 *
 * @returns {JSX.Element | null}
 */
const PostTemplateHeader = ({ data }) => {
  if (!data) return null;

  const { title = "", subtitle = "", tags = [] } = data;

  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <Line />
      <Tags>
        {tags.map((tag, index) => {
          const isNotLast = index < tags.length - 1;

          return (
            <Tag key={`${tag}-${index}`} $isNotLast={isNotLast}>
              {String(tag).toLowerCase()}
            </Tag>
          );
        })}
      </Tags>
    </Container>
  );
};

export default PostTemplateHeader;
