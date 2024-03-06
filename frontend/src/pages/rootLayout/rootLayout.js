import styled from "styled-components";

import { Hanken_Grotesk } from "next/font/google";
const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"] });

import Header from "@/components/Header";
import Email from "@/components/Email";
import Footer from "@/components/Footer";
import Shape from "@/components/Shape";

const Page = styled.div`
  padding-top: 128px;
`;

export default function RootLayout({ children }) {
  return (
    <main className={hankenGrotesk.className}>
      <Header />
      <Page>{children}</Page>
      <Email />
      <Footer />
      <Shape shape="circle" />
      <Shape shape="square" />
    </main>
  );
}
