/* eslint-disable @typescript-eslint/no-unused-vars */
import { Metadata } from "next";

import {
  CollectionCards,
  CompanyLogoList,
  HomeSlider,
  LatestBlogPosts,
  TodayDealCards,
  TopSellingProductsList,
  WideCardRow,
} from "@/domains/store/homePage/components";
import DynamicSection from "@/domains/store/homePage/sections/DynamicSection";
import { getAllProducts } from "@/actions/product/product";
export const metadata: Metadata = {
  title: "VGT ELectricals Supplies",
};

export default async function Home() {
  const productsResponse = await getAllProducts();
  const productsList = productsResponse.res || [];

  return (
    <div className="w-full bg-gray-200">
      <div className="storeContainer flex-col">
        <div className="flex w-full mt-40">
          <HomeSlider />
        </div>
        <DynamicSection productsList={productsList} />
      </div>
    </div>
  );
}
