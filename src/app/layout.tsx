import type { Metadata } from "next";
import { Playfair_Display, Geist_Mono } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vesta — Where Ambition Meets Comfort",
  description:
    "Vesta is a women-first dating app for ambitious, homebody women who want equally ambitious men. Think LinkedIn + Netflix + Raya.",
  metadataBase: new URL("https://joinvesta.vercel.app/"), // replace with your domain
  openGraph: {
    title: "Vesta — Where Ambition Meets Comfort",
    description:
      "Curated dating for ambitious women and equally ambitious men. Women-first, cozy, exclusive.",
    url: "https://joinvesta.vercel.app/",
    siteName: "Vesta",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Vesta — Where Ambition Meets Comfort",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vesta — Where Ambition Meets Comfort",
    description:
      "A curated, women-first dating app for ambitious homebody women. Think LinkedIn + Netflix + Raya.",
    images: ["/image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfairDisplay.variable} ${geistMono.variable} antialiased bg-white text-black dark:bg-black dark:text-white`}
      >
        <main className="flex min-h-screen flex-col items-center justify-center text-center px-6">
          {children}
        </main>
      </body>
    </html>
  );
}

