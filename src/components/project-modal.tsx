"use client"

import { ExternalLink } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useLanguage } from "@/contexts/language-context"
import type { Project } from "@/data/profile"
import { LivePreview } from "./live-preview"

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const { t } = useLanguage()

  return (
    <Dialog open={project !== null} onOpenChange={(open) => !open && onClose()}>
      {project && (
        <DialogContent className="max-h-[94vh] gap-0 overflow-y-auto p-0 sm:max-w-4xl">
          <LivePreview project={project} variant="modal" className="rounded-t-lg border-b border-border" />
          <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-3">
              <DialogHeader className="text-left">
                <DialogTitle className="text-2xl font-semibold tracking-tight">{project.title}</DialogTitle>
                <DialogDescription>
                  {[project.company, t(project.country)].filter(Boolean).join(" · ")}
                </DialogDescription>
              </DialogHeader>
              <p className="leading-relaxed text-muted-foreground">{t(project.summary)}</p>
              <ul className="flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground">
                {t(
                  "Desplázate dentro de la vista previa · captura real del sitio, actualizada cada 24 h.",
                  "Scroll inside the preview · a real capture of the site, refreshed every 24 h.",
                )}
              </p>
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 shrink-0 items-center gap-2 self-start rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:self-auto"
            >
              {t("Visitar sitio", "Visit site")}
              <ExternalLink className="size-4" aria-hidden />
            </a>
          </div>
        </DialogContent>
      )}
    </Dialog>
  )
}
