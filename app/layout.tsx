import type { Metadata } from "next";
import { Bricolage_Grotesque, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const bodyFont = Bricolage_Grotesque({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Soya MVP Studio - MVP development for web and mobile apps",
  description:
    "We build focused web and mobile MVPs for founders and product teams. Fast scoping, sharp design, and production-ready builds you can ship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
