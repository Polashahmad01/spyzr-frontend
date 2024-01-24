import { Poppins } from "next/font/google";
import "./globals.css";

import ThemeProvider from "@/provider/theme-provider";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import AppNavbar from "@/components/app-navbar";
import AppFooter from "@/components/app-footer";

const poppins = Poppins({ subsets: ["devanagari", "latin", "latin-ext"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]});

export const metadata = {
  title: "Spyzr a linkedin marketing tool",
  description: "This is the description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider>
          <main className="flex flex-col justify-between h-screen">
            <AppNavbar />
            <section className="container mx-auto px-4">
              <ThemeSwitcher />
              {children} 
            </section>
            <AppFooter />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
