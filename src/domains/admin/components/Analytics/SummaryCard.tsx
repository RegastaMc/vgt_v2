"use client";

import { useState } from "react";
import { FiStar } from "react-icons/fi";

type Props = {
  title: string;
  value: number;
  Icon: any;
};

export default function SummaryCard({ title, value, Icon }: Props) {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm border p-4 flex flex-col justify-between hover:shadow-md transition">
      <div className="flex justify-between items-center">
        <Icon className="text-2xl text-gray-600" />

        <FiStar
          onClick={() => setFavorite(!favorite)}
          className={`cursor-pointer ${favorite ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
        />
      </div>

      <div className="mt-4">
        <p className="text-gray-500 text-sm">{title}</p>
        <h2 className="text-2xl font-bold">{value}</h2>
      </div>
    </div>
  );
}
