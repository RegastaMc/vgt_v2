import { JsonValue } from "@prisma/client/runtime/library";

export type TListItem = {
  id: string;
  name: string;
  isAvailable: boolean;
  specialFeatures: string[];
  images: JsonValue[] | null;
  price: number;
  salePrice: number | null;
  brand: {
    id: string;
    name: string;
  };
};

export type TFilters = {
  stockStatus: "all" | "inStock" | "outStock";
  priceMinMax: [number, number];
  priceMinMaxLimitation: [number, number];
  brands: TFilterBrands[];
};

export type TFilterBrands = {
  id: string;
  name: string;
  isSelected: boolean;
};

export type TListSort = {
  sortName: "id" | "price" | "name";
  sortType: "asc" | "desc";
};

export type TPageStatus =
  | "pageLoading"
  | "filterLoading"
  | "filledProductList"
  | "filterHasNoProduct"
  | "categoryHasNoProduct";
