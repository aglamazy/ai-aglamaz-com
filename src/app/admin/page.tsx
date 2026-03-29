import { requireAuth } from "@/lib/auth";
import { getContent } from "@/lib/content";
import Link from "next/link";

const SECTIONS = [
  { key: "meta", label: "Site Meta", icon: "🏷️" },
  { key: "hero", label: "Hero Section", icon: "🎯" },
  { key: "projects", label: "Projects", icon: "📦" },
  { key: "services", label: "Services", icon: "🔧" },
  { key: "about", label: "About", icon: "👤" },
  { key: "process", label: "Process", icon: "📋" },
  { key: "pricing", label: "Pricing", icon: "💰" },
  { key: "useCases", label: "Use Cases (shared)", icon: "📄" },
  { key: "useCaseAiAssistant", label: "Use Case: AI Assistant", icon: "🤖" },
  { key: "useCaseMortgageBot", label: "Use Case: AI Chatbot", icon: "💬" },
  { key: "servicePages", label: "Service Pages", icon: "📑" },
  { key: "footer", label: "Footer", icon: "📝" },
];

export default async function AdminDashboard() {
  await requireAuth();

  // Get content to show current state
  const heContent = await getContent("he");
  const enContent = await getContent("en");

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">Content Admin</h1>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-sm text-gray-500 hover:text-teal-700">
            View Site
          </Link>
          <form action="/api/admin/logout" method="POST">
            <button className="text-sm text-red-500 hover:text-red-700">
              Logout
            </button>
          </form>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <p className="text-gray-600 mb-8">
          Edit site content. Changes are saved to Vercel Blob and go live immediately.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {SECTIONS.map((section) => (
            <div
              key={section.key}
              className="bg-white rounded-xl border border-gray-100 p-5 hover:border-teal-200 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{section.icon}</span>
                <h2 className="text-lg font-semibold text-gray-900">
                  {section.label}
                </h2>
              </div>
              <div className="flex gap-2">
                <Link
                  href={`/admin/edit/he/${section.key}`}
                  className="text-sm bg-gray-100 hover:bg-teal-50 text-gray-700 hover:text-teal-700 px-3 py-1.5 rounded-lg transition-colors"
                >
                  Edit Hebrew
                </Link>
                <Link
                  href={`/admin/edit/en/${section.key}`}
                  className="text-sm bg-gray-100 hover:bg-teal-50 text-gray-700 hover:text-teal-700 px-3 py-1.5 rounded-lg transition-colors"
                >
                  Edit English
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
