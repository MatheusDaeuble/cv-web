import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import pt from './locales/pt/translation.json';
import en from './locales/en/translation.json';

const resources = { en: { translation: en }, pt: { translation: pt } };

i18n.use(initReactI18next).init({
  resources,
  lng: 'pt',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
