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
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${dmMono.variable} ${geistMono.variable} antialiased bg-bg text-text-primary selection:bg-white selection:text-black grain relative`}
      >
        <SmoothScrollProvider>
          <ClientWrapper>
            <Toaster position="bottom-right" toastOptions={{
              style: {
                background: "rgba(0, 0, 0, 0.4)",
                color: "#fff",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "16px",
                fontFamily: "var(--font-syne)",
                fontSize: "12px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              },
            }} />
            <StarField />
            <CustomCursor />
            <Navbar />
            {children}
          </ClientWrapper>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
