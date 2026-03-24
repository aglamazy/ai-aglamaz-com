import type { Locale } from "@/lib/i18n";
import { getDictionary } from "./dictionaries";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <>
      <Hero dict={dict} />
      <Projects dict={dict} />
      <Services dict={dict} />
      <About dict={dict} />
      <Process dict={dict} />
      <Pricing dict={dict} />
      <Contact dict={dict} />
    </>
  );
}
