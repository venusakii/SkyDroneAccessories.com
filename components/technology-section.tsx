"use client"

export function TechnologySection() {
  return (
    <section id="technology" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">
          Innovation & <span className="text-primary">Technology</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-16 text-pretty max-w-3xl mx-auto">
          Explore our cutting-edge drone technology with interactive 3D visualization
        </p>

        <div className="glass rounded-3xl p-12 relative overflow-hidden">
          <div className="relative h-[500px] flex items-center justify-center">
            <img
              src="/3d-drone-exploded-view-technical-diagram.jpg"
              alt="3D Drone Technology"
              className="w-full h-full object-contain animate-float"
            />

            {/* Interactive hotspots */}
            <div className="absolute top-1/4 left-1/4 group cursor-pointer">
              <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute" />
              <div className="w-4 h-4 bg-primary rounded-full relative" />
              <div className="absolute left-8 top-0 glass p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                <p className="font-bold text-sm">Carbon Fiber Propellers</p>
                <p className="text-xs text-muted-foreground">High-strength, lightweight design</p>
              </div>
            </div>

            <div className="absolute top-1/2 right-1/4 group cursor-pointer">
              <div className="w-4 h-4 bg-accent rounded-full animate-ping absolute" />
              <div className="w-4 h-4 bg-accent rounded-full relative" />
              <div className="absolute right-8 top-0 glass p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                <p className="font-bold text-sm">Smart Battery System</p>
                <p className="text-xs text-muted-foreground">Extended flight time technology</p>
              </div>
            </div>

            <div className="absolute bottom-1/4 left-1/2 group cursor-pointer">
              <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute" />
              <div className="w-4 h-4 bg-primary rounded-full relative" />
              <div className="absolute left-8 top-0 glass p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                <p className="font-bold text-sm">ND Filter Mount</p>
                <p className="text-xs text-muted-foreground">Professional cinematography</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
