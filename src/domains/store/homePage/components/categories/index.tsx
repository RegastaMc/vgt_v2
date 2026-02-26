"use client";

import { useEffect, useState } from "react";

import { getAllCategoriesJSON } from "@/actions/category/category";
import { MobileCategoryAccordion } from "@/shared/components/MobileCategoryAccordion";
import { SK_Box } from "@/shared/components/UI/skeleton";
import { TGroupJSON } from "@/shared/types/categories";

import CategoryNavItem from "./catListItem";
export const HomeCategoryNavbar = () => {
  const [categories, setCategories] = useState<TGroupJSON[]>([]);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await getAllCategoriesJSON();
      if (result.res) setCategories(result.res);
    };
    fetchCategories();
  }, []);

  return (
    <>
      {/* MOBILE */}
      <div className="lg:hidden px-4">
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="flex items-center gap-2 font-medium text-gray-800"
        >
          ☰ Categories
        </button>

        {mobileOpen && <MobileCategoryAccordion categories={categories} onClose={() => setMobileOpen(false)} />}
      </div>

      {/* DESKTOP */}
      <nav className="hidden lg:block bg-white  relative z-30">
        <ul className="flex items-center gap-2 px-6">
          {!categories.length ? (
            <div className="flex gap-4 py-4">{Skeletons()}</div>
          ) : (
            categories.map((item, index) => <CategoryNavItem key={index} categoryData={item} />)
          )}
        </ul>
      </nav>
    </>
  );
};

const Skeletons = () => Array.from({ length: 6 }).map((_, i) => <SK_Box key={i} width="80px" height="20px" />);
