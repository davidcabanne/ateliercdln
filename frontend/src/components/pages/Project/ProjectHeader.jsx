import React from "react";
import styled, { css } from "styled-components";

import * as _var from "../../../styles/variables";

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

  & h1,
  h2,
  h3,
  p,
  li {
    line-height: 100%;
    text-transform: uppercase;
    vertical-align: middle;
    letter-spacing: 0%;
  }
`;

const Title = styled.h1`
  font-weight: 700;
  font-style: Bold;
  font-size: clamp(40px, 7vw, 56px);
  font-weight: 600;
  font-style: Semi Bold;
  line-height: 100%;
  letter-spacing: 0%;
  vertical-align: middle;

  @media ${_var.device.tablet_max} {
    font-size: clamp(32px, 7vw, 40px);
  }
  @media ${_var.device.mobileL_max} {
    font-size: clamp(24px, 7vw, 32px);
  }
`;

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

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: clamp(2px, 3vw, 8px);
`;

const Tag = styled.li`
  width: max-content;
  font-weight: 400;
  font-style: Italic;
  font-size: 24px;
  font-size: clamp(12px, 3.5vw, 20px);

  &::after {
    content: ".";
  }

  ${(props) =>
    props.$index &&
    css`
      &::after {
        content: ",";
      }
    `}

  @media ${_var.device.tablet_max} {
    font-size: clamp(8px, 3.5vw, 12px);
  }
`;

const Line = styled.span`
  position: relative;
  width: 100%;
  height: 1px;
  background: black;
  margin: 32px 0px;

  @media ${_var.device.tablet_max} {
    margin: clamp(8px, 3.5vw, 16px) 0px;
  }

  @media ${_var.device.mobileL_max} {
    margin: 4px 0px;
  }
`;

const PostTemplateHeader = ({ data }) => {
  return (
    <Container>
      <Title>{data.title}</Title>
      <SubTitle>{data.subtitle}</SubTitle>
      <Line />
      <Tags>
        {data.tags.map((tag, index) => (
          <Tag key={tag + index} $index={index < data.tags.length - 1}>
            {tag}
          </Tag>
        ))}
      </Tags>
    </Container>
  );
};

export default PostTemplateHeader;
