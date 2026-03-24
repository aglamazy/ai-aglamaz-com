import type { Dictionary } from "@/app/[lang]/dictionaries";

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-cyan-50 -z-10" />
      <div className="absolute top-20 end-10 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 start-10 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
          {dict.hero.headline}
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {dict.hero.subheadline}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-teal-700 text-white font-medium rounded-lg hover:bg-teal-800 transition-colors text-base"
          >
            {dict.hero.cta_primary} &rarr;
          </a>
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:border-teal-700 hover:text-teal-700 transition-colors text-base"
          >
            {dict.hero.cta_secondary} &darr;
          </a>
        </div>
      </div>
    </section>
  );
}
