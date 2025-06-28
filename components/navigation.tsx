"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Moon, Sun, Palette, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme, themeColors } from "@/lib/theme-context"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showColorPicker, setShowColorPicker] = useState(false)
  const { isDark, themeColor, toggleDarkMode, setThemeColor } = useTheme()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 dark:bg-gray-900/95 dark:border-gray-700 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-red-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-red-400 dark:hover:bg-gray-800 transition-colors"
            style={{
              color: isMenuOpen ? "var(--theme-primary)" : undefined,
            }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              {/* Left Navigation Items */}
              <Link
                href="/portfolio"
                className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200 hover:scale-105 transform dark:text-gray-300 dark:hover:text-red-400"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--theme-primary)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = ""
                }}
              >
                Portfolios
              </Link>

              <Link
                href="/statistics"
                className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200 hover:scale-105 transform dark:text-gray-300 dark:hover:text-red-400"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--theme-primary)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = ""
                }}
              >
                Statistics
              </Link>

              {/* Logo - Center */}
              <Link href="/" className="flex items-center mx-8">
                <div className="relative">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 transform scale-110"
                    style={{
                      backgroundColor: "var(--theme-primary)",
                    }}
                  >
                    <Image
                      src="/institute-logo.png"
                      alt="Institute Logo"
                      width={64}
                      height={64}
                      className="w-14 h-14 object-contain"
                    />
                  </div>
                </div>
              </Link>

              {/* Right Navigation Items */}
              <Link
                href="/creator"
                className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200 hover:scale-105 transform dark:text-gray-300 dark:hover:text-red-400"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--theme-primary)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = ""
                }}
              >
                Creator
              </Link>

              <Link
                href="/gradient-preview"
                className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200 hover:scale-105 transform dark:text-gray-300 dark:hover:text-red-400"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--theme-primary)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = ""
                }}
              >
                Tools
              </Link>
            </div>
          </div>

          {/* Mobile Logo - Center when menu closed */}
          <Link href="/" className="md:hidden flex items-center">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg transform scale-110"
              style={{
                backgroundColor: "var(--theme-primary)",
              }}
            >
              <Image
                src="/institute-logo.png"
                alt="Institute Logo"
                width={32}
                height={32}
                className="w-14 h-14 object-contain"
              />
            </div>
          </Link>

          {/* Theme Controls - Right Side */}
          <div className="flex items-center gap-2">
            {/* Color Theme Picker */}
            <div className="relative">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowColorPicker(!showColorPicker)}
                className="w-10 h-10 p-0 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 bg-white dark:bg-gray-900 transition-colors"
              >
                <Palette className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              </Button>

              {showColorPicker && (
                <div className="absolute top-12 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 z-50 min-w-[200px] transition-colors">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">Choose Theme Color</h3>
                  <div className="grid grid-cols-4 gap-2">
                    {themeColors.map((color) => (
                      <button
                        key={color.value}
                        onClick={() => {
                          setThemeColor(color.value)
                          setShowColorPicker(false)
                        }}
                        className="relative w-8 h-8 rounded-full border-2 border-gray-200 dark:border-gray-600 hover:scale-110 transition-transform"
                        style={{ backgroundColor: color.value }}
                        title={color.name}
                      >
                        {themeColor === color.value && (
                          <Check className="w-4 h-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Dark Mode Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleDarkMode}
              className="w-10 h-10 p-0 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 bg-white dark:bg-gray-900 transition-colors"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-yellow-500" />
              ) : (
                <Moon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              )}
            </Button>

            {/* Click outside to close color picker */}
            {showColorPicker && <div className="fixed inset-0 z-40" onClick={() => setShowColorPicker(false)} />}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900 transition-colors duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/portfolio"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium transition-colors dark:text-gray-300 dark:hover:bg-gray-800"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--theme-primary)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = ""
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/statistics"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium transition-colors dark:text-gray-300 dark:hover:bg-gray-800"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--theme-primary)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = ""
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Statistics
              </Link>
              <Link
                href="/creator"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium transition-colors dark:text-gray-300 dark:hover:bg-gray-800"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--theme-primary)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = ""
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Creator
              </Link>
              <Link
                href="/gradient-preview"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium transition-colors dark:text-gray-300 dark:hover:bg-gray-800"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--theme-primary)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = ""
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Tools
              </Link>

              {/* Mobile Theme Controls */}
              <div className="px-3 py-2 border-t border-gray-200 dark:border-gray-700 mt-2 pt-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Theme</span>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={toggleDarkMode} className="w-8 h-8 p-0 bg-transparent">
                      {isDark ? (
                        <Sun className="w-3 h-3 text-yellow-500" />
                      ) : (
                        <Moon className="w-3 h-3 text-gray-600 dark:text-gray-300" />
                      )}
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {themeColors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => {
                        setThemeColor(color.value)
                        setIsMenuOpen(false)
                      }}
                      className="relative w-8 h-8 rounded-full border-2 border-gray-200 dark:border-gray-600 hover:scale-110 transition-transform"
                      style={{ backgroundColor: color.value }}
                      title={color.name}
                    >
                      {themeColor === color.value && (
                        <Check className="w-4 h-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
