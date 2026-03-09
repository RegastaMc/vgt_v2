"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Analytics", href: "/admin/id/analytics" },
  { name: "Products", href: "/admin/id/products" },
  { name: "Categories", href: "/admin/id/categories" },
  { name: "Orders", href: "/admin/id/orders" },
  { name: "Customers", href: "/admin/id/customers" },
  { name: "Settings", href: "/admin/id/settings" },
];

export default function MobileSidebar({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  if (!open) return null;

  const pathname = usePathname().toLowerCase();

  const isActive = (href: string) => pathname === href.toLowerCase();

  return (
    <div onClick={() => setOpen(!open)} className="fixed inset-0 z-50 bg-black/50">
      <aside className="absolute left-0 top-0 h-full w-64 bg-white p-6">
        <button className="mb-6 text-sm text-red-500 divide-y-2 divide-gray-500" onClick={() => setOpen(false)}>
          Close ✕
        </button>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className={
                isActive(item.href)
                  ? "block rounded-md px-4 py-2 text-sm font-medium text-green-700 bg-green-100"
                  : "block rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              }
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  );
}
