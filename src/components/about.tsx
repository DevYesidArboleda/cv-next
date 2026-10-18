"use client"

import { Gauge, Layers, ServerCog, ShoppingBag } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { profile } from "@/data/profile"
import { Reveal } from "./reveal"
import { SectionHeading } from "./section-heading"

const ICONS = [ShoppingBag, Layers, ServerCog, Gauge]

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="section">
      <Reveal>
        <SectionHeading
          eyebrow={t("Perfil", "Profile")}
          title={t(
            "Ingeniería sólida con atención obsesiva al detalle visual.",
            "Solid engineering with an obsessive eye for visual detail.",
          )}
        />
      </Reveal>

      <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:gap-16">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {profile.about.map((p, i) => (
            <p key={i}>{t(p)}</p>
          ))}
        </Reveal>

        <ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
          {profile.highlights.map((h, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <Reveal
                as="li"
                key={h.title.en}
                delay={i * 80}
                className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <Icon className="mb-3 size-5 text-primary" aria-hidden />
                <h3 className="text-sm font-semibold">{t(h.title)}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t(h.body)}</p>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
