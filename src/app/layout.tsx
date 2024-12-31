import type { Metadata } from "next";
import type { Viewport } from 'next';
import { Inter, DynaPuff } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const dynaPuff = DynaPuff({
  subsets: ["latin"],
  weight: '400',
  variable: '--font-dynapuff',
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
      <body className={`${inter.variable} ${dynaPuff.variable} font-inter`}>{children}</body>
    </html>
  );
}
