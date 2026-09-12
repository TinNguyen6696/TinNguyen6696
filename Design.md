---
version: alpha
name: "Depot"
website: "https://depot.dev"
description: >-
  A developer-infrastructure brand whose marketing site runs a near-black Radix Mauve canvas
  with a single grass-green voltage (#71d083 / #1d3a24) wired as the primary CTA fill and
  build-output success color — the only chromatic brand move on an otherwise graphite page.
  Type runs Red Hat Display Variable at 48px / weight 700 with -1.5px tracking for the hero
  headline, with Red Hat Text Variable handling all body and nav copy and Red Hat Mono Variable
  carrying the CI log and code strips. The system treats green as an infrastructure-success
  signal rather than a brand accent: the CTA button is a dark-green surface (#1b2a1e) with
  grass-green text (#71d083), inverting the figure-ground convention that most CI/CD brands use.

seo:
  title: "Depot Design System for React — grass green on near-black, Red Hat, 15 components"
  metaDescription: "Depot's marketing design system as DESIGN.md. Grass-green #71d083 on near-black Mauve canvas, Red Hat Display/Text/Mono triple stack, 17 color tokens, 15 components. For React, Next.js, AI tools."
  highlights:
    - "Green-as-output signal — the primary CTA uses dark-green background (#1b2a1e) with grass-green text (#71d083), reading as a build-success readout rather than a conventional fill button"
    - "Triple Red Hat stack — Red Hat Display Variable for display headings, Red Hat Text Variable for body and nav, Red Hat Mono Variable for CI logs and code; three optical cuts of one type family divide every surface"
    - "Radix Mauve near-black — the canvas is built from the Radix UI Mauve dark scale (#04040b base, #121113 surface), giving the page a blue-violet undertone rather than the neutral gray that Vercel and Linear use"
    - "48px / weight 700 hero headline — the only moment of heavy weight in the system; body and labels stay at 400-500, making the display heading the single typographic shout"
    - "Grass-green borders on dark-green cards — the CI output panel uses #366740 / #2d5736 border tones against a #1b2a1e fill, recreating the terminal success-output aesthetic in component form"
  tags:
    - "Developer Tools & IDEs"
    - "Backend, Database & DevOps"
  lastUpdated: "2026-05-19"
  author:
    name: "Dov Azencot"
    url: "https://x.com/dovazencot"
  opening: |
    Depot's marketing site makes a specific typographic claim: "Build faster. Waste less time." That headline sits at 60px / weight 700 in Red Hat Display Variable against a near-black Radix Mauve canvas (#04040b), and the primary CTA below it is a dark-green button with grass-green text. Not an orange button, not a cobalt pill, not a gradient — a dark-green surface that reads as a CI success output more than a call-to-action. Where Buildkite leans on a green-voltage-on-white system and CircleCI uses a white-on-dark-green inversion, Depot keeps the dark-green both as the background and the text color, layering two tints of the same hue rather than reaching for a contrast pair. The effect is intentionally terminal-adjacent: the green reads as stdout before it reads as a brand color.

    This DESIGN.md packages Depot's marketing system into a machine-readable spec. Inside: 17 color tokens derived from the Radix UI Mauve dark scale and a grass-green voltage family (ranging from near-black #1b2a1e to mid grass-green #71d083), a three-cut Red Hat type stack (Display Variable for headlines at 48-60px, Text Variable for body at 14-18px, Mono Variable for code and CI output at 14px), a compact radius scale centered on 6-10px, and 15 component definitions covering the dark-green CTA, nav, hero heading, the CI benchmark card grid, and the build-log strip.

    Feed this file to Claude or Cursor and it reproduces Depot's specific moves: Radix Mauve near-black instead of a neutral gray, grass-green reserved for success-output contexts rather than generic CTAs, and the Red Hat triple-cut stack that lets the page shift from display editorial to body prose to terminal log without changing the brand family. The one move worth studying independently of the brand: the dark-green-on-dark-green CTA, which works only because the grass-green text (#71d083) carries enough lightness to read as a foreground value against the #1b2a1e fill — a contrast ratio that most design systems would reject as insufficient but that Depot uses precisely because it looks like a terminal prompt.
  related:
    - href: "/design"
      title: "Browse all design systems"
      description: "The full directory of DESIGN.md files on shadcn.io, with live mockups for each."
    - href: "https://depot.dev"
      title: "Depot — official site"
      description: "Depot's public marketing site — the source of truth for the live tokens captured in this file."
    - href: "https://github.com/google-labs-code/design.md"
      title: "The DESIGN.md specification"
      description: "Google Labs' open spec for machine-readable design system files — the format this page is built on."
  questions:
    - id: "primary-color"
      title: "What is Depot's primary brand color?"
      answer: "Depot's brand voltage is grass green, split across two tones: #71d083 (the text / foreground green, wired as --color-radix-grass11) and #1d3a24 (the dark-green fill used as the CTA background, wired as --color-radix-grass4). The primary button places grass-green text on the dark-green fill, with a mid-green border at #366740. The green reads as a build-success signal — intentionally matching the stdout green of a passing CI test — rather than as a conventional brand accent. It appears in 40-12 total occurrences across the captured marketing page: the CTA button, the build-time stat badges, and the build-output card borders."
    - id: "typography"
      title: "What typefaces does Depot use and how are they divided?"
      answer: "Depot runs the Red Hat type family in three optical cuts declared as separate CSS custom properties: --font-display (Red Hat Display Variable) for hero and section headlines, --font-sans (Red Hat Text Variable) for body paragraphs, nav labels, and button text, and --font-mono (Red Hat Mono Variable) for CI log output, code snippets, and build-time readouts. The hero h1 'Build faster. Waste less time.' sits at 60px / weight 700 / -1.5px tracking in Red Hat Display Variable — the only weight-700 moment in the system. Body copy uses Red Hat Text Variable at 18px / weight 400. The mono cut appears at 14px / weight 400 in the build-log and benchmark panels. Inter is the closest open-source substitute; the proportions transfer cleanly at the same weights."
    - id: "canvas-color"
      title: "Why does Depot use Radix Mauve instead of a neutral near-black?"
      answer: "Depot's canvas is built from the Radix UI Mauve dark scale: #04040b as the page floor (wired as --color-radix-mauve-black), #121113 as the primary surface (--color-radix-mauve1, --primary, --sidebar-primary), and #1a191b as the secondary surface (--color-radix-mauve2). Mauve is a near-neutral with a faint blue-violet undertone (OKLCH hue ~308 degrees). The effect is subtle — most viewers read the page as near-black — but the undertone makes the grass-green velocity read cooler and more terminal-adjacent than it would against a warm near-black. Vercel and Linear both use slightly blue near-blacks; Depot uses the Radix Mauve dark scale, which comes pre-stepped into semantic roles (mauve1-12) rather than requiring a custom ramp."
    - id: "button-style"
      title: "Why does Depot's primary button have green text on a dark-green background?"
      answer: "Depot's primary CTA (extracted as the 'Get started' link) uses #1b2a1e as the fill, #71d083 as the text color, and #366740 as the border — all tones from the Radix grass dark scale. The figure-ground reversal is intentional: the button reads as a terminal success-output segment (dark background, bright green text) rather than a conventional filled button (bright background, white text). The contrast between #71d083 and #1b2a1e is approximately 4.8:1, which passes WCAG AA for normal text at the extracted 14px / weight 400. The move distinguishes Depot from CI/CD competitors who either use a flat-green fill on white or a white label on a flat green — Depot layers two greens and lets the terminal association do the brand work."
    - id: "use-in-project"
      title: "Can I use this DESIGN.md to build a CI/CD or dev-infra marketing site?"
      answer: "Yes — the file is designed to be fed into Claude, Cursor, or any AI tool that reads structured design tokens. The agent will reproduce Depot's specific moves: Radix Mauve near-black canvas, grass-green voltage reserved for build-success contexts (CTA, stat badges, log borders), Red Hat Display/Text/Mono triple stack, and compact 6-10px rounding rather than the pill-and-sharp binary that Cloudflare and Vercel use. The benchmark card grid and CI log strip components are the most distinctive structural patterns — both use the dark-green surface (#1b2a1e) with mid-green borders (#366740) to signal that the content is a readout rather than editorial prose. One note: the green-on-dark-green CTA only carries meaning in a dev-infra context where users associate grass-green with stdout; for a consumer product the same palette would read as unfinished."

mockups:
  - "marketing-hero"
  - "dashboard-card-grid"

colors:
  primary: "#71d083"
  primary-dark: "#1d3a24"
  primary-mid: "#366740"
  primary-border: "#2d5736"
  ink: "#eeeef0"
  ink-muted: "#b5b2bc"
  ink-dim: "#7c7a85"
  ink-faint: "#6f6d78"
  canvas: "#04040b"
  surface-1: "#121113"
  surface-2: "#1a191b"
  surface-3: "#323035"
  hairline: "#3c393f"
  hairline-soft: "#49474e"
  blue-accent: "#70b8ff"
  error-text: "#ff9592"

typography:
  display-xl:
    fontFamily: "\"Red Hat Display Variable\", ui-sans-serif, system-ui, sans-serif"
    fontSize: 60px
    fontWeight: 700
    lineHeight: 60px
    letterSpacing: "-1.5px"
  display-md:
    fontFamily: "\"Red Hat Display Variable\", ui-sans-serif, system-ui, sans-serif"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 48px
    letterSpacing: "-1.2px"
  heading-lg:
    fontFamily: "\"Red Hat Display Variable\", ui-sans-serif, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 28px
    letterSpacing: 0
  heading-md:
    fontFamily: "\"Red Hat Display Variable\", ui-sans-serif, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 28px
    letterSpacing: "-0.5px"
  heading-sm:
    fontFamily: "\"Red Hat Display Variable\", ui-sans-serif, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 24.75px
    letterSpacing: "-0.45px"
  body-lg:
    fontFamily: "\"Red Hat Text Variable\", ui-sans-serif, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: 0
  body-md:
    fontFamily: "\"Red Hat Text Variable\", ui-sans-serif, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0
  body-sm:
    fontFamily: "\"Red Hat Text Variable\", ui-sans-serif, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0
  label-md:
    fontFamily: "\"Red Hat Text Variable\", ui-sans-serif, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: 0
  label-sm:
    fontFamily: "\"Red Hat Text Variable\", ui-sans-serif, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
    letterSpacing: "0.3px"
  label-caps:
    fontFamily: "\"Red Hat Text Variable\", ui-sans-serif, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 16px
    letterSpacing: 0
  nav-link:
    fontFamily: "\"Red Hat Text Variable\", ui-sans-serif, system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 15px
    letterSpacing: 0
  button-md:
    fontFamily: "\"Red Hat Text Variable\", ui-sans-serif, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0
  mono-sm:
    fontFamily: "\"Red Hat Mono Variable\", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0
  caption:
    fontFamily: "\"Red Hat Text Variable\", ui-sans-serif, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 0

rounded:
  none: "0px"
  xs: "2px"
  sm: "4px"
  md: "6px"
  lg: "8px"
  xl: "10px"
  full: "9999px"

spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  base: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"

components:
  button-primary:
    backgroundColor: "{colors.primary-dark}"
    textColor: "{colors.primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.lg}"
    padding: "8px 12px"
    height: 32px
    borderColor: "{colors.primary-mid}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
    height: 36px
    borderColor: "{colors.hairline}"
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.none}"
    padding: "0px 16px"
    height: 48px
    borderColor: "{colors.hairline}"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.sm}"
    padding: "8px 12px"
    height: 31px
  hero-heading:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "0"
  section-heading:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
  body-paragraph:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    typography: "{typography.body-lg}"
  stat-badge:
    backgroundColor: "{colors.primary-dark}"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.lg}"
    padding: "8px 12px"
    borderColor: "{colors.primary-mid}"
  card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xl}"
    padding: "16px"
    borderColor: "{colors.hairline}"
  benchmark-card:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    padding: "16px"
    borderColor: "{colors.hairline-soft}"
  ci-log-strip:
    backgroundColor: "{colors.primary-dark}"
    textColor: "{colors.primary}"
    typography: "{typography.mono-sm}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
    borderColor: "{colors.primary-border}"
  logo-chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: "0px 8px"
  text-input:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
    height: 36px
    borderColor: "{colors.hairline}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-dim}"
    typography: "{typography.body-sm}"
    padding: "32px 16px"
  code-block:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.mono-sm}"
    rounded: "{rounded.md}"
    padding: "16px"
    borderColor: "{colors.hairline}"
