"use client"

import * as React from "react"
import { CheckIcon, CopyIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => {
    if (!copied) return
    const timeout = window.setTimeout(() => setCopied(false), 2000)
    return () => window.clearTimeout(timeout)
  }, [copied])

  async function copy() {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <>
      <Button
        variant="ghost"
        size="icon-lg"
        onClick={copy}
        aria-label={`Copy ${label}`}
        className="text-ink-dim hover:text-ink"
      >
        {copied ? (
          <CheckIcon aria-hidden="true" className="text-brand" />
        ) : (
          <CopyIcon aria-hidden="true" />
        )}
      </Button>
      <span role="status" className="sr-only">
        {copied ? `${label} copied to clipboard` : ""}
      </span>
    </>
  )
}
