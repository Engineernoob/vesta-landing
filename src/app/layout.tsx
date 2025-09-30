import type { Metadata } from "next";
import { Playfair_Display, Geist_Mono } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vesta — Where Ambition Meets Comfort",
  description:
    "Vesta is a women-first dating app for ambitious, homebody women who want equally ambitious men. Think LinkedIn + Netflix + Raya.",
  openGraph: {
    title: "Vesta — Where Ambition Meets Comfort",
    description:
      "Curated dating for ambitious women and equally ambitious men. Women-first, cozy, exclusive.",
    url: "https://vesta.app", // replace with your actual domain
    siteName: "Vesta",
    images: [
      {
        url: "/og-image.png", // add a social preview image later
        width: 1200,
        height: 630,
        alt: "Vesta App",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vesta — Where Ambition Meets Comfort",
    description:
      "A curated, women-first dating app for ambitious homebody women. Think LinkedIn + Netflix + Raya.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
