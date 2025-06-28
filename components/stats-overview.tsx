"use client"

import { useEffect, useState } from "react"
import { portfolioData } from "@/lib/portfolio-data"
import { Users, GraduationCap, Building, Award } from "lucide-react"

export default function StatsOverview() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const stats = [
    {
      icon: Users,
      value: portfolioData.length,
      label: "Talented Students",
      description: "Showcasing their best work",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: GraduationCap,
      value: new Set(portfolioData.map((p) => p.programme)).size,
      label: "Academic Programs",
      description: "Diverse fields of study",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: Building,
      value: new Set(portfolioData.map((p) => p.university)).size,
      label: "Partner Universities",
      description: "Leading institutions",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      icon: Award,
      value: portfolioData.filter((p) => p.instagram || p.facebook || p.github).length,
      label: "Active Profiles",
      description: "Connected professionals",
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Platform Impact</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connecting talented students with opportunities and showcasing excellence across multiple universities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center transform transition-all duration-700 hover:scale-105 hover:shadow-xl ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>

              <div className="mb-4">
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {isVisible && <CountUpAnimation target={stat.value} duration={2000} delay={index * 150} />}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{stat.label}</h3>
              </div>

              <p className="text-sm text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Counter animation component
function CountUpAnimation({ target, duration, delay }: { target: number; duration: number; delay: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      const increment = target / (duration / 16)
      let current = 0

      const counter = setInterval(() => {
        current += increment
        if (current >= target) {
          setCount(target)
          clearInterval(counter)
        } else {
          setCount(Math.floor(current))
        }
      }, 16)

      return () => clearInterval(counter)
    }, delay)

    return () => clearTimeout(timer)
  }, [target, duration, delay])

  return <span>{count}</span>
}
