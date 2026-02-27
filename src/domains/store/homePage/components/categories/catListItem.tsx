"use client";

import Link from "next/link";

import { TGroupJSON } from "@/shared/types/categories";
import { cn } from "@/shared/utils/styling";
import { ArrowBigDown, ArrowDown, ChevronDown } from "lucide-react";

type Props = {
  categoryData: TGroupJSON;
  className?: string;
};

const CategoryNavItem = ({ categoryData, className }: Props) => {
  const { categories, group } = categoryData;

  return (
    <li className={cn("relative px-4 py-3 cursor-pointer group", className)}>
      {/* Top-level category */}
      <Link
        href={"/list/" + group.url}
        className="text-gray-900 flex items-center font-medium transition-colors group-hover:text-red-600"
      >
        <span className="text-nowrap">{group.name}</span>
        <ChevronDown className="inline-block ml-1 text-gray-400 group-hover:text-red-600 transition-colors" size={16} />
      </Link>

      {/* Dropdown */}
      {!!categories?.length && (
        <div className="absolute left-0 top-full mt-2 w-[700px] bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:text-red-500 group-hover:visible transition-all duration-300 z-20">
          <div className="grid grid-cols-3 gap-6 p-6">
            {categories.map((item, index) => (
              <div key={index} className="flex flex-col gap-2">
                {/* Category */}
                <Link
                  href={`/list/${group.url}/${item.category.url}`}
                  className="font-semibold text-gray-900 hover:text-red-600 transition-colors"
                >
                  {item.category.name}
                </Link>

                {/* Sub categories */}
                {item.subCategories?.map((sub, subIndex) => (
                  <Link
                    key={subIndex}
                    href={`/list/${group.url}/${item.category.url}/${sub.url}`}
                    className="text-sm text-gray-500 hover:text-red-600 transition"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </li>
  );
};

export default CategoryNavItem;
