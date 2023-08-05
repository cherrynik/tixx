// import the original type declarations
import 'i18next';
import { defaultNS } from './src/i18n/i18n.config';
import { en as referenceResources } from './src/i18n/resources';

declare module 'i18next' {
  interface CustomTypeOptions {
    fallbackNs: 'common',
    defaultNS: typeof defaultNS;
    resources: typeof referenceResources;
  }
}
