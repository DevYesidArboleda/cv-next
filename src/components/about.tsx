"use client"
 
export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="text-sm font-mono text-muted-foreground mb-6 uppercase tracking-wider">Sobre mí</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Soy un desarrollador apasionado por crear interfaces de usuario accesibles y pixel-perfect que combinan
                diseño responsivo con ingeniería robusta.
              </p>
              <p>
                Mi trabajo favorito se encuentra en la intersección del diseño y el desarrollo, creando experiencias que
                no solo se ven bien, sino que están meticulosamente construidas para el rendimiento y la usabilidad.
              </p>
              <p className="text-muted-foreground">
                Actualmente trabajo como <span className="text-foreground font-medium">Desarrollador Full Stack</span>,
                especializándome en tecnologías web modernas y mejores prácticas de desarrollo.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-mono text-muted-foreground mb-6 uppercase tracking-wider">Habilidades</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-base font-medium mb-3">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {["Vtex", "React", "Next.js", "TypeScript", "Tailwind CSS"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-muted text-sm rounded-md font-mono">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-base font-medium mb-3">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "PostgreSQL", "API REST"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-muted text-sm rounded-md font-mono">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-base font-medium mb-3">Herramientas</h4>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Figma"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-muted text-sm rounded-md font-mono">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
