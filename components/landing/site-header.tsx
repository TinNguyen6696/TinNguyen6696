import { navLinks } from "@/lib/profile"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Container } from "@/components/landing/primitives"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-surface-1/95 backdrop-blur-md supports-[backdrop-filter]:bg-surface-1/80">
      <Container className="flex h-12 items-center justify-between">
        <a href="#top" className="font-mono">
          Tin Nguyen
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex h-10 items-center rounded-sm px-3 text-nav-link text-ink-muted transition-colors hover:bg-surface-2 hover:text-ink focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className={cn(
              buttonVariants(),
              "h-9 border-primary-border px-3 text-button-md hover:bg-brand-subtle"
            )}
          >
            Get in touch
          </a>
        </div>
      </Container>
    </header>
  )
}
