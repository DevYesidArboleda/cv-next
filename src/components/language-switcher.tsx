"use client"

import { Languages } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es")
  }

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-lg transition-all duration-300 group hover:border-primary/50 cursor-pointer"
      aria-label={language === "es" ? "Cambiar a inglés" : "Switch to Spanish"}
      title={language === "es" ? "Cambiar a inglés" : "Switch to Spanish"}
    >
      <Languages className="w-5 h-5 text-primary transition-transform group-hover:rotate-12" />
      <span className="text-sm font-mono text-foreground">{language === "es" ? "EN" : "ES"}</span>
    </button>
  )
}
