import styled from "styled-components";
import * as _var from "../styles/variables";

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

        & svg, h1 {
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
  justify-content: ${(props) => props.justifyContent};
  align-items: center;
  gap: ${_var.spaceM};

  & h1 {
    white-space: nowrap;
  }
`;

const Hero = () => {
  return (
    <Container>
      <Panel justifyContent="start" className="panelPrimary">
        <ShapeIcon shape="circle" fill="black" width="94px" minWidth="94px" />
        <h1>Atelier CDLN</h1>
      </Panel>
      <Panel justifyContent="end" className="panelSecondary">
        <ShapeIcon shape="square" fill="black" width="94px" minWidth="94px" />
        <h1>Design graphique</h1>
      </Panel>
      <Panel justifyContent="start" className="panelThird">
        <ShapeIcon shape="triangle" fill="black" width="94px" minWidth="94px" />
        <h1>Direction artistique</h1>
      </Panel>
    </Container>
  );
};

export default Hero;
