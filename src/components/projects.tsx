"use client"

import { ArrowUpRight } from "lucide-react"
import { useState } from "react"
import { ProjectModal } from "./project-modal"
import Cursor from "../../public/portfolio-builder-templates.png"

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma de comercio electrónico realizada en vtex",
      tags: [        
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "Figma",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
        {
          name: "VTEX",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vtex/vtex-original.svg",
        },
      ],
      link: "https://www.maidenform.com.mx/",
      preview: "https://www.maidenform.com.mx/",
      screenshot: "/portfolio-builder-templates.png",
      gradient: "from-cyan-500/10 to-blue-500/10",
    },
    {
      title: "E-commerce Platform",
      description: "Plataforma de comercio electrónico realizada en vtex",
      tags: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        {
          name: "VTEX",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vtex/vtex-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "Figma",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        }
      ],
      link: "https://www.sportagetienda.com/",
      preview: "https://www.sportagetienda.com/",
      screenshot: "/portfolio-builder-templates.png",
      gradient: "from-purple-500/10 to-pink-500/10",
    },
    {
      title: "E-commerce Platform",
      description: "Plataforma de comercio electrónico realizada en vtex",
      tags: [
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "Tailwind",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
        { name: "VTEX",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vtex/vtex-original.svg", },          
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        }
      ],
      link: "https://diaonline.supermercadosdia.com.ar/",
      preview: "https://diaonline.supermercadosdia.com.ar/",
      screenshot: "/portfolio-builder-templates.png",
      gradient: "from-orange-500/10 to-red-500/10",
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
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors font-mono">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm font-mono">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <div
                      key={tag.name}
                      className="flex items-center gap-1.5 px-2 py-1 bg-background/50 rounded border border-border"
                    >
                      <img src={tag.icon || "/placeholder.svg"} alt={tag.name} className="w-3.5 h-3.5" />
                      <span className="text-xs font-mono">{tag.name}</span>
                    </div>
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
