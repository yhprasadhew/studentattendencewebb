import React from "react";
import Image from "next/image";

import {
  IdCardLanyard,
  GraduationCap,
  Hand,
  Settings,
} from "lucide-react";

function SideNav() {

  const menulist = [
    {
      id: 1,
      name: "Dashboard",
      icon: IdCardLanyard,
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
      icon: Hand,
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
    <div className="w-64 h-screen border-r shadow-md p-5">

      {/* Logo */}
      <div className="flex items-center justify-center mb-6">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={120}
          height={35}
          priority
        />
      </div>

      <hr className="my-4 border-gray-300" />

      {/* Menu */}
      <div className="mt-5 flex flex-col gap-4">

        {menulist.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            <item.icon size={20} />
            <span>{item.name}</span>
          </div>
        ))}

      </div>

    </div>
  );
}

export default SideNav;