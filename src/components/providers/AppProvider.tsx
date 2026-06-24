"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translations } from "@/lib/i18n/translations";
import type { Locale, Theme } from "@/lib/i18n/types";

const LOCALE_KEY = "portfolio-locale";
const THEME_KEY = "portfolio-theme";

type AppContextValue = {
  locale: Locale;
  theme: Theme;
  t: (typeof translations)["en"];
  setLocale: (locale: Locale) => void;
  setTheme: (theme: Theme) => void;
  toggleLocale: () => void;
  toggleTheme: () => void;
  mounted: boolean;
};

const AppContext = createContext<AppContextValue | null>(null);

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

function applyLocale(locale: Locale) {
  document.documentElement.lang = locale === "vi" ? "vi" : "en";
}

export default function AppProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("vi");
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedLocale = localStorage.getItem(LOCALE_KEY) as Locale | null;
    const storedTheme = localStorage.getItem(THEME_KEY) as Theme | null;

    if (storedLocale === "en" || storedLocale === "vi") {
      setLocaleState(storedLocale);
      applyLocale(storedLocale);
    } else {
      applyLocale("vi");
    }

    if (storedTheme === "light" || storedTheme === "dark") {
      setThemeState(storedTheme);
      applyTheme(storedTheme);
    } else {
      applyTheme("dark");
    }

    setMounted(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(LOCALE_KEY, next);
    applyLocale(next);
  }, []);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "en" ? "vi" : "en");
  }, [locale, setLocale]);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  const value = useMemo(
    () => ({
      locale,
      theme,
      t: translations[locale],
      setLocale,
      setTheme,
      toggleLocale,
      toggleTheme,
      mounted,
    }),
    [locale, theme, setLocale, setTheme, toggleLocale, toggleTheme, mounted]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
