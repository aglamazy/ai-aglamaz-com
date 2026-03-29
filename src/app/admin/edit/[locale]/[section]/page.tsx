import { requireAuth } from "@/lib/auth";
import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { SectionEditor } from "./editor";

export default async function EditSectionPage({
  params,
}: {
  params: Promise<{ locale: string; section: string }>;
}) {
  await requireAuth();

  const { locale, section } = await params;
  const content = await getContent(locale as Locale);
  const sectionData = content[section];

  if (sectionData === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Section &quot;{section}&quot; not found in {locale} content.</p>
      </div>
    );
  }

  return (
    <SectionEditor
      locale={locale}
      section={section}
      initialData={sectionData}
    />
  );
}
