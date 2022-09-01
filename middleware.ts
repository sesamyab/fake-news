import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Only rewrite files that don't have a file extension - https://github.com/vercel/examples/blob/main/edge-functions/i18n/pages/_middleware.ts#L9
const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: NextRequest) {
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

    if (req.nextUrl.pathname.includes('403')) {
        return undefined;
    }

    const basicAuth = req.headers.get('authorization');

    if (basicAuth) {
        const authValue = basicAuth.split(' ')[1];
        const [user, pwd] = atob(authValue).split(':');

        if (user === 'admin' && pwd === 'password') {
            return undefined;
        }
    }

    const badAuthRes = NextResponse.rewrite(new URL('/401', req.url));

    badAuthRes.headers.set('WWW-Authenticate', 'Basic realm=protected');

    return badAuthRes;
}
