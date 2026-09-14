// Content sourced from README.md — edit here to update the landing page.

export const profile = {
  name: "Tin Nguyen",
  email: "quoctin06061996@gmail.com",
  phone: "0935 487 616",
  phoneHref: "+84935487616",
  github: "github.com/TinNguyen6696",
  githubHref: "https://github.com/TinNguyen6696",
  about:
    "Full-stack web developer. I build things end to end, from the interface down to the database, and I've shipped products that real people use. I learn quickly and adapt to whatever a project needs — picking up new tools when the work calls for them, moving between the frontend and the backend, and owning a feature until it's in users' hands.",
}

export const stack = [
  {
    layer: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    layer: "Backend",
    items: ["Ruby", "Ruby on Rails", "Python", "Django"],
  },
  {
    layer: "Database",
    items: ["PostgreSQL"],
  },
]

export const experience = [
  {
    role: "Full-Stack Developer",
    company: "Sidepitch",
    period: "10/2024 – Present",
    description:
      "Sidepitch is an invite-only fundraising platform built for CitySide Ventures, a Michigan-based angel investment firm. It connects startups pitching for capital with investors, and handles the deal pipeline behind it — due diligence, capital calls, SPV and portfolio management.",
    highlights: [
      "Built responsive web interfaces with React, TypeScript, HTML, and CSS",
      "Developed backend features and RESTful APIs in Ruby on Rails with PostgreSQL",
      "Contributed to mobile app features using Flutter for iOS and Android",
      "Owned features end to end across the stack as the project required",
      "Worked in a fast-paced startup, adapting quickly to changing requirements",
    ],
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "TypeScript",
      "Ruby on Rails",
      "PostgreSQL",
      "Flutter",
    ],
  },
]

export type Project = {
  title: string
  description: string
  tags: string[]
  /** Short label shown above the title, e.g. "2025" or "Side project". */
  meta?: string
  /** Live site or demo URL. */
  href?: string
  /** Source code URL. */
  repo?: string
}

// Add your projects here — the section shows placeholder cards while empty.
// Example:
// {
//   title: "Project name",
//   description: "One or two sentences on what it does and your role.",
//   tags: ["Next.js", "Ruby on Rails", "PostgreSQL"],
//   meta: "2025",
//   href: "https://example.com",
//   repo: "https://github.com/you/project",
// },
export const projects: Project[] = []

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]
