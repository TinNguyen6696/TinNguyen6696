import { MailIcon, PhoneIcon } from "lucide-react"

import { profile } from "@/lib/profile"
import { CopyButton } from "@/components/copy-button"
import { Section, SectionHeading } from "@/components/landing/primitives"

// Lucide dropped brand logos, so the GitHub mark is inlined.
function GitHubIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2.02c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.82 1.19 3.08 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

const channels = [
  {
    icon: MailIcon,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: PhoneIcon,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: profile.github,
    href: profile.githubHref,
    external: true,
  },
]

export function Contact() {
  return (
    <Section id="contact">
      <div data-reveal-group className="flex flex-col items-center gap-10">
        <SectionHeading id="contact" index="05" eyebrow="Contact" />

        <ul data-reveal-group className="grid w-full gap-4 md:grid-cols-2 lg:grid-cols-3">
          {channels.map(({ icon: Icon, label, value, href, external }) => (
            <li
              key={label}
              className="flex items-center gap-3 rounded-xl border border-hairline bg-surface-1 p-3 pl-4"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-hairline bg-surface-2 text-ink-muted">
                <Icon aria-hidden="true" className="size-4" />
              </span>
              <div className="flex min-w-0 flex-1 flex-col">
                <span className="text-label-sm text-ink-dim">{label}</span>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="rounded-sm font-mono text-mono-sm [overflow-wrap:anywhere] text-ink underline-offset-4 hover:text-blue-accent hover:underline focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                >
                  {value}
                </a>
              </div>
              <CopyButton value={value} label={label.toLowerCase()} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
