import type { Metadata } from "next";
import { Inter } from "next/font/google";
import basic from "@/_contents/basic.json";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
