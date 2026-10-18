"use client"

import { Menu, Moon, Sun, X } from "lucide-react"
import { useEffect, useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { profile } from "@/data/profile"
import { cn } from "@/lib/utils"

const SECTIONS = [
  { id: "journey", label: { es: "Recorrido", en: "Journey" } },
  { id: "about", label: { es: "Perfil", en: "Profile" } },
  { id: "experience", label: { es: "Experiencia", en: "Experience" } },
  { id: "projects", label: { es: "Proyectos", en: "Projects" } },
  { id: "skills", label: { es: "Stack", en: "Stack" } },
  { id: "contact", label: { es: "Contacto", en: "Contact" } },
]

function useActiveSection() {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      // A thin band near the top of the viewport decides which section is "current".
      { rootMargin: "-30% 0px -65% 0px" },
    )
    for (const { id } of SECTIONS) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    const hero = document.getElementById("hero")
    if (hero) observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return active
}

function ThemeToggle() {
  const { t } = useLanguage()
  const [dark, setDark] = useState(true)

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"))
  }, [])

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle("dark", next)
    try {
      localStorage.setItem("theme", next ? "dark" : "light")
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
      aria-label={dark ? t("Cambiar a tema claro", "Switch to light theme") : t("Cambiar a tema oscuro", "Switch to dark theme")}
    >
      {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  )
}

function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  return (
    <div
      role="group"
      aria-label="Language"
      className="inline-flex items-center rounded-full border border-border p-0.5 font-mono text-[11px] font-medium"
    >
      {(["es", "en"] as const).map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLanguage(lang)}
          aria-pressed={language === lang}
          className={cn(
            "rounded-full px-2.5 py-1 uppercase transition-colors",
            language === lang ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground",
          )}
        >
          {lang}
        </button>
      ))}
    </div>
  )
}

export function SiteHeader() {
  const { t } = useLanguage()
  const active = useActiveSection()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled || open
          ? "border-b border-border bg-background/80 backdrop-blur-lg"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#hero" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex size-8 items-center justify-center rounded-lg bg-foreground font-mono text-xs font-semibold text-background">
            YB
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:inline">{profile.name}</span>
        </a>

        <nav aria-label={t("Principal", "Main")} className="hidden md:block">
          <ul className="flex items-center gap-1">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  aria-current={active === s.id ? "true" : undefined}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-sm transition-colors",
                    active === s.id ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {t(s.label)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-full text-foreground hover:bg-secondary md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t("Cerrar menú", "Close menu") : t("Abrir menú", "Open menu")}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label={t("Principal", "Main")} className="border-t border-border md:hidden">
          <ul className="mx-auto flex max-w-5xl flex-col px-5 py-3">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-lg px-3 py-3 text-base",
                    active === s.id ? "bg-secondary text-foreground" : "text-muted-foreground",
                  )}
                >
                  {t(s.label)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
