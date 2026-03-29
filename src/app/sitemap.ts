import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://agents-head.com";
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
    { url: `${base}/he/services/business-automation`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/en/services/business-automation`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/he/services/api-integrations`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/en/services/api-integrations`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/he/services/ai-agents`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/en/services/ai-agents`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/he/services/legacy-modernization`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/en/services/legacy-modernization`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
