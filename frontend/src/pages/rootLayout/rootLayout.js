import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <main className={inter.className}>
      <Header />
      {children}
      Footer
    </main>
  );
}
