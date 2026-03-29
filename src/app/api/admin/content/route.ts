import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getContent, saveContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

export async function GET(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const locale = req.nextUrl.searchParams.get("locale") as Locale;
  if (!locale || !["he", "en"].includes(locale)) {
    return NextResponse.json({ error: "Invalid locale" }, { status: 400 });
  }

  const content = await getContent(locale);
  return NextResponse.json(content);
}

export async function PUT(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { locale, section, data } = await req.json();
  if (!locale || !["he", "en"].includes(locale)) {
    return NextResponse.json({ error: "Invalid locale" }, { status: 400 });
  }

  // Get full content, update section, save
  const content = await getContent(locale as Locale);
  content[section] = data;
  await saveContent(locale as Locale, content);

  return NextResponse.json({ ok: true });
}
