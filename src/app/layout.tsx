import type { Metadata } from "next";
import type { Viewport } from 'next';
import { Inter, Cherry_Swash } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const cherry_swash = Cherry_Swash({
  subsets: ["latin"],
  weight: '400',
  variable: '--font-cherry-swash',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Anna's Portfolio",
  description: "A website that features my projects and works.",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${cherry_swash.variable} font-inter`}>{children}</body>
    </html>
  );
}
