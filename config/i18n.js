import i18n from 'i18n-js';
import * as Localization from 'expo-localization';

import en from '../locales/en_US';
import de from '../locales/de_DE';

i18n.translations = { en, de };

let deviceLocale = Localization.locale;

// simplify locales by only using the lang code
if (deviceLocale.includes('-')) {
  // eslint-disable-next-line prefer-destructuring
  deviceLocale = deviceLocale.split('-')[0];
}

i18n.defaultLocale = 'en';
i18n.locale = deviceLocale;
// i18n.locale = 'zh';
i18n.fallbacks = true;

export default i18n;
