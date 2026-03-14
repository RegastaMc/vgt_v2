"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  Tags,
  ShoppingCart,
  Users,
  BarChart3,
  Settings,
  LogOut,
  Component,
  PictureInPicture2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import Image from "next/image";

const navItems = [
  { name: "Analytics", href: "/admin/id/analytics", icon: LayoutDashboard },
  { name: "Banners", href: "/admin/id/banners", icon: PictureInPicture2 },
  { name: "Products", href: "/admin/id/products", icon: Package },
  { name: "Brands", href: "/admin/id/brands", icon: Component },
  { name: "Categories", href: "/admin/id/categories", icon: Tags },
  { name: "Orders", href: "/admin/id/orders", icon: ShoppingCart },
  { name: "Customers", href: "/admin/id/customers", icon: Users },
  { name: "Settings", href: "/admin/id/settings", icon: Settings },
];

interface NavItemProps {
  mobile?: boolean;
}

export default function Sidebar({ mobile }: NavItemProps) {
  const pathname = usePathname().toLowerCase();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 bg-white border-r lg:flex lg:flex-col">
      {/* Logo / Admin Header */}
      <div className="grid grid-cols-2 px-4 py-6  border-b-2">
        <div className="flex items-center p-1 justify-center">
          <Image src="/images/admin.png" alt="Logo" width={300} height={15} className="border rounded-full w-20 h-20" />
        </div>
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-nowrap font-semibold">VGT Electricals</h1>
          <p className="text-sm">Administrator</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-scroll">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 rounded-sm px-4 py-3  font-medium transition
                ${active ? "bg-green-100 text-green-700" : "text-gray-700 hover:bg-gray-100"}
              `}
            >
              <Icon className="h-4 w-4" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Footer / Logout */}
      <div className="px-4 py-4 border-t">
        <Button
          variant={"default"}
          type="submit"
          className="w-full flex  py-3.5 pl-3 pr-8 tracking-wide cursor-pointer"
          onClick={() => signOut({ redirectTo: "/" })}
        >
          <LogOut className="mr-3 size-5" /> Log Out
        </Button>
      </div>
    </aside>
  );
}
