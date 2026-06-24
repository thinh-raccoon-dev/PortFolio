"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useApp } from "@/components/providers/AppProvider";

interface NavbarProps {
  variant?: "embedded" | "fixed";
}

export default function Navbar({ variant = "fixed" }: NavbarProps) {
  const { t } = useApp();
  const navRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (variant !== "fixed") return;

    let observer: IntersectionObserver | null = null;
    let rafId = 0;

    const attach = () => {
      const hero = document.getElementById("hero");
      if (!hero) {
        rafId = requestAnimationFrame(attach);
        return;
      }

      observer = new IntersectionObserver(
        ([entry]) => {
          setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0);
        },
        { threshold: [0, 0.01] }
      );
      observer.observe(hero);
    };

    attach();

    return () => {
      cancelAnimationFrame(rafId);
      observer?.disconnect();
    };
  }, [variant]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo(href, true, "top 80px");
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const linkClass =
    "text-[10px] sm:text-xs md:text-sm transition-colors duration-200 cursor-pointer text-[var(--text-muted)] hover:text-[var(--text-primary)]";

  if (variant === "embedded") {
    return (
      <nav className="bg-[var(--nav-bg)] rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 transition-colors duration-300">
        <ul className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
          {t.nav.map((item) => (
            <li key={item.href}>
              <button type="button" onClick={() => handleNavClick(item.href)} className={linkClass}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <header
      ref={navRef}
      className={`fixed top-4 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <nav className="bg-[var(--nav-bg)] rounded-full px-4 py-2 md:px-6 shadow-lg border border-[var(--border)] transition-colors duration-300 mr-24 sm:mr-28">
        <ul className="hidden md:flex items-center gap-6 lg:gap-10">
          {t.nav.map((item) => (
            <li key={item.href}>
              <button
                type="button"
                onClick={() => handleNavClick(item.href)}
                className="text-xs md:text-sm transition-colors duration-200 cursor-pointer text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 bg-[var(--text-primary)] transition-transform duration-200 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-[var(--text-primary)] transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-[var(--text-primary)] transition-transform duration-200 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden absolute top-full mt-2 left-4 right-4 bg-[var(--nav-bg)] rounded-2xl border border-[var(--border)] px-6 py-4 transition-colors duration-300">
          <ul className="flex flex-col gap-4">
            {t.nav.map((item) => (
              <li key={item.href}>
                <button
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm cursor-pointer text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
