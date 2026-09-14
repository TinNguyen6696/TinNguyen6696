"use client"

import * as React from "react"

const STAGGER_MS = 80

// Reveals `[data-reveal]` and `[data-reveal-group]` elements as they scroll into view.
// Styles live in globals.css and only apply once `.reveal-ready` is on <html>.
export function ScrollReveal() {
  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const targets = document.querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-group]")

    targets.forEach((target) => {
      if (!target.hasAttribute("data-reveal-group")) return
      // Nested groups start one step later so their parent's heading leads.
      const offset = target.parentElement?.closest("[data-reveal-group]") ? 1 : 0
      Array.from(target.children).forEach((child, index) => {
        ;(child as HTMLElement).style.setProperty(
          "--reveal-delay",
          `${(index + offset) * STAGGER_MS}ms`
        )
      })
    })

    // Anything already on screen stays put instead of blinking out and fading back in.
    targets.forEach((target) => {
      if (target.getBoundingClientRect().top < window.innerHeight) {
        target.setAttribute("data-reveal-instant", "")
        target.classList.add("is-revealed")
      }
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add("is-revealed")
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: "0px 0px -10% 0px" }
    )

    targets.forEach((target) => {
      if (!target.classList.contains("is-revealed")) observer.observe(target)
    })
    document.documentElement.classList.add("reveal-ready")

    return () => observer.disconnect()
  }, [])

  return null
}
