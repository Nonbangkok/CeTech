import GradientPreviewTool from "@/components/gradient-preview-tool"
import Navigation from "@/components/navigation"

export default function GradientPreviewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1
            className="text-3xl font-bold text-red-800 dark:text-gray-100 mb-2 transition-colors duration-300"
            style={{ color: "var(--theme-primary)" }}
          >
            Gradient Preview Tool
          </h1>
          <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
            Design and preview university seal gradients before applying them
          </p>
        </div>
        <GradientPreviewTool />
      </div>
    </div>
  )
}
