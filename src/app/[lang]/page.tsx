import type { Locale } from "@/lib/i18n";
import { getDictionary } from "./dictionaries";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { ChatWidget } from "@/components/Contact";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Yaakov Aglamaz AI Automation",
    url: `https://ai.aglamaz.com/${locale}`,
    description: dict.meta.description,
    founder: {
      "@type": "Person",
      name: "Yaakov Aglamaz",
      jobTitle: "Senior Full-Stack Developer & AI Automation Specialist",
    },
    areaServed: locale === "he" ? "IL" : "Worldwide",
    serviceType: ["AI Automation", "Business Process Automation", "AI Agents", "Chatbots", "API Integration"],
    inLanguage: locale === "he" ? "he" : "en",
    knowsLanguage: ["he", "en"],
    address: {
      "@type": "PostalAddress",
      addressCountry: "IL",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero dict={dict} lang={locale} />
      <Projects dict={dict} lang={locale} />
      <Services dict={dict} />
      <About dict={dict} />
      <Process dict={dict} />
      <Pricing dict={dict} />
      <ChatWidget />
    </>
  );
}
