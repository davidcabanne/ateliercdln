import React, { useState, useEffect, useRef } from "react";

import styled from "styled-components";
import * as _var from "@/styles/variables";

import useWindowWidth from "@/hooks/useWindowWidth";

import ShapeIcon from "./Icons/ShapeIcon";

const Container = styled.section`
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: ${_var.spaceML};
  padding: 80px ${_var.spaceL};
  overflow: hidden;

  @media ${_var.device.tablet_max} {
    padding: 80px 0px;

    & .panelPrimary,
    .panelThird {
      margin-left: calc(-94px / 2);
    }
    & .panelSecondary {
      position: relative;
      padding: ${_var.spaceM};

      & svg,
      h1 {
        position: absolute;
        right: calc(-94px / 2);
      }
      & h1 {
        right: calc((94px / 2) + ${_var.spaceM});
      }
    }
  }
`;

const Panel = styled.div`
  display: flex;
  justify-content: ${(props) => props.$justifycontent};
  align-items: center;
  gap: ${_var.spaceM};

  & h1 {
    white-space: nowrap;
  }
`;

const Hero = () => {
  const firstPanelRef = useRef(null);
  const secondaryPanelRef = useRef(null);
  const thirdPanelRef = useRef(null);

  const innerWidth = useWindowWidth();

  const handlePanelWidth = (ref) => {
    const panelWidth =
      ref.current?.children[0].getBoundingClientRect().width +
      32 +
      ref.current?.children[1].getBoundingClientRect().width;

    return panelWidth;
  };

  const handleTransition = (ref, width, innerWidth) => {
    const layoutWidth = innerWidth - 128;

    if (ref === secondaryPanelRef) {
      if (width < layoutWidth) {
        const animation = ref.current.animate(
          [
            { transform: `translateX(0px)` },
            { transform: `translateX(${width - layoutWidth}px)` },
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
      if (width >= layoutWidth) {
        const animation = ref.current.animate(
          [
            { transform: `translateX(0px)` },
            { transform: `translateX(${64 - layoutWidth }px)` },
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
    } else {
      if (width < layoutWidth) {
        const animation = ref.current.animate(
          [
            { transform: `translateX(0px)` },
            { transform: `translateX(${layoutWidth - width}px)` },
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
      if (width >= layoutWidth) {
        const animation = ref.current.animate(
          [
            { transform: `translateX(0px)` },
            { transform: `translateX(${layoutWidth - 64}px)` },
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
  };

  useEffect(() => {
    const firstPanelWidth = handlePanelWidth(firstPanelRef);
    const secondPanelWidth = handlePanelWidth(secondaryPanelRef);
    const thirdPanelWidth = handlePanelWidth(thirdPanelRef);

    handleTransition(firstPanelRef, firstPanelWidth, innerWidth);
    handleTransition(secondaryPanelRef, secondPanelWidth, innerWidth);
    handleTransition(thirdPanelRef, thirdPanelWidth, innerWidth);
  }, [innerWidth]);

  return (
    <Container>
      <Panel
        ref={firstPanelRef}
        $justifycontent="start"
        className="panelPrimary"
      >
        <ShapeIcon shape="circle" fill="black" width="94px" minWidth="94px" />
        <h1>Atelier CDLN</h1>
      </Panel>
      <Panel
        ref={secondaryPanelRef}
        $justifycontent="end"
        className="panelSecondary"
      >
        <ShapeIcon shape="square" fill="black" width="94px" minWidth="94px" />
        <h1>Design graphique</h1>
      </Panel>
      <Panel ref={thirdPanelRef} $justifycontent="start" className="panelThird">
        <ShapeIcon shape="triangle" fill="black" width="94px" minWidth="94px" />
        <h1>Direction artistique</h1>
      </Panel>
    </Container>
  );
};

export default Hero;
