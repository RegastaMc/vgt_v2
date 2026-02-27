"use client";
import React, { useEffect, useState } from "react";
import { DynamicCards } from "../../components/DynamicCategories";
import { getAllCategories, TGetAllCategories } from "@/actions/category/category";

export default function DynamicSection() {
  const [allCategories, setAllCategories] = useState<TGetAllCategories[]>([]);

  const getData = async () => {
    const data = await getAllCategories();
    if (data.res) setAllCategories(data.res);
  };

  useEffect(() => {
    getData();
  }, []);

  const groups: TGetAllCategories[] = [];
  const categories: TGetAllCategories[] = [];

  if (allCategories.length > 0) {
    allCategories.forEach((cat) => {
      if (cat.parentID) {
        categories.push(cat);
        return;
      } else if (cat.products.length > 0) {
      }

      groups.push(cat);
    });
  }

  const groupHasProducts = (groupId: string) =>
    categories.some((cat) => cat.parentID === groupId && cat.products.length > 0);

  return (
    <div>
      {" "}
      {categories
        .filter((group) => groupHasProducts(group.id))
        .map((group) => (
          <DynamicCards title={"Explore " + group.name} key={group.id} name={group.name} />
        ))}
    </div>
  );
}
