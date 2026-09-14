import { ArrowUpRightIcon, CodeIcon, FolderIcon } from "lucide-react"

import { projects, type Project } from "@/lib/profile"
import { Chip, Section, SectionHeading } from "@/components/landing/primitives"

const PLACEHOLDER_COUNT = 3

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading id="projects" index="04" eyebrow="Projects" />

      {projects.length > 0 ? (
        <ul data-reveal-group className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </ul>
      ) : (
        <ul
          data-reveal-group
          aria-label="Projects coming soon"
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {Array.from({ length: PLACEHOLDER_COUNT }, (_, i) => (
            <li
              key={i}
              className="flex min-h-56 flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-hairline-soft bg-surface-1/50 p-6 text-center"
            >
              <span className="flex size-10 items-center justify-center rounded-lg border border-hairline bg-surface-2 text-ink-dim">
                <FolderIcon aria-hidden="true" className="size-4" />
              </span>
              <p className="text-heading-sm text-ink-muted">Coming soon</p>
              <p className="text-body-sm text-ink-dim">Project details are on the way.</p>
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="flex flex-col gap-4 rounded-xl border border-hairline bg-surface-1 p-5 transition-colors hover:border-hairline-soft">
      <div className="flex flex-col gap-2">
        {project.meta ? (
          <p className="font-mono text-caption text-ink-dim">{project.meta}</p>
        ) : null}
        <h3 className="text-heading-lg text-ink">{project.title}</h3>
        <p className="text-body-sm text-pretty text-ink-muted">{project.description}</p>
      </div>

      {project.tags.length > 0 ? (
        <ul aria-label={`${project.title} technologies`} className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </ul>
      ) : null}

      {project.href || project.repo ? (
        <div className="mt-auto flex flex-wrap gap-4 border-t border-hairline pt-4">
          {project.href ? (
            <ProjectLink href={project.href} label={`Visit ${project.title}`}>
              Live site
              <ArrowUpRightIcon aria-hidden="true" className="size-4" />
            </ProjectLink>
          ) : null}
          {project.repo ? (
            <ProjectLink href={project.repo} label={`${project.title} source code`}>
              <CodeIcon aria-hidden="true" className="size-4" />
              Source
            </ProjectLink>
          ) : null}
        </div>
      ) : null}
    </li>
  )
}

function ProjectLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${label} (opens in a new tab)`}
      className="inline-flex h-8 items-center gap-1.5 rounded-sm text-label-md text-ink-muted transition-colors hover:text-blue-accent focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
    >
      {children}
    </a>
  )
}
