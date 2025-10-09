"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink } from "lucide-react"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    description: string
    tags: string[]
    link: string
    preview: string
  } | null
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!project) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl h-[90vh] p-0">
        <DialogHeader className="p-6 pb-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl">{project.title}</DialogTitle>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary hover:underline"
            >
              Visitar sitio
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <p className="text-muted-foreground mt-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-mono">
                {tag}
              </span>
            ))}
          </div>
        </DialogHeader>
        <div className="flex-1 px-6 pb-6">
          <div className="rounded-lg border border-border overflow-hidden bg-muted h-full">
            <iframe
              src={project.preview}
              className="w-full h-full"
              title={project.title}
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
