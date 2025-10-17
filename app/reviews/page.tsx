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
      text: "The LICHIFIT Carbon Fiber Propellers are fantastic for my drone. They’re durable and improve flight stability, perfect for coastal shoots.",
      product: "LICHIFIT Carbon Fiber Propellers for Mavic 3",
      image: "https://m.media-amazon.com/images/I/61lYxreYBVL._AC_SX679_.jpg",
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      role: "Drone Enthusiast",
      avatar: "/female-pilot.png",
      rating: 5,
      date: "1 month ago",
      text: "The PGYTECH Landing Gear Extensions are a game-changer. They provide extra clearance and stability for safe landings on rough terrain.",
      product: "PGYTECH Landing Gear Extensions for Mavic Air 2",
      image: "https://m.media-amazon.com/images/I/41tREL8T6AL._AC_SX679_.jpg",
    },
    {
      id: 3,
      name: "Marcus Johnson",
      role: "Content Creator",
      avatar: "/content-creator-workspace.png",
      rating: 5,
      date: "3 weeks ago",
      text: "The Freewell 8-Pack Split ND Filters enhance my drone footage dramatically. Smooth adjustments and vibrant colors!",
      product: "Freewell 8-Pack Split ND Filters for Mavic 3",
      image: "https://m.media-amazon.com/images/I/71xiSdDlLzL._AC_SX679_.jpg",
    },
    {
      id: 4,
      name: "Elena Rodriguez",
      role: "Real Estate Videographer",
      avatar: "/female-videographer.jpg",
      rating: 5,
      date: "2 months ago",
      text: "The Lekufee Waterproof Carrying Case is a lifesaver. Keeps my drone and accessories safe in harsh conditions with plenty of room.",
      product: "Lekufee Waterproof Carrying Case for Mavic 3",
      image: "https://m.media-amazon.com/images/I/81SJl3u9w6L._AC_SX679_.jpg",
    },
    {
      id: 5,
      name: "David Park",
      role: "Landscape Photographer",
      avatar: "/landscape-photographer.png",
      rating: 5,
      date: "1 week ago",
      text: "The YesRight Electric Screwdriver is a must-have for quick drone repairs. Compact, powerful, and precise!",
      product: "YesRight Electric Screwdriver",
      image: "https://m.media-amazon.com/images/I/718h0QJBobL._AC_SX679_PIbundle-155,TopRight,0,0_SH20_.jpg",
    },
    {
      id: 6,
      name: "Nina Kowalski",
      role: "Adventure Vlogger",
      avatar: "/adventure-vlogger.jpg",
      rating: 5,
      date: "3 weeks ago",
      text: "The STARTRC Controller Lanyard is super convenient. Adjustable and comfortable for long drone sessions.",
      product: "STARTRC Controller Lanyard for Mavic 3",
      image: "https://m.media-amazon.com/images/I/812Pjt88PpL._AC_SX679_.jpg",
    },
    {
      id: 7,
      name: "Liam Carter",
      role: "Drone Pilot",
      avatar: "/drone-pilot.png",
      rating: 5,
      date: "2 weeks ago",
      text: "The Lowepro DroneGuard Backpack is perfect for travel. It’s sturdy, well-organized, and fits all my gear comfortably.",
      product: "Lowepro DroneGuard Camera Backpack",
      image: "https://m.media-amazon.com/images/I/61+MalP85NL._AC_SX679_.jpg",
    },
    {
      id: 8,
      name: "Sophie Lee",
      role: "Aerial Cinematographer",
      avatar: "/cinematographer.jpg",
      rating: 5,
      date: "1 month ago",
      text: "The ExpertPower High Capacity Battery extends my drone’s flight time significantly. Reliable and easy to install.",
      product: "ExpertPower High Capacity Battery for Mavic Air",
      image: "https://m.media-amazon.com/images/I/61eO56vrVeL._AC_SX679_.jpg",
    },
    {
      id: 9,
      name: "James Patel",
      role: "Hobbyist Drone Operator",
      avatar: "/hobbyist-drone.png",
      rating: 5,
      date: "2 weeks ago",
      text: "The Arzroic Lanyard with Sun Hood is a lifesaver for outdoor shoots. Keeps the controller secure and screen visible.",
      product: "Arzroic Controller Lanyard with Sun Hood",
      image: "https://m.media-amazon.com/images/I/61Y3JUgANiL._AC_SX679_.jpg",
    },
  ]

  const productReviews = [
    {
      id: 1,
      slug: "lichifit-carbon-fiber-propellers",
      name: "LICHIFIT Carbon Fiber Propellers for Mavic 3",
      image: "https://m.media-amazon.com/images/I/61lYxreYBVL._AC_SX679_.jpg",
      rating: 4.8,
      reviewCount: 156,
      price: "$29.99",
      description:
        "High-performance carbon fiber propellers designed for DJI Mavic 3 series drones, engineered for enhanced durability and flight stability.",
    },
    {
      id: 2,
      slug: "pgytech-landing-gear-extensions",
      name: "PGYTECH Landing Gear Extensions for Mavic Air 2",
      image: "https://m.media-amazon.com/images/I/41tREL8T6AL._AC_SX679_.jpg",
      rating: 4.7,
      reviewCount: 289,
      price: "$19.95",
      description:
        "Landing gear extensions providing additional ground clearance for safer landings on uneven terrain.",
    },
    {
      id: 3,
      slug: "freewell-8-pack-split-nd-filters",
      name: "Freewell 8-Pack Split ND Filters for Mavic 3",
      image: "https://m.media-amazon.com/images/I/71xiSdDlLzL._AC_SX679_.jpg",
      rating: 4.9,
      reviewCount: 342,
      price: "$99.99",
      description:
        "Set of 8 split ND filters for precise light control and vibrant aerial footage with durable coatings.",
    },
    {
      id: 4,
      slug: "lekufee-waterproof-carrying-case",
      name: "Lekufee Waterproof Carrying Case for Mavic 3",
      image: "https://m.media-amazon.com/images/I/81SJl3u9w6L._AC_SX679_.jpg",
      rating: 4.8,
      reviewCount: 215,
      price: "$139.99",
      description:
        "Rugged waterproof hard case with custom foam for secure storage and transport in extreme conditions.",
    },
    {
      id: 5,
      slug: "yesright-electric-screwdriver",
      name: "YesRight Electric Screwdriver",
      image: "https://m.media-amazon.com/images/I/718h0QJBobL._AC_SX679_PIbundle-155,TopRight,0,0_SH20_.jpg",
      rating: 4.7,
      reviewCount: 432,
      price: "$49.99",
      description: "Cordless electric screwdriver with 155 precision bits for drone repairs and maintenance.",
    },
    {
      id: 6,
      slug: "startrc-controller-lanyard",
      name: "STARTRC Controller Lanyard for Mavic 3",
      image: "https://m.media-amazon.com/images/I/812Pjt88PpL._AC_SX679_.jpg",
      rating: 4.8,
      reviewCount: 198,
      price: "$15.99",
      description: "Adjustable lanyard providing hands-free convenience and comfort during extended drone operation.",
    },
    {
      id: 7,
      slug: "lowepro-droneguard-backpack",
      name: "Lowepro DroneGuard Camera Backpack",
      image: "https://m.media-amazon.com/images/I/61+MalP85NL._AC_SX679_.jpg",
      rating: 4.9,
      reviewCount: 176,
      price: "$129.95",
      description:
        "Durable backpack with customizable compartments and weather-resistant materials for safe transport.",
    },
    {
      id: 8,
      slug: "expertpower-high-capacity-battery",
      name: "ExpertPower High Capacity Battery for Mavic Air",
      image: "https://m.media-amazon.com/images/I/61eO56vrVeL._AC_SX679_.jpg",
      rating: 4.6,
      reviewCount: 567,
      price: "$89.99",
      description: "High-capacity intelligent battery offering extended flight time with built-in safety features.",
    },
    {
      id: 9,
      slug: "arzroic-controller-lanyard-sun-hood",
      name: "Arzroic Controller Lanyard with Sun Hood",
      image: "https://m.media-amazon.com/images/I/61Y3JUgANiL._AC_SX679_.jpg",
      rating: 4.8,
      reviewCount: 334,
      price: "$22.99",
      description: "Lanyard with integrated sun hood ensuring screen visibility and hands-free operation outdoors.",
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
            <a href="/about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="/contact" className="hover:text-primary transition-colors">
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
            href="/"
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
