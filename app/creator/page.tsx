import Navigation from "@/components/navigation"
import { Github, Heart, Code, Coffee, Instagram, Facebook } from "lucide-react"

export default function CreatorPage() {
  return (
    <div className="min-h-screen relative overflow-hidden transition-colors duration-300">
      {/* Soft gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(45deg, var(--theme-primary) 0%, var(--theme-secondary) 20%, var(--theme-primary) 40%, var(--theme-secondary) 60%, var(--theme-primary) 80%, var(--theme-secondary) 100%)`,
        }}
      />

      {/* Soft overlay for readability */}
      <div className="absolute inset-0 bg-white/90 dark:bg-gray-900/90 transition-colors duration-300" />

      <div className="relative">
        <Navigation />

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1
                className="text-4xl md:text-5xl font-bold text-red-800 dark:text-gray-100 mb-4 transition-colors duration-300"
                style={{ color: "var(--theme-primary)" }}
              >
                Meet the Creator
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
                The story behind this portfolio showcase and the passion that drives innovation
              </p>
            </div>

            {/* Creator Profile */}
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden mb-12 transition-colors duration-300">
              <div className="md:flex">
                <div
                  className="md:w-1/3 p-8 text-white text-center"
                  style={{
                    background: "linear-gradient(135deg, var(--theme-primary) 0%, var(--theme-dark) 100%)",
                  }}
                >
                  <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <img src="/Creator.png" alt="Profile" className="w-32 h-32 rounded-full" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Nonbangkok</h2>
                  <p className="text-white/80">Kittitouch Thipmontha</p>
                </div>

                <div className="md:w-2/3 p-8">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 transition-colors duration-300">
                    About This Project
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
                    This portfolio showcase was created with passion and dedication to highlight the incredible work of
                    our graduating class. Built with modern web technologies including Next.js, React, TypeScript, and
                    Tailwind CSS, it represents the perfect blend of functionality and aesthetics.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 transition-colors duration-300">
                        Technologies Used
                      </h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 transition-colors duration-300">
                        <li>• Next.js 14 with App Router</li>
                        <li>• React & TypeScript</li>
                        <li>• Tailwind CSS</li>
                        <li>• Lucide React Icons</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 transition-colors duration-300">
                        Features
                      </h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 transition-colors duration-300">
                        <li>• Responsive Design</li>
                        <li>• Interactive Animations</li>
                        <li>• University Branding</li>
                        <li>• PDF Portfolio Integration</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://instagram.com/nonbangkokth"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-white rounded-lg transition-colors"
                      style={{
                        background: "linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)",
                      }}
                    >
                      <Instagram className="w-4 h-4" />
                      Instagram
                    </a>
                    <a
                      href="https://facebook.com/xXNonbangkokXx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Facebook className="w-4 h-4" />
                      Facebook
                    </a>
                    <a
                      href="https://github.com/Nonbangkok"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Development Process */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 text-center transition-colors duration-300">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{
                    backgroundColor: "var(--theme-secondary)",
                    opacity: 0.2,
                  }}
                >
                  <Heart className="w-6 h-6" style={{ color: "var(--theme-primary)" }} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 transition-colors duration-300">
                  Passion Driven
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
                  Every line of code written with care and attention to detail, ensuring the best possible showcase for
                  our students.
                </p>
              </div>

              <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 text-center transition-colors duration-300">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{
                    backgroundColor: "var(--theme-secondary)",
                    opacity: 0.2,
                  }}
                >
                  <Code className="w-6 h-6" style={{ color: "var(--theme-primary)" }} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 transition-colors duration-300">
                  Modern Tech
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
                  Built with cutting-edge technologies to ensure fast performance, scalability, and maintainability.
                </p>
              </div>

              <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 text-center transition-colors duration-300">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{
                    backgroundColor: "var(--theme-secondary)",
                    opacity: 0.2,
                  }}
                >
                  <Coffee className="w-6 h-6" style={{ color: "var(--theme-primary)" }} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 transition-colors duration-300">
                  Dedication
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
                  Countless hours of development, testing, and refinement to create the perfect portfolio experience.
                </p>
              </div>
            </div>

            {/* Thank You Message */}
            <div
              className="rounded-2xl p-8 text-white text-center"
              style={{
                background: "linear-gradient(135deg, var(--theme-primary) 0%, var(--theme-dark) 100%)",
              }}
            >
              <h3 className="text-2xl font-bold mb-4">Thank You</h3>
              <p className="text-white/90 max-w-2xl mx-auto">
                To all the students who trusted me with showcasing their incredible work, and to everyone who visits
                this portfolio showcase - thank you for being part of this journey. Your success is our success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
