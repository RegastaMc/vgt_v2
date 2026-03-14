"use client";

import { useState } from "react";
import MobileSidebar from "../MobileSidebar.tsx";
import AdminProfile from "../AdminProfile";
import { MenuIcon } from "lucide-react";
export default function Topbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MobileSidebar open={open} setOpen={setOpen} />
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between bg-white border-b px-4 lg:px-6">
        <button className="lg:hidden text-gray-700" onClick={() => setOpen(true)}>
          <MenuIcon className="w-8 h-8" />
        </button>

        <input
          type="text"
          placeholder="Search..."
          className="hidden sm:block w-96 rounded-md border px-3 py-1.5 text-sm"
        />

        <AdminProfile />
      </header>
    </>
  );
}
