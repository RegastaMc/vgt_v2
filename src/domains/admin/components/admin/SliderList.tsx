"use client";

import { useState } from "react";
import { TSlide } from "@/shared/types/common";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import toast from "react-hot-toast";

type SliderListProps = {
  sliders?: TSlide[];
  setSliders?: (sliders: any[] | ((items: any[]) => any[])) => void;
  onEdit: (slider: any) => void;
  onDelete: (id: string) => Promise<void> | void;
};

function SortableItem({
  slider,
  onEdit,
  onDelete,
}: {
  slider: any;
  onEdit: (slider: any) => void;
  onDelete: (id: string) => Promise<void> | void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: slider?.id });

  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  let imgUrl = "";
  try {
    imgUrl = slider?.imgUrl ? JSON.parse(slider.imgUrl).url : "";
  } catch {
    imgUrl = "";
  }

  const handleDelete = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/sliders?id=${slider.id}`, { method: "DELETE" });
      if (!res.ok) {
        toast.error("Failed to delete banner");
      }
      {
        if (res.ok) {
          toast.success("Banner deleted successfully");
        }
      }
      onDelete(slider.id);
    } finally {
      setLoading(false);
      setShowConfirm(false);
    }
  };

  return (
    <>
      <div
        ref={setNodeRef}
        style={style}
        className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
      >
        <div className="flex items-center gap-4">
          {/* Drag Handle */}
          <div {...attributes} {...listeners} className="cursor-grab text-gray-400 text-lg select-none">
            ☰
          </div>

          <img src={imgUrl} alt={slider?.msg?.title || "banner"} className="w-16 h-16 object-cover rounded" />

          <div>
            <p className="font-medium">{slider?.msg?.title}</p>
            <p className="text-sm text-gray-500">{slider?.url}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onEdit(slider)}
            className="text-sm px-3 py-1 border rounded cursor-pointer hover:bg-gray-100"
          >
            Edit
          </button>

          <button
            onClick={() => setShowConfirm(true)}
            className="text-sm px-3 py-1 border border-red-500 text-red-600 rounded cursor-pointer hover:bg-red-50"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Delete Confirmation Popup */}
      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-lg p-6 w-[350px] shadow-lg">
            <h2 className="text-lg font-semibold mb-2">Delete Banner</h2>

            <p className="text-sm text-gray-600 mb-4">
              Are you sure you want to delete this banner? This action cannot be undone.
            </p>

            <div className="flex justify-end gap-2">
              <button onClick={() => setShowConfirm(false)} className="px-3 py-1 border rounded hover:bg-gray-100">
                Cancel
              </button>

              <button
                onClick={handleDelete}
                disabled={loading}
                className="px-3 py-1 bg-red-500 cursor-pointer text-white rounded hover:bg-red-600"
              >
                {loading ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function SliderList({ sliders, setSliders, onEdit, onDelete }: SliderListProps) {
  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={(event) => {
        const { active, over } = event;

        if (!over || active.id === over.id || !setSliders) return;

        setSliders((items: any[]) => {
          const oldIndex = items.findIndex((i) => i.id === active.id);
          const newIndex = items.findIndex((i) => i.id === over.id);

          return arrayMove(items, oldIndex, newIndex);
        });
      }}
    >
      <SortableContext
        items={sliders?.map((s) => s.id).filter((id) => id !== undefined) || []}
        strategy={verticalListSortingStrategy}
      >
        <div className="space-y-3">
          {sliders?.map((slider) => (
            <SortableItem key={slider.id} slider={slider} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
