import type { Dictionary } from "@/app/[lang]/dictionaries";

export function Services({ dict }: { dict: Dictionary }) {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-14">
          {dict.services.title}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {dict.services.items.map((service, i) => (
            <div key={i} className="text-center">
              <span className="text-4xl">{service.icon}</span>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
