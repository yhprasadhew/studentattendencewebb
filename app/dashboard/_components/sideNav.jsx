"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

import {
  LayoutDashboard,
  GraduationCap,
  ClipboardCheck,
  Settings,
} from "lucide-react";

function SideNav() {
  const { user } = useKindeBrowserClient();

  const menulist = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Students",
      icon: GraduationCap,
      path: "/dashboard/students",
    },
    {
      id: 3,
      name: "Attendance",
      icon: ClipboardCheck,
      path: "/dashboard/attendance",
    },
    {
      id: 4,
      name: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];

  return (
    <div className="h-screen w-64 border-r bg-white shadow-sm flex flex-col">

      {/* Logo */}
      <div className="h-20 flex items-center justify-center border-b">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={120}
          height={40}
          priority
          className="object-contain"
        />
      </div>

      {/* Menu */}
      <div className="flex-1 p-4 space-y-2">

        {menulist.map((item) => (
          <Link
            key={item.id}
            href={item.path}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 transition"
          >
            <item.icon size={20} />
            <span className="text-sm font-medium text-gray-700">
              {item.name}
            </span>
          </Link>
        ))}

      </div>

      {/* User Profile (NO EMAIL) */}
      <div className="border-t p-4 flex items-center gap-3">

        <Image
          src={user?.picture || "/user.png"}
          alt="Profile"
          width={40}
          height={40}
          className="rounded-full"
        />

        <div className="flex flex-col">
          <span className="text-sm font-semibold">
            {user?.given_name || "User"}
          </span>
        </div>

      </div>

    </div>
  );
}

export default SideNav;