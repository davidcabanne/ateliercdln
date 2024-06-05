import styled from "styled-components";
import * as _var from "@/styles/variables";

import { Hanken_Grotesk } from "next/font/google";
const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"] });

import Header from "@/components/Layout/Header";
import RandomShape from "@/components/RandomShape";

const Page = styled.div`
  position: relative;
  padding-top: ${_var.headerHeight};
  width: 100vw;
  overflow-x: hidden;

  @media ${_var.device.tablet_max} {
    padding-top: 64px;
  }
`;

export default function RootLayout({ children }) {
  return (
    <main className={hankenGrotesk.className}>
      <Header />
      <Page>
        {children}
        <RandomShape />
        <RandomShape />
        <RandomShape />
      </Page>
    </main>
  );
}
