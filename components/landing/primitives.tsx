import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

// Depot `button-primary`: dark-green fill, grass-green label, mid-green edge.
export const primaryCta = cn(
  buttonVariants({ size: "lg" }),
  "h-10 gap-2 border-primary-border px-4 text-button-md hover:bg-brand-subtle"
)

// Depot `button-secondary`: transparent fill, ink label, hairline edge.
export const secondaryCta = cn(
  buttonVariants({ variant: "outline", size: "lg" }),
  "h-10 gap-2 rounded-md border-hairline bg-transparent px-4 text-body-md text-ink hover:bg-surface-2 dark:bg-transparent dark:hover:bg-surface-2"
)

export function Container({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-content px-5 md:px-10 min-[85rem]:px-0", className)}
      {...props}
    />
  )
}

// Grass-green rule on the top edge, brightest in the middle and fading out at both ends.
export const sectionDivider =
  "relative before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-[linear-gradient(to_right,transparent,var(--brand)_50%,transparent)] before:opacity-70"

export function Section({ id, className, children, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-title` : undefined}
      className={cn("scroll-mt-12 py-15 md:py-20", sectionDivider, className)}
      {...props}
    >
      <Container data-reveal-group>{children}</Container>
    </section>
  )
}

export function SectionHeading({
  id,
  index,
  eyebrow,
}: {
  id: string
  index: string
  eyebrow: string
}) {
  return (
    <h2
      id={`${id}-title`}
      className="flex items-baseline justify-center gap-3 text-[1.75rem] leading-tight font-bold tracking-[-0.6px] text-ink md:text-[2.25rem] md:tracking-[-0.9px]"
    >
      <span className="font-mono font-normal tracking-normal text-brand">{index}</span>
      <span aria-hidden="true" className="font-normal text-ink-faint">
        /
      </span>
      {eyebrow}
    </h2>
  )
}

export function Chip({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      className={cn(
        "inline-flex items-center rounded-sm border border-hairline bg-surface-2 px-2 py-1 text-label-sm text-ink-muted",
        className
      )}
      {...props}
    />
  )
}
