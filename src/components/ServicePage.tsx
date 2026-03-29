import Link from "next/link";
import type { Locale } from "@/lib/i18n";

type ServicePageData = {
  title: string;
  subtitle: string;
  description: string;
  audience: string[];
  steps: { title: string; description: string }[];
  exampleItems: string[];
  relatedLinks: { title: string; href: string }[];
};

type SharedLabels = {
  backLink: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  whoIsItFor: string;
  howItWorks: string;
  examples: string;
  relatedCases: string;
};

export function ServicePageContent({
  data,
  shared,
  lang,
}: {
  data: ServicePageData;
  shared: SharedLabels;
  lang: Locale;
}) {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8">
        <Link
          href={`/${lang}`}
          className="text-teal-700 hover:text-teal-900 text-sm font-medium"
        >
          &larr; {shared.backLink}
        </Link>
      </div>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          {data.title}
        </h1>
        <p className="text-xl text-gray-600 mb-6">{data.subtitle}</p>
        <p className="text-gray-700 leading-relaxed">{data.description}</p>
      </section>

      {/* Who is it for */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {shared.whoIsItFor}
          </h2>
          <ul className="space-y-3">
            {data.audience.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-teal-600 mt-0.5 shrink-0">&#10003;</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {shared.howItWorks}
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {data.steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="text-3xl font-bold text-teal-200 mb-2">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {shared.examples}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {data.exampleItems.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-lg border border-gray-100 p-4 text-gray-700 text-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related cases */}
      {data.relatedLinks.length > 0 && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {shared.relatedCases}
            </h2>
            <div className="flex flex-wrap gap-4">
              {data.relatedLinks.map((link, i) => (
                <Link
                  key={i}
                  href={`/${lang}${link.href}`}
                  className="rounded-lg border border-teal-200 px-5 py-3 text-teal-700 font-medium hover:bg-teal-50 transition-colors"
                >
                  {link.title} &rarr;
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">{shared.ctaTitle}</h2>
          <p className="text-gray-300 mb-8">{shared.ctaText}</p>
          <Link
            href={`/${lang}#contact`}
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            {shared.ctaButton}
          </Link>
        </div>
      </section>
    </div>
  );
}
