"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { type Lang, translations } from "@/i18n/translations";

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (section: string, key: string) => string;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ko");

  const t = useCallback(
    (section: string, key: string) => {
      return translations[lang]?.[section]?.[key] ?? key;
    },
    [lang]
  );

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
