"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { LogOut } from "lucide-react";

export default function AdminProfile() {
  const [open, setOpen] = useState(false);

  const { data: user } = useSession();

  async function handleLogout() {
    await fetch("/api/logout", { method: "POST" });
    window.location.href = "/login";
  }

  return (
    <div className="relative">
      {/* Avatar Button */}
      <button onClick={() => setOpen(!open)} className="flex items-center gap-2">
        <img
          src={user?.user.image || "/avatar.png"}
          alt="avatar"
          className="w-10 h-10 rounded-full object-cover border"
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-48 bg-white shadow-lg rounded-lg border">
          <div className="p-3 border-b">
            <p className="text-sm font-semibold">{user?.user.name}</p>
            <p className="text-xs text-gray-500">{user?.user.email}</p>
          </div>

          <div className="flex flex-col p-4 space-y-1">
            <Link href="/admin/dashboard" className="px-4 py-2 text-sm hover:bg-gray-100">
              Dashboard
            </Link>

            <Link href="/admin/profile" className="px-4 py-2 text-sm hover:bg-gray-100">
              Edit Profile
            </Link>

            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm text-left flex items-center gap-2 rounded-sm bg-red-300 hover:text-red-500 hover:scale-105 cursor-pointer text-red-500"
            >
              <LogOut className="mr-3 size-5" /> Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
