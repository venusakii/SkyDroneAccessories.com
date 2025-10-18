"use client"

const galleryImages = [
  {
    src: "/gallery-mountain-expedition.jpg",
    caption: "Mountain Expedition",
  },
  {
    src: "/gallery-coastal-sunset.jpg",
    caption: "Coastal Sunset",
  },
  {
    src: "/gallery-urban-exploration.jpg",
    caption: "Urban Exploration",
  },
  {
    src: "/gallery-forest-canopy.jpg",
    caption: "Forest Canopy",
  },
  {
    src: "/gallery-desert-dunes.jpg",
    caption: "Desert Dunes",
  },
  {
    src: "/gallery-waterfall-vista.jpg",
    caption: "Waterfall Vista",
  },
]

export function GallerySection() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
          Flight <span className="text-primary">Gallery</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-lg font-bold mb-2">{image.caption}</p>
                  <p className="text-sm text-muted-foreground">Shot with our accessories</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
