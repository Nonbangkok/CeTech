"use client"

import { useState } from "react"
import { Copy, Download, RefreshCw, Palette, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { universityColors } from "@/lib/university-colors"

interface GradientPreset {
  name: string
  gradient: string
  color1: string
  color2: string
}

const gradientPresets: GradientPreset[] = [
  {
    name: "Red",
    gradient: "linear-gradient(135deg, #8C1515 0%, #DC143C 100%)",
    color1: "#8C1515",
    color2: "#DC143C",
  },
  {
    name: "Blue Gold",
    gradient: "linear-gradient(135deg, #2774AE 0%, #FFD100 100%)",
    color1: "#2774AE",
    color2: "#FFD100",
  },
  {
    name: "Crimson",
    gradient: "linear-gradient(135deg, #A51C30 0%, #8B0000 100%)",
    color1: "#A51C30",
    color2: "#8B0000",
  },
  {
    name: "Red Gray",
    gradient: "linear-gradient(135deg, #A31F34 0%, #8A8B8C 100%)",
    color1: "#A31F34",
    color2: "#8A8B8C",
  },
  {
    name: "Dark Blue Gold",
    gradient: "linear-gradient(135deg, #003262 0%, #FDB515 100%)",
    color1: "#003262",
    color2: "#FDB515",
  },
  {
    name: "Sunset Orange",
    gradient: "linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)",
    color1: "#FF6B35",
    color2: "#F7931E",
  },
  {
    name: "Ocean Blue",
    gradient: "linear-gradient(135deg, #0077BE 0%, #00A8CC 100%)",
    color1: "#0077BE",
    color2: "#00A8CC",
  },
  {
    name: "Forest Green",
    gradient: "linear-gradient(135deg, #228B22 0%, #32CD32 100%)",
    color1: "#228B22",
    color2: "#32CD32",
  },
  {
    name: "Royal Purple",
    gradient: "linear-gradient(135deg, #663399 0%, #9966CC 100%)",
    color1: "#663399",
    color2: "#9966CC",
  },
  {
    name: "Elegant Black",
    gradient: "linear-gradient(135deg, #2C3E50 0%, #34495E 100%)",
    color1: "#2C3E50",
    color2: "#34495E",
  },
]

export default function GradientPreviewTool() {
  const [color1, setColor1] = useState("#8C1515")
  const [color2, setColor2] = useState("#DC143C")
  const [angle, setAngle] = useState(135)
  const [selectedUniversity, setSelectedUniversity] = useState("Chulalongkorn University")
  const [copiedText, setCopiedText] = useState("")

  const currentGradient = `linear-gradient(${angle}deg, ${color1} 0%, ${color2} 100%)`

  const handlePresetClick = (preset: GradientPreset) => {
    setColor1(preset.color1)
    setColor2(preset.color2)
    setAngle(135)
  }

  const handleCopyGradient = () => {
    navigator.clipboard.writeText(currentGradient)
    setCopiedText("Gradient CSS copied!")
    setTimeout(() => setCopiedText(""), 2000)
  }

  const handleCopyConfig = () => {
    const config = `"${selectedUniversity}": {
  primary: "${color1}",
  secondary: "${color2}",
  gradient: "${currentGradient}",
}`
    navigator.clipboard.writeText(config)
    setCopiedText("University config copied!")
    setTimeout(() => setCopiedText(""), 2000)
  }

  const generateRandomGradient = () => {
    const randomColor = () => {
      const colors = [
        "#FF6B35",
        "#F7931E",
        "#0077BE",
        "#00A8CC",
        "#228B22",
        "#32CD32",
        "#663399",
        "#9966CC",
        "#E74C3C",
        "#3498DB",
        "#9B59B6",
        "#1ABC9C",
        "#F39C12",
        "#D35400",
      ]
      return colors[Math.floor(Math.random() * colors.length)]
    }
    setColor1(randomColor())
    setColor2(randomColor())
    setAngle(Math.floor(Math.random() * 360))
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Main Preview */}
      <Card className="bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 transition-colors duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <Palette className="w-5 h-5" />
            Gradient Preview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Controls */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  University
                </label>
                <select
                  value={selectedUniversity}
                  onChange={(e) => setSelectedUniversity(e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-300"
                >
                  {Object.keys(universityColors).map((university) => (
                    <option key={university} value={university}>
                      {university}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Color 1
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      value={color1}
                      onChange={(e) => setColor1(e.target.value)}
                      className="w-12 h-10 border border-gray-300 dark:border-gray-600 rounded cursor-pointer"
                    />
                    <input
                      type="text"
                      value={color1}
                      onChange={(e) => setColor1(e.target.value)}
                      className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md font-mono text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-300"
                      placeholder="#8C1515"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Color 2
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      value={color2}
                      onChange={(e) => setColor2(e.target.value)}
                      className="w-12 h-10 border border-gray-300 dark:border-gray-600 rounded cursor-pointer"
                    />
                    <input
                      type="text"
                      value={color2}
                      onChange={(e) => setColor2(e.target.value)}
                      className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md font-mono text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-300"
                      placeholder="#DC143C"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  Angle: {angle}°
                </label>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={angle}
                  onChange={(e) => setAngle(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="flex gap-2">
                <Button onClick={generateRandomGradient} variant="outline" size="sm">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Random
                </Button>
                <Button onClick={handleCopyGradient} variant="outline" size="sm">
                  <Copy className="w-4 h-4 mr-2" />
                  Copy CSS
                </Button>
                <Button onClick={handleCopyConfig} variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Copy Config
                </Button>
              </div>

              {copiedText && (
                <div className="text-sm text-green-600 dark:text-green-400 font-medium transition-colors duration-300">
                  {copiedText}
                </div>
              )}
            </div>

            {/* Preview */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-300">
                  Live Preview
                </h3>

                {/* Large Gradient Preview */}
                <div
                  className="w-full h-32 rounded-lg border-2 border-gray-200 dark:border-gray-600 mb-4 transition-colors duration-300"
                  style={{ background: currentGradient }}
                />

                {/* University Seal Preview */}
                <div className="bg-gray-800 dark:bg-gray-900 rounded-lg p-10 relative overflow-hidden transition-colors duration-300">
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-12 h-12 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-white/20 bg-white">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ background: currentGradient }}
                      >
                        <GraduationCap className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="text-white">
                      <div className="text-xs font-medium opacity-90 drop-shadow-sm">{selectedUniversity}</div>
                      <div className="text-xs opacity-75 drop-shadow-sm">Computer Science</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-md transition-colors duration-300">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-300">
                  CSS Output:
                </p>
                <code className="text-xs text-gray-600 dark:text-gray-400 break-all transition-colors duration-300">
                  {currentGradient}
                </code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Preset Gradients */}
      <Card className="bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 transition-colors duration-300">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100 transition-colors duration-300">
            Preset Gradients
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {gradientPresets.map((preset, index) => (
              <button
                key={index}
                onClick={() => handlePresetClick(preset)}
                className="group relative overflow-hidden rounded-lg border-2 border-gray-200 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200 hover:scale-105"
              >
                <div className="w-full h-20" style={{ background: preset.gradient }} />
                <div className="p-2 bg-white dark:bg-gray-700 transition-colors duration-300">
                  <p className="text-xs font-medium text-gray-700 dark:text-gray-300 truncate transition-colors duration-300">
                    {preset.name}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Instructions */}
      <Card className="bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 transition-colors duration-300">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100 transition-colors duration-300">How to Use</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none dark:prose-invert">
          <ol className="space-y-2 text-gray-600 dark:text-gray-300 transition-colors duration-300">
            <li>
              <strong>Select colors:</strong> Use the color pickers or enter hex values manually
            </li>
            <li>
              <strong>Adjust angle:</strong> Use the slider to change the gradient direction
            </li>
            <li>
              <strong>Try presets:</strong> Click on any preset gradient to apply it instantly
            </li>
            <li>
              <strong>Copy CSS:</strong> Use "Copy CSS" to get the gradient code for custom use
            </li>
            <li>
              <strong>Copy Config:</strong> Use "Copy Config" to get the university configuration code
            </li>
            <li>
              <strong>Apply changes:</strong> Paste the config into{" "}
              <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded transition-colors duration-300">
                lib/university-colors.ts
              </code>
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
  )
}
