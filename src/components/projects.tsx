"use client"

import { ArrowUpRight } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { PROJECT_COUNT, projects, type Project } from "@/data/profile"
import { LivePreview } from "./live-preview"
import { ProjectModal } from "./project-modal"
import { Reveal } from "./reveal"
import { SectionHeading } from "./section-heading"

export function Projects() {
  const { t } = useLanguage()
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="projects" className="section">
      <Reveal>
        <SectionHeading eyebrow={t("Proyectos", "Projects")} title={t("Trabajo seleccionado", "Selected work")}>
          {t(
            `Tiendas en producción para marcas de México, Colombia y Argentina, parte de más de ${PROJECT_COUNT} proyectos entregados. Pasa el cursor para recorrer cada sitio tal como se ve hoy.`,
            `Live stores for brands in Mexico, Colombia and Argentina, part of ${PROJECT_COUNT}+ delivered projects. Hover to browse each site as it looks today.`,
          )}
        </SectionHeading>
      </Reveal>

      <ul className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal as="li" key={project.title} delay={(i % 2) * 80} className={i === 0 ? "sm:col-span-2" : undefined}>
            <button
              type="button"
              onClick={() => setSelected(project)}
              className="group block w-full overflow-hidden rounded-2xl border border-border bg-card text-left transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-black/5"
              aria-label={t(`Ver detalles de ${project.title}`, `View ${project.title} details`)}
            >
              <LivePreview project={project} aspect={i === 0 ? "aspect-[16/7]" : "aspect-[16/10]"} />
              <div className="flex items-start justify-between gap-4 border-t border-border p-5">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {[project.company, t(project.country)].filter(Boolean).join(" · ")}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(project.summary)}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.map((s) => (
                      <li key={s} className="chip">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowUpRight className="size-4" aria-hidden />
                </span>
              </div>
            </button>
          </Reveal>
        ))}

        <Reveal
          as="li"
          delay={80}
          className="flex flex-col gap-4 rounded-2xl border border-dashed border-border p-8 sm:col-span-2 sm:flex-row sm:items-center sm:gap-8"
        >
          <p className="text-5xl font-semibold tracking-tight text-primary tabular-nums">+{PROJECT_COUNT}</p>
          <div>
          <p className="text-lg font-semibold">{t("Proyectos entregados", "Projects delivered")}</p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {t(
              "E-commerce y aplicaciones web para agencias y marcas de retail en Latinoamérica.",
              "E-commerce and web applications for agencies and retail brands across Latin America.",
            )}
          </p>
          </div>
        </Reveal>
      </ul>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
