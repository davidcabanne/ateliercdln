import Link from "next/link";
import styled from "styled-components";
import * as _var from "../../styles/variables";

import Logo from "../Logo";

const Container = styled.footer`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${_var.spaceXL} ${_var.spaceXL};
  color: white;
  background: black;
  z-index: 60;

  @media ${_var.device.laptop_max} {
    padding: ${_var.spaceL} ${_var.spaceL};
  }

  @media ${_var.device.tablet_max} {
    padding: ${_var.spaceL} ${_var.spaceL};
  }
  @media ${_var.device.mobileL_max} {
    padding: ${_var.spaceM} ${_var.spaceM};
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media ${_var.device.tablet_max} {
    grid-template-columns: 1fr;
    gap: ${_var.spaceL};
  }
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 56px;
  border-top: 1px solid white;

  @media ${_var.device.tablet_max} {
    margin-top: ${_var.spaceM};
  }

  & p {
    font-size: 22px;
    font-weight: 300;
    margin-top: 56px;

    @media ${_var.device.tablet_max} {
      font-size: 10px;
      margin-top: ${_var.spaceM};
    }
  }
`;

const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;

  @media ${_var.device.tablet_max} {
    gap: ${_var.spaceM};
  }

  & p {
    font-size: 24px;
    max-width: 440px;

    @media ${_var.device.tablet_max} {
      font-size: 12px;
      max-width: 100%;
    }
  }
`;

const RightPanel = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${_var.spaceL};

  @media ${_var.device.tablet_max} {
    grid-template-columns: 1fr 1fr;
    gap: ${_var.spaceS};

    & div:first-child {
      width: 50%;
      align-items: flex-start;
      justify-content: flex-start;

      & h6 {
        white-space: nowrap;
      }

      & h6,
      p,
      a {
        text-align: left;
      }
    }
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: ${_var.spaceXS};

  & h6,
  p,
  a {
    color: white;
    font-size: 22px;
    text-transform: uppercase;
    text-align: right;

    @media ${_var.device.tablet_max} {
      font-size: 12px;
    }
  }

  & h6 {
    margin-bottom: ${_var.spaceM};

    @media ${_var.device.tablet_max} {
      margin-bottom: ${_var.spaceXS};
    }
  }

  & p,
  a {
    font-weight: 200;
  }
  @media ${_var.device.tablet_min} {
    & a:hover {
      text-decoration: underline 1px;
      text-underline-offset: 4px;
    }
  }
`;

const CallToAction = styled.a`
  width: fit-content;
  font-size: 24px;
  text-transform: uppercase;
  color: white;
  padding: 16px 24px;
  background: black;
  border: 2px solid white;
  border-radius: 128px;
  text-decoration: none;
  transition: 200ms ${_var.cubicBezier};
  transition-property: color, background;

  & svg {
    width: 16px;
    height: 16px;
    margin-left: 8px;

    & path {
      stroke: white;
      transition: 200ms ${_var.cubicBezier};
      transition-property: stroke;
    }
  }

  @media ${_var.device.tablet_max} {
    font-size: 18px;
    padding: 8px 16px;

    & svg {
      width: 12px;
      height: 12px;
    }
  }

  @media ${_var.device.tablet_min} {
    &:hover {
      background: white;
      color: black;

      & svg {
        & path {
          stroke: black;
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <TopSection>
          <LeftPanel>
            <Link href="#top">
              <Logo fill="white" />
            </Link>
            <p>
              Le design au service des porteurs de projets et des entrepreneurs
              souhaitant développer des images de marque uniques et fortes pour
              que leurs idées novatrices et porteuses de sens soient adoptées
              par le plus grand nombre.
            </p>
            <CallToAction
              href="mailto: hello@ateliercdln.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Let's work
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 19 19"
                fill="none"
                xmlSpace="preserve"
              >
                <path
                  d="M17.5864 0.999675L1.36621 17.5405"
                  strokeWidth="2"
                  strokeMiterlimit="2"
                />
                <path
                  d="M1.37891 1.00684L17.5958 1.00684L17.5958 17.546"
                  strokeWidth="2"
                  strokeMiterlimit="2"
                />
              </svg>
            </CallToAction>
          </LeftPanel>
          <RightPanel>
            <Contact>
              <h6>Suivez-nous</h6>
              <a
                href="https://fr.linkedin.com/in/tchapdelaine"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
              <a
                href="https://www.instagram.com/ateliercdln/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </Contact>
            <Contact>
              <h6>Adresse</h6>
              <p>QUELQUE PART À BORDEAUX</p>
              <p>33000, FRANCE</p>
            </Contact>
          </RightPanel>
        </TopSection>
        <BottomSection>
          <p>Atelier CDLN 2024</p>
          <p>Tous droits réservés</p>
        </BottomSection>
      </Wrapper>
    </Container>
  );
};

export default Footer;
