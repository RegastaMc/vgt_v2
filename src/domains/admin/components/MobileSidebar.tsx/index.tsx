"use client";

import { Button } from "@/components/ui/button";
import {
  Component,
  LayoutDashboard,
  LogOut,
  Package,
  PictureInPicture2,
  Settings,
  ShoppingCart,
  Tags,
  Users,
} from "lucide-react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

export default function MobileSidebar({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  if (!open) return null;

  const pathname = usePathname().toLowerCase();

  return (
    <div onClick={() => setOpen(!open)} className="fixed inset-0 z-50 bg-black/50">
      <aside className="absolute left-0 top-0 h-full w-64 bg-white p-6">
        <button
          className="absolute text-sm right-2 top-4 px-1 py-0 text-red-500 divide-y-2 divide-gray-500"
          onClick={() => setOpen(false)}
        >
          Close ✕
        </button>
        <div className="grid grid-cols-2 px-2  border-b-2">
          <div className="flex items-start p-1 justify-start">
            <Image
              src="/images/admin.png"
              alt="Logo"
              width={300}
              height={15}
              className="border rounded-full w-20 h-20"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-nowrap font-semibold">VGT Electricals</h1>
            <p className="text-sm">Administrator</p>
          </div>
        </div>

        <nav className="flex-1 px-2 py-6 space-y-2 overflow-y-scroll">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 rounded-sm px-2 py-3  font-medium transition
                ${active ? "bg-green-100 text-green-700" : "text-gray-700 hover:bg-gray-100"}
              `}
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="px-2 py-4 w-3/4 absolute bottom-0 border-t">
          <Button
            variant={"default"}
            type="submit"
            className="w-full flex  py-3.5 tracking-wide cursor-pointer"
            onClick={() => signOut({ redirectTo: "/" })}
          >
            <LogOut className="mr-3 size-5" /> Log Out
          </Button>
        </div>
      </aside>
    </div>
  );
}
