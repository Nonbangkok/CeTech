"use client"

import Link from "next/link"
import { ArrowRight, Users, BarChart3, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CallToAction() {
  const actions = [
    {
      icon: Users,
      title: "Explore Portfolios",
      description: "Discover amazing work from talented students",
      href: "/portfolio",
      buttonText: "View Portfolios",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: BarChart3,
      title: "View Statistics",
      description: "See detailed analytics and insights",
      href: "/statistics",
      buttonText: "View Stats",
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      icon: Palette,
      title: "Design Tools",
      description: "Access our gradient preview tool",
      href: "/gradient-preview",
      buttonText: "Try Tools",
      color: "bg-purple-600 hover:bg-purple-700",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Dive into our comprehensive platform and discover the incredible talent of our student community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {actions.map((action, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <action.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-semibold mb-4">{action.title}</h3>
              <p className="text-gray-300 mb-6">{action.description}</p>

              <Link href={action.href}>
                <Button className={`${action.color} text-white px-6 py-2`}>
                  {action.buttonText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
