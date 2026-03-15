import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Only set locale cookie if it doesn't already exist (user hasn't manually toggled)
  if (!request.cookies.has("locale")) {
    const acceptLanguage = request.headers.get("accept-language") || "";
    // Default to Spanish unless browser explicitly prefers English
    const prefersEnglish = acceptLanguage
      .split(",")
      .some((lang) => lang.trim().toLowerCase().startsWith("en"));
    const locale = prefersEnglish ? "en" : "es";
    response.cookies.set("locale", locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|images|fonts).*)"],
};
