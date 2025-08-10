import React, { useRef, useLayoutEffect } from "react";
import styled, { keyframes } from "styled-components";

import * as _var from "../../styles/variables";

const translation = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(var(--travel, 0px)); }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: ${_var.spaceS};

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

const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${_var.spaceM};

  @media ${_var.device.laptop_max} {
    gap: ${_var.spaceS};
  }

  @media ${_var.device.tablet_max} {
    gap: ${_var.spaceS};
  }
`;

const Title = styled.h1`
  font-weight: 700;
  font-style: Bold;
  /* font-size: 80px; */
  font-size: clamp(40px, 7vw, 80px);
`;

const SubTitle = styled.h2`
  font-weight: 400;
  font-style: Regular;
  /* font-size: 40px; */
  font-size: clamp(24px, 3.5vw, 40px);
`;

const City = styled.h3`
  font-weight: 400;
  font-style: Italic;
  /* font-size: 24px; */
  font-size: clamp(16px, 3.25vw, 24px);
`;

const RightPanel = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: ${_var.spaceM};
  list-style: none;

  @media ${_var.device.laptop_max} {
    gap: ${_var.spaceS};
  }

  @media ${_var.device.tablet_max} {
    width: 100%;
    gap: ${_var.spaceXS};
    align-items: flex-start;
    flex-wrap: wrap;
  }

  & li:nth-child(1) {
    animation-delay: 0ms;
  }

  & li:nth-child(2) {
    animation-delay: -5000ms;
  }

  & li:nth-child(3) {
    animation-delay: -10000ms;
  }
`;

const Tag = styled.li`
  width: max-content;
  font-weight: 400;
  font-size: 24px;
  padding: ${_var.spaceXS};
  border: 1.5px solid ${_var.primary_000};
  border-radius: ${_var.spaceXL};

  @media ${_var.device.tablet_max} {
    width: auto;
    display: inline-block;
    white-space: nowrap;
    font-size: clamp(16px, 3.25vw, 24px);
    animation: ${translation} 10000ms infinite alternate linear;
    will-change: transform;
  }
  @media ${_var.device.mobileL_max} {
    font-size: clamp(8px, 3.25vw, 16px);
  }
`;

const PostTemplateHeader = ({ data }) => {
  const rightRef = useRef(null);
  const tagRefs = useRef([]);

  useLayoutEffect(() => {
    const right = rightRef.current;
    if (!right) return;

    const observers = [];

    const updateOne = (el) => {
      if (!el || !right) return;

      const dx = Math.max(0, right.clientWidth - el.offsetWidth);

      el.style.setProperty("--travel", `${dx}px`);
    };

    // Observe container + each tag so it adapts to resizes/content changes
    const containerRO = new ResizeObserver(() => {
      tagRefs.current.forEach(updateOne);
    });
    containerRO.observe(right);
    observers.push(containerRO);

    tagRefs.current.forEach((el) => {
      if (!el) return;

      // wait a tick so media queries/fonts apply before measuring
      requestAnimationFrame(() => updateOne(el));

      const ro = new ResizeObserver(() => updateOne(el));

      ro.observe(el);

      observers.push(ro);
    });

    return () => observers.forEach((ro) => ro.disconnect());
  }, [data.tags]);

  return (
    <Container>
      <LeftPanel>
        <Title>{data.title}</Title>
        <SubTitle>{data.subtitle}</SubTitle>
        <City>{data.city}</City>
      </LeftPanel>
      <RightPanel ref={rightRef}>
        {data.tags.map((tag, index) => (
          <Tag key={tag + index} ref={(el) => (tagRefs.current[index] = el)}>
            {tag}
          </Tag>
        ))}
      </RightPanel>
    </Container>
  );
};

export default PostTemplateHeader;
