import { Poppins } from "next/font/google";
import "./globals.css";

import AppNavbar from "@/components/app-navbar";
import AppFooter from "@/components/app-footer";

const poppins = Poppins({ subsets: ["devanagari", "latin", "latin-ext"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AppNavbar />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
