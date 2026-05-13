import { Syne, DM_Mono, Geist_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mizbaur Rahman Zihad — Full-Stack Developer",
  description: "Portfolio of Mizbaur Rahman Zihad, a Full-Stack Developer and Mathematics student at SUST.",
};

import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import StarField from "@/components/StarField";
import ClientWrapper from "@/components/ClientWrapper";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${syne.variable} ${dmMono.variable} ${geistMono.variable} antialiased bg-bg text-text-primary selection:bg-white selection:text-black grain relative`}
      >
        <ClientWrapper>
          <StarField />
          <CustomCursor />
          <Navbar />
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
