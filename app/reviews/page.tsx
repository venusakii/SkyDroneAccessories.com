import { Star } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ReviewsPage() {
  const reviews = [
    {
      id: 1,
      name: "Alex Chen",
      role: "Professional Aerial Photographer",
      avatar: "/professional-photographer.png",
      rating: 5,
      date: "2 weeks ago",
      text: "The SwellPro propellers are fantastic for my Fisherman drone. They’re durable and improve flight stability, perfect for coastal shoots.",
      product: "SwellPro Propellers for Fisherman Drone",
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      role: "Drone Enthusiast",
      avatar: "/female-pilot.png",
      rating: 5,
      date: "1 month ago",
      text: "The Urth magnetic CPL filter is a game-changer. Easy to attach and removes glare perfectly for vibrant aerial shots.",
      product: "Urth 82mm Magnetic CPL Filter",
    },
    {
      id: 3,
      name: "Marcus Johnson",
      role: "Content Creator",
      avatar: "/content-creator-workspace.png",
      rating: 5,
      date: "3 weeks ago",
      text: "The Lykus waterproof case is a lifesaver. Keeps my drone safe in harsh conditions with plenty of room for accessories.",
      product: "Lykus HC-4410 Waterproof Case",
    },
    {
      id: 4,
      name: "Elena Rodriguez",
      role: "Real Estate Videographer",
      avatar: "/female-videographer.jpg",
      rating: 5,
      date: "2 months ago",
      text: "The charging hub is a must-have. Charges multiple devices quickly and is super convenient for on-location shoots.",
      product: "Charging Hub for Multiple Stations",
    },
    {
      id: 5,
      name: "David Park",
      role: "Landscape Photographer",
      avatar: "/landscape-photographer.png",
      rating: 5,
      date: "1 week ago",
      text: "The K&F Concept ND/CPL filter enhances my drone footage dramatically. Smooth adjustments and no color shift!",
      product: "K&F Concept 67mm Variable ND/CPL Filter",
    },
    {
      id: 6,
      name: "Nina Kowalski",
      role: "Adventure Vlogger",
      avatar: "/adventure-vlogger.jpg",
      rating: 5,
      date: "3 weeks ago",
      text: "The CQT landing pad is durable and reflective, making landings in low light so much easier. Highly recommend!",
      product: "CQT Double-Sided Landing Pad",
    },
    {
      id: 7,
      name: "Liam Carter",
      role: "Drone Pilot",
      avatar: "/drone-pilot.png",
      rating: 5,
      date: "2 weeks ago",
      text: "The gimbal bumper saved my drone’s camera during a rough landing. Lightweight and easy to install.",
      product: "Anti-Collision Gimbal Bumper",
    },
    {
      id: 8,
      name: "Sophie Lee",
      role: "Aerial Cinematographer",
      avatar: "/cinematographer.jpg",
      rating: 5,
      date: "1 month ago",
      text: "The TP-Link range extender boosted my drone’s signal significantly. Perfect for long-distance shoots.",
      product: "TP-Link WiFi Range Extender",
    },
    {
      id: 9,
      name: "James Patel",
      role: "Hobbyist Drone Operator",
      avatar: "/hobbyist-drone.png",
      rating: 5,
      date: "2 weeks ago",
      text: "The JHTC battery hub is a lifesaver for my Mini 3 Pro. Charges fast and keeps my batteries organized.",
      product: "JHTC Mini 3/4 Pro Battery Hub",
    },
  ]

const productReviews = [
    {
      id: 1,
      slug: "mukikim-rock-and-roll-piano",
      name: "MukikiM Rock and Roll It Play by Color Piano",
      image: "https://m.media-amazon.com/images/I/81r69l8pPeL._AC_SX679_.jpg",
      rating: 4.4,
      reviewCount: 225,
      price: "$59.99",
      description: "Portable, flexible piano with color-coded keys for easy learning. Great for kids to explore music anywhere.",
    },
    {
      id: 2,
      slug: "fisher-price-infant-trio",
      name: "Fisher-Price Classic Infant Trio Gift Set",
      image: "https://m.media-amazon.com/images/I/61gg-o7oPML._AC_SX679_.jpg",
      rating: 4.8,
      reviewCount: 1234,
      price: "$29.99",
      description: "Includes xylophone, tambourine, and maracas. Perfect for infants to develop motor skills and rhythm.",
    },
    {
      id: 3,
      slug: "stoies-musical-instruments",
      name: "Stoie's Musical Instruments Set for Toddlers",
      image: "https://m.media-amazon.com/images/I/71cPoZ9534L._AC_SX679_.jpg",
      rating: 4.6,
      reviewCount: 587,
      price: "$32.99",
      description: "Wooden instrument set with xylophone, tambourine, and more. Safe and durable for toddler music play.",
    },
    {
      id: 4,
      slug: "keyboard-xylophone-set",
      name: "Keyboard & Xylophone Musical Instrument Set",
      image: "https://m.media-amazon.com/images/I/71sU6VdZH2L._AC_SX679_.jpg",
      rating: 4.3,
      reviewCount: 412,
      price: "$39.99",
      description: "Dual keyboard and xylophone toy for kids. Encourages musical creativity and early learning.",
    },
    {
      id: 5,
      slug: "loog-mini-acoustic-guitar",
      name: "Loog Mini Acoustic Guitar for Children",
      image: "https://m.media-amazon.com/images/I/714ZXMfWbXL._AC_SX679_.jpg",
      rating: 4.7,
      reviewCount: 896,
      price: "$89.00",
      description: "3-string acoustic guitar designed for kids. Easy to play with app-based learning support.",
    },
    {
      id: 6,
      slug: "electric-drum-set",
      name: "Electric Drum Set with Recording",
      image: "https://m.media-amazon.com/images/I/71tKXDqEnIL._AC_SX679_.jpg",
      rating: 4.5,
      reviewCount: 321,
      price: "$69.99",
      description: "Electronic drum set with recording feature and built-in speaker. Ideal for young drummers.",
    },
    {
      id: 7,
      slug: "fisher-price-piano-gym",
      name: "Fisher-Price Deluxe Kick & Play Piano Gym",
      image: "https://m.media-amazon.com/images/I/81CXYaraFDL._AC_SX679_.jpg",
      rating: 4.8,
      reviewCount: 2456,
      price: "$49.99",
      description: "Musical playmat with piano keys for infants. Promotes sensory development with lights and sounds.",
    },
    {
      id: 8,
      slug: "taimasi-instruments-set",
      name: "TAIMASI Musical Instruments Set",
      image: "https://m.media-amazon.com/images/I/817-cDUVLWL._AC_SX679_.jpg",
      rating: 4.5,
      reviewCount: 672,
      price: "$29.99",
      description: "Comprehensive percussion set with tambourine, xylophone, and more. Great for group play.",
    },
    {
      id: 9,
      slug: "bluewood-montessori-climber",
      name: "BlueWood Triangle Foldable Climbing Montessori",
      image: "https://m.media-amazon.com/images/I/716Wr3MdeKL._AC_SX679_.jpg",
      rating: 4.6,
      reviewCount: 134,
      price: "$129.99",
      description: "Montessori climbing triangle with musical elements. Encourages physical and sensory development.",
    },
]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
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
          </a>
          <nav className="flex gap-8 text-sm">
            <a href="/" className="hover:text-primary transition-colors">
              Home
            </a>
            <a href="/reviews" className="text-primary">
              Reviews
            </a>
            <a href="/#technology" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="/#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Product Reviews Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Product <span className="text-primary">Reviews</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Explore our top-rated drone accessories with verified customer reviews
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {productReviews.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden bg-card/50 backdrop-blur border-border/40 hover:border-primary/40 transition-all hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{product.name}</h3>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold">{product.rating}</span>
                    <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border/40">
                    <a
                      href={`/reviews/${product.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      View Details →
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border/40">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Drone?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied pilots who trust SkyDroneAccessories for premium quality
          </p>
          <a
            href="/#categories"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold transition-colors"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden border-t border-border/40">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Customer <span className="text-primary">Reviews</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              See what drone pilots and aerial photographers say about our premium accessories
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
            <Card className="p-6 text-center bg-card/50 backdrop-blur border-primary/20">
              <div className="text-4xl font-bold text-primary mb-2">4.9</div>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </Card>
            <Card className="p-6 text-center bg-card/50 backdrop-blur border-primary/20">
              <div className="text-4xl font-bold text-primary mb-2">2,500+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </Card>
            <Card className="p-6 text-center bg-card/50 backdrop-blur border-primary/20">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Recommend Us</div>
            </Card>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {reviews.map((review) => (
              <Card
                key={review.id}
                className="p-6 bg-card/50 backdrop-blur border-border/40 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="w-12 h-12 border-2 border-primary/20">
                    <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
                    <AvatarFallback>
                      {review.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold">{review.name}</h3>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{review.text}</p>

                <div className="pt-4 border-t border-border/40">
                  <p className="text-xs text-primary font-medium">Purchased: {review.product}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
