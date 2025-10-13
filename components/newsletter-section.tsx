"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <section className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass rounded-3xl p-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Stay <span className="text-primary">Updated</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Get fresh updates and exclusive discounts on drone accessories 🚀
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-background/50 border-border/50 focus:border-primary"
              required
            />
            <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
              <span className="group-hover:-translate-y-1 transition-transform inline-block">Take Off!</span>
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
