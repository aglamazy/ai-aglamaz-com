"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function SectionEditor({
  locale,
  section,
  initialData,
}: {
  locale: string;
  section: string;
  initialData: unknown;
}) {
  const [json, setJson] = useState(JSON.stringify(initialData, null, 2));
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<"idle" | "saved" | "error">("idle");
  const [error, setError] = useState("");
  const router = useRouter();

  function validateJson(text: string): boolean {
    try {
      JSON.parse(text);
      return true;
    } catch {
      return false;
    }
  }

  async function handleSave() {
    if (!validateJson(json)) {
      setError("Invalid JSON");
      setStatus("error");
      return;
    }

    setSaving(true);
    setStatus("idle");
    setError("");

    try {
      const res = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          section,
          data: JSON.parse(json),
        }),
      });

      if (res.ok) {
        setStatus("saved");
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        const data = await res.json();
        setError(data.error || "Save failed");
        setStatus("error");
      }
    } catch (e) {
      setError("Network error");
      setStatus("error");
    } finally {
      setSaving(false);
    }
  }

  const isValid = validateJson(json);
  const dir = locale === "he" ? "rtl" : "ltr";

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <Link
            href="/admin"
            className="text-teal-700 hover:text-teal-900 text-sm font-medium"
          >
            &larr; Back
          </Link>
          <h1 className="text-lg font-bold text-gray-900">
            {section}{" "}
            <span className="text-gray-400 font-normal">({locale})</span>
          </h1>
        </div>
        <div className="flex items-center gap-3">
          {status === "saved" && (
            <span className="text-green-600 text-sm">Saved</span>
          )}
          {status === "error" && (
            <span className="text-red-500 text-sm">{error}</span>
          )}
          {!isValid && (
            <span className="text-red-500 text-sm">Invalid JSON</span>
          )}
          <button
            onClick={handleSave}
            disabled={saving || !isValid}
            className="bg-teal-700 text-white text-sm font-medium px-5 py-2 rounded-lg hover:bg-teal-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {saving ? "Saving..." : "Save"}
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-6">
        <textarea
          value={json}
          onChange={(e) => setJson(e.target.value)}
          dir={dir}
          className={`w-full h-[calc(100vh-140px)] font-mono text-sm p-4 border rounded-xl resize-none focus:outline-none focus:border-teal-500 ${
            isValid ? "border-gray-200 bg-white" : "border-red-300 bg-red-50"
          }`}
          spellCheck={false}
        />
      </main>
    </div>
  );
}
