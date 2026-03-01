import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart",
};

const CartLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default CartLayout;
