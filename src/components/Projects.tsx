import type { Dictionary } from "@/app/[lang]/dictionaries";
import type { Locale } from "@/lib/i18n";
import Link from "next/link";

export function Projects({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-14">
          {dict.projects.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {dict.projects.items.map((project, i) => {
            const content = (
              <>
                <span className="text-4xl">{project.icon}</span>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {project.description}
                </p>
                <p className="mt-4 text-sm text-gray-400">{project.tech}</p>
                <div className="mt-4 inline-block bg-teal-50 text-teal-700 text-sm font-medium px-3 py-1.5 rounded-lg">
                  {project.result}
                </div>
                {project.link && (
                  <div className="mt-4 text-teal-700 text-sm font-medium group-hover:underline">
                    {lang === "he" ? "קראו עוד →" : "Read more →"}
                  </div>
                )}
              </>
            );

            if (project.link) {
              return (
                <Link
                  key={i}
                  href={`/${lang}${project.link}`}
                  className="group rounded-2xl border border-gray-100 p-8 hover:border-teal-200 hover:shadow-lg transition-all duration-300 block"
                >
                  {content}
                </Link>
              );
            }

            return (
              <div
                key={i}
                className="group rounded-2xl border border-gray-100 p-8 hover:border-teal-200 hover:shadow-lg transition-all duration-300"
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
