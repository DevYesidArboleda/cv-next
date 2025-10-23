export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="text-3xl font-bold text-muted-foreground mb-6 uppercase tracking-wider ">Sobre mí</h2>
            <div className="space-y-6 text-lg leading-relaxed font-mono text-justify">
              <p >
                Soy un desarrollador full-stack que encuentra su pasión en la intersección entre el diseño y la ingeniería. Me especializo en traducir visiones de diseño en interfaces de usuario accesibles y pixel-perfect, respaldadas por una arquitectura robusta y de alto rendimiento. Mi objetivo es construir experiencias digitales que no solo sean visualmente impresionantes, sino también funcionales, usables y meticulosamente construidas.
              </p>
              <p>
                Como desarrollador full-stack, mi misión es construir puentes entre el diseño creativo y la solidez técnica. Me apasiona materializar experiencias de usuario que sean visualmente pulcras (pixel-perfect), inclusivas (accesibles) y ofrezcan un rendimiento óptimo. Cada línea de código que escribo tiene como objetivo no solo cumplir con las especificaciones, sino superar las expectativas de usabilidad y funcionalidad.
              </p>              
            </div>
            <div className="mt-8 p-6 rounded-lg border border-border bg-gradient-to-br from-cyan-500/5 to-blue-500/5">
              <img src="/profilepic.png" alt="Developer workspace" className="w-full h-auto rounded-lg" />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-mono text-muted-foreground mb-6 uppercase tracking-wider md:text-2xl md:font-bold">Habilidades</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-base font-medium mb-3 font-mono">Frontend</h4>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-3 py-2 bg-muted rounded-md">
                    <img
                      src="https://brand.vtex.com/wp-content/themes/vtex-brand/img/logo.svg"
                      alt="Vtex"
                      className="w-5 h-5"
                    />
                    <span className="text-sm font-mono">Vtex</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-muted rounded-md">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                      alt="React"
                      className="w-5 h-5"
                    />
                    <span className="text-sm font-mono">React</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-muted rounded-md">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                      alt="Next.js"
                      className="w-5 h-5"
                    />
                    <span className="text-sm font-mono">Next.js</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-muted rounded-md">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                      alt="TypeScript"
                      className="w-5 h-5"
                    />
                    <span className="text-sm font-mono">TypeScript</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-muted rounded-md">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                      alt="Tailwind"
                      className="w-5 h-5"
                    />
                    <span className="text-sm font-mono">Tailwind CSS</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-base font-medium mb-3 font-mono">Backend</h4>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-3 py-2 bg-muted rounded-md">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                      alt="Node.js"
                      className="w-5 h-5"
                    />
                    <span className="text-sm font-mono">Node.js</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-muted rounded-md">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                      alt="PostgreSQL"
                      className="w-5 h-5"
                    />
                    <span className="text-sm font-mono">PostgreSQL</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-muted rounded-md">
                    <span className="text-sm font-mono">API REST</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-base font-medium mb-3 font-mono">Herramientas</h4>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-3 py-2 bg-muted rounded-md">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                      alt="Git"
                      className="w-5 h-5"
                    />
                    <span className="text-sm font-mono">Git</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-muted rounded-md">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                      alt="Figma"
                      className="w-5 h-5"
                    />
                    <span className="text-sm font-mono">Figma</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-muted rounded-md">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                      alt="VS Code"
                      className="w-5 h-5"
                    />
                    <span className="text-sm font-mono">VS Code</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
