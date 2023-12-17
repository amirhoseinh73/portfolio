import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"
import type { NextRequest } from "next/server"
import { defaultLocale, locales } from "./helpers/config"

function getLocale(request: NextRequest) {
  const headers = { "accept-language": "en-US,en;q=0.5" }
  const languages = new Negotiator({ headers }).languages()

  return match(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`

  return Response.redirect(request.nextUrl)
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
}
