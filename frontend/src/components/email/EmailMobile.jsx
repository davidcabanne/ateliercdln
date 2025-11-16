import styled from "styled-components";
import * as _var from "../styles/variables";

const Container = styled.div`
  position: sticky;
  top: calc(100vh - 24px - 40px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
  margin-top: -42px;
  z-index: 40;

  @media ${_var.device.tablet_min} {
    display: none;
  }
`;

const StyledLink = styled.a`
  font-size: 20px;
  color: black !important;
  text-transform: uppercase;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.5);
  padding: ${_var.spaceXS} ${_var.spaceS};
  border-radius: 128px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  overflow: hidden;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const EmailMobile = () => {
  return (
    <Container>
      <StyledLink
        href="mailto: theo.chapdelaine@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        UN PROJET ? LET’S TALK!
      </StyledLink>
    </Container>
  );
};

export default EmailMobile;
