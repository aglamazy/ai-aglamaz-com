import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ai.aglamaz.com";
  const lastModified = "2026-03-29";
  return [
    { url: `${base}/he`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/en`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/he/use-cases/document-automation`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/en/use-cases/document-automation`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/he/use-cases/ai-chatbot`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/en/use-cases/ai-chatbot`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/he/use-cases/ai-assistant`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/en/use-cases/ai-assistant`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
