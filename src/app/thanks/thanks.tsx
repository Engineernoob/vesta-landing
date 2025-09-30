import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thanks for Joining – Vesta",
  description:
    "You’re on the list! 🎉 Vesta is the women-first dating app where ambition meets comfort. We'll keep you updated with early access and launch details.",
  openGraph: {
    title: "Thanks for Joining – Vesta",
    description:
      "You’re on the list! 🎉 Vesta is the women-first dating app where ambition meets comfort.",
    url: "https://vesta-app.vercel.app/thanks",
    siteName: "Vesta",
    images: [
      {
        url: "https://vesta-app.vercel.app/og-image.png", // update if needed
        width: 1200,
        height: 630,
        alt: "Vesta – Where Ambition Meets Comfort",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thanks for Joining – Vesta",
    description:
      "You’re on the list! 🎉 Vesta is the women-first dating app where ambition meets comfort.",
    images: ["https://vesta-app.vercel.app/og-image.png"],
  },
};

export default function Thanks() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-accent">
          You’re on the list! 🎉
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
          Thanks for signing up for <span className="font-semibold">Vesta</span>
          . We’ll keep you updated with early access and launch details.
        </p>
        <Link
          href="/"
          className="btn-gradient px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
