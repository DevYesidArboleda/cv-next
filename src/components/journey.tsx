"use client"

import type { PlayerRef } from "@remotion/player"
import { ArrowRight, Mouse } from "lucide-react"
import dynamic from "next/dynamic"
import { useCallback, useEffect, useRef, useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { CAREER_START_YEAR, journey } from "@/data/profile"
import { cn } from "@/lib/utils"
import { DWELL, INTRO, TOTAL_FRAMES, copyOpacity, sceneStart } from "@/remotion/timeline"

const JourneyStage = dynamic(() => import("./journey-stage"), { ssr: false })
const SceneThumbnail = dynamic(() => import("./journey-stage").then((m) => m.SceneThumbnail), { ssr: false })

// Viewport-heights of scroll for the whole flight (≈ one screen per stop).
const SCROLL_VH = 620
const SMOOTHING = 0.14

function useDarkMode() {
  const [dark, setDark] = useState(true)
  useEffect(() => {
    const root = document.documentElement
    const sync = () => setDark(root.classList.contains("dark"))
    sync()
    const mo = new MutationObserver(sync)
    mo.observe(root, { attributes: true, attributeFilter: ["class"] })
    return () => mo.disconnect()
  }, [])
  return dark
}

function useReducedMotion() {
  const [reduce, setReduce] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduce(mq.matches)
    const on = () => setReduce(mq.matches)
    mq.addEventListener("change", on)
    return () => mq.removeEventListener("change", on)
  }, [])
  return reduce
}

/** Composition size that matches the stage's aspect ratio, so the Player fills it edge to edge. */
function useStageSize(ref: React.RefObject<HTMLDivElement | null>) {
  const [size, setSize] = useState<{ w: number; h: number } | null>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let lastW = 0
    const measure = () => {
      const { clientWidth: cw, clientHeight: ch } = el
      // Ignore height-only changes (mobile URL bar) — they'd remount the Player mid-scroll.
      if (cw === lastW) return
      lastW = cw
      const portrait = ch > cw
      const w = portrait ? 900 : 1600
      setSize({ w, h: Math.round((w * ch) / cw) })
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [ref])
  return size
}

function StopCopy({ index, className }: { index: number; className?: string }) {
  const { t } = useLanguage()
  const stop = journey[index]
  const last = index === journey.length - 1
  return (
    <div className={className}>
      <p className="eyebrow mb-3">
        {t(stop.year)} <span className="text-muted-foreground">· {stop.where}</span>
      </p>
      <h3 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{t(stop.title)}</h3>
      <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">{t(stop.body)}</p>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {stop.tags.map((tag) => (
          <li key={tag} className="chip bg-background/70 backdrop-blur">
            {tag}
          </li>
        ))}
      </ul>
      {last && (
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="group inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            {t("Hablemos", "Let's talk")}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </a>
          <a
            href="#experience"
            className="inline-flex h-11 items-center rounded-full border border-border bg-background/70 px-6 text-sm font-semibold backdrop-blur transition-colors hover:bg-secondary"
          >
            {t("Ver experiencia detallada", "See detailed experience")}
          </a>
        </div>
      )}
    </div>
  )
}

/** Reduced-motion fallback: the same scenes as static frames, no camera movement. */
function StaticJourney({ dark }: { dark: boolean }) {
  return (
    <ol className="section space-y-16">
      {journey.map((_, i) => (
        <li key={i} className="grid items-center gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <SceneThumbnail index={i} dark={dark} />
          </div>
          <StopCopy index={i} />
        </li>
      ))}
    </ol>
  )
}

