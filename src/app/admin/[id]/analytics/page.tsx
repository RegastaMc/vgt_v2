"use client";

import DashboardSwiper from "@/domains/admin/components/Analytics/DashboardSwiper";
import QuickActions from "@/domains/admin/components/Analytics/QuickActions";
import SummaryCard from "@/domains/admin/components/Analytics/SummaryCard";
import VisitorsChart from "@/domains/admin/components/Analytics/VisitorsChart";
import { FiPackage, FiGrid, FiShoppingCart, FiUsers } from "react-icons/fi";

export default function DashboardPage() {
  const summary = [
    {
      title: "Products",
      value: 2,
      icon: FiPackage,
    },
    {
      title: "Categories",
      value: 18,
      icon: FiGrid,
    },
    {
      title: "Orders",
      value: 0,
      icon: FiShoppingCart,
    },
    {
      title: "Customers",
      value: 0,
      icon: FiUsers,
    },
  ];

  return (
    <div className="p-4  space-y-4">
      <h1 className="text-2xl md:text-3xl font-bold">Admin Dashboard</h1>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {summary.map((item) => (
          <SummaryCard key={item.title} title={item.title} value={item.value} Icon={item.icon} />
        ))}
      </div>

      {/* QUICK ACTIONS */}
      <QuickActions />

      {/* SWIPER SHORTCUTS */}

      {/* VISITORS ANALYTICS */}
      <VisitorsChart />
    </div>
  );
}
