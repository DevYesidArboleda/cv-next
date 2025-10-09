"use client"

import { ArrowUpRight } from "lucide-react"
import { useState } from "react"
import { ProjectModal } from "./project-modal"

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Plataforma de comercio electrónico realizada en vtex",
      tags: ["Vtex", "BalloonGroup"],
      link: "https://www.maidenform.com.mx/",
      preview: "https://www.maidenform.com.mx/",
      gradient: "from-cyan-500/10 to-blue-500/10",
    },
    {
      title: "E-commerce Platform",
      description:
        "Plataforma de comercio electrónico realizada en vtex",
      tags: ["Vtex", "Xtrategik"],
      link: "https://www.sportagetienda.com/",
      preview: "https://www.sportagetienda.com/",
      gradient: "from-orange-500/10 to-red-500/10",
    },
    {
      title: "E-commerce Platform",
      description: "Plataforma de comercio electrónico realizada en vtex",
      tags: ["Vtex", "SummaSolution"],
      link: "https://diaonline.supermercadosdia.com.ar/",
      preview: "https://diaonline.supermercadosdia.com.ar/",
      gradient: "from-purple-500/10 to-pink-500/10",
    },
    {
      title: "Otros...",
      description: "",
      tags: ["Vtex"],
      link: "",
      preview: "",
      gradient: "",
    },
  ]

  const handleProjectClick = (index: number) => {
    setSelectedProject(index)
    setIsModalOpen(true)
  }

  return (
    <section id="projects" className="min-h-screen flex items-center px-6 py-12">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-sm font-mono text-muted-foreground mb-12 uppercase tracking-wider">Proyectos Destacados</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => handleProjectClick(index)}
              className={`group w-full text-left p-6 rounded-lg border border-border hover:border-primary bg-gradient-to-br ${project.gradient} hover:shadow-lg hover:shadow-primary/5 transition-all`}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-background/50 text-xs rounded font-mono border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>

        <ProjectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          project={selectedProject !== null ? projects[selectedProject] : null}
        />
      </div>
    </section>
  )
}
