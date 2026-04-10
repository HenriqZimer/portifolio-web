import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import pt from './locales/pt.json';
import en from './locales/en.json';

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        pt: { translation: pt },
        en: { translation: en }
      },
      fallbackLng: 'pt',
      supportedLngs: ['pt', 'en'],
      interpolation: {
        escapeValue: false
      },
      detection: {
        order: ['cookie', 'localStorage', 'navigator', 'htmlTag'],
        caches: ['localStorage', 'cookie'],
        cookieMinutes: 525600,
        cookieDomain: undefined,
        cookieOptions: {
          path: '/',
          sameSite: 'lax'
        }
      }
    });
}

export default i18n;
