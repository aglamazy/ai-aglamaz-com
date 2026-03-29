"use client";

import Link from "next/link";
import { useState } from "react";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import type { Locale } from "@/lib/i18n";

export function Navbar({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const otherLang = lang === "he" ? "en" : "he";
  const otherLangLabel = lang === "he" ? "EN" : "עב";

  const greeting = lang === "he" ? "שלום" : "Hi";

  function openWidget(e: React.MouseEvent) {
    e.preventDefault();
    window.dispatchEvent(
      new CustomEvent("aglamaz-widget-open", { detail: { message: greeting } })
    );
  }

  const navItems = [
    { href: "#projects", label: dict.nav.projects },
    { href: "#services", label: dict.nav.services },
    { href: "#about", label: dict.nav.about },
    { href: "#process", label: dict.nav.process },
    { href: "#pricing", label: dict.nav.pricing },
    { href: "#contact", label: dict.nav.contact, onClick: openWidget },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16">
          <Link href={`/${lang}`} className="text-lg font-bold text-teal-700 shrink-0">
            Yaakov Aglamaz
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 mx-auto">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={item.onClick}
                className="text-sm text-gray-600 hover:text-teal-700 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4 shrink-0">
            <Link
              href={`/${otherLang}`}
              className="text-sm font-medium text-gray-500 hover:text-teal-700 transition-colors"
            >
              {otherLangLabel}
            </Link>
            <a
              href="#contact"
              onClick={openWidget}
              className="bg-teal-700 text-white text-sm font-medium px-5 py-2 rounded-lg hover:bg-teal-800 transition-colors"
            >
              {dict.hero.cta_primary}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-3 md:hidden">
            <Link
              href={`/${otherLang}`}
              className="text-sm font-medium text-teal-700"
            >
              {otherLangLabel}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { setIsOpen(false); item.onClick?.(e); }}
                className="block py-2 text-sm text-gray-600 hover:text-teal-700"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
