"use client"

import { useLanguage } from "@/contexts/language-context"
import { skills } from "@/data/profile"
import { Reveal } from "./reveal"
import { SectionHeading } from "./section-heading"

export function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="section">
      <Reveal>
        <SectionHeading eyebrow="Stack" title={t("Tecnologías con las que trabajo", "Technologies I work with")} />
      </Reveal>

      <div className="overflow-hidden rounded-2xl border border-border">
        {skills.map((group, i) => (
          <Reveal
            key={group.group.en}
            delay={i * 60}
            className="grid gap-3 border-b border-border p-6 last:border-b-0 sm:grid-cols-[11rem_1fr] sm:gap-8"
          >
            <h3 className="font-mono text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase sm:pt-1.5">
              {t(group.group)}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
