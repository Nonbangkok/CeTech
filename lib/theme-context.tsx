"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

interface ThemeContextType {
  isDark: boolean
  themeColor: string
  toggleDarkMode: () => void
  setThemeColor: (color: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const themeColors = [
  { name: "Red", value: "#DC2626", secondary: "#FCA5A5" },
  { name: "Blue", value: "#2563EB", secondary: "#93C5FD" },
  { name: "Green", value: "#16A34A", secondary: "#86EFAC" },
  { name: "Purple", value: "#9333EA", secondary: "#C4B5FD" },
  { name: "Orange", value: "#EA580C", secondary: "#FED7AA" },
  { name: "Pink", value: "#DB2777", secondary: "#F9A8D4" },
  { name: "Teal", value: "#0D9488", secondary: "#5EEAD4" },
  { name: "Emerald", value: "#3BDB97", secondary: "#A0FFD0" },
]

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false)
  const [themeColor, setThemeColorState] = useState("#DC2626")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Load saved preferences
    const savedDarkMode = localStorage.getItem("darkMode") === "true"
    const savedThemeColor = localStorage.getItem("themeColor") || "#DC2626"

    setIsDark(savedDarkMode)
    setThemeColorState(savedThemeColor)

    // Apply dark mode class
    if (savedDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

    // Apply theme color CSS variables
    applyThemeColor(savedThemeColor)
  }, [])

  const toggleDarkMode = () => {
    if (typeof window === "undefined") return

    const newDarkMode = !isDark
    setIsDark(newDarkMode)
    localStorage.setItem("darkMode", newDarkMode.toString())

    document.documentElement.classList.toggle("dark", newDarkMode)
  }

  const setThemeColor = (color: string) => {
    if (typeof window === "undefined") return

    setThemeColorState(color)
    localStorage.setItem("themeColor", color)
    applyThemeColor(color)
  }

  const applyThemeColor = (color: string) => {
    if (typeof window === "undefined") return

    const root = document.documentElement
    const colorData = themeColors.find((c) => c.value === color) ?? themeColors[0]

    root.style.setProperty("--theme-primary", colorData.value)
    root.style.setProperty("--theme-secondary", colorData.secondary)

    const [r, g, b] = colorData.value
      .slice(1)
      .match(/.{2}/g)!
      .map((hex) => Number.parseInt(hex, 16))

    root.style.setProperty(
      "--theme-dark",
      `rgb(${Math.max(0, r - 40)}, ${Math.max(0, g - 40)}, ${Math.max(0, b - 40)})`,
    )
  }

  return (
    <ThemeContext.Provider value={{ isDark, themeColor, toggleDarkMode, setThemeColor }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error("useTheme must be used within a ThemeProvider")
  return context
}

export { themeColors }
