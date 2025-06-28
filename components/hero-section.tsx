import { Users, Award } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-red-100" />

      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="text-center max-w-5xl mx-auto">
          {/* Institute Icon */}
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-red-600 rounded-full shadow-lg">
              <Image
                src="/institute-logo.png"
                alt="Institute Logo"
                width={112}          /* ← wider */
                height={112}         /* ← taller */
                className="w-28 h-28 object-cover"  /* 24 × 4 px = 96 px */
              />
            </div>
          </div>


          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            COMPUTER ENGINEERING AND TECHNOLOGY PROGRAMME
            <span className="block text-red-600">Portfolios</span>
          </h1>

          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            Supported by student of computer engineering and technology programme
          </p>

        </div>
      </div>
    </section>
  )
}
