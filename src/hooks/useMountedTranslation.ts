import type { TOptions } from 'i18next';

import { useTranslation } from 'react-i18next';

import type en from '../locales/en.json';
import useIsMounted from './useIsMounted';

type TranslationSchema = typeof en;

type NestedKeyOf<T> = T extends object
  ? {
      [K in Extract<keyof T, string>]: T[K] extends object
        ? K | `${K}.${NestedKeyOf<T[K]>}`
        : K;
    }[Extract<keyof T, string>]
  : never;

export type TranslationKey = NestedKeyOf<TranslationSchema>;

export default function useMountedTranslation() {
  const { t, i18n } = useTranslation();
  const isMounted = useIsMounted();

  const mt = <T>(key: TranslationKey, fallback: T, options?: TOptions): T => {
    return isMounted ? (t(key as string, options) as T) : fallback;
  };

  return { mt, i18n, isMounted };
}
