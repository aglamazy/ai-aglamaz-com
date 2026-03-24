import type { Dictionary } from "@/app/[lang]/dictionaries";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="py-10 bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="text-lg font-semibold text-white mb-2">
          Yaakov Aglamaz
        </div>
        <div className="text-sm mb-6">{dict.footer.tagline}</div>
        <div className="text-sm mb-4">ai.aglamaz.com</div>
        <div className="flex items-center justify-center gap-6 mb-6">
          <a
            href="https://www.linkedin.com/in/aglamazy/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/aglamazy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
        <div className="text-xs text-gray-500">{dict.footer.copyright}</div>
      </div>
    </footer>
  );
}
