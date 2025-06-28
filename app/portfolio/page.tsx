import { Suspense } from "react"
import Navigation from "@/components/navigation"
import PortfolioGrid from "@/components/portfolio-grid"
import { portfolioData } from "@/lib/portfolio-data"

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden transition-colors duration-300">
      {/* Soft gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, var(--theme-secondary) 0%, var(--theme-primary) 25%, var(--theme-secondary) 50%, var(--theme-primary) 75%, var(--theme-secondary) 100%)`,
        }}
      />

      {/* Soft overlay for readability */}
      <div className="absolute inset-0 bg-white/90 dark:bg-gray-900/90 transition-colors duration-300" />

      <div className="relative">
        <Navigation />

        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold text-red-800 dark:text-gray-100 mb-4 transition-colors duration-300"
              style={{ color: "var(--theme-primary)" }}
            >
              Student Portfolios
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
              Discover the creative work and achievements of our talented students
            </p>
          </div>

          <Suspense
            fallback={
              <div className="text-center text-gray-600 dark:text-gray-400 transition-colors duration-300">
                Loading portfolios...
              </div>
            }
          >
            <PortfolioGrid portfolios={portfolioData} />
          </Suspense>
        </section>
      </div>
    </main>
  )
}
