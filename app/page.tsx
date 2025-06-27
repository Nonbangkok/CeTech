import { Suspense } from "react"
import HeroSection from "@/components/hero-section"
import PortfolioGrid from "@/components/portfolio-grid"
import { portfolioData } from "@/lib/portfolio-data"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <HeroSection />

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-4">Student Portfolios</h2>
          {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the creative work and achievements of our talented students
          </p> */}
        </div>

        <Suspense fallback={<div className="text-center">Loading portfolios...</div>}>
          <PortfolioGrid portfolios={portfolioData} />
        </Suspense>
      </section>
    </main>
  )
}
