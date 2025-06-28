"use client"

import { useState } from "react"
import Image from "next/image"
import { FileText, Instagram, Facebook, Github, GraduationCap, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Portfolio } from "@/lib/types"
import { getUniversityColors } from "@/lib/university-colors"

interface PortfolioCardProps {
  portfolio: Portfolio
  index: number
}

export default function PortfolioCard({ portfolio, index }: PortfolioCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [sealError, setSealError] = useState(false)

  const handleViewPortfolio = () => {
    // Open PDF in new tab for better user experience
    window.open(portfolio.portfolioUrl, "_blank", "noopener,noreferrer")
  }

  // Ensure description has minimum length for consistent card appearance
  const getFormattedDescription = (description: string) => {
    const minLength = 120 // Minimum characters for good appearance
    if (description.length < minLength) {
      // Pad short descriptions with additional context
      return description + " Dedicated to excellence and continuous learning in their field of study."
    }
    // Truncate very long descriptions
    const maxLength = 200
    if (description.length > maxLength) {
      return description.substring(0, maxLength - 3) + "..."
    }
    return description
  }

  return (
    <div
      className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl dark:shadow-gray-900/20 dark:hover:shadow-gray-900/40 transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 h-full flex flex-col"
      style={{
        animationDelay: `${index * 100}ms`,
        animation: "fadeInUp 0.6s ease-out forwards",
      }}
    >
      {/* Profile Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-700">
        <Image
          src={portfolio.photo || "/placeholder.svg"}
          alt={`${portfolio.name}'s profile`}
          fill
          className={`object-cover transition-all duration-500 group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* University seal overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
          <div className="absolute bottom-4 left-4 flex items-center gap-3">
            <div
              className="w-12 h-12 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-white/20"
              style={{
                backgroundColor: "white",
                borderColor: `${getUniversityColors(portfolio.university).primary}30`,
              }}
            >
              {!sealError && portfolio.universitySeal ? (
                <Image
                  src={portfolio.universitySeal || "/placeholder.svg"}
                  alt={`${portfolio.university} seal`}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain rounded-full"
                  onError={() => setSealError(true)}
                />
              ) : (
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{
                    background: getUniversityColors(portfolio.university).gradient,
                  }}
                >
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
              )}
            </div>
            <div className="text-white">
              <div
                className="text-xs font-medium opacity-90 drop-shadow-sm"
                style={{
                  color: getUniversityColors(portfolio.university).secondary === "#FFFFFF" ? "#FFFFFF" : "#F3F4F6",
                }}
              >
                {portfolio.university}
              </div>
              <div className="text-xs opacity-75 drop-shadow-sm">{portfolio.major}</div>
            </div>
          </div>
        </div>

        {/* Quick actions overlay */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="flex gap-2">
            {portfolio.instagram && (
              <a
                href={portfolio.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/90 hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-800 rounded-full shadow-lg transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-600" />
              </a>
            )}
            {portfolio.facebook && (
              <a
                href={portfolio.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/90 hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-800 rounded-full shadow-lg transition-colors"
              >
                <Facebook className="w-4 h-4 text-blue-600" />
              </a>
            )}
            {portfolio.github && (
              <a
                href={portfolio.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/90 hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-800 rounded-full shadow-lg transition-colors"
              >
                <Github className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Card Content - Flexible height */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-4 flex-1">
          <div className="flex items-baseline space-x-1">
            <h3
              className="text-xl font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300"
              style={{
                color: getUniversityColors(portfolio.university).primary,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = getUniversityColors(portfolio.university).primary
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = ""
              }}
            >
              {portfolio.name}
            </h3>

            {portfolio.programme && (
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium transition-colors duration-300">
                {portfolio.programme}
              </span>
            )}
          </div>

          {/* Description with consistent height */}
          <div className="min-h-[4.5rem]">
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-300">
              {getFormattedDescription(portfolio.description)}
            </p>
          </div>
        </div>

        {/* Major and University */}
        <div className="mb-4 space-y-2">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
            <GraduationCap
              className="w-4 h-4 mr-2"
              style={{ color: getUniversityColors(portfolio.university).primary }}
            />
            <span className="font-medium">{portfolio.major}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
            <Building
              className="w-4 h-4 mr-2"
              style={{
                color:
                  getUniversityColors(portfolio.university).secondary === "#FFFFFF"
                    ? getUniversityColors(portfolio.university).primary
                    : getUniversityColors(portfolio.university).secondary,
              }}
            />
            <span>{portfolio.university}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex">
          <Button
            onClick={handleViewPortfolio}
            className="w-full text-white transition-colors duration-300"
            size="sm"
            style={{
              backgroundColor: getUniversityColors(portfolio.university).primary,
              borderColor: getUniversityColors(portfolio.university).primary,
            }}
            onMouseEnter={(e) => {
              const colors = getUniversityColors(portfolio.university)
              e.currentTarget.style.backgroundColor = colors.primary
              e.currentTarget.style.filter = "brightness(0.9)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = "brightness(1)"
            }}
          >
            <FileText className="w-4 h-4 mr-2" />
            View Portfolio
          </Button>
        </div>

        {/* Contact */}
        {portfolio.instagram && (
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 transition-colors duration-300">
            <a
              href={portfolio.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300"
            >
              <Instagram className="w-4 h-4 mr-2" />
              Follow on Instagram
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
