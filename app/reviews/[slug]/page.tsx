import { Star, ShoppingCart, Check, ArrowLeft, Shield, Truck, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

// Product data - in a real app, this would come from a database
const products = {
  "lichifit-carbon-fiber-propellers": {
    id: 1,
    name: "LICHIFIT Carbon Fiber Propellers for Mavic 3",
    price: "$29.99",
    rating: 4.8,
    reviewCount: 156,
    amazonLink: "https://www.amazon.com/LICHIFIT-Carbon-Propellers-Replacement-Accessories/dp/B0CPXHRBHJ",
    description:
      "High-performance carbon fiber propellers designed for DJI Mavic 3 series drones. Engineered for enhanced durability and flight stability, ideal for demanding environments.",
    images: [
      "https://m.media-amazon.com/images/I/61lYxreYBVL._AC_SX679_.jpg",
      "/propeller-close-up-1.jpg",
      "/propeller-installation-1.jpg",
      "/propeller-package-1.jpg",
    ],
    features: [
      "High-strength carbon fiber",
      "Low noise design",
      "Enhanced flight stability",
      "Quick-release mechanism",
      "Corrosion-resistant",
      "Compatible with Mavic 3 series",
    ],
    specifications: {
      Material: "Carbon fiber",
      Weight: "8g per propeller",
      Diameter: "8.5 inches",
      Pitch: "4.3 inches",
      Compatibility: "DJI Mavic 3, Mavic 3 Classic",
      Package: "4 propellers (2 CW + 2 CCW)",
    },
    reviews: [
      {
        id: 1,
        name: "Alex Chen",
        role: "Professional Aerial Photographer",
        avatar: "/professional-photographer.png",
        rating: 5,
        date: "2 weeks ago",
        text: "The LICHIFIT Carbon Fiber Propellers are fantastic for my drone. They’re durable and improve flight stability, perfect for coastal shoots.",
      },
    ],
  },
  "pgytech-landing-gear-extensions": {
    id: 2,
    name: "PGYTECH Landing Gear Extensions for Mavic Air 2",
    price: "$19.95",
    rating: 4.7,
    reviewCount: 289,
    amazonLink: "https://www.amazon.com/PGYTECH-Landing-Extensions-Compitable-Accessories/dp/B089CJTGYF",
    description:
      "Landing gear extensions for DJI Mavic Air 2, providing additional ground clearance for safer landings on uneven terrain. Lightweight and easy to install.",
    images: [
      "https://m.media-amazon.com/images/I/41tREL8T6AL._AC_SX679_.jpg",
      "/landing-gear-close-up-2.jpg",
      "/landing-gear-installed-2.jpg",
      "/landing-gear-package-2.jpg",
    ],
    features: [
      "Increases ground clearance by 35mm",
      "Lightweight ABS material",
      "Tool-free installation",
      "Protects drone camera and gimbal",
      "Stable landing on rough surfaces",
      "Foldable design for portability",
    ],
    specifications: {
      Material: "ABS plastic",
      Weight: "22g",
      Height: "35mm extension",
      Compatibility: "DJI Mavic Air 2, Air 2S",
      Installation: "Snap-on design",
      Color: "Black",
    },
    reviews: [
      {
        id: 2,
        name: "Sarah Mitchell",
        role: "Drone Enthusiast",
        avatar: "/female-pilot.png",
        rating: 5,
        date: "1 month ago",
        text: "The PGYTECH Landing Gear Extensions are a game-changer. They provide extra clearance and stability for safe landings on rough terrain.",
      },
    ],
  },
  "freewell-8-pack-split-nd-filters": {
    id: 3,
    name: "Freewell 8-Pack Split ND Filters for Mavic 3",
    price: "$99.99",
    rating: 4.9,
    reviewCount: 342,
    amazonLink: "https://www.amazon.com/Freewell-8-Pack-Split-Filters-Mavic/dp/B0F99TRR3P",
    description:
      "Set of 8 split ND filters for DJI Mavic 3, designed for precise light control and vibrant aerial footage. Includes ND and ND/PL filters with durable coatings.",
    images: [
      "https://m.media-amazon.com/images/I/71xiSdDlLzL._AC_SX679_.jpg",
      "/nd-filters-close-up-3.jpg",
      "/nd-filters-installed-3.jpg",
      "/nd-filters-case-3.jpg",
    ],
    features: [
      "8 filters: ND4, ND8, ND16, ND32, ND4/PL, ND8/PL, ND16/PL, ND32/PL",
      "Multi-layer optical coating",
      "Reduces glare and reflections",
      "Lightweight gimbal-safe design",
      "Scratch-resistant and waterproof",
      "Includes protective case",
    ],
    specifications: {
      Material: "Optical glass",
      Coating: "Multi-layer anti-reflective",
      Weight: "5g per filter",
      Compatibility: "DJI Mavic 3 series",
      Package: "8 filters + storage case",
      Filters: "ND4 to ND32, ND4/PL to ND32/PL",
    },
    reviews: [
      {
        id: 3,
        name: "Marcus Johnson",
        role: "Content Creator",
        avatar: "/content-creator-workspace.png",
        rating: 5,
        date: "3 weeks ago",
        text: "The Freewell 8-Pack Split ND Filters enhance my drone footage dramatically. Smooth adjustments and vibrant colors!",
      },
    ],
  },
  "lekufee-waterproof-carrying-case": {
    id: 4,
    name: "Lekufee Waterproof Carrying Case for Mavic 3",
    price: "$139.99",
    rating: 4.8,
    reviewCount: 215,
    amazonLink: "https://www.amazon.com/Lekufee-Waterproof-Carrying-Controller-Accessories/dp/B0DZXCZGKJ",
    description:
      "Rugged waterproof hard case with custom foam for secure storage and transport of DJI Mavic 3 and accessories. IP67-rated for extreme conditions.",
    images: [
      "https://m.media-amazon.com/images/I/81SJl3u9w6L._AC_SX679_.jpg",
      "/case-interior-foam-4.jpg",
      "/case-closed-waterproof-4.jpg",
      "/case-with-drone-4.jpg",
    ],
    features: [
      "IP67 waterproof and dustproof",
      "Customizable foam inserts",
      "Pressure release valve",
      "Durable latches and hinges",
      "Ergonomic handle",
      "Fits drone, controller, and accessories",
    ],
    specifications: {
      Material: "High-impact polypropylene",
      Dimensions: "16.5 x 13.4 x 6.7 inches",
      Weight: "5.2 lbs",
      Rating: "IP67 waterproof",
      Capacity: "1 drone, 4 batteries, controller, accessories",
      Warranty: "1-year limited warranty",
    },
    reviews: [
      {
        id: 4,
        name: "Elena Rodriguez",
        role: "Real Estate Videographer",
        avatar: "/female-videographer.jpg",
        rating: 5,
        date: "2 months ago",
        text: "The Lekufee Waterproof Carrying Case is a lifesaver. Keeps my drone and accessories safe in harsh conditions with plenty of room.",
      },
    ],
  },
  "yesright-electric-screwdriver": {
    id: 5,
    name: "YesRight Electric Screwdriver",
    price: "$49.99",
    rating: 4.7,
    reviewCount: 432,
    amazonLink: "https://www.amazon.com/YesRight-Electric-Screwdriver-Precision-Cordless/dp/B0DBPPCH24",
    description:
      "Cordless electric screwdriver with 155 bits for precise drone repairs and maintenance. Compact, powerful, and includes a charging case.",
    images: [
      "https://m.media-amazon.com/images/I/718h0QJBobL._AC_SX679_PIbundle-155,TopRight,0,0_SH20_.jpg",
      "/screwdriver-bits-close-up-5.jpg",
      "/screwdriver-in-use-5.jpg",
      "/screwdriver-case-5.jpg",
    ],
    features: [
      "155 precision bits included",
      "Rechargeable lithium battery",
      "LED work light",
      "Ergonomic grip",
      "Magnetic bit holder",
      "Portable charging case",
    ],
    specifications: {
      Material: "Aluminum alloy, plastic",
      Torque: "0.15-0.35 Nm",
      Battery: "350mAh lithium-ion",
      Charging: "USB-C, 60 minutes",
      Bits: "155 precision bits",
      Weight: "250g",
    },
    reviews: [
      {
        id: 5,
        name: "David Park",
        role: "Landscape Photographer",
        avatar: "/landscape-photographer.png",
        rating: 5,
        date: "1 week ago",
        text: "The YesRight Electric Screwdriver is a must-have for quick drone repairs. Compact, powerful, and precise!",
      },
    ],
  },
  "startrc-controller-lanyard": {
    id: 6,
    name: "STARTRC Controller Lanyard for Mavic 3",
    price: "$15.99",
    rating: 4.8,
    reviewCount: 198,
    amazonLink: "https://www.amazon.com/STARTRC-Controller-Lanyard-Adjustable-Accessories%EF%BC%88Grey/dp/B0CNLDVL42",
    description:
      "Adjustable lanyard for DJI Mavic 3 controller, providing hands-free convenience and comfort during extended drone operation.",
    images: [
      "https://m.media-amazon.com/images/I/812Pjt88PpL._AC_SX679_.jpg",
      "/lanyard-adjustable-6.jpg",
      "/lanyard-in-use-6.jpg",
      "/lanyard-buckle-6.jpg",
    ],
    features: [
      "Adjustable length (45-70cm)",
      "Comfortable neck padding",
      "Durable nylon material",
      "Quick-release buckle",
      "Anti-slip design",
      "Compatible with DJI RC controllers",
    ],
    specifications: {
      Material: "Nylon, metal",
      Length: "Adjustable 45-70cm",
      Weight: "50g",
      Compatibility: "DJI Mavic 3, Air 2S controllers",
      Color: "Grey",
      Package: "Lanyard + mounting clip",
    },
    reviews: [
      {
        id: 6,
        name: "Nina Kowalski",
        role: "Adventure Vlogger",
        avatar: "/adventure-vlogger.jpg",
        rating: 5,
        date: "3 weeks ago",
        text: "The STARTRC Controller Lanyard is super convenient. Adjustable and comfortable for long drone sessions.",
      },
    ],
  },
  "lowepro-droneguard-backpack": {
    id: 7,
    name: "Lowepro DroneGuard Camera Backpack",
    price: "$129.95",
    rating: 4.9,
    reviewCount: 176,
    amazonLink: "https://www.amazon.com/Lowepro-LP37390-PKK-Drone-Camera-Backpack/dp/B07ZV7RJ1R",
    description:
      "Durable backpack designed for drone and camera gear, with customizable compartments and weather-resistant materials for safe transport.",
    images: [
      "https://m.media-amazon.com/images/I/61+MalP85NL._AC_SX679_.jpg",
      "/backpack-interior-7.jpg",
      "/backpack-on-trail-7.jpg",
      "/backpack-compartments-7.jpg",
    ],
    features: [
      "Customizable dividers",
      "Weather-resistant exterior",
      "Padded shoulder straps",
      "Dedicated drone compartment",
      "Laptop sleeve (up to 15 inches)",
      "Side-access pockets",
    ],
    specifications: {
      Material: "Polyester, nylon",
      Dimensions: "17.3 x 11.8 x 9.4 inches",
      Weight: "3.3 lbs",
      Capacity: "1 drone, camera, accessories",
      Laptop: "Up to 15-inch",
      Color: "Black",
    },
    reviews: [
      {
        id: 7,
        name: "Liam Carter",
        role: "Drone Pilot",
        avatar: "/drone-pilot.png",
        rating: 5,
        date: "2 weeks ago",
        text: "The Lowepro DroneGuard Backpack is perfect for travel. It's sturdy, well-organized, and fits all my gear comfortably.",
      },
    ],
  },
  "expertpower-high-capacity-battery": {
    id: 8,
    name: "ExpertPower High Capacity Battery for Mavic Air",
    price: "$89.99",
    rating: 4.6,
    reviewCount: 567,
    amazonLink: "https://www.amazon.com/ExpertPower-Capacity-Intelligent-Replacement-Advanced/dp/B07J5QGVW4",
    description:
      "High-capacity intelligent battery for DJI Mavic Air, offering extended flight time and reliable performance with built-in safety features.",
    images: [
      "https://m.media-amazon.com/images/I/61eO56vrVeL._AC_SX679_.jpg",
      "/battery-close-up-8.jpg",
      "/battery-installed-8.jpg",
      "/battery-charging-8.jpg",
    ],
    features: [
      "High-capacity 2375mAh",
      "Intelligent battery management",
      "Overcharge protection",
      "Lightweight design",
      "LED power indicators",
      "Compatible with Mavic Air",
    ],
    specifications: {
      Capacity: "2375mAh",
      Voltage: "11.55V",
      Type: "LiPo 3S",
      Weight: "140g",
      Compatibility: "DJI Mavic Air",
      Charging: "60-75 minutes",
    },
    reviews: [
      {
        id: 8,
        name: "Sophie Lee",
        role: "Aerial Cinematographer",
        avatar: "/cinematographer.jpg",
        rating: 5,
        date: "1 month ago",
        text: "The ExpertPower High Capacity Battery extends my drone's flight time significantly. Reliable and easy to install.",
      },
    ],
  },
  "arzroic-controller-lanyard-sun-hood": {
    id: 9,
    name: "Arzroic Controller Lanyard with Sun Hood",
    price: "$22.99",
    rating: 4.8,
    reviewCount: 334,
    amazonLink: "https://www.amazon.com/Arzroic-Lanyard-Accessories-Controller-Protector/dp/B0CRVWW3JR",
    description:
      "Lanyard with integrated sun hood for DJI controllers, ensuring screen visibility and hands-free operation during outdoor drone flights.",
    images: [
      "https://m.media-amazon.com/images/I/61Y3JUgANiL._AC_SX679_.jpg",
      "/lanyard-sun-hood-9.jpg",
      "/lanyard-controller-9.jpg",
      "/sun-hood-folded-9.jpg",
    ],
    features: [
      "Adjustable lanyard (45-70cm)",
      "Foldable sun hood",
      "Durable nylon and plastic",
      "Quick-release clip",
      "Improves screen visibility",
      "Compatible with DJI RC controllers",
    ],
    specifications: {
      Material: "Nylon, plastic",
      Lanyard: "Adjustable 45-70cm",
      Weight: "80g",
      Compatibility: "DJI Mavic 3, Mini 3/4 Pro controllers",
      Sun: "Foldable hood, 5-inch screen",
      Color: "Black",
    },
    reviews: [
      {
        id: 9,
        name: "James Patel",
        role: "Hobbyist Drone Operator",
        avatar: "/hobbyist-drone.png",
        rating: 5,
        date: "2 weeks ago",
        text: "The Arzroic Lanyard with Sun Hood is a lifesaver for outdoor shoots. Keeps the controller secure and screen visible.",
      },
    ],
  },
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug as keyof typeof products]

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link href="/reviews" className="text-primary hover:underline">
            Back to Reviews
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
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
          </Link>
          <nav className="flex gap-8 text-sm">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/reviews" className="text-primary">
              Reviews
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link
          href="/reviews"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Reviews
        </Link>
      </div>

      {/* Product Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-border/40 bg-card/50 backdrop-blur">
                <img
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="relative aspect-square rounded-lg overflow-hidden border border-border/40 bg-card/50 backdrop-blur cursor-pointer hover:border-primary/40 transition-colors">
                  <img
                    src={product.images[1] || "/placeholder.svg"}
                    alt={`${product.name} detail 1`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden border border-border/40 bg-card/50 backdrop-blur cursor-pointer hover:border-primary/40 transition-colors">
                  <img
                    src={product.images[2] || "/placeholder.svg"}
                    alt={`${product.name} detail 2`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden border border-border/40 bg-card/50 backdrop-blur cursor-pointer hover:border-primary/40 transition-colors">
                  <img
                    src={product.images[3] || "/placeholder.svg"}
                    alt={`${product.name} detail 3`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{product.name}</h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-semibold">{product.rating}</span>
                  </div>
                  <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">{product.description}</p>

              {/* Features */}
              <Card className="p-6 bg-card/50 backdrop-blur border-border/40">
                <h3 className="font-bold text-lg mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Add to Cart */}
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6"
                asChild
              >
                <a href={product.amazonLink} target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Buy on Amazon
                </a>
              </Button>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/40">
                <div className="text-center">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">2 Year Warranty</p>
                </div>
                <div className="text-center">
                  <Truck className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Free Shipping</p>
                </div>
                <div className="text-center">
                  <RotateCcw className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">30-Day Returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-12 border-t border-border/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Technical Specifications</h2>
            <Card className="p-8 bg-card/50 backdrop-blur border-border/40">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-start gap-4 pb-4 border-b border-border/40">
                    <span className="font-semibold text-foreground">{key}</span>
                    <span className="text-muted-foreground text-right">{value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-12 border-t border-border/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Customer Reviews</h2>
            <div className="space-y-6">
              {product.reviews.map((review) => (
                <Card key={review.id} className="p-6 bg-card/50 backdrop-blur border-border/40">
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

                  <p className="text-muted-foreground leading-relaxed">{review.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
