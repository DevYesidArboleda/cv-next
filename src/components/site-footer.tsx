"use client"

import { ArrowUp } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { profile } from "@/data/profile"

export function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}.{" "}
          {t("Diseñado y desarrollado con Next.js y Tailwind CSS.", "Designed and built with Next.js and Tailwind CSS.")}
        </p>
        <a href="#hero" className="no-print inline-flex items-center gap-1.5 hover:text-foreground">
          {t("Volver arriba", "Back to top")}
          <ArrowUp className="size-4" aria-hidden />
        </a>
      </div>
    </footer>
  )
}
