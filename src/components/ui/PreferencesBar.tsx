"use client";

import { Moon, Sun } from "lucide-react";
import { useApp } from "@/components/providers/AppProvider";

export default function PreferencesBar() {
  const { locale, theme, setLocale, toggleTheme, t, mounted } = useApp();

  if (!mounted) return null;

  return (
    <div className="fixed top-4 right-4 z-[70] flex items-center gap-2">
      <div
        className="flex items-center rounded-full border border-[var(--border)] bg-[var(--bg-card)]/95 backdrop-blur-md shadow-lg overflow-hidden transition-colors duration-300"
        role="group"
        aria-label={t.preferences.language}
      >
        <button
          type="button"
          onClick={() => setLocale("vi")}
          className={`px-2.5 py-1.5 text-[10px] sm:text-xs font-medium transition-colors cursor-pointer ${
            locale === "vi"
              ? "bg-primary text-[var(--btn-text)]"
              : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
          }`}
          aria-pressed={locale === "vi"}
        >
          VI
        </button>
        <button
          type="button"
          onClick={() => setLocale("en")}
          className={`px-2.5 py-1.5 text-[10px] sm:text-xs font-medium transition-colors cursor-pointer ${
            locale === "en"
              ? "bg-primary text-[var(--btn-text)]"
              : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
          }`}
          aria-pressed={locale === "en"}
        >
          EN
        </button>
      </div>

      <button
        type="button"
        onClick={toggleTheme}
        className="flex items-center justify-center w-9 h-9 rounded-full border border-[var(--border)] bg-[var(--bg-card)]/95 backdrop-blur-md shadow-lg text-[var(--text-primary)] hover:bg-[var(--bg-card-alt)] transition-colors cursor-pointer"
        aria-label={
          theme === "dark" ? t.preferences.light : t.preferences.dark
        }
      >
        {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      </button>
    </div>
  );
}
