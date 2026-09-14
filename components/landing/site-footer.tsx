import { ArrowUpIcon } from "lucide-react"

import { profile } from "@/lib/profile"
import { Container, sectionDivider } from "@/components/landing/primitives"
import { cn } from "@/lib/utils"

export function SiteFooter() {
  return (
    <footer className={cn("bg-canvas", sectionDivider)}>
      <Container className="flex flex-col gap-4 py-8 text-body-sm text-ink-dim sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp; Tailwind CSS.
        </p>
        <a
          href="#top"
          className="inline-flex h-9 items-center gap-1.5 self-start rounded-sm text-ink-muted transition-colors hover:text-ink focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none sm:self-auto"
        >
          Back to top
          <ArrowUpIcon aria-hidden="true" className="size-4" />
        </a>
      </Container>
    </footer>
  )
}
