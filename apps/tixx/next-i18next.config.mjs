import HttpBackend from 'i18next-http-backend/cjs'
import ChainedBackend from 'i18next-chained-backend'
import LocalStorageBackend from 'i18next-localstorage-backend'

/**
 * @type {import('next-i18next').UserConfig}
 **/
export const i18nConfig = {
  backend: {
    backendOptions: [
      { expirationTime: 60 * 60 * 1000 }, // 1 hour
      {
        /* loadPath: 'https:// somewhere else' */
      },
    ],
    backends:
      typeof window === 'undefined' ? [] : [LocalStorageBackend, HttpBackend],
  },
  use: typeof window === 'undefined' ? [] : [ChainedBackend],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
  },
  localePath: './public/locales',
};

export default i18nConfig;
