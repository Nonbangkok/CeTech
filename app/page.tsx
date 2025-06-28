import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <Navigation />
      <HeroSection />
    </main>
  )
}