---

## Overview

Depot's marketing site runs a near-black Radix Mauve canvas and answers the question of what CI/CD brand positioning looks like when the primary CTA references terminal stdout. **Green-as-output signal.** The primary button is not a cobalt pill or a white-on-green fill — it is a dark-green surface (`{colors.primary-dark}` — the Radix grass4 dark token) with grass-green text (`{colors.primary}` — grass11), bordered in a mid-green hairline. The combination reads as a build-log success row before it reads as a button. Where CircleCI uses bright green on white and Buildkite uses orange-on-dark, Depot inverts the figure-ground and layers two tints of the same hue — a move that only makes semantic sense in an infrastructure context where users associate grass-green with passing CI output.

The type system is the most structured in the dev-CI category: three optical cuts of the Red Hat family each handle a distinct surface. Red Hat Display Variable carries headings at 48-60px / weight 700, Red Hat Text Variable handles body and nav at 14-18px / weight 400-500, and Red Hat Mono Variable appears in build-log panels and code strips at 14px / weight 400. The visual result is a page that can shift from editorial headline to prose to terminal readout without changing type family — an infrastructure-appropriate single-family discipline that Linear and Vercel achieve with Geist/Inter and GitHub achieves with its proprietary Mona.

The canvas palette is Radix UI's Mauve dark scale — near-black with a blue-violet undertone rather than the neutral or warm grays that most dark-canvas brands use. `{colors.canvas}` (#04040b, the Radix mauve-black) is the page floor; `{colors.surface-1}` (#121113) lifts content panels; `{colors.surface-2}` (#1a191b) is the secondary surface for benchmark cards; `{colors.surface-3}` (#323035) and `{colors.hairline}` (#3c393f) provide the intermediate structure. The violet undertone makes the grass-green voltage read cooler and more terminal-adjacent than it would against a warm near-black.

