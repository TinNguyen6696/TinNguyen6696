import { ChevronRightIcon } from "lucide-react"

import { experience } from "@/lib/profile"
import { Chip, Section, SectionHeading } from "@/components/landing/primitives"

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading id="experience" index="03" eyebrow="Experience" />
      <ol data-reveal-group className="mt-12 flex flex-col gap-4">
        {experience.map((job) => (
          <li
            key={`${job.company}-${job.period}`}
            className="grid gap-6 rounded-xl border border-hairline bg-surface-1 p-5 md:grid-cols-[200px_1fr] md:gap-10 md:p-8"
          >
            <div className="flex flex-col items-start gap-1.5">
              <p className="font-mono text-mono-sm text-ink-muted">
                <time>{job.period}</time>
              </p>
              <p className="font-display text-heading-lg text-brand">
                <span className="sr-only">at </span>
                {job.company}
              </p>
            </div>

            <div className="flex min-w-0 flex-col gap-5">
              <div className="flex flex-col gap-2">
                <h3 className="text-[1.5rem] leading-tight font-semibold tracking-[-0.5px] text-ink">
                  {job.role}
                </h3>
                <p className="text-body-md text-pretty text-ink-muted">{job.description}</p>
              </div>

              <ul className="flex flex-col gap-2.5">
                {job.highlights.map((item) => (
                  <li key={item} className="flex gap-2 text-body-md text-ink-muted">
                    <ChevronRightIcon
                      aria-hidden="true"
                      className="mt-1 size-4 shrink-0 text-brand"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <ul
                aria-label="Technologies used"
                className="flex flex-wrap gap-2 border-t border-hairline pt-5"
              >
                {job.tags.map((tag) => (
                  <Chip key={tag} className="font-mono">
                    {tag}
                  </Chip>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
