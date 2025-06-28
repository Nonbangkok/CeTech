import GradientPreviewTool from "@/components/gradient-preview-tool"
import Navigation from "@/components/navigation"

export default function GradientPreviewPage() {
  return (
    <div className="min-h-screen relative overflow-hidden transition-colors duration-300">
      {/* Soft gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(45deg, var(--theme-primary) 0%, var(--theme-secondary) 20%, var(--theme-primary) 40%, var(--theme-secondary) 60%, var(--theme-primary) 80%, var(--theme-secondary) 100%)`,
        }}
      />

      {/* Soft overlay for readability */}
      <div className="absolute inset-0 bg-white/90 dark:bg-gray-900/90 transition-colors duration-300" />

      <div className="relative">
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
    </div>
  )
}
