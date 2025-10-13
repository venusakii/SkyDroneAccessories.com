"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background drone video effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-card" />
        <img
          src="/dji-drone-flying-through-clouds-cinematic.jpg"
          alt="Drone flying"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Propeller logo */}
      <div className="absolute top-8 left-8 z-20 flex items-center gap-3">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 animate-propeller">
            <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
              <circle cx="50" cy="50" r="8" fill="currentColor" />
              <rect x="46" y="10" width="8" height="35" fill="currentColor" rx="2" />
              <rect x="46" y="55" width="8" height="35" fill="currentColor" rx="2" />
              <rect x="10" y="46" width="35" height="8" fill="currentColor" rx="2" />
              <rect x="55" y="46" width="35" height="8" fill="currentColor" rx="2" />
            </svg>
          </div>
        </div>
        <span className="text-2xl font-bold tracking-tight">
          Sky<span className="text-primary">Drone</span>Accessories
        </span>
      </div>

      {/* Navigation */}
      <nav className="absolute top-8 right-8 z-20 flex gap-8 text-sm">
        <a href="#" className="hover:text-primary transition-colors">
          Home
        </a>
        <a href="/reviews" className="hover:text-primary transition-colors">
          Reviews
        </a>
        <a href="/about" className="hover:text-primary transition-colors">
          About
        </a>
        <a href="/contact" className="hover:text-primary transition-colors">
          Contact
        </a>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-balance leading-tight">
          The Future of Flight
          <br />
          <span className="text-primary animate-glow">Starts Here</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-pretty">
          Accessories and upgrades for next-generation drones
        </p>
        <Link href="/reviews">
          <Button
            size="lg"
            className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Collection
              <span className="inline-block animate-propeller">⚙️</span>
            </span>
            <div className="absolute inset-0 bg-accent/20 translate-y-full group-hover:translate-y-0 transition-transform" />
          </Button>
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  )
}
