"use client"

import { useState } from "react"
import { Moon, Sun, Palette, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme, themeColors } from "@/lib/theme-context"

export default function ThemeControls() {
  const [showColorPicker, setShowColorPicker] = useState(false)
  const { isDark, themeColor, toggleDarkMode, setThemeColor } = useTheme()

  return (
    <>
      {/* Desktop Theme Controls - Fixed Position */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        {/* Color Theme Picker */}
        <div className="relative">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowColorPicker(!showColorPicker)}
            className="w-10 h-10 p-0 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg transition-colors"
          >
            <Palette className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          </Button>

          {showColorPicker && (
            <div className="absolute top-12 right-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 z-50 min-w-[200px] transition-colors">
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
          className="w-10 h-10 p-0 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg transition-colors"
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

      {/* Mobile Theme Controls - Fixed Position */}
      <div className="md:hidden fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        {/* Dark Mode Toggle */}
        <Button
          variant="outline"
          size="sm"
          onClick={toggleDarkMode}
          className="w-12 h-12 p-0 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg transition-colors rounded-full"
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          )}
        </Button>

        {/* Color Theme Picker */}
        <div className="relative">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowColorPicker(!showColorPicker)}
            className="w-12 h-12 p-0 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg transition-colors rounded-full"
          >
            <Palette className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </Button>

          {showColorPicker && (
            <div className="absolute bottom-14 right-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 z-50 min-w-[200px] transition-colors">
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

        {/* Click outside to close color picker */}
        {showColorPicker && <div className="fixed inset-0 z-40" onClick={() => setShowColorPicker(false)} />}
      </div>
    </>
  )
}
