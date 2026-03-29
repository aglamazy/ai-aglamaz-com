import { list, put, head } from "@vercel/blob";
import type { Locale } from "@/lib/i18n";

const BLOB_PREFIX = "dictionaries";

/**
 * Get dictionary content for a locale.
 * Reads from Vercel Blob first, falls back to local JSON files.
 */
export async function getContent(locale: Locale) {
  // Try Blob first (only works when BLOB_READ_WRITE_TOKEN is set)
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    try {
      const blobKey = `${BLOB_PREFIX}/${locale}.json`;
      const { blobs } = await list({ prefix: blobKey, limit: 1 });
      if (blobs.length > 0) {
        const res = await fetch(blobs[0].url);
        if (res.ok) {
          return await res.json();
        }
      }
    } catch {
      // Fall through to local files
    }
  }

  // Fallback: local JSON files
  const dictionaries = {
    he: () => import("@/app/[lang]/dictionaries/he.json").then((m) => m.default),
    en: () => import("@/app/[lang]/dictionaries/en.json").then((m) => m.default),
  };
  return dictionaries[locale]();
}

/**
 * Save dictionary content to Vercel Blob.
 */
export async function saveContent(locale: Locale, data: Record<string, unknown>) {
  const blobKey = `${BLOB_PREFIX}/${locale}.json`;
  await put(blobKey, JSON.stringify(data, null, 2), {
    access: "public",
    addRandomSuffix: false,
    contentType: "application/json",
  });
}

/**
 * Get raw dictionary from local JSON (for admin defaults).
 */
export async function getLocalDictionary(locale: Locale) {
  const dictionaries = {
    he: () => import("@/app/[lang]/dictionaries/he.json").then((m) => m.default),
    en: () => import("@/app/[lang]/dictionaries/en.json").then((m) => m.default),
  };
  return dictionaries[locale]();
}
