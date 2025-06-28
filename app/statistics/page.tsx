import Navigation from "@/components/navigation"
import { portfolioData } from "@/lib/portfolio-data"
import { getUniversityColors } from "@/lib/university-colors"
import { Users, BookOpen, TrendingUp, Award, BarChart3, PieChart } from "lucide-react"

// Calculate detailed statistics using only existing Portfolio fields
const getDetailedStatistics = () => {
  const programCounts: Record<string, { count: number; university: string }> = {}
  const universityCounts: Record<string, number> = {}
  const majorCounts: Record<string, number> = {}

  portfolioData.forEach((portfolio) => {
    // Programme Distribution (using programme field)
    if (programCounts[portfolio.programme]) {
      programCounts[portfolio.programme].count++
    } else {
      programCounts[portfolio.programme] = {
        count: 1,
        university: portfolio.university,
      }
    }

    // University distribution
    universityCounts[portfolio.university] = (universityCounts[portfolio.university] || 0) + 1

    // Major distribution
    majorCounts[portfolio.major] = (majorCounts[portfolio.major] || 0) + 1
  })

  const programme = Object.entries(programCounts)
    .map(([programme, data]) => ({
      programme,
      count: data.count,
      university: data.university,
      percentage: Math.round((data.count / portfolioData.length) * 100),
    }))
    .sort((a, b) => b.count - a.count)

  const universities = Object.entries(universityCounts)
    .map(([university, count]) => ({
      university,
      count,
      percentage: Math.round((count / portfolioData.length) * 100),
    }))
    .sort((a, b) => b.count - a.count)

  const majors = Object.entries(majorCounts)
    .map(([major, count]) => ({
      major,
      count,
      percentage: Math.round((count / portfolioData.length) * 100),
    }))
    .sort((a, b) => b.count - a.count)

  return { programme, universities, majors }
}

export default function StatisticsPage() {
  const { programme, universities, majors } = getDetailedStatistics()
  const totalStudents = portfolioData.length
  const studentsWithSocialMedia = portfolioData.filter((p) => p.instagram || p.facebook || p.github).length

  return (
    <div className="min-h-screen relative overflow-hidden transition-colors duration-300">
      {/* Soft gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at top, var(--theme-secondary) 0%, var(--theme-primary) 25%, var(--theme-secondary) 50%, var(--theme-primary) 75%, var(--theme-secondary) 100%)`,
        }}
      />

      {/* Soft overlay for readability */}
      <div className="absolute inset-0 bg-white/90 dark:bg-gray-900/90 transition-colors duration-300" />

      <div className="relative">
        <Navigation />

        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1
              className="text-4xl md:text-5xl font-bold text-red-800 dark:text-gray-100 mb-4 transition-colors duration-300"
              style={{ color: "var(--theme-primary)" }}
            >
              University Enrollment Statistics
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
              Comprehensive analytics and insights about our graduating class
            </p>
          </div>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                    Total Students
                  </p>
                  <p className="text-3xl font-bold" style={{ color: "var(--theme-primary)" }}>
                    {totalStudents}
                  </p>
                </div>
                <Users className="w-8 h-8" style={{ color: "var(--theme-primary)" }} />
              </div>
            </div>

            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">Programme</p>
                  <p className="text-3xl font-bold" style={{ color: "var(--theme-primary)" }}>
                    {programme.length}
                  </p>
                </div>
                <BookOpen className="w-8 h-8" style={{ color: "var(--theme-primary)" }} />
              </div>
            </div>

            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                    Universities
                  </p>
                  <p className="text-3xl font-bold" style={{ color: "var(--theme-primary)" }}>
                    {universities.length}
                  </p>
                </div>
                <Award className="w-8 h-8" style={{ color: "var(--theme-primary)" }} />
              </div>
            </div>

            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                    Social Profiles
                  </p>
                  <p className="text-3xl font-bold" style={{ color: "var(--theme-primary)" }}>
                    {studentsWithSocialMedia}
                  </p>
                </div>
                <TrendingUp className="w-8 h-8" style={{ color: "var(--theme-primary)" }} />
              </div>
            </div>
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Programme Distribution */}
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div className="flex items-center gap-2 mb-6">
                <BarChart3 className="w-5 h-5" style={{ color: "var(--theme-primary)" }} />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">
                  Programme Distribution
                </h3>
              </div>
              <div className="space-y-4">
                {programme.map((program, index) => (
                  <div key={program.programme}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{
                            background: getUniversityColors(program.university).gradient,
                          }}
                        />
                        <div>
                          <span className="font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">
                            {program.programme}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">
                          {program.count}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 transition-colors duration-300">
                          {program.percentage}%
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 transition-colors duration-300">
                      <div
                        className="h-2 rounded-full transition-all duration-1000"
                        style={{
                          width: `${program.percentage}%`,
                          background: getUniversityColors(program.university).gradient,
                          animationDelay: `${index * 200}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* University Distribution */}
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div className="flex items-center gap-2 mb-6">
                <PieChart className="w-5 h-5" style={{ color: "var(--theme-primary)" }} />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">
                  University Distribution
                </h3>
              </div>
              <div className="space-y-4">
                {universities.map((university, index) => (
                  <div key={university.university}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{
                            background: getUniversityColors(university.university).gradient,
                          }}
                        />
                        <span className="font-medium text-gray-800 dark:text-gray-200 transition-colors duration-300">
                          {university.university}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">
                          {university.count}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 transition-colors duration-300">
                          {university.percentage}%
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 transition-colors duration-300">
                      <div
                        className="h-2 rounded-full transition-all duration-1000"
                        style={{
                          width: `${university.percentage}%`,
                          background: getUniversityColors(university.university).gradient,
                          animationDelay: `${index * 200}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Major Distribution */}
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 lg:col-span-2 transition-colors duration-300">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-5 h-5" style={{ color: "var(--theme-primary)" }} />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">
                  Major Distribution
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {majors.map((major, index) => (
                  <div
                    key={major.major}
                    className="text-center p-4 bg-gray-50/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-lg transition-colors duration-300"
                  >
                    <div className="text-2xl font-bold" style={{ color: "var(--theme-primary)" }}>
                      {major.count}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
                      {major.major}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300">
                      {major.percentage}% of class
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
