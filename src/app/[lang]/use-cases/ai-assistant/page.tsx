import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/app/[lang]/dictionaries";
import Link from "next/link";

const base = "https://agents-head.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  const uc = dict.useCaseAiAssistant;
  const url = `${base}/${locale}/use-cases/ai-assistant`;

  return {
    title: uc.meta.title,
    description: uc.meta.description,
    alternates: {
      canonical: url,
      languages: { he: `${base}/he/use-cases/ai-assistant`, en: `${base}/en/use-cases/ai-assistant` },
    },
    openGraph: {
      title: uc.meta.title,
      description: uc.meta.description,
      url,
      siteName: "Yaakov Aglamaz AI Automation",
      locale: locale === "he" ? "he_IL" : "en_US",
      type: "article",
    },
  };
}

export default async function AiAssistantPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  const uc = dict.useCaseAiAssistant;
  const shared = dict.useCases;

  return (
    <div className="pt-20">
      {/* Back link */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8">
        <Link
          href={`/${locale}`}
          className="text-teal-700 hover:text-teal-900 text-sm font-medium"
        >
          &larr; {shared.backLink}
        </Link>
      </div>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="inline-block bg-teal-50 text-teal-800 text-sm font-medium px-3 py-1 rounded-full">
            {uc.industry}
          </span>
          <span className="inline-block bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
            {uc.timeline}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          {uc.title}
        </h1>
        <p className="text-xl text-gray-600">{uc.subtitle}</p>
      </section>

      {/* Challenge */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {uc.challenge.title}
          </h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            {uc.challenge.text}
          </p>
          <ul className="space-y-3">
            {uc.challenge.painPoints.map((point: string, i: number) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-red-500 mt-0.5 shrink-0">&#10005;</span>
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {uc.solution.title}
          </h2>
          <p className="text-gray-700 mb-10 leading-relaxed">
            {uc.solution.text}
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {uc.solution.features.map(
              (f: { title: string; description: string }, i: number) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-100 p-6 hover:border-teal-200 hover:shadow-md transition-all"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {f.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {f.description}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-teal-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {uc.results.title}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {uc.results.metrics.map(
              (m: { value: string; label: string }, i: number) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-teal-800 mb-1">
                    {m.value}
                  </div>
                  <div className="text-sm text-gray-600">{m.label}</div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {uc.tech.title}
          </h2>
          <div className="flex flex-wrap gap-2">
            {uc.tech.items.map((item: string, i: number) => (
              <span
                key={i}
                className="bg-gray-100 text-gray-800 text-sm font-medium px-4 py-2 rounded-lg"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">{shared.ctaTitle}</h2>
          <p className="text-gray-300 mb-8">{shared.ctaText}</p>
          <Link
            href={`/${locale}#contact`}
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            {shared.ctaButton}
          </Link>
        </div>
      </section>
    </div>
  );
}
