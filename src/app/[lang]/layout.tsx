import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "../globals.css";
import { locales, type Locale } from "@/lib/i18n";
import { getDictionary } from "./dictionaries";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin", "hebrew"],
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  const base = "https://agents-head.com";
  const url = `${base}/${locale}`;
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: url,
      languages: {
        he: `${base}/he`,
        en: `${base}/en`,
        "x-default": `${base}/he`,
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url,
      siteName: "Yaakov Aglamaz AI Automation",
      locale: locale === "he" ? "he_IL" : "en_US",
      type: "website",
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  const dir = locale === "he" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} className={`${heebo.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-heebo)]">
        <Navbar dict={dict} lang={locale} />
        <main className="flex-1">{children}</main>
        <Footer dict={dict} />
      </body>
    </html>
  );
}
