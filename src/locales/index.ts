import en from './en';
import es from './es';

export const resources = {
  en: { translation: en },
  es: { translation: es }
} as const;

export type AppLanguage = keyof typeof resources;
