import styled from "styled-components";
import { spaceL } from "@/styles/variables";

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${spaceL};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const Header = () => {
  return (
    <Container>
      <span>HEADER</span>
    </Container>
  );
};

export default Header;
