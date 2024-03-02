import styled from "styled-components";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Header from "@/components/Header";
import Email from "@/components/Email";
import Footer from "@/components/Footer";

const Page = styled.div`
  padding-top: 128px;
`;

export default function RootLayout({ children }) {
  return (
    <main className={inter.className}>
      <Header />
      <Page>{children}</Page>
      <Email />
      <Footer/>
    </main>
  );
}
