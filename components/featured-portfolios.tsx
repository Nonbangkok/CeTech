"use client"
import Link from "next/link"
import PortfolioCard from "./portfolio-card"
import { portfolioData } from "@/lib/portfolio-data"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FeaturedPortfolios() {
  // Get first 3 portfolios as featured
  const featuredPortfolios = portfolioData.slice(0, 3)

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6" style={{ color: "var(--theme-primary)" }} />
            <span className="font-semibold text-sm uppercase tracking-wide" style={{ color: "var(--theme-primary)" }}>
              Featured Work
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-300">
            Outstanding Student Portfolios
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
            Discover exceptional work from our most talented students across different programs and universities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPortfolios.map((portfolio, index) => (
            <div key={portfolio.id} className="transform hover:scale-105 transition-transform duration-300">
              <PortfolioCard portfolio={portfolio} index={index} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/portfolio">
            <Button
              size="lg"
              className="text-white px-8 py-3 transition-colors duration-300"
              style={{
                backgroundColor: "var(--theme-primary)",
                borderColor: "var(--theme-primary)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--theme-dark)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--theme-primary)"
              }}
            >
              View All Portfolios
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