export function Journey() {
  const { t } = useLanguage()
  const dark = useDarkMode()
  const reduce = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<PlayerRef>(null)
  const size = useStageSize(stageRef)
  const [frame, setFrame] = useState(0)
  const years = new Date().getFullYear() - CAREER_START_YEAR

  const progressToFrame = (p: number) => p * (TOTAL_FRAMES - 1)

  // Scroll → target frame, eased toward with rAF (the scroll-world scrub model).
  useEffect(() => {
    if (reduce) return
    const section = sectionRef.current
    if (!section) return
    let raf = 0
    let current = 0
    let shown = -1
    let active = false

    const targetFrame = () => {
      const rect = section.getBoundingClientRect()
      const scrollable = rect.height - window.innerHeight
      const p = Math.min(1, Math.max(0, -rect.top / scrollable))
      return progressToFrame(p)
    }

    const tick = () => {
      const target = targetFrame()
      current += (target - current) * SMOOTHING
      if (Math.abs(target - current) < 0.05) current = target
      const f = Math.round(current)
      if (f !== shown) {
        shown = f
        playerRef.current?.seekTo(f)
        setFrame(f)
      }
      if (active) raf = requestAnimationFrame(tick)
    }

    current = targetFrame()
    const io = new IntersectionObserver(([entry]) => {
      active = entry.isIntersecting
      cancelAnimationFrame(raf)
      if (active) raf = requestAnimationFrame(tick)
    })
    io.observe(section)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [reduce, size])

  const jumpTo = useCallback((i: number) => {
    const section = sectionRef.current
    if (!section) return
    const target = sceneStart(i) + DWELL * 0.45
    const scrollable = section.offsetHeight - window.innerHeight
    window.scrollTo({ top: section.offsetTop + (target / (TOTAL_FRAMES - 1)) * scrollable, behavior: "smooth" })
  }, [])

  if (reduce) {
    return (
      <section id="journey" aria-label={t("Mi recorrido", "My journey")}>
        <StaticJourney dark={dark} />
      </section>
    )
  }

  const introOpacity = Math.max(0, 1 - frame / (INTRO * 0.55))
  const activeStop = journey.findIndex((_, i) => copyOpacity(i, frame) > 0.5)

  return (
    <section
      id="journey"
      ref={sectionRef}
      aria-label={t("Mi recorrido", "My journey")}
      className="relative"
      style={{ height: `${SCROLL_VH}vh` }}
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div ref={stageRef} className="absolute inset-0">
          {size && (
            <JourneyStage playerRef={playerRef} width={size.w} height={size.h} dark={dark} initialFrame={frame} />
          )}
        </div>

        {/* edge fades so the world melts into the page */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-background to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-background via-background/70 to-transparent md:h-32 md:via-transparent" />

        {/* intro title */}
        <div
          className="pointer-events-none absolute inset-x-0 top-24 px-5 text-center sm:top-28"
          style={{ opacity: introOpacity, translate: `0 ${(1 - introOpacity) * -16}px` }}
          aria-hidden={introOpacity < 0.1}
        >
          <p className="eyebrow mb-3">{t("Mi recorrido", "My journey")}</p>
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
            {t(`${years} años construyendo, pieza a pieza.`, `${years} years of building, piece by piece.`)}
          </h2>
          <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Mouse className="size-4 animate-bounce motion-reduce:animate-none" aria-hidden />
            {t("Desplázate para recorrerlo", "Scroll to fly through it")}
          </p>
        </div>

        {/* per-stop copy, frame-synced with the camera */}
        <div className="absolute inset-x-0 bottom-0 mx-auto h-full max-w-5xl px-5 sm:px-8">
          {journey.map((_, i) => {
            const o = copyOpacity(i, frame)
            return (
              <div
                key={i}
                aria-hidden={o < 0.5}
                className={cn(
                  "absolute inset-x-5 bottom-[max(2rem,env(safe-area-inset-bottom))] sm:inset-x-8 md:top-1/2 md:right-auto md:bottom-auto md:w-[26rem] md:-translate-y-1/2",
                  o < 0.05 && "invisible",
                  o < 0.5 && "pointer-events-none",
                )}
                style={{ opacity: o, translate: `0 ${(1 - o) * 18}px` }}
              >
                <StopCopy index={i} />
              </div>
            )
          })}
        </div>

        {/* route rail */}
        <nav
          aria-label={t("Etapas del recorrido", "Journey stops")}
          className="absolute top-20 left-1/2 -translate-x-1/2 md:top-1/2 md:right-8 md:left-auto md:translate-x-0 md:-translate-y-1/2"
          style={{ opacity: 1 - introOpacity }}
        >
          <ol className="flex gap-2 md:flex-col md:gap-4">
            {journey.map((stop, i) => (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => jumpTo(i)}
                  aria-current={activeStop === i ? "step" : undefined}
                  className="group flex items-center gap-3 md:flex-row-reverse"
                >
                  <span
                    className={cn(
                      "block size-2.5 rounded-full border transition-all",
                      activeStop === i ? "scale-125 border-primary bg-primary" : "border-muted-foreground/50 bg-transparent",
                    )}
                  />
                  <span
                    className={cn(
                      "hidden font-mono text-xs transition-colors md:inline",
                      activeStop === i ? "text-foreground" : "text-muted-foreground group-hover:text-foreground",
                    )}
                  >
                    {t(stop.year)}
                  </span>
                  <span className="sr-only md:hidden">{t(stop.year)}</span>
                </button>
              </li>
            ))}
          </ol>
        </nav>

        {/* progress */}
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-0.5 bg-border/50">
          <div className="h-full bg-primary" style={{ width: `${(frame / (TOTAL_FRAMES - 1)) * 100}%` }} />
        </div>
      </div>
    </section>
  )
}
