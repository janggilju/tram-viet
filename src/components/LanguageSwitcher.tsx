"use client";

import { useLang } from "@/i18n/LangProvider";
import { type Lang, langLabels } from "@/i18n/translations";
import { useState, useRef, useEffect } from "react";

const langs: Lang[] = ["ko", "en", "vi", "ja", "zh"];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-lg border border-neutral-700 px-3 py-1.5 text-sm text-neutral-300 transition hover:border-amber-500 hover:text-amber-400"
        aria-label="Select language"
      >
        <span className="text-base">🌐</span>
        <span>{langLabels[lang]}</span>
        <svg
          className={`h-3 w-3 transition ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 top-full z-50 mt-1 min-w-[140px] overflow-hidden rounded-lg border border-neutral-700 bg-neutral-900 shadow-xl">
          {langs.map((l) => (
            <button
              key={l}
              onClick={() => {
                setLang(l);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm transition hover:bg-neutral-800 ${
                lang === l
                  ? "bg-amber-500/10 text-amber-400"
                  : "text-neutral-300"
              }`}
            >
              {langLabels[l]}
              {lang === l && <span className="ml-auto text-amber-400">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
