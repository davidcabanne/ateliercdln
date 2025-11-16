import styled from "styled-components";
import * as _var from "@/styles/variables";

import { Hanken_Grotesk } from "next/font/google";
const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"] });

import Header from "@/components/Layout/Header";

/* ──────────────────────────────────────────────────────────────── */
/*  Styled Components                                               */
/* ──────────────────────────────────────────────────────────────── */

/**
 * Page
 *
 * Main content wrapper below the header.
 *
 * Responsibilities:
 *  - Adds top padding equal to the header height so content never hides behind it.
 *  - Centers page content and prevents horizontal scroll overflow.
 *  - On tablet/mobile: adjusts padding and allows horizontal overflow (usually needed
 *    for touch interactions or layout constraints).
 */
const Page = styled.div`
  position: relative;
  padding-top: ${_var.headerHeight};
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;

  @media ${_var.device.tablet_max} {
    padding-top: ${_var.spaceL};
    overflow-x: visible;
  }
`;

/* ──────────────────────────────────────────────────────────────── */
/*  Root Layout Component                                           */
/* ──────────────────────────────────────────────────────────────── */

/**
 * RootLayout
 *
 * The global layout wrapper used throughout the application.
 * It is included in `_app.js` to wrap every page.
 *
 * Responsibilities:
 *  - Inject the global `Hanken Grotesk` font using Next.js `next/font`
 *  - Render the global <Header />
 *  - Wrap the page content inside <Page />
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Page content rendered inside the layout.
 *
 * @returns {JSX.Element}
 */
export default function RootLayout({ children }) {
  return (
    <main className={hankenGrotesk.className}>
      {/* Global site header */}
      <Header />

      {/* Page wrapper with padding + layout */}
      <Page>{children}</Page>
    </main>
  );
}
