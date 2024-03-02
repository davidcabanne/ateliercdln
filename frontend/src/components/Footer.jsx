import styled from "styled-components";
import * as _var from "../styles/variables";

import Logo from "./Logo";

const Container = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${_var.spaceL};
  background: black;

  @media ${_var.device.tablet_max} {
    flex-direction: column;
    justify-content: center;
    gap: ${_var.spaceML};
    padding: ${_var.spaceL};
  }
`;

const Legals = styled.div`
  display: flex;
  gap: ${_var.spaceXS};

  & p,
  span {
    color: white;
    font-size: 24px;
    text-transform: uppercase;
  }

  @media ${_var.device.tablet_max} {
    flex-direction: column;
    gap: 4px;

    & p {
      text-align: center;
      font-size: 12px;
      opacity: 0.5;
    }
    & :first-child {
      opacity: 1;
    }

    & span {
      display: none;
    }
  }
`;

const Socials = styled.div`
  display: flex;
  gap: ${_var.spaceS};

  & a {
    color: white;
    font-size: 24px;
    text-transform: uppercase;
    text-decoration: underline;

    @media ${_var.device.tablet_max} {
      font-size: 12px;
    }
  }
  @media ${_var.device.tablet_max} {
    text-align: center;
    flex-direction: column;
    gap: 4px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Logo fill="white" />
      <Legals>
        <p> Atelier CDLN</p>
        <span>●</span>
        <p>All right reserved</p>
        <span>■</span>
        <p>Bordeaux, France</p>
      </Legals>
      <Socials>
        <a
          href="https://www.instagram.com/ateliercdln/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://fr.linkedin.com/in/tchapdelaine"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </Socials>
    </Container>
  );
};

export default Footer;
