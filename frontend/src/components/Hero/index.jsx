import React, { useEffect, useRef } from "react";

import styled from "styled-components";
import * as _var from "@/styles/variables";

import ShapeIcon from "../Icons/ShapeIcon";

import useWindowWidth from "@/hooks/useWindowWidth";

const Container = styled.section`
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: ${_var.spaceML};
  padding: 80px ${_var.spaceM};
  overflow: hidden;

  @media ${_var.device.tablet_max} {
    padding: 64px ${_var.spaceM};
  }
`;

const Panel = styled.div`
  display: flex;
  justify-content: ${(props) => props.$justifycontent};

  & div {
    width: min-content;
    display: flex;
    align-items: center;
    gap: ${_var.spaceM};
  }

  & h1 {
    white-space: nowrap;
  }
`;

const Hero = () => {
  const firstPanelRef = useRef(null);
  const secondPanelRef = useRef(null);
  const thirdPanelRef = useRef(null);

  const innerWidth = useWindowWidth();

  const handlePanelWidth = (ref) => {
    const panelWidth = ref.current.getBoundingClientRect().width;
    const contentWidth = ref.current.children[0].getBoundingClientRect().width;
    const options = {
      panelWidth: panelWidth,
      contentWidth: contentWidth,
      totalWidth: panelWidth - contentWidth,
    };
    return options;
  };

  useEffect(() => {
    if (firstPanelRef?.current) {
      const { panelWidth, contentWidth, totalWidth } =
        handlePanelWidth(firstPanelRef);

      if (totalWidth >= 0) {
        firstPanelRef.current.animate(
          [
            { transform: `translateX(0px)` },
            {
              transform: `translateX(${totalWidth}px)`,
            },
          ],
          {
            fill: "forwards",
            easing: "linear",
            direction: "alternate",
            duration: 10000,
            iterations: Infinity,
          }
        );
      }
      if (totalWidth < 0) {
        firstPanelRef.current.animate(
          [
            { transform: `translateX(0px)` },
            {
              transform: `translateX(-${contentWidth - (innerWidth - 64)}px)`,
            },
          ],
          {
            fill: "forwards",
            easing: "linear",
            direction: "alternate",
            duration: 10000,
            iterations: Infinity,
          }
        );
      }
    }
    if (secondPanelRef?.current) {
      const { panelWidth, contentWidth, totalWidth } =
        handlePanelWidth(secondPanelRef);

      if (totalWidth >= 0) {
        secondPanelRef.current.animate(
          [
            { transform: `translateX(0px)` },
            {
              transform: `translateX(-${totalWidth}px)`,
            },
          ],
          {
            fill: "forwards",
            easing: "linear",
            direction: "alternate",
            duration: 10000,
            iterations: Infinity,
            delay: 300,
          }
        );
      }
      if (totalWidth < 0) {
        secondPanelRef.current.animate(
          [
            { transform: `translateX(0px)` },
            {
              transform: `translateX(${contentWidth - (innerWidth - 64)}px)`,
            },
          ],
          {
            fill: "forwards",
            easing: "linear",
            direction: "alternate",
            duration: 10000,
            iterations: Infinity,
            delay: 300,
          }
        );
      }
    }
    if (thirdPanelRef?.current) {
      const { panelWidth, contentWidth, totalWidth } =
        handlePanelWidth(thirdPanelRef);

      if (totalWidth >= 0) {
        thirdPanelRef.current.animate(
          [
            { transform: `translateX(0px)` },
            {
              transform: `translateX(${totalWidth}px)`,
            },
          ],
          {
            fill: "forwards",
            easing: "linear",
            direction: "alternate",
            duration: 10000,
            iterations: Infinity,
            delay: 600,
          }
        );
      }
      if (totalWidth < 0) {
        thirdPanelRef.current.animate(
          [
            { transform: `translateX(0px)` },
            {
              transform: `translateX(-${contentWidth - (innerWidth - 64)}px)`,
            },
          ],
          {
            fill: "forwards",
            easing: "linear",
            direction: "alternate",
            duration: 10000,
            iterations: Infinity,
            delay: 600,
          }
        );
      }
    }
  }, [firstPanelRef, secondPanelRef, thirdPanelRef, innerWidth]);

  return (
    <Container>
      <Panel ref={firstPanelRef} $justifycontent="start">
        <div>
          <ShapeIcon shape="circle" fill="black" width="94px" minWidth="94px" />
          <h1>Atelier CDLN</h1>
        </div>
      </Panel>
      <Panel ref={secondPanelRef} $justifycontent="end">
        <div>
          <ShapeIcon shape="square" fill="black" width="94px" minWidth="94px" />
          <h1>Design graphique</h1>
        </div>
      </Panel>
      <Panel ref={thirdPanelRef} $justifycontent="start">
        <div>
          <ShapeIcon
            shape="triangle"
            fill="black"
            width="94px"
            minWidth="94px"
            rotate
          />
          <h1>Direction artistique</h1>
        </div>
      </Panel>
    </Container>
  );
};

export default Hero;
