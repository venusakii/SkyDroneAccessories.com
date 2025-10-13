"use client"

import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    name: "Propellers",
    image: "/drone-propellers-carbon-fiber.jpg",
    description: "High-performance carbon fiber blades",
  },
  {
    name: "Filters",
    image: "/nd-polarizing-camera-filters.jpg",
    description: "ND and polarizing filters",
  },
  {
    name: "Cases & Bags",
    image: "/drone-carrying-case-professional.jpg",
    description: "Protective storage solutions",
  },
  {
    name: "Charging Stations",
    image: "/drone-battery-charging-hub.jpg",
    description: "Fast charging hubs",
  },
  {
    name: "Mounts & Holders",
    image: "/drone-landing-pad-accessories.jpg",
    description: "Landing pads and stands",
  },
  {
    name: "Propeller Guards",
    image: "/drone-propeller-guards-protection.jpg",
    description: "Safety and protection",
  },
]

export function CategoriesSection() {
  return (
    <section id="categories" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
          Accessory <span className="text-primary">Categories</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card
              key={category.name}
              className="group cursor-pointer overflow-hidden border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300"
              style={{
                transform: "perspective(1000px)",
              }}
              onMouseMove={(e) => {
                const card = e.currentTarget
                const rect = card.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top
                const centerX = rect.width / 2
                const centerY = rect.height / 2
                const rotateX = (y - centerY) / 10
                const rotateY = (centerX - x) / 10
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)"
              }}
            >
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
