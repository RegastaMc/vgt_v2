"use client";

import { getAllCategories } from "@/actions/category/category";
import { Button } from "@/components/ui/button";
import BannerModal from "@/domains/admin/components/admin/BannerModal";
import SliderForm from "@/domains/admin/components/admin/SliderForm";
import SliderList from "@/domains/admin/components/admin/SliderList";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function SlidersPage() {
  const [sliders, setSliders] = useState<any[]>([]);
  const [editing, setEditing] = useState<any | null>(null);
  const [open, setOpen] = useState(false);
  const [selectedBanner, setSelectedBanner] = useState(null);
  const [categories, setCategories] = useState<any[]>([]);

  function openCreate() {
    setSelectedBanner(null);
    setOpen(true);
  }

  function openEdit(banner: any) {
    setSelectedBanner(banner);
    setOpen(true);
  }

  useEffect(() => {
    async function fetchSliders() {
      try {
        const res = await fetch("/api/sliders");
        const sliders = await res.json();
        setSliders(sliders);
      } catch (error) {
        toast.error("Failed to load sliders");
      }
    }
    fetchSliders();
    getAllCategories().then((res) => {
      if (res.res) setCategories(res.res);
    });
  }, []);

  return (
    <div className="">
      <div>
        <div className="flex flex-col justify-between mb-6">
          <div className="flex justify-between ">
            <h1 className="text-2xl font-bold mb-6">Manage Banners</h1>
            <div className="flex items-center cursor-pointer gap-4">
              <Button variant="default" className="cursor-pointer" onClick={openCreate}>
                + Create New Banner
              </Button>
            </div>
          </div>

          <hr className="border-t border-gray-300 w-full " />
        </div>
        <h2 className="text-lg font-semibold mb-4">Existing Banners</h2>

        <SliderList
          sliders={sliders}
          setSliders={setSliders}
          onEdit={(slider: any) => openEdit(slider)}
          onDelete={(id: string) => setSliders(sliders.filter((s) => s.id !== id))}
        />

        <BannerModal open={open} setOpen={setOpen} banner={selectedBanner} categories={categories} />
      </div>
    </div>
  );
}
