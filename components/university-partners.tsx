"use client"

import { portfolioData } from "@/lib/portfolio-data"
import { getUniversityColors } from "@/lib/university-colors"
import { GraduationCap, MapPin, Users } from "lucide-react"

export default function UniversityPartners() {
  // Get unique universities with their student counts
  const universities = portfolioData.reduce(
    (acc, portfolio) => {
      const uni = portfolio.university
      if (!acc[uni]) {
        acc[uni] = {
          name: uni,
          count: 0,
          programs: new Set(),
          seal: portfolio.universitySeal,
        }
      }
      acc[uni].count++
      acc[uni].programs.add(portfolio.major)
      return acc
    },
    {} as Record<string, { name: string; count: number; programs: Set<string>; seal?: string }>,
  )

  const universityList = Object.values(universities)

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GraduationCap className="w-6 h-6 text-red-600" />
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wide">Our Partners</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leading Universities</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Collaborating with top-tier institutions to showcase exceptional student talent and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {universityList.map((university, index) => (
            <div
              key={university.name}
              className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{
                animationDelay: `${index * 200}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              <div className="flex items-start gap-6">
                {/* University Seal */}
                <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  {university.seal ? (
                    <img
                      src={university.seal || "/placeholder.svg"}
                      alt={`${university.name} seal`}
                      className="w-16 h-16 object-contain rounded-full"
                    />
                  ) : (
                    <GraduationCap className="w-8 h-8 text-white" />
                  )}
                </div>

                {/* University Info */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {university.name}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{university.count} students</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{university.programs.size} programs</span>
                    </div>
                  </div>

                  {/* Programs */}
                  <div className="flex flex-wrap gap-2">
                    {Array.from(university.programs)
                      .slice(0, 3)
                      .map((program) => (
                        <span
                          key={program}
                          className="px-3 py-1 text-xs font-medium rounded-full text-white"
                          style={{
                            backgroundColor: getUniversityColors(university.name).primary,
                          }}
                        >
                          {program}
                        </span>
                      ))}
                    {university.programs.size > 3 && (
                      <span className="px-3 py-1 text-xs font-medium bg-gray-200 text-gray-600 rounded-full">
                        +{university.programs.size - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
