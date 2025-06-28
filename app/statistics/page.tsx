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
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-red-800 mb-4">University Enrollment Statistics</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive analytics and insights about our graduating class
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Students</p>
                <p className="text-3xl font-bold text-red-600">{totalStudents}</p>
              </div>
              <Users className="w-8 h-8 text-red-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Programme</p>
                <p className="text-3xl font-bold text-red-600">{programme.length}</p>
              </div>
              <BookOpen className="w-8 h-8 text-red-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Universities</p>
                <p className="text-3xl font-bold text-red-600">{universities.length}</p>
              </div>
              <Award className="w-8 h-8 text-red-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Social Profiles</p>
                <p className="text-3xl font-bold text-red-600">{studentsWithSocialMedia}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-red-600" />
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Programme Distribution */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="w-5 h-5 text-red-600" />
              <h3 className="text-xl font-semibold text-gray-800">Programme Distribution</h3>
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
                        <span className="font-semibold text-gray-800">{program.programme}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-800">{program.count}</div>
                      <div className="text-xs text-gray-600">{program.percentage}%</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
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
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-6">
              <PieChart className="w-5 h-5 text-red-600" />
              <h3 className="text-xl font-semibold text-gray-800">University Distribution</h3>
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
                      <span className="font-medium text-gray-800">{university.university}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-800">{university.count}</div>
                      <div className="text-xs text-gray-600">{university.percentage}%</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
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
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-red-600" />
              <h3 className="text-xl font-semibold text-gray-800">Major Distribution</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {majors.map((major, index) => (
                <div key={major.major} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">{major.count}</div>
                  <div className="text-sm text-gray-600">{major.major}</div>
                  <div className="text-xs text-gray-500">{major.percentage}% of class</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
