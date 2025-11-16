import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

import RootLayout from "./RootLayout";

import { createGlobalStyle } from "styled-components";
import * as _var from "../styles/variables";

import MouseContextProvider, { MouseContext } from "../context/mouseContext";

import Cursor from "@/components/Cursor";

/* ──────────────────────────────────────────────────────────────── */
/*  Global Styles                                                   */
/* ──────────────────────────────────────────────────────────────── */

/**
 * GlobalStyle
 *
 * Global CSS reset and base typography/layout rules for the app.
 *
 * Includes:
 *  - Box-sizing + margin/padding reset
 *  - List style reset
 *  - Smooth scrolling
 *  - Font stack + body defaults
 *  - iOS height fallbacks
 *  - Global custom cursor behavior (hidden on desktop, native on touch)
 *  - Reduced motion support
 */
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

/* ──────────────────────────────────────────────────────────────── */
/*  Cursor + Router Integration                                     */
/* ──────────────────────────────────────────────────────────────── */

/**
 * CursorRouteSync
 *
 * Small helper component that syncs the custom cursor state
 * with Next.js route changes.
 *
 * Responsibilities:
 *  - Listens to router events:
 *      • routeChangeStart
 *      • routeChangeComplete
 *      • routeChangeError
 *  - Resets the cursor type to "" whenever a route change occurs
 *    so the cursor doesn't get "stuck" in a hover state between pages.
 *
 * @returns {null}
 */
const CursorRouteSync = () => {
  const router = useRouter();
  const { cursorChangeHandler } = useContext(MouseContext);

  useEffect(() => {
    const resetCursor = () => cursorChangeHandler("");

    router.events.on("routeChangeStart", resetCursor);
    router.events.on("routeChangeComplete", resetCursor);
    router.events.on("routeChangeError", resetCursor);

    return () => {
      router.events.off("routeChangeStart", resetCursor);
      router.events.off("routeChangeComplete", resetCursor);
      router.events.off("routeChangeError", resetCursor);
    };
  }, [router, cursorChangeHandler]);

  return null;
};

/* ──────────────────────────────────────────────────────────────── */
/*  Custom App Component (_app.js)                                  */
/* ──────────────────────────────────────────────────────────────── */

/**
 * MyApp
 *
 * Custom Next.js App component.
 *
 * Wraps every page with:
 *  - MouseContextProvider: global custom cursor state
 *  - RootLayout: shared layout (header, main wrapper, etc.)
 *  - Cursor: custom visual cursor that follows the mouse
 *  - CursorRouteSync: ensures cursor resets on navigation
 *  - GlobalStyle: global CSS reset + base styles
 *
 * @param {Object} props
 * @param {React.ComponentType} props.Component - Active page component.
 * @param {Object} props.pageProps - Props preloaded for the page.
 *
 * @returns {JSX.Element}
 */
function MyApp({ Component, pageProps }) {
  return (
    <MouseContextProvider>
      <RootLayout>
        <Cursor />
        <CursorRouteSync />
        <GlobalStyle />
        <Component {...pageProps} />
      </RootLayout>
    </MouseContextProvider>
  );
}

export default MyApp;
