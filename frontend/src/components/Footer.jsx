import styled from "styled-components";
import * as _var from "../styles/variables";

import Logo from "./Logo";

const Container = styled.footer`
  width: 100%;
  display: grid;
  grid-template-columns: 160px 1fr 104px;
  padding: ${_var.spaceL};
  background: black;

  @media ${_var.device.tablet_max} {
    grid-template-columns: 1fr;
    gap: ${_var.spaceML};
    padding: ${_var.spaceL};

    & > :first-child {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const Legals = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${_var.spaceXS};

  & p,
  span {
    color: white;
    font-size: clamp(12px, 2vw, 24px);
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
  justify-content: flex-end;
  align-items: center;
  gap: ${_var.spaceS};

  @media ${_var.device.tablet_max} {
    text-align: center;
    flex-direction: column;
    gap: 4px;
  }
`;

const Icon = styled.a`
  width: 48px;
  height: 48px;
  fill: white;

  @media ${_var.device.tablet_max} {
    display: none;
  }
`;

const FooterLink = styled.a`
  color: white !important;
  font-size: 12px;
  text-transform: uppercase;
  text-decoration: underline;

  @media ${_var.device.tablet_min} {
    display: none;
  }
  @media ${_var.device.tablet_max} {
    display: block;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Logo fill="white" />
      <Legals>
        <p>Atelier CDLN ● All right reserved ■ Bordeaux, France</p>
      </Legals>
      <Socials>
        <FooterLink
          href="https://www.instagram.com/ateliercdln/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </FooterLink>
        <FooterLink
          href="https://fr.linkedin.com/in/tchapdelaine"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </FooterLink>
        <Icon
          href="https://www.instagram.com/ateliercdln/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 50 50"
            fill="white"
          >
            <g>
              <path
                d="M12.85,3.67c-5.06,0-9.18,4.12-9.18,9.18v24.31c0,5.06,4.12,9.18,9.18,9.18h24.31c5.06,0,9.18-4.12,9.18-9.18
		V12.85c0-5.06-4.12-9.18-9.18-9.18H12.85z M37.15,50H12.85C5.76,50,0,44.24,0,37.15V12.85C0,5.76,5.76,0,12.85,0h24.31
		C44.24,0,50,5.76,50,12.85v24.31C50,44.24,44.24,50,37.15,50"
              />
              <path
                d="M25,16c-4.96,0-9,4.04-9,9c0,4.96,4.04,9,9,9c4.96,0,9-4.04,9-9C34,20.04,29.96,16,25,16z M25,37.66
		c-6.98,0-12.66-5.68-12.66-12.66S18.02,12.34,25,12.34S37.66,18.02,37.66,25S31.98,37.66,25,37.66"
              />
              <path d="M42.02,11.76c0,1.56-1.27,2.83-2.83,2.83s-2.83-1.27-2.83-2.83s1.27-2.83,2.83-2.83S42.02,10.2,42.02,11.76" />
            </g>
          </svg>
        </Icon>
        <Icon
          href="https://fr.linkedin.com/in/tchapdelaine"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 50 50"
          >
            <g>
              <g>
                <g>
                  <path
                    d="M25.9,22.8c0.2-0.2,0.4-0.4,0.5-0.6c2.6-2.8,7.8-3.7,11.3-0.5c1.1,1,1.7,2.3,2,3.7c0.2,0.6,0.2,1.2,0.2,1.9
				c0,4.1,0,8.2,0,12.3c0,0.4-0.1,0.5-0.5,0.5c-1.7,0-3.5,0-5.2,0c-0.3,0-0.4-0.1-0.4-0.4c0-3.5,0-7,0-10.5c0-0.4,0-0.9-0.2-1.3
				c-0.5-1.7-1.9-2.6-3.7-2.5c-2.8,0.1-3.9,2.1-3.9,4.2c0,3.4,0,6.8,0,10.1c0,0.3-0.1,0.5-0.5,0.5c-1.7,0-3.5,0-5.2,0
				c-0.3,0-0.4-0.1-0.4-0.4c0-6.4,0-12.8,0-19.2c0-0.3,0.1-0.4,0.4-0.4c1.6,0,3.3,0,4.9,0c0.3,0,0.4,0.1,0.4,0.4
				C25.8,21.2,25.8,21.9,25.9,22.8C25.8,22.7,25.8,22.7,25.9,22.8z"
                  />
                  <path
                    d="M16.6,30.1c0,3.2,0,6.4,0,9.5c0,0.4-0.1,0.5-0.5,0.5c-1.8,0-3.6,0-5.4,0c-0.3,0-0.4-0.1-0.4-0.4
				c0-5.1,0-10.2,0-15.3c0-1.3,0-2.6,0-4c0-0.3,0.1-0.4,0.4-0.4c1.8,0,3.7,0,5.5,0c0.3,0,0.4,0.1,0.4,0.4
				C16.6,23.6,16.6,26.9,16.6,30.1L16.6,30.1z"
                  />
                  <path d="M17.1,13.5c0,2-1.6,3.5-3.6,3.5c-2,0-3.6-1.6-3.5-3.6c0-2,1.6-3.5,3.6-3.5C15.5,9.9,17.1,11.5,17.1,13.5z" />
                </g>
              </g>
              <g>
                <path
                  d="M12.9,3.7c-5.1,0-9.2,4.1-9.2,9.2v24.3c0,5.1,4.1,9.2,9.2,9.2h24.3c5.1,0,9.2-4.1,9.2-9.2V12.9
			c0-5.1-4.1-9.2-9.2-9.2H12.9z M37.2,50H12.9C5.8,50,0,44.2,0,37.2V12.9C0,5.8,5.8,0,12.9,0h24.3C44.2,0,50,5.8,50,12.9v24.3
			C50,44.2,44.2,50,37.2,50"
                />
              </g>
            </g>
          </svg>
        </Icon>
      </Socials>
    </Container>
  );
};

export default Footer;
