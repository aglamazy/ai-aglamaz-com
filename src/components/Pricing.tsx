import type { Dictionary } from "@/app/[lang]/dictionaries";

export function Pricing({ dict }: { dict: Dictionary }) {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6">
          {dict.pricing.title}
        </h2>
        <p className="text-center text-gray-600 mb-10">{dict.pricing.intro}</p>

        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {dict.pricing.tiers.map((tier, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-100 p-6 text-center hover:border-teal-200 transition-colors"
            >
              <div className="text-sm text-gray-500 mb-2">{tier.name}</div>
              <div className="text-2xl font-bold text-gray-900">
                {tier.range}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-teal-50 rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 mb-3">
            {dict.pricing.includes_title}
          </h3>
          <ul className="space-y-2">
            {dict.pricing.includes.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                <span className="text-teal-600 mt-0.5">&#10003;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
