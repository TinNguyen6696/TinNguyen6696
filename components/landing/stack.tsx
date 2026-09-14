import { DatabaseIcon, MonitorIcon, ServerIcon } from "lucide-react"

import { stack } from "@/lib/profile"
import { Chip, Section, SectionHeading } from "@/components/landing/primitives"

const icons = {
  Frontend: MonitorIcon,
  Backend: ServerIcon,
  Database: DatabaseIcon,
} as const

export function Stack() {
  return (
    <Section id="stack">
      <SectionHeading id="stack" index="02" eyebrow="Tech stack" />

      <ul data-reveal-group className="mt-12 grid gap-4 md:grid-cols-3">
        {stack.map((group) => {
          const Icon = icons[group.layer as keyof typeof icons]
          return (
            <li
              key={group.layer}
              className="group relative flex flex-col gap-5 overflow-hidden rounded-xl border border-hairline bg-surface-1 p-5 transition-colors duration-300 hover:border-brand-border"
            >
              {/* Soft green glow from the top corner, revealed on hover. */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_0%_0%,color-mix(in_oklch,var(--grass-7)_30%,transparent),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <h3 className="relative flex items-center gap-2.5 text-heading-lg text-ink">
                <span className="flex size-9 items-center justify-center rounded-lg border border-hairline bg-surface-2 text-ink-muted transition-colors duration-300 group-hover:border-brand-border group-hover:bg-brand-fill group-hover:text-brand">
                  <Icon aria-hidden="true" className="size-4" />
                </span>
                {group.layer}
              </h3>

              <ul
                aria-label={`${group.layer} technologies`}
                className="relative flex flex-wrap gap-2"
              >
                {group.items.map((item) => (
                  <Chip
                    key={item}
                    className="transition-colors duration-300 group-hover:border-hairline-strong group-hover:text-ink"
                  >
                    {item}
                  </Chip>
                ))}
              </ul>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
