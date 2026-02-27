import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ToasterProvider } from "@/lib/Toast";

const outfitFont = localFont({
  src: "../assets/fonts/Outfit-VariableFont.ttf",
  fallback: ["sans-serif", "system-ui", "arial"],
});

export const metadata: Metadata = {
  title: "VGT ELectricals Supplies",
  description:
    "VGT Electricals Supplies is your one-stop shop for all your electrical needs. We offer a wide range of high-quality electrical products, including cables, wires, switches, sockets, lighting fixtures, and more. Our products are sourced from trusted manufacturers to ensure reliability and durability. Whether you're a professional electrician or a DIY enthusiast, we have everything you need to complete your electrical projects with confidence. Shop with us for competitive prices, excellent customer service, and fast delivery.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfitFont.className}>
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}
