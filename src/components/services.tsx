import { Code, Palette, Rocket, Database } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Code,
      title: "Desarrollo Web",
      description:
        "Creación de aplicaciones web modernas y responsivas utilizando las últimas tecnologías y mejores prácticas.",
      gradient: "from-cyan-500/10 to-blue-500/10",
      iconColor: "text-cyan-500",
    },
    {
      icon: Palette,
      title: "Diseño UI/UX",
      description:
        "Diseño de interfaces intuitivas y atractivas que mejoran la experiencia del usuario y la conversión.",
      gradient: "from-purple-500/10 to-pink-500/10",
      iconColor: "text-purple-500",
    },
    {
      icon: Rocket,
      title: "Optimización",
      description: "Mejora del rendimiento, SEO y accesibilidad de aplicaciones web para maximizar su impacto.",
      gradient: "from-orange-500/10 to-red-500/10",
      iconColor: "text-orange-500",
    },
    {
      icon: Database,
      title: "Backend & APIs",
      description: "Desarrollo de APIs robustas y escalables, integración de bases de datos y servicios en la nube.",
      gradient: "from-green-500/10 to-emerald-500/10",
      iconColor: "text-green-500",
    },
  ]

  return (
    <section id="services" className="min-h-screen flex items-center px-6 py-12">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-sm font-mono text-muted-foreground mb-12 uppercase tracking-wider">Servicios</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group p-6 rounded-lg border border-border hover:border-primary bg-gradient-to-br ${service.gradient} hover:shadow-lg hover:shadow-primary/5 transition-all`}
            >
              <service.icon className={`w-8 h-8 ${service.iconColor} mb-4`} />
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
