import type { Metadata } from "next"
import { Red_Hat_Display, Red_Hat_Mono, Red_Hat_Text } from "next/font/google"
import React from "react"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

// Depot triple stack: Display for headings, Text for body, Mono for readouts.
const fontDisplay = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-display",
})

const fontSans = Red_Hat_Text({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Red_Hat_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Tin Nguyen — Full-stack Web Developer",
  description:
    "Tin Nguyen is a full-stack web developer from Nha Trang, Viet Nam, building products end to end with React, Next.js, Ruby on Rails, and PostgreSQL.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased motion-safe:scroll-smooth",
        fontDisplay.variable,
        fontSans.variable,
        fontMono.variable,
        "font-sans"
      )}
    >
      <body className="flex min-h-svh flex-col">
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      </body>
    </html>
  )
}
