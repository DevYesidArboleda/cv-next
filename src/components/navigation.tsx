"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"

export function Navigation() {
  const { language, t } = useLanguage()
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "services", "technologies", "experience", "projects", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navItems = [
    { id: "hero", label: t("INICIO", "HOME") },
    { id: "about", label: t("SOBRE MÍ", "ABOUT ME") },
    { id: "services", label: t("SERVICIOS", "SERVICES") },
    { id: "technologies", label: t("TECNOLOGÍAS", "TECHNOLOGIES") },
    { id: "experience", label: t("EXPERIENCIA", "EXPERIENCE") },
    { id: "projects", label: t("PROYECTOS", "PROJECTS") },
    { id: "contact", label: t("CONTACTO", "CONTACT") },
  ]

  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <ul className="flex flex-col gap-6">
        {navItems.map((item) => (
          <li key={item.id}>
            <button onClick={() => scrollToSection(item.id)} className="group flex items-center gap-3">
              <span
                className={`h-px transition-all duration-300 ${
                  activeSection === item.id
                    ? "w-16 bg-primary"
                    : "w-8 bg-muted-foreground group-hover:w-12 group-hover:bg-primary"
                }`}
              />
              <span
                className={`text-xs font-mono transition-colors ${
                  activeSection === item.id ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                }`}
              >
                {item.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