**Key Characteristics:**
- Dark-green-on-dark-green CTA (`{colors.primary-dark}` fill / `{colors.primary}` text / `{colors.primary-mid}` border) — the single chromatic brand voltage, reading as build-success output rather than conventional brand chrome.
- Radix Mauve near-black canvas across five tonal steps from near-black floor to mid-dark hairline — the blue-violet undertone is the differentiator from Vercel's neutral charcoal or Linear's slightly-blue near-black.
- Red Hat Display / Text / Mono triple stack — the only dev-infra brand in the directory using three optical cuts of one family to cover all three content modes.
- Hero at 60px / weight 700 with -1.5px tracking — the single heavy typographic moment; the rest of the system operates at weight 400-600.
- Grass-green at 40 total occurrences (39 text, 0 bg, 0 border at the #71d083 tone) — plus 12 occurrences at the dark-green #1d3a24 fill and 12 at the mid-green #366740 border — three tints covering a single semantic role.
- Compact radius scale: 6px default, 8-10px on cards, full pill available — no large 16-24px soft rounding.
- Monospace in the product: the build-log strip uses Red Hat Mono Variable to signal that the content is infrastructure output, not editorial.

## Colors

### Brand Green

- **Grass Primary** (`{colors.primary}` — #71d083): frequency 40. Used as text (39), gradient (1). The grass-green CTA text and stat-badge foreground — the lightest, most visible green in the three-tone voltage family. Wired as `--color-radix-grass11`.
- **Grass Dark** (`{colors.primary-dark}` — #1d3a24): frequency 6. Used as background (6). The CTA and stat-badge fill — a near-black dark green that reads as a terminal output surface. Wired as `--color-radix-grass4`.
- **Grass Mid** (`{colors.primary-mid}` — #366740): frequency 12. Used as border (11), bg (1). The CTA and card border tone — mid-green that separates the dark-green fill from the near-black canvas without reaching for a light color. Wired as `--color-radix-grass7`.
- **Grass Border Soft** (`{colors.primary-border}` — #2d5736): frequency 7. Used as border (7). A slightly darker border variant used on secondary green surfaces. Wired as `--color-radix-grass6`.

### Text

- **Ink** (`{colors.ink}` — #eeeef0): frequency 379. Used as text (379). The dominant text color — a near-white with a faint violet-gray cast matching the Mauve canvas undertone. Wired as `--color-radix-mauve12`, `--border`, `--muted`, `--secondary`.
- **Ink Muted** (`{colors.ink-muted}` — #b5b2bc): frequency 141. Used as text (141). Secondary text — the body paragraph and nav link color. Wired as `--color-radix-mauve11`. The extracted body paragraph text color is this tone, not pure white.
- **Ink Dim** (`{colors.ink-dim}` — #7c7a85): frequency 64. Used as text (63), gradient (1). Tertiary text — footer copy, inactive labels. Wired as `--color-radix-mauve10`.
- **Ink Faint** (`{colors.ink-faint}` — #6f6d78): frequency 13. Used as text (13). Quaternary text — disabled or placeholder states. Wired as `--color-radix-mauve9`, `--muted-foreground`.

### Surface

- **Canvas** (`{colors.canvas}` — #04040b): frequency 26. Used as bg (18), gradient (8). The deepest page floor — Radix mauve-black with a distinct blue-violet undertone. Wired as `--color-radix-mauve-black`.
- **Surface-1** (`{colors.surface-1}` — #121113): frequency 17. Used as bg (14), gradient (3). The primary content panel surface. Wired as `--color-radix-mauve1`, `--primary`, `--sidebar-primary`.
- **Surface-2** (`{colors.surface-2}` — #1a191b): frequency 12. Used as bg (8), gradient (4). The secondary surface for benchmark cards and stacked content. Wired as `--color-radix-mauve2`.
- **Surface-3** (`{colors.surface-3}` — #323035): frequency 54. Used as bg (6), border (48). A mid-dark surface used for hover states and elevated panels. Wired as `--color-radix-mauve4/5`.

### Hairlines

- **Hairline** (`{colors.hairline}` — #3c393f): frequency 41. Used as border (41). The primary structural border — separating panels on the near-black canvas. Wired as `--color-radix-mauve6`.
- **Hairline Soft** (`{colors.hairline-soft}` — #49474e): frequency 20. Used as text (14), border (6). A lighter hairline used for secondary dividers and dimmed labels. Wired as `--color-radix-mauve7`.

### Accent

- **Blue Accent** (`{colors.blue-accent}` — #70b8ff): frequency 33. Used as text (32), gradient (1). A sky-blue token wired as `--color-radix-blue11` — used for hyperlinks and inline code highlights inside the CI log strips. Not a brand color; the blue references the Radix blue scale as a semantic link color.
- **Error Text** (`{colors.error-text}` — #ff9592): frequency 1. Used as text (1). A muted salmon-red wired as `--color-radix-red11` — semantic error state for failed build indicators.

## Typography

### Font Families

Depot runs **three optical cuts** of the Red Hat type family: **Red Hat Display Variable** for display headlines and section h2s, **Red Hat Text Variable** for body paragraphs, nav labels, and button text, and **Red Hat Mono Variable** for build-log strips, benchmark readouts, and code blocks. The three are declared as CSS custom properties: `--font-display`, `--font-sans`, `--font-mono`. All three share the same geometric character structure — the switch between cuts is invisible at matching sizes — but each is optimized for its context: Display for large optical sizes, Text for small optical sizes, Mono for fixed-width infrastructure output.

### Hierarchy

| Token | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| `{typography.display-xl}` | 60px | 700 | 60px | Hero h1 ("Build faster. Waste less time.") |
| `{typography.display-md}` | 48px | 700 | 48px | Section h2 ("From commit to production, faster.") |
| `{typography.heading-lg}` | 20px | 600 | 28px | Sub-section titles, card headings |
| `{typography.heading-md}` | 20px | 500 | 28px | Alternate sub-heading variant with tighter tracking |
| `{typography.heading-sm}` | 18px | 500 | 24.75px | h3 feature-cell titles |
| `{typography.body-lg}` | 18px | 400 | 28px | Hero sub-paragraph, section leads |
| `{typography.body-md}` | 16px | 400 | 24px | Default running text |
| `{typography.body-sm}` | 14px | 400 | 20px | Card body copy, caption rows |
| `{typography.label-md}` | 14px | 500 | 20px | Badge and stat labels |
| `{typography.label-sm}` | 12px | 500 | 16px | Category chips with 0.3px tracking |
| `{typography.nav-link}` | 15px | 500 | 15px | Top-nav link labels |
| `{typography.button-md}` | 14px | 400 | 20px | Primary CTA label |
| `{typography.mono-sm}` | 14px | 400 | 20px | CI log, build output, code strips |
| `{typography.caption}` | 12px | 400 | 16px | Metadata, timestamps |

### Principles

Display weight tops out at 700 — the hero h1 at 60px / 700 is the loudest typographic moment, and everything else operates below it at 400-600. The triple-stack discipline means the page never needs a second family: Red Hat Display handles display authority, Red Hat Text handles prose readability, and Red Hat Mono handles the fixed-width output that CI/CD products must render clearly. The mono cut's presence at 14px / weight 400 in the log strips is not decorative — it signals that the content is a machine readout.

### Note on Font Substitutes

Red Hat Display Variable and Red Hat Text Variable are open-source (SIL OFL 1.1) and available on Google Fonts. For projects that can't load the Red Hat family, Inter at the same weights is a close substitute for the Text cut; Geist Sans (Vercel open-source) matches the Display cut more closely at large sizes. For the Mono cut, JetBrains Mono or IBM Plex Mono at 14px / weight 400 transfers cleanly.

## Layout

### Spacing System

- **Base unit:** 8px — the dominant module, appearing 86 times in the extracted spacing values (tied with 16px at 88 occurrences).
- **Tokens:** `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.base}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.2xl}` 48px · `{spacing.3xl}` 64px.
- **Section padding (vertical):** approximately 64-96px between major content bands.
- **Card internal padding:** `{spacing.base}` (16px) for benchmark cards; `{spacing.md}` (12px) for CTA and badge components.
- **Nav padding:** 0px vertical, 16px horizontal per side.

### Grid & Container

- **Max content width:** approximately 1152px on hero headings (extracted from heroHeading widthPx: 1152).
- **Hero:** full-bleed near-black canvas, centered headline + sub-paragraph + CTA stack.
- **Benchmark card grid:** a multi-column comparison grid showing Depot build times against competitors — the core product-demonstration section.
- **CI log strip:** a dark-green-fill panel simulating build-output, below the benchmark grid.
- **Logo wall:** partner and customer logos (AWS, GitHub, GitLab, Bitbucket, Buildkite, CircleCI, etc.) rendered in muted tones against the canvas.

### Rhythm

The page alternates between **editorial headline bands** (centered, generous vertical padding, single h1 or h2) and **dense infrastructure panels** (benchmark tables, CI log strips, stat badge rows). The dark-green surfaces appear only in the dense infrastructure panels — the editorial bands stay on the near-black canvas with muted text.

## Elevation

The system has **no shadow tier** — elevation comes entirely from surface-color stepping across the Radix Mauve dark scale. The canvas (#04040b) sits at L≈0.11 in OKLCH; surface-1 (#121113) sits at L≈0.18; surface-2 (#1a191b) at L≈0.22; the mid panels (#323035) at L≈0.31. Each step is visible but not dramatic — the hierarchy reads as depth from within the same near-black family rather than as lit layers.

- **Flat (no shadow):** editorial bands, hero, footer — 100% of the visible surface uses no shadow.
- **Tonal lift:** `{colors.surface-1}` and `{colors.surface-2}` cards lift off the `{colors.canvas}` floor through lightness contrast alone.
- **Green-surface lift:** the dark-green panel (`{colors.primary-dark}` — #1b2a1e, the CTA and CI strip fill) is a hue-shifted surface that reads as elevated because its hue breaks the achromatic Mauve ramp — color contrast, not lightness contrast, does the elevation work.

## Shapes

The radius scale is **compact and functional**:

- `{rounded.none}` 0px — not used prominently; structural dividers and nav borders.
- `{rounded.xs}` 2px — the narrowest captured border-radius (31 occurrences in the extracted radii), used for small chips and tag elements.
- `{rounded.sm}` 4px — secondary surfaces and nav hover states.
- `{rounded.md}` 6px — the modal default and form inputs (35 occurrences — the most-used non-pill radius).
- `{rounded.lg}` 8px — CTA buttons and benchmark cards (16 occurrences).
- `{rounded.xl}` 10px — larger feature cards (15 occurrences).
- `{rounded.full}` 9999px — circular avatars and icon badges (the 3.35544e+07px value in extraction — a very large value that renders as a full pill, appearing 21 times).

There is no 16px or 24px soft tier. The scale stays compact and technical — closer to GitHub's and Vercel's tight rounding than to Spline's generous-soft 16px default.

## Components

**`button-primary`** — The signature CTA. Dark-green `{colors.primary-dark}` fill, grass-green `{colors.primary}` text, mid-green `{colors.primary-mid}` border, `{rounded.lg}` 8px radius, 8×12 padding, 32px height. "Get started" is the canonical instance. The dark-on-dark-green combination is the brand's single most distinctive design decision.

**`button-secondary`** — Transparent fill, white text, `{colors.hairline}` border, `{rounded.md}` 6px radius, 8×16 padding, 36px height. Used for secondary marketing actions ("View docs", "See pricing").

**`top-nav`** — Near-black `{colors.canvas}` surface, 48px height, 1px `{colors.hairline}` bottom border. Depot wordmark left, nav links (CI Engine, GitHub Actions Runners, Docs, Customers, Changelog, Blog) center, "Sign in" and "Get started" right.

**`nav-link`** — Transparent background, muted `{colors.ink-muted}` text at `{typography.nav-link}`, `{rounded.sm}` 4px hover radius. The extracted nav link color is #b5b2bc — a notch below the headline white, reading as secondary-level navigation.

**`hero-heading`** — White-adjacent `{colors.ink}` text on transparent background, `{typography.display-xl}` (60px / 700 / -1.5px). The single heaviest typographic moment on the page.

**`section-heading`** — Same `{colors.ink}` but at `{typography.display-md}` (48px / 700 / -1.2px) for section h2s ("From commit to production, faster.", "Unrivaled Performance").

**`body-paragraph`** — Muted `{colors.ink-muted}` at `{typography.body-lg}` (18px / 400). The extracted body text is #b5b2bc — Depot uses the muted ink for running prose, reserving the near-white `{colors.ink}` for headings and emphasis text.

**`stat-badge`** — Dark-green `{colors.primary-dark}` fill, grass-green `{colors.primary}` text, `{colors.primary-mid}` border, `{rounded.lg}` 8px radius. The build-time comparison badges ("10× faster", "2× cheaper") use the same dark-green/grass-green pair as the CTA.

**`card`** — `{colors.surface-1}` fill, white text, `{rounded.xl}` 10px radius, 16px padding, `{colors.hairline}` border. The default feature card above the benchmark grid.

**`benchmark-card`** — `{colors.surface-2}` fill, white text, `{rounded.lg}` 8px radius, 16px padding, `{colors.hairline-soft}` border. The comparison-table row surface — one step lighter than the base card to distinguish data rows from editorial cards.

**`ci-log-strip`** — `{colors.primary-dark}` fill, `{colors.primary}` text, `{typography.mono-sm}`, `{colors.primary-border}` border, `{rounded.md}` 6px radius. The panel that simulates a passing CI build log — the brand's most infrastructure-specific component.

**`logo-chip`** — Transparent fill, muted text at `{typography.body-sm}`, no border, `{rounded.none}`. The partner-logo wall renders marks in flat muted tones against the near-black canvas.

**`text-input`** — `{colors.surface-2}` fill, white text, `{rounded.md}` 6px radius, 8×12 padding, 36px height, `{colors.hairline}` border.

**`code-block`** — `{colors.surface-1}` fill, white text, `{typography.mono-sm}`, `{colors.hairline}` border, `{rounded.md}` 6px radius. Code samples in the docs-adjacent panels use this surface rather than the dark-green CI strip, distinguishing documentation code from build-output readouts.

**`footer`** — Near-black `{colors.canvas}` surface, `{colors.ink-dim}` text, `{typography.body-sm}`, 32×16 padding. No chromatic element — the footer continues the canvas with no visual break.

## Do's and Don'ts

**Do** treat the grass-green pair (`{colors.primary}` text on `{colors.primary-dark}` fill) as a build-success signal, not a generic CTA treatment. The dark-green-on-dark-green combination carries meaning in a dev-infra context because users read grass-green as stdout. Using it for a marketing element unrelated to build output — a newsletter signup, a pricing CTA — would strip the semantic weight.

**Do** use all three Red Hat cuts for their respective surfaces: Display Variable for any heading at 20px+, Text Variable for body and labels, Mono Variable for any fixed-width readout. Mixing the cuts outside their intended contexts (e.g., using Mono Variable for a hero headline) reads as a system error rather than a design decision.

**Do** use `{colors.ink-muted}` (#b5b2bc) for body paragraph text rather than the full `{colors.ink}` (#eeeef0). The extracted body text is muted — Depot reserves the near-white for headings and high-priority labels, not for running prose.

**Do** step through the Radix Mauve surface ladder (`{colors.surface-1}` → `{colors.surface-2}` → `{colors.surface-3}`) for content hierarchy. The three surfaces are distinct enough to signal depth without introducing shadows.

**Don't** use `{colors.blue-accent}` (#70b8ff) outside of link text and inline code highlights. It is a Radix blue11 semantic token for hyperlinks inside CI output — placing it as a fill color or a brand accent would create a second chromatic voice and compete with the grass-green voltage.

**Don't** introduce a radius larger than `{rounded.xl}` (10px) in new components. The system is compact-technical; a 16px or 24px soft radius on a button or card would import the visual language of a consumer-product brand (Spline, Clerk) into an infrastructure context where sharp geometry signals precision.

**Don't** render stat badges or build-time comparisons in white text on the grass-green fill (#71d083 as background). The system layers two greens — dark green as the surface, grass green as the foreground — because that is what a terminal success row looks like. Inverting to a light-green background with dark text would read as a generic badge rather than as infrastructure output.

**Don't** place `{colors.error-text}` (#ff9592) anywhere except failed-build indicators and destructive-state labels. It is the Radix red11 semantic error token; using it for decorative emphasis or warnings would exhaust its semantic charge.

## Known Gaps

- **Hover and focus states:** the primary button hover state is not captured from the marketing surface; the full state matrix (focus ring, disabled tint, loading state) is documented only in resting position.
- **Dark-mode / light-mode toggle:** the extracted surface is dark-only. The CSS variables include a `--background: oklch(100% 0 0)` and `--foreground: oklch(14.5% 0 0)` pair (mapped to white and near-black), suggesting a light-mode exists in the product dashboard but is not present on the marketing site.
- **CI dashboard product surface:** this DESIGN.md captures the marketing site only. The Depot CI dashboard (app.depot.dev) carries its own token set — build queue panels, log viewers, cache hit indicators, agent status badges — not represented here.
- **Animation and motion:** the build-time benchmark graph animates on load (counting up from a slower competitor baseline to the Depot result). Easing curves, counter duration, and stagger timing are not captured.
- **Error and status states:** the CSS exposes `--destructive: oklch(57.7% .245 27.325)` and `--color-red-*` families alongside the grass-green; the full semantic state system (success, warning, error, info) is declared but not rendered on the captured marketing surface.
- **Responsive behavior:** the hero headline at 60px / weight 700 almost certainly collapses to a smaller size on mobile; the extracted values are desktop-only (1440px viewport).
