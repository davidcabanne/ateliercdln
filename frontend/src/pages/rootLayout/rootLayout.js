import styled from "styled-components";
import * as _var from "@/styles/variables";

import { Hanken_Grotesk } from "next/font/google";
const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"] });

import Header from "@/components/Header";
import Email from "@/components/Email";
import Footer from "@/components/Footer";
import Shape from "@/components/Shape";
import { headerHeight } from "@/styles/variables";

const Page = styled.div`
  padding-top: ${headerHeight};
`;

export default function RootLayout({ children }) {
  return (
    <main className={hankenGrotesk.className}>
      <Header />
      <Page>{children}</Page>
      <Email />
      <Footer />
      {/* <Shape shape="circle" />
      <Shape shape="square" /> */}
    </main>
  );
}
