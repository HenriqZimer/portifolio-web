import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { resolveLocale } from './lib/locale';

const COOKIE_NAME = 'i18next';
const ONE_YEAR = 60 * 60 * 24 * 365;

export function middleware(request: NextRequest) {
  const cookieLocale = request.cookies.get(COOKIE_NAME)?.value;
  const acceptLanguage = request.headers.get('accept-language');
  const locale = resolveLocale({ cookieLocale, acceptLanguage });

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-locale', locale);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set('x-locale', locale);

  if (cookieLocale !== locale) {
    response.cookies.set(COOKIE_NAME, locale, {
      path: '/',
      maxAge: ONE_YEAR,
      sameSite: 'lax',
      secure: request.nextUrl.protocol === 'https:',
    });
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
