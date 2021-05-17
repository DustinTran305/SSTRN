import I18n from 'i18n-js';

import en from './locales/en';
import fr from './locales/fr';

I18n.fallbacks = true;
I18n.defaultLocale = 'en';

I18n.translations = {
  fr,
  en,
};

I18n.locale = 'en';
export function strings(name, params = {}) {
  return I18n.t(name, params);
}

export default I18n;
