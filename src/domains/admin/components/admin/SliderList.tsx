"use client";

import { TSlide } from "@/shared/types/common";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type SliderListProps = {
  slider?: TSlide;
  sliders?: TSlide[];
  setSliders?: (sliders: any[] | ((items: any[]) => any[])) => void;
  onEdit: (slider: any) => void;
  onDelete: (id: string) => void;
};

function SortableItem({ slider, onEdit, onDelete }: SliderListProps) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: slider?.id || "" });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  console.log(`images:`, slider?.imgUrl?.url);

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
    >
      <div className="flex items-center gap-4">
        <img src={slider?.imgUrl?.url} alt={slider?.msg?.title} className="w-16 h-16 object-cover rounded" />
        <div>
          <p className="font-medium">{slider?.msg?.title}</p>
          <p className="text-sm text-gray-500">{slider?.url}</p>
        </div>
      </div>

      <div className="flex gap-2">
        <button onClick={() => onEdit(slider)} className="text-sm">
          Edit
        </button>
        <button onClick={() => onDelete(slider?.id || "")} className="text-sm text-red-600">
          Delete
        </button>
      </div>
    </div>
  );
}

export default function SliderList({ sliders, setSliders, onEdit, onDelete }: SliderListProps) {
  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={(event) => {
        const { active, over } = event;
        if (over && active.id !== over.id && setSliders) {
          setSliders((items: any[]) => {
            const oldIndex = items.findIndex((i) => i.id === active.id);
            const newIndex = items.findIndex((i) => i.id === over.id);
            return arrayMove(items, oldIndex, newIndex);
          });
        }
      }}
    >
      <SortableContext
        items={sliders?.map((s) => s.id).filter((id): id is string => Boolean(id)) || []}
        strategy={verticalListSortingStrategy}
      >
        <div className="space-y-3">
          {sliders?.map((slider: TSlide, index: number) => (
            <SortableItem key={index} slider={slider} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
