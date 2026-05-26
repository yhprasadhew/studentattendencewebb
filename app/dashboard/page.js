"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export default function DashboardPage() {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
