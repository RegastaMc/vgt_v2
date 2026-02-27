import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products List",
};

const ListLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default ListLayout;
