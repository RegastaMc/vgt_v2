"use client";

import SliderForm from "@/domains/admin/components/admin/SliderForm";
import SliderList from "@/domains/admin/components/admin/SliderList";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function SlidersPage() {
  const [sliders, setSliders] = useState<any[]>([]);
  const [editing, setEditing] = useState<any | null>(null);

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
  }, []);

  console.log(`sliders:`, sliders);

  const handleSubmit = async ({ data }: { data: any }) => {
    try {
      const res = await fetch("/api/sliders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const slider = await res.json();
      setSliders([...sliders, slider]);

      if (res.ok) {
        setEditing(null);
        toast.success("Slider created successfully");
      }
    } catch (error) {
      toast.error("Failed to create slider");
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div>
        <h2 className="text-lg font-semibold mb-4">{editing ? "Edit Slider" : "Create Slider"}</h2>

        <SliderForm
          defaultValues={
            editing
              ? {
                  imgUrl: JSON.stringify(editing.imgUrl),
                  link: editing.link,
                  alt: editing.alt,
                  title: editing.msg.title,
                  buttonText: editing.msg.buttonText,
                }
              : undefined
          }
          onSubmit={(data) => {
            if (editing) {
              handleSubmit({ data: { ...data, id: editing.id } });
            } else {
              handleSubmit({ data });
            }
          }}
        />
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">Existing Sliders</h2>

        <SliderList
          sliders={sliders}
          setSliders={setSliders}
          onEdit={setEditing}
          onDelete={(id: string) => setSliders(sliders.filter((s) => s.id !== id))}
        />
      </div>
    </div>
  );
}
