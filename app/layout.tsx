import { Inter } from "next/font/google";
import "./globals.css";
import MobileMenu from "./components/MobileMenu";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MobileMenu />
        <Navbar />
          <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
