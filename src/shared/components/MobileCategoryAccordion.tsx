"use client";

import Link from "next/link";
import { useState } from "react";
import { TGroupJSON } from "../types/categories";
import { ChevronDown } from "lucide-react";

type Props = {
  categories: TGroupJSON[];
  onClose: () => void;
};

export const MobileCategoryAccordion = ({ categories, onClose }: Props) => {
  const [openGroup, setOpenGroup] = useState<number | null>(null);
  const [openCategory, setOpenCategory] = useState<number | null>(null);

  return (
    <div className=" min-h-screen absolute top-0 z-20 left-0 w-3/4 bg-gray-100 rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg bg-gray-100 text-black font-semibold underline">Explore Categories</h2>
        <button onClick={onClose} className="text-red-500 text-2xl">
          ×
        </button>
      </div>
      <ul className="mt-4 p-2 space-y-2">
        {categories.map((group, gIndex) => (
          <li key={gIndex} className="p-4 space-y-2  ">
            {/* GROUP */}
            <button
              className="w-full py-2 flex justify-between font-semibold text-gray-900"
              onClick={() => setOpenGroup(openGroup === gIndex ? null : gIndex)}
            >
              {group.group.name}
              <span>{openGroup === gIndex ? "−" : <ChevronDown size={16} />}</span>
            </button>

            {/* CATEGORIES */}
            {openGroup === gIndex && (
              <div className="mt-2 ml-2 space-y-2 bg-gray-300 p-1 rounded">
                {group.categories.map((cat, cIndex) => (
                  <div key={cIndex}>
                    <button
                      className="w-full  flex justify-between text-gray-700"
                      onClick={() => setOpenCategory(openCategory === cIndex ? null : cIndex)}
                    >
                      {cat.category.name}
                      {cat.subCategories?.length ? (
                        <span>{openCategory === cIndex ? "−" : <ChevronDown size={16} />}</span>
                      ) : null}
                    </button>

                    {/* SUB CATEGORIES */}
                    {openCategory === cIndex && cat.subCategories?.length && (
                      <div className="ml-2 p-1 rounded-sm bg-gray-400/50 mt-2 flex flex-col gap-1">
                        {cat.subCategories.map((sub, sIndex) => (
                          <Link
                            key={sIndex}
                            href={`/list/${group.group.url}/${cat.category.url}/${sub.url}`}
                            className="text-sm py-1 text-gray-500"
                            onClick={onClose}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
