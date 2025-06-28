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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-red-600" />
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wide">Featured Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Outstanding Student Portfolios</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
              View All Portfolios
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
