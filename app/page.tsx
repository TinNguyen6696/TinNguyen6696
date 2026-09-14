import { About } from "@/components/landing/about"
import { Contact } from "@/components/landing/contact"
import { Experience } from "@/components/landing/experience"
import { Hero } from "@/components/landing/hero"
import { Projects } from "@/components/landing/projects"
import { SiteFooter } from "@/components/landing/site-footer"
import { SiteHeader } from "@/components/landing/site-header"
import { Stack } from "@/components/landing/stack"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <SiteFooter />
      <ScrollReveal />
    </>
  )
}
