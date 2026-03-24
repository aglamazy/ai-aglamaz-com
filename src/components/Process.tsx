import type { Dictionary } from "@/app/[lang]/dictionaries";

export function Process({ dict }: { dict: Dictionary }) {
  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-14">
          {dict.process.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {dict.process.steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-50 rounded-2xl text-3xl mb-4">
                {step.icon}
              </div>
              <div className="text-sm font-bold text-teal-700 mb-2">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-gray-500 text-sm">
          {dict.process.timeline}
        </p>
      </div>
    </section>
  );
}
