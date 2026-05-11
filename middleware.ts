/**
 * Edge middleware — gates the admin panel.
 *
 * Behavior:
 *   - All `/admin/*` routes require the `alabs_admin` session cookie.
 *   - `/admin/login` and `/admin/logout` are exempt (otherwise users could never reach the form).
 *   - Public `/api/admin/*` routes (login/logout/me) are NOT gated here — those return 401 themselves.
 *
 * Verification depth:
 *   We only check cookie *presence* in the edge layer. Full JWT verification happens in
 *   page Server Components / API route handlers via `readSession()` in lib/auth. This split
 *   keeps the middleware fast and Edge-runtime-safe (no node-only crypto imports).
 */
import { NextResponse, type NextRequest } from "next/server";

const COOKIE_NAME = "alabs_admin";

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  // Allow the login screen and logout endpoint through unconditionally.
  if (pathname === "/admin/login" || pathname === "/admin/logout") {
    return NextResponse.next();
  }

  if (pathname.startsWith("/admin")) {
    const hasSession = req.cookies.has(COOKIE_NAME);
    if (!hasSession) {
      const loginUrl = new URL("/admin/login", req.url);
      // Preserve where the user was heading so we can redirect back after login.
      loginUrl.searchParams.set("from", pathname + search);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  // Run on every /admin* path (page or API). Excludes static assets.
  matcher: ["/admin/:path*"],
};
