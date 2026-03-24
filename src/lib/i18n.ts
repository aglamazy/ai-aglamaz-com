export const locales = ["he", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "he";

export function isValidLocale(lang: string): lang is Locale {
  return locales.includes(lang as Locale);
}
