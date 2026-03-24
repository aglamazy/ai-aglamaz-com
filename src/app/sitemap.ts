import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ai.aglamaz.com";
  return [
    { url: `${base}/he`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/en`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
  ];
}
