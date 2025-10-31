"use client"

import { useLanguage } from "@/contexts/language-context"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export function Experience() {
  const { language, t } = useLanguage()
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const experiences = [
    {
      year: "2024 — PRESENTE",
      yearEn: "2024 — PRESENT",
      title: "Desarrollador Vtex IO",
      titleEn: "Vtex IO Developer",
      company: "Balloom Group",
      logo: "/software-company-logo.png",
      description: "Creación de componentes custom con React, Desarrollo front de Vtex IO y Maquetación",
      descriptionEn: "Creation of custom components with React, Vtex IO front-end development and Layout",
      responsibilities: [
        "Creación de tiendas con VTEX IO (Home, PDP, PLP)",
        "Desarrollo de componentes custom con React",
        "Customización del checkout",
        "Creación de servicios con Node.js, GraphQL y VTEX API",
        "Implementación de hooks de VTEX",
        "Desarrollo de Admin Apps y Pixel Apps",
      ],
      responsibilitiesEn: [
        "Store creation with VTEX IO (Home, PDP, PLP)",
        "Custom component development with React",
        "Checkout customization",
        "Service creation with Node.js, GraphQL and VTEX API",
        "VTEX hooks implementation",
        "Admin Apps and Pixel Apps development",
      ],
      tags: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Vtex", icon: "https://brand.vtex.com/wp-content/themes/vtex-brand/img/logo.svg" },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        {
          name: "GraphQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
        },
      ],
    },
    {
      year: "2023 — 2024",
      yearEn: "2023 — 2024",
      title: "Desarrollador Frontend",
      titleEn: "Frontend Developer",
      company: "Dropi",
      logo: "/software-company-logo.png",
      description: "Desarrollo de aplicaciones web utilizando React (Next.js) y Node.js",
      descriptionEn: "Web application development using React (Next.js) and Node.js",
      responsibilities: [
        "Consumo de APIs REST y GraphQL",
        "Creación de aplicaciones web con Next.js",
        "Maquetación web responsive",
        "Desarrollo de componentes reutilizables con React",
      ],
      responsibilitiesEn: [
        "REST and GraphQL API consumption",
        "Web application creation with Next.js",
        "Responsive web layout",
        "Reusable component development with React",
      ],
      tags: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      ],
    },
    {
      year: "2022-2023",
      yearEn: "2022-2023",
      title: "Desarrollador Vtex IO",
      titleEn: "Vtex IO Developer",
      company: "Balloom Group",
      logo: "/software-company-logo.png",
      description: "Creación de componentes custom con React, Desarrollo front de Vtex IO y Maquetación",
      descriptionEn: "Creation of custom components with React, Vtex IO front-end development and Layout",
      responsibilities: [
        "Creación de tiendas con VTEX IO (Home, PDP, PLP)",
        "Desarrollo de componentes custom con React",
        "Customización del checkout",
        "Creación de servicios con Node.js, GraphQL y VTEX API",
        "Implementación de hooks de VTEX",
        "Desarrollo de Admin Apps y Pixel Apps",
      ],
      responsibilitiesEn: [
        "Store creation with VTEX IO (Home, PDP, PLP)",
        "Custom component development with React",
        "Checkout customization",
        "Service creation with Node.js, GraphQL and VTEX API",
        "VTEX hooks implementation",
        "Admin Apps and Pixel Apps development",
      ],
      tags: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Vtex", icon: "https://brand.vtex.com/wp-content/themes/vtex-brand/img/logo.svg" },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        {
          name: "GraphQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
        },
      ],
    },
    {
      year: "2022",
      yearEn: "2022",
      title: "Desarrollador Vtex IO",
      titleEn: "Vtex IO Developer",
      company: "Xtrategik",
      logo: "/software-company-logo.png",
      description:
        "Desarrollo de componentes reutilizables y mantenimiento de aplicaciones web. Aprendizaje de mejores prácticas de desarrollo y trabajo en equipo.",
      descriptionEn:
        "Development of reusable components and web application maintenance. Learning development best practices and teamwork.",
      responsibilities: [
        "Creación de tiendas con VTEX IO (Home, PDP, PLP)",
        "Desarrollo de componentes custom con React",
        "Customización del checkout",
        "Creación de servicios con Node.js, GraphQL y VTEX API",
      ],
      responsibilitiesEn: [
        "Store creation with VTEX IO (Home, PDP, PLP)",
        "Custom component development with React",
        "Checkout customization",
        "Service creation with Node.js, GraphQL and VTEX API",
      ],
      tags: [
        { name: "Vtex", icon: "https://brand.vtex.com/wp-content/themes/vtex-brand/img/logo.svg" },
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        {
          name: "GraphQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
        },
      ],
    },
    {
      year: "2021 — 2022",
      yearEn: "2021 — 2022",
      title: "Desarrollador Vtex IO",
      titleEn: "Vtex IO Developer",
      company: "Summa Solution",
      logo: "/software-company-logo.png",
      description:
        "Desarrollo de componentes reutilizables y mantenimiento de aplicaciones web. Aprendizaje de mejores prácticas de desarrollo y trabajo en equipo.",
      descriptionEn:
        "Development of reusable components and web application maintenance. Learning development best practices and teamwork.",
      responsibilities: [
        "Creación de tiendas con VTEX IO (Home, PDP, PLP)",
        "Desarrollo de componentes custom con React",
        "Customización del checkout",
        "Implementación de hooks de VTEX",
      ],
      responsibilitiesEn: [
        "Store creation with VTEX IO (Home, PDP, PLP)",
        "Custom component development with React",
        "Checkout customization",
        "VTEX hooks implementation",
      ],
      tags: [
        { name: "Vtex", icon: "https://brand.vtex.com/wp-content/themes/vtex-brand/img/logo.svg" },
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        {
          name: "GraphQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
        },
      ],
    },
    {
      year: "2021",
      yearEn: "2021",
      title: "Desarrollador Vtex IO",
      titleEn: "Vtex IO Developer",
      company: "Jump Digital",
      logo: "/software-company-logo.png",
      description:
        "Desarrollo de componentes reutilizables y mantenimiento de aplicaciones web. Aprendizaje de mejores prácticas de desarrollo y trabajo en equipo.",
      descriptionEn:
        "Development of reusable components and web application maintenance. Learning development best practices and teamwork.",
      responsibilities: [
        "Creación de tiendas con VTEX IO (Home, PDP, PLP)",
        "Desarrollo de componentes custom con React",
        "Maquetación y estilos CSS",
      ],
      responsibilitiesEn: [
        "Store creation with VTEX IO (Home, PDP, PLP)",
        "Custom component development with React",
        "Layout and CSS styling",
      ],
      tags: [
        { name: "Vtex", icon: "https://brand.vtex.com/wp-content/themes/vtex-brand/img/logo.svg" },
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        {
          name: "GraphQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
        },
      ],
    },
    {
      year: "2021 — 2022",
      yearEn: "2021 — 2022",
      title: "Desarrollador de software",
      titleEn: "Software Developer",
      company: "DevbotStudio S.A.S",
      logo: "/software-company-logo.png",
      description: "Desarrollo de aplicaciones web con JavaScript y implementación de soluciones de software",
      descriptionEn: "Web application development with JavaScript and software solutions implementation",
      responsibilities: [
        "Desarrollo de aplicaciones web con Angular",
        "Desarrollo de backend con PHP y .NET",
        "Creación de componentes custom",
        "Implementación de componentes nativos con VTEX IO",
      ],
      responsibilitiesEn: [
        "Web application development with Angular",
        "Backend development with PHP and .NET",
        "Custom component creation",
        "Native component implementation with VTEX IO",
      ],
      tags: [
        { name: "Vtex", icon: "https://brand.vtex.com/wp-content/themes/vtex-brand/img/logo.svg" },
        {
          name: "Angular",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
        },
        { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      ],
    },
    {
      year: "2020 — 2021",
      yearEn: "2020 — 2021",
      title: "Desarrollador de software",
      titleEn: "Software Developer",
      company: "Intelecto S.A.S",
      logo: "/software-company-logo.png",
      description: "Desarrollo de aplicaciones web con JavaScript y implementación de soluciones de software",
      descriptionEn: "Web application development with JavaScript and software solutions implementation",
      responsibilities: [
        "Desarrollo web con JavaScript",
        "Manejo de Azure para despliegue y gestión de aplicaciones",
        "Desarrollo de soluciones web personalizadas",
        "Integración de servicios en la nube",
      ],
      responsibilitiesEn: [
        "Web development with JavaScript",
        "Azure management for application deployment and management",
        "Custom web solutions development",
        "Cloud services integration",
      ],
      tags: [
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      ],
    },
    {
      year: "2018 — 2020",
      yearEn: "2018 — 2020",
      title: "Consultor Sistemas",
      titleEn: "Systems Consultant",
      company: "MasterTics S.A.S",
      logo: "/software-company-logo.png",
      description:
        "Desarrollo de aplicativos web con WordPress, Manejo de servidores en la nube y físicos Linux y Mantenimiento e instalación de bases de datos",
      descriptionEn:
        "Web application development with WordPress, Cloud and physical Linux server management, and Database maintenance and installation",
      responsibilities: [
        "Creación de páginas web con WordPress",
        "Creación y mantenimiento de bases de datos",
        "Administración de sistemas operativos Linux",
        "Gestión de servidores en la nube y físicos",
      ],
      responsibilitiesEn: [
        "Web page creation with WordPress",
        "Database creation and maintenance",
        "Linux operating system administration",
        "Cloud and physical server management",
      ],
      tags: [
        { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
        { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      ],
    },
  ]

  return (
    <section id="experience" className="min-h-screen flex items-center px-6 py-8 md:py-12">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-2xl font-bold font-mono text-muted-foreground mb-12 uppercase tracking-wider">
          {t("Experiencia", "Experience")}
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative pl-8 border-l-2 border-muted hover:border-primary transition-colors"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-muted group-hover:border-primary transition-colors" />
              <div className="space-y-3">
                <p className="text-xs font-mono text-muted-foreground">{language === "es" ? exp.year : exp.yearEn}</p>
                <div className="flex items-center gap-3">
                  <img
                    src={exp.logo || "/placeholder.svg"}
                    alt={exp.company}
                    className="w-10 h-10 rounded-lg border border-border object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold font-mono">{language === "es" ? exp.title : exp.titleEn}</h3>
                    <p className="text-primary font-mono text-sm">{exp.company}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed font-mono text-sm">
                  {language === "es" ? exp.description : exp.descriptionEn}
                </p>

                {exp.responsibilities && (
                  <div className="mt-3">
                    <button
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      className="flex items-center gap-2 text-sm font-mono text-primary hover:text-primary/80 transition-colors"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${expandedIndex === index ? "rotate-180" : ""}`}
                      />
                      {t("Ver funciones", "View responsibilities")}
                    </button>
                    {expandedIndex === index && (
                      <ul className="mt-3 space-y-2 pl-6">
                        {(language === "es" ? exp.responsibilities : exp.responsibilitiesEn)?.map((resp, i) => (
                          <li key={i} className="text-sm font-mono text-muted-foreground list-disc">
                            {resp}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tags.map((tag) => (
                    <div key={tag.name} className="flex items-center gap-1.5 px-2 py-1 bg-muted rounded">
                      <img src={tag.icon || "/placeholder.svg"} alt={tag.name} className="w-4 h-4" />
                      <span className="text-xs font-mono">{tag.name}</span>
                    </div>
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
