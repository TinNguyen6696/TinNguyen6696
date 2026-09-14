import { BriefcaseIcon, LanguagesIcon, MapPinIcon } from "lucide-react"

import { profile } from "@/lib/profile"
import { Section, SectionHeading } from "@/components/landing/primitives"

const facts = [
  {
    icon: MapPinIcon,
    label: "Based in",
    value: "Nha Trang, Khanh Hoa, Viet Nam",
  },
  { icon: LanguagesIcon, label: "Languages", value: "Vietnamese, English" },
  {
    icon: BriefcaseIcon,
    label: "Open to",
    value: "Remote, freelance & full-time",
  },
]

export function About() {
  return (
    <Section id="about">
      <div data-reveal-group className="flex flex-col gap-10">
        <SectionHeading id="about" index="01" eyebrow="About" />

        <div data-reveal-group className="flex flex-col gap-8">
          <p className="text-justify text-body-lg text-pretty text-ink-muted">{profile.about}</p>

          <dl className="grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-3">
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex flex-col gap-2 bg-surface-1 p-4">
                <dt className="flex items-center gap-2 text-label-sm text-ink-dim">
                  <Icon aria-hidden="true" className="size-4" />
                  {label}
                </dt>
                <dd className="text-body-sm text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  )
}
