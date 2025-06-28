import { Suspense } from "react"
import Navigation from "@/components/navigation"
import PortfolioGrid from "@/components/portfolio-grid"
import { portfolioData } from "@/lib/portfolio-data"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
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
    </main>
  )
}
