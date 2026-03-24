import type { Dictionary } from "@/app/[lang]/dictionaries";

export function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">
          {dict.about.title}
        </h2>
        <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
          <p>{dict.about.text}</p>
          <p>{dict.about.text2}</p>
          <p className="font-medium text-gray-900">{dict.about.text3}</p>
        </div>
        <div className="mt-8 space-y-2 text-gray-500 text-sm">
          <p>{dict.about.tech}</p>
          <p>{dict.about.languages}</p>
          <p>{dict.about.location}</p>
        </div>
      </div>
    </section>
  );
}
