import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { ServicePageContent } from "@/components/ServicePage";

const base = "https://ai.aglamaz.com";
const slug = "business-automation";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const meta = dict.servicePages.businessAutomation.meta;
  const url = `${base}/${lang}/services/${slug}`;
  return {
    title: meta.title, description: meta.description,
    alternates: { canonical: url, languages: { he: `${base}/he/services/${slug}`, en: `${base}/en/services/${slug}` } },
    openGraph: { title: meta.title, description: meta.description, url, siteName: "Yaakov Aglamaz AI Automation", locale: lang === "he" ? "he_IL" : "en_US", type: "website" },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  return <ServicePageContent data={dict.servicePages.businessAutomation} shared={dict.servicePages} lang={locale} />;
}
