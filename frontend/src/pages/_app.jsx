import RootLayout from "./rootLayout/rootLayout";

import { createGlobalStyle } from "styled-components";
import * as _var from "../styles/variables";

import MouseContextProvider from "../context/mouseContext";

import Cursor from "../components/Cursor/index";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

ul,
li,
ul[role="list"],
ol[role="list"] {
  list-style: none;
}

html:focus-within {
  scroll-behavior: smooth;
}

body {
  width: 100vw;
  /* RESPONSIVE HEIGHT FALLBACK for iOS tool bar */
  min-height: 100vh;
  min-height: 100svh;
  min-height: -webkit-fill-available;
  text-rendering: optimizeSpeed;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Hanken Grotesk", Helvetica, sans-serif;
  font-size: 16px;
  overflow-x: hidden;

  cursor: none;
  @media ${_var.device.tablet_max} {
    cursor: auto !important;
  }
}

html {
  /* RESPONSIVE HEIGHT FALLBACK for iOS tool bar */
  height: -webkit-fill-available;
  scroll-behavior: smooth;
  background: white;
}

a:not([class]) {
  text-decoration: none;
  text-decoration-skip-ink: auto;
}

a:visited {
    color: inherit;
}

h1 {
  font-size: 128px;
  font-weight: 400;
  text-transform: uppercase;
}

h1, h2 {
  line-height: 0.9;
}
h3, h4 {
  line-height: 1.1;
}
h5, h6 {
  line-height: 1.2;
}

p {
  font-size: 16px;
  line-height: 1.4;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;

function MyApp({ Component, pageProps }) {
  return (
    <MouseContextProvider>
      <RootLayout>
        <Cursor />
        <GlobalStyle />
        <Component {...pageProps} />
      </RootLayout>
    </MouseContextProvider>
  );
}

export default MyApp;
