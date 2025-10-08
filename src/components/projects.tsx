"use client"

import { ArrowUpRight, ExternalLink } from "lucide-react"
import { useState } from "react"

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Plataforma de comercio electrónico realizada en vtex",
      tags: ["Vtex", "BalloonGroup"],
      link: "https://www.maidenform.com.mx/",
      preview: "https://www.maidenform.com.mx/",
    },
    {
      title: "E-commerce Platform",
      description:
        "Plataforma de comercio electrónico realizada en vtex",
      tags: ["Vtex", "Xtrategik"],
      link: "https://www.sportagetienda.com/",
      preview: "https://www.sportagetienda.com/",
    },
    {
      title: "E-commerce Platform",
      description: "Plataforma de comercio electrónico realizada en vtex",
      tags: ["Vtex", "SummaSolution"],
      link: "https://diaonline.supermercadosdia.com.ar/",
      preview: "https://diaonline.supermercadosdia.com.ar/",
    },
    {
      title: "Otros...",
      description: "",
      tags: ["Vtex"],
      link: "",
      preview: "",
    },
  ]

  return (
    <section id="projects" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-sm font-mono text-muted-foreground mb-12 uppercase tracking-wider">Proyectos Destacados</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setSelectedProject(index)}
                className={`group w-full text-left p-6 rounded-lg border transition-all ${
                  selectedProject === index
                    ? "border-primary bg-muted/50"
                    : "border-border hover:border-primary bg-card hover:bg-muted/50"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-muted text-xs rounded font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </div>
              </button>
            ))}
          </div>

          <div className="lg:sticky lg:top-20 h-fit">
            {selectedProject !== null ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{projects[selectedProject].title}</h3>
                  <a
                    href={projects[selectedProject].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    Visitar sitio
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <div className="rounded-lg border border-border overflow-hidden bg-muted aspect-video">
                  <iframe
                    src={projects[selectedProject].preview}
                    className="w-full h-full"
                    title={projects[selectedProject].title}
                  />
                </div>
              </div>
            ) : (
              <div className="rounded-lg border border-border bg-card p-12 text-center aspect-video flex items-center justify-center">
                <p className="text-muted-foreground">Selecciona un proyecto para ver la vista previa</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
