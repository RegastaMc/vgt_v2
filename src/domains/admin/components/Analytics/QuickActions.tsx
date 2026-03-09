"use client";

import { useRouter } from "next/navigation";

export default function QuickActions() {
  const router = useRouter();

  const actions = [
    {
      label: "Add Product",
      path: "/admin/id/products",
    },
    {
      label: "View Orders",
      path: "/admin/id/orders",
    },
    {
      label: "Categories",
      path: "/admin/id/categories",
    },
    {
      label: "Customers",
      path: "/admin/id/customers",
    },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {actions.map((action) => (
          <button
            key={action.label}
            onClick={() => router.push(action.path)}
            className="bg-gray-700 cursor-pointer text-white rounded-lg py-3 hover:bg-gray-800 transition"
          >
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
}
