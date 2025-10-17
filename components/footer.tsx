export function Footer() {
  return (
    <footer className="relative border-t border-border/50 overflow-hidden">
      {/* Drone silhouette background */}
      <div className="absolute inset-0 opacity-5">
        <img src="/placeholder.svg?height=400&width=1920" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          

          

          

          
        </div>

        <div className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          <p className="mb-2">© 2025 SkyDroneAccessories. All rights reserved.</p>
          <p className="text-xs">🛒 As an Amazon Associate, we earn from qualifying purchases.</p>
        </div>
      </div>
    </footer>
  )
}
