import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ToasterProvider } from "@/lib/Toast";
import { SessionProvider } from "next-auth/react";

const outfitFont = localFont({
  src: "../assets/fonts/Outfit-VariableFont.ttf",
  fallback: ["sans-serif", "system-ui", "arial"],
});

export const metadata: Metadata = {
  title: "VGT ELectricals Supplies",
  description:
    "VGT Electricals Supplies is your one-stop shop for all your electrical needs. We offer a wide range of high-quality electrical products, including cables, wires, switches, sockets, lighting fixtures, and more. Our products are sourced from trusted manufacturers to ensure reliability and durability. Whether you're a professional electrician or a DIY enthusiast, we have everything you need to complete your electrical projects with confidence. Shop with us for competitive prices, excellent customer service, and fast delivery.",
  keywords: [
    "Electrical Supplies Kenya",
    "Electricals",
    "Electricals Kenya",
    "Electrical Supplies",
    "Electrical Supplies Nairobi",
    "Best Electrical Supplies",
    "Best Electrical Supplies Nairobi",
    "Best Electrical Supplies Kenya",
    "Best Electricals",
    "Best Electricals Kenya",
    "Best Electricals Nairobi",
    "Tronic",
    "VGT",
    "Europlus",
  ],
  authors: [{ name: "VGT", url: "https://vgt-electricals.co.ke" }],
  creator: "VGT_Electricals",
  publisher: "VGT_Electricals",
  openGraph: {
    title: "VGT Electicals Supplies",
    description:
      "VGT Electricals Supplies is your one-stop shop for all your electrical needs. We offer a wide range of high-quality electrical products, including cables, wires, switches, sockets, lighting fixtures, and more. Our products are sourced from trusted manufacturers to ensure reliability and durability. Whether you're a professional electrician or a DIY enthusiast, we have everything you need to complete your electrical projects with confidence. Shop with us for competitive prices, excellent customer service, and fast delivery.",
    url: "https://vgt-electricals.co.ke",
    siteName: "VGT Electicals Supplies",
    images: [
      {
        url: "",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VGT Electicals Supplies",
    description:
      "VGT Electricals Supplies is your one-stop shop for all your electrical needs. We offer a wide range of high-quality electrical products, including cables, wires, switches, sockets, lighting fixtures, and more. Our products are sourced from trusted manufacturers to ensure reliability and durability. Whether you're a professional electrician or a DIY enthusiast, we have everything you need to complete your electrical projects with confidence. Shop with us for competitive prices, excellent customer service, and fast delivery.",
    images: [""],
    creator: "@vgt_electricals",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://vgt-electricals.co.ke",
    languages: {
      "en-US": "https://vgt-electricals.co.ke/en-us",
      "fr-FR": "https://vgt-electricals.co.ke/fr-fr",
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-site-verification-code",
    other: {
      "custom-verification": "custom-verification-code",
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.json",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "shopping",
  archives: ["https://archive.org/details/shoppit-archive"],
  referrer: "no-referrer-when-downgrade",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfitFont.className}>
        <ToasterProvider />
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
