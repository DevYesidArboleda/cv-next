"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    description: string
    tags: { name: string; icon: string }[]
    link: string
    preview: string
    screenshot: string
  } | null
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!project) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl h-[90vh] p-0">
        <DialogHeader className="p-6 pb-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-mono">{project.title}</DialogTitle>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary hover:underline font-mono"
            >
              Visitar sitio
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <p className="text-muted-foreground mt-2 font-mono text-sm">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {project.tags.map((tag) => (
              <div
                key={tag.name}
                className="flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full"
              >
                <img src={tag.icon || "/placeholder.svg"} alt={tag.name} className="w-4 h-4" />
                <span className="text-xs font-mono">{tag.name}</span>
              </div>
            ))}
          </div>
        </DialogHeader>
        <div className="flex-1 px-6 pb-6">
          <div className="rounded-lg border border-border overflow-hidden bg-muted h-full flex flex-col items-center justify-center gap-4 p-8">
            <img
              src={project.screenshot || "/placeholder.svg"}
              alt={`${project.title} preview`}
              className="w-full max-w-3xl rounded-lg border border-border shadow-lg"
            />
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
              <AlertCircle className="w-4 h-4" />
              <p>La vista previa en vivo no está disponible debido a restricciones de seguridad</p>
            </div>
            <Button asChild size="lg" className="font-mono">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Abrir sitio en nueva pestaña
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
