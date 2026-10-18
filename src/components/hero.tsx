"use client"

import Image from "next/image"
import { ArrowRight, Github, Linkedin, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { CAREER_START_YEAR, PROJECT_COUNT, experience, profile } from "@/data/profile"

const companyCount = new Set(experience.map((e) => e.company)).size

export function Hero() {
  const { t } = useLanguage()
  const years = new Date().getFullYear() - CAREER_START_YEAR

  const stats = [
    { value: `${years}+`, label: t("años de experiencia", "years of experience") },
    { value: `${PROJECT_COUNT}+`, label: t("proyectos entregados", "projects delivered") },
    { value: `${companyCount}`, label: t("empresas", "companies") },
  ]

  return (
    <section id="hero" className="hero-glow relative">
      <div className="mx-auto grid w-full max-w-5xl items-center gap-8 px-5 md:gap-12 pt-28 pb-20 sm:px-8 md:grid-cols-[1fr_auto] md:pt-40 md:pb-28">
        <div className="animate-in fade-in slide-in-from-bottom-3 duration-700">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            {t("Disponible para nuevas oportunidades", "Open to new opportunities")}
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-xl font-medium tracking-tight text-foreground/80 sm:text-2xl">
            {t(profile.role)} <span className="text-muted-foreground">·</span>{" "}
            <span className="text-primary">{t(profile.focus)}</span>
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">{t(profile.summary)}</p>

          <p className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="size-4" aria-hidden />
            {profile.location}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              {t("Hablemos", "Let's talk")}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </a>
            <a
              href="#projects"
              className="inline-flex h-11 items-center rounded-full border border-border px-6 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              {t("Ver proyectos", "View projects")}
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex size-11 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Github className="size-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex size-11 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Linkedin className="size-5" />
              </a>
            </div>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-3xl font-semibold tracking-tight tabular-nums">{s.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative order-first w-28 animate-in fade-in zoom-in-95 duration-700 sm:w-36 md:order-none md:w-72">
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/30 via-primary/5 to-transparent blur-2xl" />
          <div className="overflow-hidden rounded-[1.75rem] border border-border bg-card p-2 shadow-2xl shadow-black/10">
            <Image
              src={profile.photo}
              alt={profile.name}
              width={307}
              height={388}
              priority
              className="aspect-[4/5] w-full rounded-[1.25rem] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
