import styled from "styled-components";
import * as _var from "../styles/variables";

const Container = styled.div`
  position: sticky;
  top: calc(100vh - 24px - 32px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
  margin-top: -34px;
`;

const StyledLink = styled.a`
  font-size: 14px;
  text-transform: uppercase;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.5);
  padding: ${_var.spaceXS} ${_var.spaceS};
  border-radius: 128px;
  overflow: hidden;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
`;

const EmailMobile = () => {
  return (
    <Container>
      <StyledLink
        href="mailto: hello@ateliercdln.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        hello@ateliercdln.com
      </StyledLink>
    </Container>
  );
};

export default EmailMobile;
