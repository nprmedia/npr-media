// middleware.ts

import { NextRequest, NextResponse } from 'next/server'

// ─── Public Routes ───────────────────────────────────────────────
// These paths do not require auth or special handling
const PUBLIC_PATHS = ['/', '/about', '/services', '/contact', '/unauthorized', '/api/ping']

// ─── Main Middleware Logic ───────────────────────────────────────
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 1. Allow all public paths through
  if (PUBLIC_PATHS.includes(pathname)) {
    return NextResponse.next()
  }

  // 2. Future: Authenticated Route Protection (stubbed)
  const isProtectedRoute =
    pathname.startsWith('/admin') ||
    pathname.startsWith('/client') ||
    pathname.startsWith('/dashboard')

  const userIsAuthenticated = false // 🔐 TODO: Replace with real auth check

  if (isProtectedRoute && !userIsAuthenticated) {
    return NextResponse.redirect(new URL('/unauthorized', request.url))
  }

  // 3. Future: A/B testing, IP block, geo redirect, etc
  // Example:
  // const ip = request.ip
  // if (blockedIps.includes(ip)) return NextResponse.redirect('/blocked')

  return NextResponse.next()
}

// ─── Config: Apply Middleware Only to Relevant Routes ─────────────
export const config = {
  matcher: [
    /*
      Match all routes except:
      - static files
      - system assets (_next)
      - images or public assets
    */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(svg|jpg|png|ico|txt)).*)',
  ],
}
