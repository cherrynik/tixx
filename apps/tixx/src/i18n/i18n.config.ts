import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

import { en, ru } from './resources';

export const defaultNS = 'common';

i18next
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    defaultNS,
    fallbackLng: 'en',
    ns: Object.keys(en),
    resources: {
      en,
      ru,
    },

    debug: true,
    saveMissing: true,

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    }
  });
