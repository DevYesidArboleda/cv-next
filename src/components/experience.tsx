export function Experience() {
  const experiences = [
    {
      year: "2024 — PRESENTE",
      title: "Desarrollador Full Stack",
      company: "Tu Empresa",
      description:
        "Desarrollo y mantenimiento de aplicaciones web modernas utilizando React, Next.js y Node.js. Implementación de mejores prácticas de accesibilidad y rendimiento.",
      tags: ["React", "Next.js", "TypeScript", "Node.js"],
    },
    {
      year: "2022 — 2024",
      title: "Desarrollador Frontend",
      company: "Empresa Anterior",
      description:
        "Creación de interfaces de usuario responsivas y accesibles. Colaboración con equipos de diseño para implementar sistemas de diseño escalables.",
      tags: ["React", "JavaScript", "CSS", "Figma"],
    },
    {
      year: "2020 — 2022",
      title: "Desarrollador Junior",
      company: "Primera Empresa",
      description:
        "Desarrollo de componentes reutilizables y mantenimiento de aplicaciones web. Aprendizaje de mejores prácticas de desarrollo y trabajo en equipo.",
      tags: ["HTML", "CSS", "JavaScript", "Git"],
    },
  ]

  return (
    <section id="experience" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-sm font-mono text-muted-foreground mb-12 uppercase tracking-wider">Experiencia</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative pl-8 border-l-2 border-muted hover:border-primary transition-colors"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-muted group-hover:border-primary transition-colors" />
              <div className="space-y-3">
                <p className="text-xs font-mono text-muted-foreground">{exp.year}</p>
                <h3 className="text-xl font-semibold">
                  {exp.title} <span className="text-primary">· {exp.company}</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-muted text-xs rounded font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
