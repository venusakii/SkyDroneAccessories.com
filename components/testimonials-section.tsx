"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    name: "Alex Chen",
    role: "Professional Aerial Photographer",
    content:
      "The ND filters from SkyDrone have completely transformed my sunset shots. The color accuracy is incredible.",
    rating: 5,
    image: "/professional-photographer-portrait.png",
  },
  {
    name: "Sarah Martinez",
    role: "Drone Racing Pilot",
    content:
      "These carbon fiber propellers are game-changers. My response time improved by 20% and they're incredibly durable.",
    rating: 5,
    image: "/female-pilot-portrait.png",
  },
  {
    name: "James Wilson",
    role: "Real Estate Videographer",
    content:
      "The charging hub saves me so much time on location. I can keep multiple batteries ready throughout the day.",
    rating: 5,
    image: "/videographer-portrait.jpg",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section className="relative py-24 px-4">
      {/* Sound wave effect */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 200">
          <path
            d="M0,100 Q250,50 500,100 T1000,100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary animate-pulse"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
          What <span className="text-primary">Pilots</span> Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="glass border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground text-pretty">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
