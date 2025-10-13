"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Rocket, Target, Users, Zap, Award, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
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
            <span className="text-xl font-bold">
              Sky<span className="text-primary">Drone</span>Accessories
            </span>
          </div>
          <nav className="flex gap-6 text-sm">
            <a href="/" className="hover:text-primary transition-colors">
              Home
            </a>
            <a href="/reviews" className="hover:text-primary transition-colors">
              Reviews
            </a>
            <a href="/about" className="text-primary">
              About
            </a>
            <a href="/contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              About <span className="text-primary animate-glow">SkyDrone</span>Accessories
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              We're passionate about elevating your drone experience with premium accessories and cutting-edge
              technology
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To empower drone pilots worldwide with innovative accessories that enhance performance, extend flight
                capabilities, and unlock new creative possibilities in aerial photography and videography.
              </p>
            </Card>
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all">
              <Rocket className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To become the world's most trusted source for drone accessories, setting industry standards for quality,
                innovation, and customer satisfaction while pushing the boundaries of what's possible in flight.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Founded in 2020 by a team of passionate drone pilots and engineers, SkyDroneAccessories was born from a
                simple frustration: the lack of high-quality, reliable accessories for professional drone operations.
              </p>
              <p>
                What started as a small workshop creating custom propellers has grown into a global brand trusted by
                thousands of pilots worldwide. We've expanded our product line to include everything from
                precision-engineered filters to advanced battery systems, all designed with the same attention to detail
                and commitment to excellence.
              </p>
              <p>
                Today, our products are used by professional cinematographers, search and rescue teams, agricultural
                specialists, and hobbyists who demand the best. Every product we create is tested in real-world
                conditions by our team of expert pilots.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                Constantly pushing boundaries with cutting-edge technology and design
              </p>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality</h3>
              <p className="text-muted-foreground">
                Premium materials and rigorous testing ensure exceptional performance
              </p>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-muted-foreground">
                Building a global network of pilots who share knowledge and passion
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all">
              <img src="/professional-photographer.png" alt="Alex Chen" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Alex Chen</h3>
                <p className="text-primary text-sm mb-3">Founder & CEO</p>
                <p className="text-muted-foreground text-sm">
                  Former aerospace engineer with 15+ years in drone technology
                </p>
              </div>
            </Card>
            <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all">
              <img src="/female-pilot.png" alt="Sarah Martinez" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Sarah Martinez</h3>
                <p className="text-primary text-sm mb-3">Head of Product Design</p>
                <p className="text-muted-foreground text-sm">
                  Award-winning industrial designer specializing in aviation tech
                </p>
              </div>
            </Card>
            <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all">
              <img src="/content-creator-workspace.png" alt="James Wilson" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">James Wilson</h3>
                <p className="text-primary text-sm mb-3">Chief Technology Officer</p>
                <p className="text-muted-foreground text-sm">Expert in materials science and precision manufacturing</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Global Reach</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Serving pilots in over 50 countries with fast, reliable shipping and local support
            </p>
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-5xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Countries</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">10K+</div>
                <div className="text-muted-foreground">Happy Pilots</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Products</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Flight?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of pilots who trust SkyDroneAccessories for their aerial adventures
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full"
          >
            Shop Now
          </Button>
        </div>
      </section>
    </div>
  )
}
