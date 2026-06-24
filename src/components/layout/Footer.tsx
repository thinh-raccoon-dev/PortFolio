"use client";

import { Mail, Phone } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { useApp } from "@/components/providers/AppProvider";
import { siteConfig } from "@/lib/data";

function TelegramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
    </svg>
  );
}

export default function Footer() {
  const { t } = useApp();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)] transition-colors duration-300">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-[var(--text-muted)]">
          © {new Date().getFullYear()} {siteConfig.name}. {t.footer.builtWith}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            <Mail size={18} />
          </a>
          <a
            href={`https://zalo.me/${siteConfig.zalo}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Zalo"
            className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            <Phone size={18} />
          </a>
          <a
            href={siteConfig.telegram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            <TelegramIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
