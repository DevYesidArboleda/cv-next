"use client"

import { Lock } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import type { Project } from "@/data/profile"
import { cn } from "@/lib/utils"

/**
 * A browser-framed, full-page capture of the live site (refreshed daily by
 * /api/preview/[slug]). `card`: auto-scrolls the page on hover of the parent
 * `.group`. `modal`: the visitor scrolls the page themselves.
 */
export function LivePreview({
  project,
  variant = "card",
  className,
  aspect = "aspect-[16/10]",
}: {
  project: Project
  variant?: "card" | "modal"
  className?: string
  aspect?: string
}) {
  const { t } = useLanguage()
  const [src, setSrc] = useState(`/api/preview/${project.slug}`)
  const [loaded, setLoaded] = useState(false)
  const host = new URL(project.url).host.replace(/^www\./, "")

  return (
    <div className={cn("overflow-hidden bg-muted", className)}>
      <div className={cn("flex items-center gap-3 border-b border-border bg-card px-3 py-2", variant === "modal" && "pr-12")}>
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-md bg-secondary px-2 py-1 text-[11px] text-muted-foreground">
          <Lock className="size-3 shrink-0" aria-hidden />
          <span className="truncate">{host}</span>
        </div>
        <span className="flex shrink-0 items-center gap-1.5 text-[10px] font-medium tracking-wide text-primary uppercase">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
          </span>
          {t("En vivo", "Live")}
        </span>
      </div>

      <div
        className={cn(
          "relative",
          variant === "card" ? `${aspect} overflow-hidden` : "h-[60vh] overflow-y-auto overscroll-contain",
        )}
      >
        {!loaded && <div aria-hidden className="absolute inset-0 animate-pulse bg-secondary" />}
        {/* eslint-disable-next-line @next/next/no-img-element -- tall dynamic capture; sizing is driven by CSS */}
        <img
          src={src}
          alt={t(`Vista actual de ${project.title}`, `Current view of ${project.title}`)}
          loading={variant === "card" ? "lazy" : "eager"}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => src !== project.image && setSrc(project.image)}
          className={cn(
            "block w-full transition-opacity duration-500",
            loaded ? "opacity-100" : "opacity-0",
            variant === "card" &&
              "absolute top-0 left-0 transition-[top,translate,opacity] duration-1000 ease-in-out group-hover:top-full group-hover:-translate-y-full group-hover:duration-[8000ms] motion-reduce:group-hover:top-0 motion-reduce:group-hover:translate-y-0",
          )}
        />
      </div>
    </div>
  )
}
