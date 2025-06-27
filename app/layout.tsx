import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Class Portfolio Showcase | Class of 2024",
  description:
    "Explore the exceptional portfolios and creative work of our graduating class. Discover talented designers, developers, and creative professionals.",
  keywords: "portfolio, student work, design, development, creative, showcase",
  authors: [{ name: "Class of 2024" }],
  openGraph: {
    title: "Class Portfolio Showcase | Class of 2024",
    description: "Explore the exceptional portfolios and creative work of our graduating class.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
