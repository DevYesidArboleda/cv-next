import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Technologies } from "@/components/technologies"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AnimatedBackground } from "@/components/animated-background"
import { BackToTop } from "@/components/back-to-top"

export default function Home() {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Navigation />
      <main className="relative z-10 lg:pl-64">
        <Hero />
        <About />
        <Services />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <WhatsAppButton />
      <BackToTop />
    </div>
  )
}
