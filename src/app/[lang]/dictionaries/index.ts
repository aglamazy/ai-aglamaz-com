import type { Locale } from "@/lib/i18n";
import { getContent } from "@/lib/content";

const localDictionaries = {
  he: () => import("./he.json").then((m) => m.default),
  en: () => import("./en.json").then((m) => m.default),
};

export const getDictionary = async (locale: Locale) => getContent(locale);

/** Local-only dictionary (for type inference and admin defaults) */
export const getLocalDictionary = async (locale: Locale) => localDictionaries[locale]();

export type Dictionary = Awaited<ReturnType<typeof getLocalDictionary>>;
