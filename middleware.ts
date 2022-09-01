import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Only rewrite files that don't have a file extension - https://github.com/vercel/examples/blob/main/edge-functions/i18n/pages/_middleware.ts#L9
const PUBLIC_FILE = /\.(.*)$/;

const redirectTo = (locale: string, pathname: string, req: NextRequest) => {
    if (locale === 'en') {
        return NextResponse.redirect(new URL(pathname, req.url));
    }

    return NextResponse.redirect(new URL(`/${locale}${pathname}${req.nextUrl.search}`, req.url));
};

// This function can be marked `async` if using `await` inside
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

    // TODO - this is not secure
    if (req.nextUrl.pathname.includes('403')) {
        return undefined;
    }

    return NextResponse.redirect(new URL('/403', req.url));
}
