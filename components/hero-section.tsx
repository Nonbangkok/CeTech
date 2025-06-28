import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden transition-colors duration-300">
      {/* Dynamic gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, var(--theme-secondary) 0%, var(--theme-primary) 50%)`,
        }}
      />

      {/* Dark mode overlay */}
      <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 transition-colors duration-300" />

      <div className="relative container mx-auto px-4 py-64">
        <div className="text-center max-w-5xl mx-auto">
          {/* Institute Icon */}
          <div className="flex justify-center mb-8">
            <div
              className="p-4 rounded-full shadow-lg"
              style={{
                background: `linear-gradient(135deg, var(--theme-primary) 0%, var(--theme-dark) 100%)`,
              }}
            >
              <Image
                src="/institute-logo.png"
                alt="Institute Logo"
                width={112}
                height={112}
                className="w-28 h-28 object-cover"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight transition-colors duration-300">
            COMPUTER ENGINEERING AND TECHNOLOGY PROGRAMME
            <span className="block" style={{ color: "var(--theme-primary)" }}>
              Portfolios
            </span>
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto transition-colors duration-300">
            Supported by student of computer engineering and technology programme
          </p>
        </div>
      </div>
    </section>
  )
}
