import type { Dictionary } from "@/app/[lang]/dictionaries";
import type { Locale } from "@/lib/i18n";
import Link from "next/link";

export function Services({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-14">
          {dict.services.title}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {dict.services.items.map((service, i) => (
            <Link
              key={i}
              href={`/${lang}${service.link}`}
              className="group text-center block hover:bg-white rounded-2xl p-6 transition-all duration-300"
            >
              <span className="text-4xl">{service.icon}</span>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="mt-4 text-teal-700 text-sm font-medium group-hover:underline">
                {dict.services.learnMore}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
