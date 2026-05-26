"use client";

import React from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

function Header() {
  const { user } = useKindeBrowserClient();

  return (
    <div className="h-16 w-full border-b bg-white flex items-center justify-between px-6">

      {/* Left: Page Title */}
      <div>
        <h1 className="text-lg font-semibold text-gray-800">
          Dashboard
        </h1>
        <p className="text-xs text-gray-500">
          Welcome back 👋
        </p>
      </div>

      {/* Center: Search */}
      <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-lg w-80">
        <Search size={16} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search students, attendance..."
          className="bg-transparent outline-none px-2 text-sm w-full"
        />
      </div>

      {/* Right: User */}
      <div className="flex items-center gap-3">

        <Image
          src={user?.picture || "/user.png"}
          alt="profile"
          width={35}
          height={35}
          className="rounded-full"
        />

        <div className="text-right hidden sm:block">
          <p className="text-sm font-medium">
            {user?.given_name || "User"}
          </p>
          <p className="text-xs text-gray-500">
            Admin
          </p>
        </div>

      </div>

    </div>
  );
}

export default Header;