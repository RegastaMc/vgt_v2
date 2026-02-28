import Link from "next/link";

// import { TodayDeals } from "@/domains/product/constants";
import DynamicCard from "../DynamicCard";
import { useEffect, useState } from "react";
import { getAllProducts } from "@/actions/product/product";
import { TProductListItem } from "@/shared/types/product";
import ProductCard from "@/domains/product/components/productCard";

export const DynamicCards = ({ title, name }: { title: string; name: string }) => {
  const [productsList, setProductsList] = useState<any[]>([]);

  useEffect(() => {
    getProductsList();
  }, []);

  const getProductsList = async () => {
    const response = await getAllProducts();
    if (response.res) setProductsList(response.res);
  };

  return (
    <div className="w-full mt-14 ">
      <div className="flex w-full justify-between items-center mb-7">
        <h2 className="text-2xl font-medium text-gray-700 underline">{title}</h2>
        <Link
          href={`/list/${name.toLocaleLowerCase()}`}
          className="font-medium bg-[position:right_center] hover:pr-5 pr-6 text-gray-700 bg-[url('/icons/arrowIcon02.svg')] bg-no-repeat bg-right-center transition-all duration-300 ease-out"
        >
          view all
        </Link>
      </div>
      <div className="flex  gap-3.5 overflow-x-scroll pb-7 2xl:pb-0 2xl:overflow-x-hidden">
        {productsList.map((product, index) => (
          <ProductCard
            key={product.id}
            imgUrl={
              (product.images?.map((img: { url: string; public_id: string }) =>
                typeof img === "object" && img !== null && "url" in img ? img.url : "",
              ) || []) as [string, string]
            }
            name={product.name}
            price={product.price}
            isAvailable={product.isAvailable}
            dealPrice={product.salePrice || undefined}
            specs={product.specialFeatures}
            url={"/product/" + product.id}
          />
        ))}
      </div>
    </div>
  );
};
