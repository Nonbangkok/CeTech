"use client"

import { useState } from "react"
import PortfolioCard from "./portfolio-card"
import type { Portfolio } from "@/lib/types"

interface PortfolioGridProps {
  portfolios: Portfolio[]
}

export default function PortfolioGrid({ portfolios }: PortfolioGridProps) {
  const [filteredPortfolios, setFilteredPortfolios] = useState(portfolios)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
      {filteredPortfolios.map((portfolio, index) => (
        <PortfolioCard key={portfolio.id} portfolio={portfolio} index={index} />
      ))}
    </div>
  )
}
