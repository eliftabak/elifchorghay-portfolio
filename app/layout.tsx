import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MobileMenu from "./components/MobileMenu";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: '...',
  description: '...',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Elif Chorghay | Web Developer</title>
      </head>
      <body className={inter.className}>
        <MobileMenu />
        <Navbar />
          <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
