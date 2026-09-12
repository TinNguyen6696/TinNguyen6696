# Portfolio

My personal site — projects, writing, and contact.

**Live:** [yourname.dev](https://yourname.dev)

![Screenshot of the site homepage](./public/screenshot.png)

## About

A small, deliberately dark-only site built around a single design system rather
than a component grab-bag. The visual direction follows Depot's marketing system:
a near-black Radix Mauve canvas with one grass-green accent, three optical cuts of
the Red Hat type family, and no shadows — depth comes from stepping surface colors
instead.

The most opinionated piece is the primary button. It uses a dark-green fill with
grass-green text rather than the conventional bright-fill-on-dark, which reads like
a passing terminal output line. Everything else in the palette is achromatic so
that one accent does all the work.

## Stack

| | |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui |
| Fonts | Red Hat Display / Text / Mono via `next/font` |
| Hosting | Vercel |

## Running locally

```bash
git clone https://github.com/yourname/portfolio.git
cd portfolio
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

```
app/
  layout.tsx        root layout, font variables, dark class
  globals.css       design tokens and type scale
  page.tsx          home
  projects/         project pages
components/
  ui/               shadcn primitives
content/            project write-ups (MDX)
public/             images and assets
```

## Theming

All tokens live in `app/globals.css`. Colors are set once in `:root` and mapped to
Tailwind utilities through `@theme inline`, so changing the palette means editing
hex values in one block — component code never references a color directly.

Two things to know before editing:

- Body text uses `text-ink-muted`, not `text-foreground`. Near-white is reserved
  for headings and emphasis.
- The system has no shadow tier. Use the `--surface-1` → `--surface-2` →
  `--surface-3` ladder for elevation instead.

The type scale is exposed as utility classes (`t-display-xl`, `t-body-lg`,
`t-mono-sm`) that pair each size with its correct font cut and tracking.

## Deploying

Pushes to `main` deploy to production on Vercel. Every other branch gets its own
preview URL.

## Credits

Design system adapted from [Depot](https://depot.dev). Type by Red Hat, licensed
under SIL OFL 1.1.

## License

MIT — feel free to borrow the code. Please don't reuse the written content or
project case studies.
