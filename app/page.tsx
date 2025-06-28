import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import FeaturedPortfolios from "@/components/featured-portfolios"
import StatsOverview from "@/components/stats-overview"
import UniversityPartners from "@/components/university-partners"
import CallToAction from "@/components/call-to-action"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <Navigation />
      <HeroSection />
      <StatsOverview />
      <FeaturedPortfolios />
      <UniversityPartners />
      <CallToAction />
    </main>
  )
}
