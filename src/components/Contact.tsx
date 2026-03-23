"use client";

import { useEffect } from "react";
import type { Dictionary } from "@/app/[lang]/dictionaries";

export function Contact({ dict }: { dict: Dictionary }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://admin.aglamaz.com/widget.js";
    script.dataset.api = "https://admin.aglamaz.com";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">
          {dict.contact.title}
        </h2>
      </div>
    </section>
  );
}
