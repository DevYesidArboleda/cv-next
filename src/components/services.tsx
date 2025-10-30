"use client"

import { Code, Palette, Rocket, Database, ChevronDown } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null)
  const { t } = useLanguage()

  const services = [
    {
      icon: Code,
      title: t("Desarrollo Web", "Web Development"),
      description: t(
        "Creación de aplicaciones web modernas y responsivas utilizando las últimas tecnologías y mejores prácticas.",
        "Creation of modern and responsive web applications using the latest technologies and best practices.",
      ),
      gradient: "from-cyan-500/10 to-blue-500/10",
      iconColor: "text-cyan-500",
      benefits: [
        t("Aplicaciones web responsivas y optimizadas", "Responsive and optimized web applications"),
        t("Integración con APIs y servicios externos", "Integration with APIs and external services"),
        t("Código limpio y mantenible siguiendo estándares", "Clean and maintainable code following standards"),
        t("Implementación de mejores prácticas de seguridad", "Implementation of security best practices"),
        t("Testing y documentación completa", "Testing and complete documentation"),
      ],
    },
    {
      icon: Palette,
      title: t("Diseño UI/UX", "UI/UX Design"),
      description: t(
        "Diseño de interfaces intuitivas y atractivas que mejoran la experiencia del usuario y la conversión.",
        "Design of intuitive and attractive interfaces that improve user experience and conversion.",
      ),
      gradient: "from-purple-500/10 to-pink-500/10",
      iconColor: "text-purple-500",
      benefits: [
        t("Diseños modernos y atractivos visualmente", "Modern and visually appealing designs"),
        t("Interfaces intuitivas y fáciles de usar", "Intuitive and easy-to-use interfaces"),
        t("Prototipado rápido con Figma", "Rapid prototyping with Figma"),
        t("Sistemas de diseño escalables", "Scalable design systems"),
        t("Optimización de conversión y engagement", "Conversion and engagement optimization"),
      ],
    },
    {
      icon: Rocket,
      title: t("Optimización", "Optimization"),
      description: t(
        "Mejora del rendimiento, SEO y accesibilidad de aplicaciones web para maximizar su impacto.",
        "Improvement of performance, SEO and accessibility of web applications to maximize their impact.",
      ),
      gradient: "from-orange-500/10 to-red-500/10",
      iconColor: "text-orange-500",
      benefits: [
        t("Mejora de velocidad de carga hasta 80%", "Loading speed improvement up to 80%"),
        t("Optimización SEO para mejor posicionamiento", "SEO optimization for better positioning"),
        t("Accesibilidad WCAG 2.1 nivel AA", "WCAG 2.1 level AA accessibility"),
        t("Reducción de costos de hosting", "Hosting cost reduction"),
        t("Análisis y métricas de rendimiento", "Performance analysis and metrics"),
      ],
    },
    {
      icon: Database,
      title: t("Backend & APIs", "Backend & APIs"),
      description: t(
        "Desarrollo de APIs robustas y escalables, integración de bases de datos y servicios en la nube.",
        "Development of robust and scalable APIs, database integration and cloud services.",
      ),
      gradient: "from-green-500/10 to-emerald-500/10",
      iconColor: "text-green-500",
      benefits: [
        t("APIs RESTful y GraphQL escalables", "Scalable RESTful and GraphQL APIs"),
        t("Integración con bases de datos SQL y NoSQL", "Integration with SQL and NoSQL databases"),
        t("Autenticación y autorización segura", "Secure authentication and authorization"),
        t("Microservicios y arquitectura serverless", "Microservices and serverless architecture"),
        t("Documentación completa con Swagger/OpenAPI", "Complete documentation with Swagger/OpenAPI"),
      ],
    },
  ]

  return (
    <section id="services" className="min-h-screen flex items-center px-6 py-8 md:py-12">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-2xl font-bold font-mono text-muted-foreground mb-12 uppercase tracking-wider">
          {t("Servicios", "Services")}
        </h2>
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
                <span>
                  {expandedService === index
                    ? t("Ocultar detalles", "Hide details")
                    : t("Ver detalles", "View details")}
                </span>
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
