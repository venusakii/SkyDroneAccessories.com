"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"

const blogPosts = [
  {
    title: "How to Increase Flight Time",
    excerpt: "Discover proven techniques to extend your drone's battery life and maximize flight duration.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Tips & Tricks",
  },
  {
    title: "Best ND Filters for Sunset Photography",
    excerpt: "Learn which ND filters produce the most stunning golden hour and sunset aerial shots.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Photography",
  },
  {
    title: "Propeller Safety and Maintenance",
    excerpt: "Essential guide to keeping your propellers in top condition and ensuring safe flights.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Maintenance",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
          Blog & <span className="text-primary">Tips</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={post.title}
              className="group cursor-pointer overflow-hidden border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-bold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors flex items-start justify-between gap-2">
                    <span className="text-balance">{post.title}</span>
                    <ArrowUpRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </h3>
                  <p className="text-muted-foreground text-pretty">{post.excerpt}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
