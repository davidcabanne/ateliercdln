import styled from "styled-components";
import * as _var from "@/styles/variables";

import { Hanken_Grotesk } from "next/font/google";
const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"] });

import Header from "@/components/Layout/Header";
import { headerHeight } from "@/styles/variables";

const Page = styled.div`
  padding-top: ${headerHeight};

  @media ${_var.device.tablet_max} {
    padding-top: 64px;
  }
`;

export default function RootLayout({ children }) {
  return (
    <main className={hankenGrotesk.className}>
      <Header />
      <Page>{children}</Page>
    </main>
  );
}
