"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookies-accepted")
    if (!hasAccepted) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookies-accepted", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md">
      <div className="glass rounded-2xl p-6 shadow-2xl border-2 border-primary/30 animate-glow">
        <p className="text-sm mb-4 text-pretty">
          This website uses cookies to improve your experience and analyze site usage. By continuing, you consent to the
          use of cookies.
        </p>
        <Button onClick={handleAccept} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          Accept 🚀
        </Button>
      </div>
    </div>
  )
}
