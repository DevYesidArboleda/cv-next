import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Journey } from "@/components/journey"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Saltar al contenido
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Journey />
        <div>
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
