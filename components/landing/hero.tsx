import { ArrowDownIcon, MailIcon } from "lucide-react"

import { profile } from "@/lib/profile"
import { Pipeline } from "@/components/landing/pipeline"
import { Container, primaryCta, secondaryCta } from "@/components/landing/primitives"

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      {/* Soft grass-green glow behind the headline. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_120%_at_50%_0%,color-mix(in_oklch,var(--grass-7)_35%,transparent),transparent)]"
      />

      <Container className="relative flex flex-col items-center gap-10 py-16 text-center md:py-24 lg:py-section">
        <h1
          id="hero-title"
          className="text-[2.5rem] leading-[1.05] font-bold tracking-[-1px] text-ink motion-safe:animate-hero-in-slow sm:text-display-md sm:leading-[3rem] sm:tracking-[-1.2px] lg:text-display-xl lg:leading-[3.75rem] lg:tracking-[-1.5px]"
        >
          Hi, I&apos;m {profile.name}.
        </h1>

        <div className="w-full max-w-[36rem] motion-safe:animate-hero-in motion-safe:[animation-delay:150ms]">
          <Pipeline />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 motion-safe:animate-hero-in motion-safe:[animation-delay:300ms]">
          <a href={`mailto:${profile.email}`} className={primaryCta}>
            <MailIcon aria-hidden="true" />
            Get in touch
          </a>
          <a href="#projects" className={secondaryCta}>
            View projects
            <ArrowDownIcon aria-hidden="true" />
          </a>
        </div>
      </Container>
    </section>
  )
}
