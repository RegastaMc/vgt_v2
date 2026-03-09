import React from "react";
import ShopLayout from "@/domains/store/ShopLayout";
import { getAllProducts } from "@/actions/product/product";

export default async function layout({ children }: { children: React.ReactNode }) {
  const productList = await getAllProducts();
  const products = productList.res || [];
  return <ShopLayout>{children}</ShopLayout>;
}
