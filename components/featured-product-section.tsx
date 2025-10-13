"use client"

import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Link from "next/link"

export function FeaturedProductSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Airflow effect background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="glass rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl animate-glow" />
              <img
                src="/dji-phantom-4-pro-propellers-rotating.jpg"
                alt="DJI Phantom 4 Pro Propellers"
                className="relative z-10 w-full animate-float"
              />
            </div>

            <div>
              <div className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-bold mb-4">
                ⭐ Product of the Week
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                DJI Phantom 4 Pro
                <br />
                <span className="text-primary">Propellers</span>
              </h2>
              <div className="flex items-center gap-2 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
                <span className="text-muted-foreground ml-2">(4.9/5 from 2,847 reviews)</span>
              </div>
              <ul className="space-y-3 mb-8 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Carbon fiber construction for maximum durability
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  15% increase in flight efficiency
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Reduced noise and vibration
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Quick-release mechanism
                </li>
              </ul>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link href="/reviews">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
