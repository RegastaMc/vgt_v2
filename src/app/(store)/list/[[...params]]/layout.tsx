import { Metadata } from "next";

export const metadata: Metadata = {
  title: "List",
  description: "List",
  openGraph: {
    title: "List",
    description: "List",
  },
  twitter: {
    title: "List",
    description: "List",
  },
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
};
const ListLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default ListLayout;
