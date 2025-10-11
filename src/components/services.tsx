"use client"

import { Code, Palette, Rocket, Database, ChevronDown } from "lucide-react"
import { useState } from "react"

export function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null)

  const services = [
    {
      icon: Code,
      title: "Desarrollo Web",
      description:
        "Creación de aplicaciones web modernas y responsivas utilizando las últimas tecnologías y mejores prácticas.",
      gradient: "from-cyan-500/10 to-blue-500/10",
      iconColor: "text-cyan-500",
      benefits: [
        "Aplicaciones web responsivas y optimizadas",
        "Integración con APIs y servicios externos",
        "Código limpio y mantenible siguiendo estándares",
        "Implementación de mejores prácticas de seguridad",
        "Testing y documentación completa",
      ],
    },
    {
      icon: Palette,
      title: "Diseño UI/UX",
      description:
        "Diseño de interfaces intuitivas y atractivas que mejoran la experiencia del usuario y la conversión.",
      gradient: "from-purple-500/10 to-pink-500/10",
      iconColor: "text-purple-500",
      benefits: [
        "Diseños modernos y atractivos visualmente",
        "Interfaces intuitivas y fáciles de usar",
        "Prototipado rápido con Figma",
        "Sistemas de diseño escalables",
        "Optimización de conversión y engagement",
      ],
    },
    {
      icon: Rocket,
      title: "Optimización",
      description: "Mejora del rendimiento, SEO y accesibilidad de aplicaciones web para maximizar su impacto.",
      gradient: "from-orange-500/10 to-red-500/10",
      iconColor: "text-orange-500",
      benefits: [
        "Mejora de velocidad de carga hasta 80%",
        "Optimización SEO para mejor posicionamiento",
        "Accesibilidad WCAG 2.1 nivel AA",
        "Reducción de costos de hosting",
        "Análisis y métricas de rendimiento",
      ],
    },
    {
      icon: Database,
      title: "Backend & APIs",
      description: "Desarrollo de APIs robustas y escalables, integración de bases de datos y servicios en la nube.",
      gradient: "from-green-500/10 to-emerald-500/10",
      iconColor: "text-green-500",
      benefits: [
        "APIs RESTful y GraphQL escalables",
        "Integración con bases de datos SQL y NoSQL",
        "Autenticación y autorización segura",
        "Microservicios y arquitectura serverless",
        "Documentación completa con Swagger/OpenAPI",
      ],
    },
  ]

  return (
    <section id="services" className="min-h-screen flex items-center px-6 py-8 md:py-12">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-2xl font-bold font-mono text-muted-foreground mb-12 uppercase tracking-wider">Servicios</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group p-6 rounded-lg border border-border hover:border-primary bg-gradient-to-br ${service.gradient} hover:shadow-lg hover:shadow-primary/5 transition-all`}
            >
              <service.icon className={`w-8 h-8 ${service.iconColor} mb-4`} />
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors font-mono">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-mono text-sm">{service.description}</p>

              <button
                onClick={() => setExpandedService(expandedService === index ? null : index)}
                className="flex items-center gap-2 mt-4 text-sm font-mono text-primary hover:text-primary/80 transition-colors"
              >
                <span>{expandedService === index ? "Ocultar detalles" : "Ver detalles"}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${expandedService === index ? "rotate-180" : ""}`}
                />
              </button>

              {expandedService === index && (
                <ul className="mt-4 space-y-2 text-sm font-mono text-muted-foreground animate-in fade-in slide-in-from-top-2 duration-300">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1">▸</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
