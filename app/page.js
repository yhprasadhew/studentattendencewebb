"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/api/auth/login?post_login_redirect_url=/dashboard");
  }, [router]);

  return <div />;
}