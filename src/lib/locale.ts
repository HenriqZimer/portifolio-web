export const SUPPORTED_LOCALES = ['pt', 'en'] as const;

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: SupportedLocale = 'pt';

export function normalizeLocale(input?: string | null): SupportedLocale | undefined {
  if (!input) return undefined;

  const base = input.trim().toLowerCase().split('-')[0];
  if (SUPPORTED_LOCALES.includes(base as SupportedLocale)) {
    return base as SupportedLocale;
  }

  return undefined;
}

export function localeFromAcceptLanguage(headerValue?: string | null): SupportedLocale | undefined {
  if (!headerValue) return undefined;

  const parts = headerValue.split(',').map((item) => item.trim()).filter(Boolean);
  let bestLocale: SupportedLocale | undefined;
  let bestQ = -1;

  for (const part of parts) {
    const [langPart, qPart] = part.split(';');
    const locale = normalizeLocale(langPart);
    if (!locale) continue;

    const q = qPart?.startsWith('q=') ? Number(qPart.slice(2)) : 1;
    if (Number.isFinite(q) && q > bestQ) {
      bestQ = q;
      bestLocale = locale;
    }
  }

  return bestLocale;
}

export function resolveLocale(params: {
  cookieLocale?: string | null;
  acceptLanguage?: string | null;
  fallback?: SupportedLocale;
}): SupportedLocale {
  const fallback = params.fallback ?? DEFAULT_LOCALE;
  return (
    normalizeLocale(params.cookieLocale) ??
    localeFromAcceptLanguage(params.acceptLanguage) ??
    fallback
  );
}
