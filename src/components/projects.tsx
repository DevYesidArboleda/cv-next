"use client"

import { ArrowUpRight, Building2, Briefcase } from "lucide-react"
import { useState } from "react"
import { ProjectModal } from "./project-modal"

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects = [
    {
      title: "Maidenform",
      company: "Balloon Group",
      description: "Plataforma de comercio electrónico realizada en vtex",
      image: "/Maidenform.png",
      tags: [
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
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
          icon: "https://brand.vtex.com/wp-content/themes/vtex-brand/img/logo.svg",
        },
      ],
      link: "https://www.maidenform.com.mx/",
      preview: "https://www.maidenform.com.mx/",
      screenshot: "/portfolio-builder-templates.png",
      gradient: "from-cyan-500/10 to-blue-500/10",
    },
    {
      title: "Sportage",
      company: "Xtrategik S.A.S",
      description: "Plataforma de comercio electrónico realizada en vtex",
      image: "/Sportage.png",
      tags: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        {
          name: "VTEX",
          icon: "https://brand.vtex.com/wp-content/themes/vtex-brand/img/logo.svg",
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
        },
      ],
      link: "https://www.sportagetienda.com/",
      preview: "https://www.sportagetienda.com/",
      screenshot: "/portfolio-builder-templates.png",
      gradient: "from-purple-500/10 to-pink-500/10",
    },
    {
      title: "Día Online",
      company: "Summa Solution",
      description: "Plataforma de comercio electrónico realizada en vtex",
      image: "/Dia.png",
      tags: [
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "Tailwind",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
          name: "VTEX",
          icon: "https://brand.vtex.com/wp-content/themes/vtex-brand/img/logo.svg",
        },
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
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
    <section id="projects" className="min-h-screen flex items-center px-6 py-8 md:py-12">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-sm font-mono text-muted-foreground mb-12 uppercase tracking-wider">Proyectos Destacados</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => handleProjectClick(index)}
              className={`group w-full text-left rounded-lg border border-border hover:border-primary bg-gradient-to-br ${project.gradient} hover:shadow-lg hover:shadow-primary/5 transition-all overflow-hidden`}
            >
              <div className="relative w-full h-48 overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1 flex-1">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors font-mono">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{project.company}</span>
                    </div>
                  </div>
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

          <div className="w-full rounded-lg border-2 border-dashed border-primary/30 bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6 flex flex-col items-center justify-center text-center space-y-4 min-h-[400px]">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Briefcase className="w-8 h-8 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold font-mono text-primary">+35</h3>
              <p className="text-lg font-semibold font-mono">Proyectos Completados</p>
              <p className="text-sm text-muted-foreground font-mono max-w-xs">
                He colaborado en más de 35 proyectos en diferentes empresas, desarrollando soluciones de e-commerce y
                aplicaciones web
              </p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center pt-2">
              <span className="px-3 py-1 bg-background/50 rounded-full border border-border text-xs font-mono">
                E-commerce
              </span>
              <span className="px-3 py-1 bg-background/50 rounded-full border border-border text-xs font-mono">
                VTEX
              </span>
              <span className="px-3 py-1 bg-background/50 rounded-full border border-border text-xs font-mono">
                React
              </span>
            </div>
          </div>
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
