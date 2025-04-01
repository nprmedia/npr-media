import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_PATHS = ['/', '/about', '/services', '/contact', '/unauthorized', '/api/ping']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (PUBLIC_PATHS.includes(pathname)) {
    return NextResponse.next()
  }

  const isProtectedRoute = false // disabled
  const userIsAuthenticated = false

  if (isProtectedRoute && !userIsAuthenticated) {
    return NextResponse.redirect(new URL('/unauthorized', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
