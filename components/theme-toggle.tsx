"use client"

import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon-lg"
      aria-label="Toggle color theme"
      title="Toggle color theme (D)"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      className="text-ink-muted hover:text-ink"
    >
      {/* Both icons render on the server; CSS picks one so there's no hydration flash. */}
      <SunIcon aria-hidden="true" className="[.light_&]:hidden" />
      <MoonIcon aria-hidden="true" className="hidden [.light_&]:block" />
    </Button>
  )
}
