import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Only rewrite files that don't have a file extension - https://github.com/vercel/examples/blob/main/edge-functions/i18n/pages/_middleware.ts#L9
const PUBLIC_FILE = /\.(.*)$/;

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
    // TODO - can now use matchers, so don't need all this custom complexity

    // Bail out from non-page routes
    if (PUBLIC_FILE.test(req.nextUrl.pathname)) {
        return undefined;
    }

    if (req.nextUrl.pathname.includes('/api/')) {
        return undefined;
    }
    if (req.nextUrl.pathname.includes('site.webmanifest')) {
        return undefined;
    }

    // TODO - this is not secure! see how it's done on other libraries
    if (req.nextUrl.pathname.includes('403')) {
        return undefined;
    }

    const basicAuth = req.headers.get('authorization');

    if (basicAuth) {
        const authValue = basicAuth.split(' ')[1];
        const [user, pwd] = atob(authValue).split(':');

        // TODO - env vars
        if (user === 'admin' && pwd === 'password') {
            return undefined;
        }
    }

    return NextResponse.rewrite(new URL('/403', req.url));
}

/*

TODO - learn this so can hopefully just match on real pages and not assets

export const config = {
  matcher: '/',
}


*/
