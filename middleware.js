import { NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function middleware(request) {
  const { isAuthenticated } = getKindeServerSession();

  const authenticated = await isAuthenticated();

  const isDashboard = request.nextUrl.pathname.startsWith("/dashboard");

  if (isDashboard && !authenticated) {
    return NextResponse.redirect(new URL("/api/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};