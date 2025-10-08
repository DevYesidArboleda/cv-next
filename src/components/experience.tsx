export function Experience() {
  const experiences = [
    {
      year: "2024 — PRESENTE",
      title: 'Desarrollador Vtex IO',
      company:'Balloom Group',
      description:
        'Creación de componentes custom con React, Desarrollo front de Vtex IO y Maquetación',
      tags: ["React", "Vtex", "TypeScript", "Node.js"],
    },
    {
      year: "2022 — 2024",
      title: "Desarrollador Frontend",
      company: "Dropi",
      description:
        "Desarrollo de aplicaciones web utilizando React (Next.js) y Node.js",
      tags: ["React", "JavaScript", "CSS", "Figma", "Next"],
    },
    {
      year: "2022-2023",
      title: 'Desarrollador Vtex IO',
      company:'Balloom Group',
      description:
        'Creación de componentes custom con React, Desarrollo front de Vtex IO y Maquetación',
      tags: ["React", "Vtex", "TypeScript", "Node.js"],
    },
    {
      year: "2022",
      title: "Desarrollador Vtex IO",
      company: "Xtrategik",
      description:
        "Desarrollo de componentes reutilizables y mantenimiento de aplicaciones web. Aprendizaje de mejores prácticas de desarrollo y trabajo en equipo.",
      tags: ["Vtex", "HTML", "CSS", "JavaScript", "Git"],
    },
    {
      year: "2021 — 2022",
      title: "Desarrollador Vtex IO",
      company: "Summa Solution",
      description:
        "Desarrollo de componentes reutilizables y mantenimiento de aplicaciones web. Aprendizaje de mejores prácticas de desarrollo y trabajo en equipo.",
      tags: ["Vtex", "HTML", "CSS", "JavaScript", "Git"],
    },
    {
      year: "2021 ",
      title: "Desarrollador Vtex IO",
      company: "Jumo Digital",
      description:
        "Desarrollo de componentes reutilizables y mantenimiento de aplicaciones web. Aprendizaje de mejores prácticas de desarrollo y trabajo en equipo.",
      tags: ["Vtex", "HTML", "CSS", "JavaScript", "Git"],
    },
    {
      year: "2021 — 2022",
      title: "Desarrollador Vtex IO",
      company: "Summa Solution",
      description:
        "Desarrollo de componentes reutilizables y mantenimiento de aplicaciones web. Aprendizaje de mejores prácticas de desarrollo y trabajo en equipo.",
      tags: ["Vtex", "HTML", "CSS", "JavaScript", "Git"],
    },
    {
      year: "2021 — 2022",
      title: "Desarrollador de software",
      company: "DevbotStudio S.A.S",
      description:
        'Desarrollo de aplicaciones web con JavaScript y implementación de soluciones de software',
      tags: ["Vtex", "HTML", "CSS", "JavaScript", "Git"],
    },
    {
      year: "2020 — 2021",
      title: "Desarrollador de software",
      company: "Intelecto S.A.S",
      description:
        'Desarrollo de aplicaciones web con JavaScript y implementación de soluciones de software',
      tags: ["Vtex", "HTML", "CSS", "JavaScript", "Git"],
    },
    {
      year: "2018 — 2020",
      title: "Consultor Sistemas",
      company: "MasterTics S.A.S",
      description:
        "Desarrollo de aplicativos web con WordPress, Manejo de servidores en la nube y físicos Linux y Mantenimiento e instalación de bases de datos",
      tags: ["Vtex", "HTML", "CSS", "JavaScript", "Git"],
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
