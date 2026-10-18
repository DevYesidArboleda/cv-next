"use client"

import type React from "react"
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import type { Localized } from "@/data/profile"

export type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  /** Accepts either a `{ es, en }` object or two strings. */
  t: (value: Localized | string, en?: string) => string
}

const STORAGE_KEY = "language"

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es")

  useEffect(() => {
    let initial: Language = "es"
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === "es" || saved === "en") initial = saved
      else if (!navigator.language.toLowerCase().startsWith("es")) initial = "en"
    } catch {}
    setLanguageState(initial)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {}
  }, [])

  const t = useCallback(
    (value: Localized | string, en?: string) => {
      if (typeof value === "string") return language === "es" ? value : (en ?? value)
      return value[language]
    },
    [language],
  )

  const ctx = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t])

  return <LanguageContext.Provider value={ctx}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
