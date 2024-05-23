import React from "react";

import styled from "styled-components";
import * as _var from "@/styles/variables";

import SvgAtelierCdln from "./svg/SvgAtelierCdln";
import SvgDesignGraphique from "./svg/SvgDesignGraphique";
import SvgDirectionArtistique from "./svg/SvgDirectionArtistique";

const Container = styled.section`
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: clamp(8px, 5vw, 80px);
  padding: 80px ${_var.spaceM};
  overflow: hidden;

  @media ${_var.device.tablet_max} {
    padding: 64px ${_var.spaceM};
  }

  @media ${_var.device.mobileL_max} {
    padding: 32px ${_var.spaceS};
  }
`;

const Panel = styled.div`
  display: flex;
  justify-content: ${(props) => props.$justifycontent};

  & > div {
    display: flex;
    justify-content: ${(props) => props.$justifycontent};
    width: 100%;
    max-width: 100%;
    padding: 10px;
  }

  & svg {
    width: 100%;
    height: auto;
  }

  & h1 {
    white-space: nowrap;
  }
`;

const Hero = () => {
  return (
    <Container>
      <Panel $justifycontent="flex-start">
        <SvgAtelierCdln />
      </Panel>
      <Panel $justifycontent="flex-end">
        <SvgDesignGraphique />
      </Panel>
      <Panel $justifycontent="flex-start">
        <SvgDirectionArtistique />
      </Panel>
    </Container>
  );
};

export default Hero;
