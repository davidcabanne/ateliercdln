import styled from "styled-components";
import * as _var from "../styles/variables";

import Logo from "./Logo";

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${_var.headerHeight};
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  z-index: 100;

  & a {
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <Container>
      <a href="/">
        <Logo fill="black" />
      </a>
    </Container>
  );
};

export default Header;
