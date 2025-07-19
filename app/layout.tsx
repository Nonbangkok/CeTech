import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/lib/theme-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cetech",
  description:
    "Explore the exceptional portfolios and creative work of our graduating class. Discover talented designers, developers, and creative professionals.",
  keywords: "portfolio, student work, design, development, creative, showcase",
  authors: [{ name: "Cetech" }],
  openGraph: {
    title: "Cetech",
    description: "Explore the exceptional portfolios and creative work of our graduating class.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
