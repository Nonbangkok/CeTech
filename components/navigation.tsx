"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden absolute left-4 p-2 rounded-md text-gray-600 hover:text-red-600 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            {/* Left Navigation Items */}
            <Link
              href="/portfolio"
              className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200 hover:scale-105 transform"
            >
              Portfolios
            </Link>

            <Link
              href="/statistics"
              className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200 hover:scale-105 transform"
            >
              Statistics
            </Link>

            {/* Logo - Center */}
            <Link href="/" className="flex items-center mx-8">
              <div className="relative">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200">
                  <Image
                    src="/institute-logo.png"
                    alt="Institute Logo"
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
            </Link>

            {/* Right Navigation Items */}
            <Link
              href="/creator"
              className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200 hover:scale-105 transform"
            >
              Creator
            </Link>

            <Link
              href="/gradient-preview"
              className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200 hover:scale-105 transform"
            >
              Tools
            </Link>
          </div>

          {/* Mobile Logo - Center when menu closed */}
          <Link href="/" className="md:hidden flex items-center">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
              <Image
                src="/institute-logo.png"
                alt="Institute Logo"
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/portfolio"
                className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/statistics"
                className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Statistics
              </Link>
              <Link
                href="/creator"
                className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Creator
              </Link>
              <Link
                href="/gradient-preview"
                className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Tools
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
