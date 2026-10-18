"use client"

import { ChevronDown } from "lucide-react"
import { useId, useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { experience, type Experience as ExperienceItem } from "@/data/profile"
import { cn } from "@/lib/utils"
import { Reveal } from "./reveal"
import { SectionHeading } from "./section-heading"

const INITIALLY_VISIBLE = 4

function Role({ item, current }: { item: ExperienceItem; current: boolean }) {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const period = item.end === item.start ? item.start : `${item.start} — ${item.end ?? t("Actualidad", "Present")}`

  return (
    <div className="relative grid gap-2 pb-10 pl-8 md:grid-cols-[9rem_1fr] md:gap-8 md:pl-0">
      {/* Timeline rail + dot */}
      <span aria-hidden className="absolute top-2 bottom-0 left-[5px] w-px bg-border md:left-[calc(9rem+1rem)]" />
      <span
        aria-hidden
        className={cn(
          "absolute top-1.5 left-0 size-[11px] rounded-full border-2 md:left-[calc(9rem+1rem-5px)]",
          current ? "border-primary bg-primary shadow-[0_0_0_4px_var(--glow)]" : "border-border bg-background",
        )}
      />

      <p className="font-mono text-xs text-muted-foreground md:pt-1 md:text-right">{period}</p>

      <div className="md:pl-8">
        <h3 className="text-lg font-semibold tracking-tight">
          {t(item.title)} <span className="text-muted-foreground">·</span>{" "}
          <span className="text-primary">{item.company}</span>
        </h3>
        <p className="mt-2 leading-relaxed text-muted-foreground">{t(item.summary)}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Stack">
          {item.stack.map((s) => (
            <li key={s} className="chip">
              {s}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
        >
          {open ? t("Ocultar responsabilidades", "Hide responsibilities") : t("Ver responsabilidades", "View responsibilities")}
          <ChevronDown className={cn("size-4 transition-transform", open && "rotate-180")} aria-hidden />
        </button>

        <div
          id={panelId}
          className={cn(
            "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          )}
        >
          <ul className="space-y-2 overflow-hidden pt-3 text-sm leading-relaxed text-muted-foreground" hidden={!open}>
            {item.points.map((p) => (
              <li key={p.en} className="flex gap-3">
                <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                {t(p)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export function Experience() {
  const { t } = useLanguage()
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? experience : experience.slice(0, INITIALLY_VISIBLE)
  const hidden = experience.length - INITIALLY_VISIBLE

  return (
    <section id="experience" className="section">
      <Reveal>
        <SectionHeading eyebrow={t("Experiencia", "Experience")} title={t("Trayectoria profesional", "Career")}>
          {t(
            "Desde administración de sistemas hasta e-commerce de gran escala en VTEX IO.",
            "From systems administration to large-scale e-commerce on VTEX IO.",
          )}
        </SectionHeading>
      </Reveal>

      <ol>
        {visible.map((item, i) => (
          <Reveal as="li" key={`${item.company}-${item.start}`}>
            <Role item={item} current={i === 0 && item.end === null} />
          </Reveal>
        ))}
      </ol>

      {hidden > 0 && (
        <div className="pl-8 md:pl-[calc(9rem+3rem)]">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            aria-expanded={showAll}
            className="inline-flex h-10 items-center gap-2 rounded-full border border-border px-5 text-sm font-medium transition-colors hover:bg-secondary"
          >
            {showAll
              ? t("Mostrar menos", "Show less")
              : t(`Ver trayectoria completa (+${hidden})`, `View full history (+${hidden})`)}
            <ChevronDown className={cn("size-4 transition-transform", showAll && "rotate-180")} aria-hidden />
          </button>
        </div>
      )}
    </section>
  )
}
