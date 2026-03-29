import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ai.aglamaz.com";
  const lastModified = "2026-03-29";
  return [
    { url: `${base}/he`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/en`, lastModified, changeFrequency: "weekly", priority: 0.9 },
  ];
}
