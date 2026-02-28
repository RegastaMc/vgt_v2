import Signin from "@/domains/store/auth/forms/(auth)/Signin";
import { auth } from "@/lib/auth";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  title: {
    default: "Signin | VGT Electrical Supplies",
    template: "%s | VGT Electrical Supplies",
    absolute: "Signin | VGT Electrical Supplies",
  },
  description: "Sign in to  VGT Electrical Supplies account to start buying and selling amazing products.",
  keywords: ["signin", "login", "Eectrical Supplies Kenya", "ecommerce", "Electricals"],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Signin | VGT Electrical Supplies",
    description: "Sign in to VGT Electrical Supplies account for amazing electrical products.",
    url: "https://www.vgt-electicals.co.ke/signin",
    siteName: "VGT Electrical Supplies",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Signin | VGT Electrical Supplies",
    description: "Sign in to VGT Electrical Supplies account for amazing electrical products.",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
};

export default async function Page() {
  const user = await auth();
  if (user) {
    redirect("/");
  }
  return <Signin />;
}
