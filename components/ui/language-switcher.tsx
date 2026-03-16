"use client";

import { useLanguage } from "@/components/language-provider";
import type { Locale } from "@/lib/translations";

const flags: Record<Locale, { emoji: string; label: string }> = {
  es: { emoji: "🇲🇽", label: "Español" },
  en: { emoji: "🇺🇸", label: "English" },
};

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  const next: Locale = locale === "es" ? "en" : "es";
  const current = flags[locale];
  const nextFlag = flags[next];

  return (
    <button
      onClick={() => setLocale(next)}
      className="flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-white transition duration-150 ease-in-out px-3 py-2 rounded-md hover:bg-gray-800"
      aria-label={`Switch to ${nextFlag.label}`}
      title={`Switch to ${nextFlag.label}`}
    >
      <span className="text-xl leading-none" aria-hidden="true">
        {current.emoji}
      </span>
      <span className="hidden sm:inline">{current.label}</span>
    </button>
  );
}
