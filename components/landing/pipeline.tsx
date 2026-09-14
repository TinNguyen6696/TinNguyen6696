const steps = ["Idea", "Design", "Build", "Ship"]

// The runner covers the track in the first 70% of the 4s cycle, so each step
// lights up when the runner reaches its dot.
const stepDelay = (index: number) => `${((4 * 0.7 * index) / (steps.length - 1)).toFixed(2)}s`

export function Pipeline() {
  return (
    <div className="relative w-full max-w-[36rem]">
      {/* Track between the first and last dot centers. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-[12.5%] top-1.5 h-px -translate-y-1/2 bg-hairline"
      >
        <div className="absolute top-1/2 h-px w-16 -translate-x-full -translate-y-1/2 animate-pipeline-run bg-[linear-gradient(to_right,transparent,var(--brand))] motion-reduce:hidden">
          <span className="absolute top-1/2 right-0 size-1.5 translate-x-1/2 -translate-y-1/2 rounded-full bg-brand" />
        </div>
      </div>

      <ol aria-label="How I work" className="relative grid grid-cols-4">
        {steps.map((step, index) => (
          <li key={step} className="flex flex-col items-center gap-2">
            <span
              aria-hidden="true"
              className="size-3 animate-pipeline-dot rounded-full border border-hairline-strong bg-canvas motion-reduce:animate-none"
              style={{ animationDelay: stepDelay(index) }}
            />
            <span
              className="animate-pipeline-label font-mono text-caption text-ink-dim motion-reduce:animate-none"
              style={{ animationDelay: stepDelay(index) }}
            >
              {step}
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}
