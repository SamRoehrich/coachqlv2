import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
	// Check if the user is logged in before loading the page
	if (process.env.ENABLE_AUTH_MIDDLEWARE === 'true') {
		if (req.cookies.has('loggedIn')) {
			return NextResponse.next()
		} else {
			return NextResponse.redirect(new URL('/', req.url))
		}
	}
}

export const config = {
	matcher: '/((?!api|_next/static|favicon.ico).*)',
}
