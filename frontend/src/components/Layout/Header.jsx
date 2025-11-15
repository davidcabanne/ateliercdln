import styled from "styled-components";
import * as _var from "../../styles/variables";

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${_var.headerHeight};
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  z-index: 100;

  & a {
    cursor: pointer;
  }

  @media ${_var.device.tablet_max} {
    height: 64px;
  }

  @media ${_var.device.mobileL_max} {
    height: 32px;
  }
`;

const Logo = styled.div`
  display: flex;
  gap: ${_var.spaceXS};

  @media ${_var.device.tablet_max} {
    gap: 4px;
  }

  @media ${_var.device.mobileL_max} {
    gap: 2px;
  }
`;

const Svg = styled.svg`
  width: 32px;

  @media ${_var.device.tablet_max} {
    width: 24px;
    gap: 0px;
  }

  @media ${_var.device.mobileL_max} {
    width: 16px;
  }
`;

const Header = () => {
  return (
    <Container id="#top">
      <a href="/">
        <Logo>
          {/* CIRCLE */}
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 90 90"
            fill="black"
          >
            <circle cx="45" cy="45" r="45" />
          </Svg>

          {/* SQUARE */}
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 90 90"
            fill="black"
          >
            <rect width="90" height="90" />
          </Svg>

          {/* TRIANGLE */}
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 90 90"
            fill="black"
          >
            <polygon points="90,90 0,90 45,0 " />
          </Svg>
        </Logo>
      </a>
    </Container>
  );
};

export default Header;
