import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { DM_Sans } from "next/font/google";
import { DM_Serif_Display } from "next/font/google";
import basic from "@/_contents/basic";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
});

export const metadata: Metadata = {
  title: basic.name + " - " + basic.desc,
  description: "Portfolio website for " + basic.name,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`container mx-auto p-3 ${dmSans.variable} ${dmSerifDisplay.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
