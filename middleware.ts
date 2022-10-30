import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AUTH_ROUTER } from "./router/auth";
import { MENU_ROUTE } from "./router/menu";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const baseUrl = request.url;
  const isRoute = (url: string) => {
    return request.nextUrl.pathname.startsWith(url);
  };
  // User
  const token = request.cookies.get("token");

  // Set headers
  request.headers.set("Authorization", `Bearer ${token}`);

  // Redirect if authenticated
  if (token && isRoute(AUTH_ROUTER.login)) {
    return NextResponse.redirect(new URL(MENU_ROUTE.home, baseUrl));
  }

  //Redirect to login if not authenticated
  if (!token && !isRoute(AUTH_ROUTER.login)) {
    return NextResponse.redirect(new URL(AUTH_ROUTER.login, baseUrl));
  }

  // Verify token
  // try {
  //   await verify(token, secret);
  //   return NextResponse.next();
  // } catch (error) {
  //   return NextResponse.redirect(AUTH_ROUTER.login);
  // }
}

export const config = {
  matcher: ["/deposit/:path*", "/order/:path*", "/login/:path*"],
};
