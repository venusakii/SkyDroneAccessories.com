import { Star, ShoppingCart, Check, ArrowLeft, Shield, Truck, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

// Product data - in a real app, this would come from a database
const products = {
  "mukikim-rock-and-roll-piano": {
    id: 1,
    name: "MukikiM Rock and Roll It Play by Color Piano",
    price: "$59.99",
    rating: 4.4,
    reviewCount: 225,
    amazonLink: "https://www.amazon.com/MukikiM-Rock-Roll-play-color/dp/B071HPPSB8",
    description:
      "Portable, flexible piano with color-coded keys for easy learning. Great for kids to explore music anywhere, with a roll-up design for easy storage and travel.",
    images: [
      "https://m.media-amazon.com/images/I/81r69l8pPeL._AC_SX679_.jpg",
      "/mukikim-piano-close-up.jpg",
      "/mukikim-piano-rolled.jpg",
    ],
    features: [
      "Color-coded keys for beginners",
      "Portable and flexible design",
      "Built-in speaker and headphone jack",
      "Battery-powered for on-the-go use",
      "61 standard keys",
      "Multiple instrument sounds",
    ],
    specifications: {
      Material: "Silicone",
      Dimensions: "33.5 x 6.3 inches (unrolled)",
      Weight: "1.1 lbs",
      Power: "4 AA batteries or USB",
      Keys: "61 standard keys",
      Package: "Piano, USB cable, manual",
    },
    reviews: [
      {
        id: 1,
        name: "Anna M.",
        role: "Parent",
        avatar: "/parent-female.png",
        rating: 5,
        date: "March 15, 2024",
        text: "Bought this piano for my daughter's 2nd birthday. She loves it! Plays every day and has already learned several melodies. The sound quality is excellent and not annoying at all.",
      },
    ],
  },
  "fisher-price-infant-trio": {
    id: 2,
    name: "Fisher-Price Classic Infant Trio Gift Set",
    price: "$29.99",
    rating: 4.8,
    reviewCount: 1234,
    amazonLink: "https://www.amazon.com/Fisher-Price-Classic-Infant-Trio/dp/B07JGTNRFK",
    description:
      "Includes xylophone, tambourine, and maracas, designed for infants to develop motor skills and rhythm through engaging musical play.",
    images: [
      "https://m.media-amazon.com/images/I/61gg-o7oPML._AC_SX679_.jpg",
      "/fisher-price-trio-in-use.jpg",
      "/fisher-price-trio-packaging.jpg",
    ],
    features: [
      "Three instruments: xylophone, tambourine, maracas",
      "Safe for infants 6 months and up",
      "Bright, engaging colors",
      "Durable construction",
      "Encourages motor skill development",
      "Easy-to-grip designs",
    ],
    specifications: {
      Material: "BPA-free plastic",
      Age: "6 months+",
      Weight: "1.5 lbs",
      Dimensions: "Xylophone: 11 x 5 inches",
      Package: "Xylophone, tambourine, 2 maracas",
      Safety: "Non-toxic materials",
    },
    reviews: [
      {
        id: 1,
        name: "David K.",
        role: "Parent",
        avatar: "/parent-male.png",
        rating: 5,
        date: "March 10, 2024",
        text: "Excellent quality! Pleasant sound, not annoying. My son has been enjoying it for six months now. Very durable and well-made.",
      },
    ],
  },
  "stoies-musical-instruments": {
    id: 3,
    name: "Stoie's Musical Instruments Set for Toddlers",
    price: "$32.99",
    rating: 4.6,
    reviewCount: 587,
    amazonLink: "https://www.amazon.com/Instruments-Toddlers-Xylophone-Tambourine-Educational/dp/B0C1YDMVY9",
    description:
      "Wooden instrument set with xylophone, tambourine, maracas, and more. Safe and durable for toddler music play, encouraging creativity and coordination.",
    images: [
      "https://m.media-amazon.com/images/I/71cPoZ9534L._AC_SX679_.jpg",
      "/stoies-instruments-in-use.jpg",
      "/stoies-instruments-packaging.jpg",
    ],
    features: [
      "Includes xylophone, tambourine, maracas, and more",
      "Made from natural wood",
      "Non-toxic paint and finishes",
      "Promotes musical creativity",
      "Durable for toddler use",
      "Comes with storage bag",
    ],
    specifications: {
      Material: "Natural wood, non-toxic paint",
      Age: "3 years+",
      Weight: "2.2 lbs",
      Instruments: "7 pieces",
      Package: "Xylophone, tambourine, 2 maracas, 2 shakers, storage bag",
      Safety: "EN71 certified",
    },
    reviews: [
      {
        id: 1,
        name: "Elena S.",
        role: "Parent",
        avatar: "/parent-female-redhair.png",
        rating: 5,
        date: "March 8, 2024",
        text: "Ordered this set. Arrived quickly, great packaging. The child is happy, we're satisfied! The colors are vibrant and engaging.",
      },
    ],
  },
  "keyboard-xylophone-set": {
    id: 4,
    name: "Keyboard & Xylophone Musical Instrument Set",
    price: "$39.99",
    rating: 4.3,
    reviewCount: 412,
    amazonLink: "https://www.amazon.com/Keyboard-Xylophone-Instrument-Learning-Developmental/dp/B07WNJY42C",
    description:
      "Dual keyboard and xylophone toy for kids, encouraging musical creativity and early learning with vibrant sounds and interactive play.",
    images: [
      "https://m.media-amazon.com/images/I/71sU6VdZH2L._AC_SX679_.jpg",
      "/keyboard-xylophone-in-use.jpg",
      "/keyboard-xylophone-close-up.jpg",
    ],
    features: [
      "Dual keyboard and xylophone modes",
      "Colorful, interactive design",
      "Multiple sound effects",
      "Encourages musical exploration",
      "Battery-powered",
      "Safe for young children",
    ],
    specifications: {
      Material: "ABS plastic",
      Age: "3 years+",
      Weight: "1.8 lbs",
      Power: "3 AA batteries",
      Dimensions: "15 x 7 inches",
      Package: "Keyboard/xylophone, mallets",
    },
    reviews: [
      {
        id: 1,
        name: "Michael T.",
        role: "Parent",
        avatar: "/parent-male-darkhair.png",
        rating: 5,
        date: "March 5, 2024",
        text: "My 3-year-old loves this set! It's the perfect size for little hands and the sound is surprisingly good. Great for developing rhythm skills.",
      },
    ],
  },
  "loog-mini-acoustic-guitar": {
    id: 5,
    name: "Loog Mini Acoustic Guitar for Children",
    price: "$89.00",
    rating: 4.7,
    reviewCount: 896,
    amazonLink: "https://www.amazon.com/Loog-Acoustic-Guitar-Children-Beginners/dp/B072B9V2KB",
    description:
      "3-string acoustic guitar designed for kids, easy to play with app-based learning support for an engaging musical experience.",
    images: [
      "https://m.media-amazon.com/images/I/714ZXMfWbXL._AC_SX679_.jpg",
      "/loog-guitar-in-use.jpg",
      "/loog-guitar-app.jpg",
    ],
    features: [
      "3-string design for beginners",
      "App-based learning support",
      "Made with real wood",
      "Includes flashcards and strap",
      "Tunable strings",
      "Encourages musical creativity",
    ],
    specifications: {
      Material: "Basswood body, maple neck",
      Age: "3 years+",
      Weight: "2.2 lbs",
      Strings: "3 nylon strings",
      Dimensions: "22.2 x 6.9 x 2.3 inches",
      Package: "Guitar, flashcards, strap",
    },
    reviews: [
      {
        id: 1,
        name: "Sarah L.",
        role: "Parent",
        avatar: "/parent-female-darkhair.png",
        rating: 4,
        date: "March 1, 2024",
        text: "Nice little guitar for toddlers. My daughter enjoys strumming it. Only wish it came with a strap, but overall very happy with the purchase.",
      },
    ],
  },
  "electric-drum-set": {
    id: 6,
    name: "Electric Drum Set with Recording",
    price: "$69.99",
    rating: 4.5,
    reviewCount: 321,
    amazonLink: "https://www.amazon.com/Electric-Electronic-Practice-Recording-Speaker/dp/B0B2JFZYZK",
    description:
      "Electronic drum set with recording feature and built-in speaker, ideal for young drummers to practice and create music.",
    images: [
      "https://m.media-amazon.com/images/I/71tKXDqEnIL._AC_SX679_.jpg",
      "/electric-drum-in-use.jpg",
      "/electric-drum-close-up.jpg",
    ],
    features: [
      "Built-in recording function",
      "Multiple drum sounds",
      "Integrated speaker",
      "Headphone jack for quiet practice",
      "Adjustable rhythm settings",
      "Portable design",
    ],
    specifications: {
      Material: "ABS plastic, silicone pads",
      Age: "3 years+",
      Weight: "2.5 lbs",
      Power: "USB or 4 AA batteries",
      Dimensions: "17 x 10 inches",
      Package: "Drum set, drumsticks, USB cable",
    },
    reviews: [
      {
        id: 1,
        name: "Robert H.",
        role: "Parent",
        avatar: "/parent-male-redhair.png",
        rating: 5,
        date: "February 20, 2024",
        text: "Sturdy construction and fun design. My daughter has been drumming for weeks and it still looks brand new. Highly recommend!",
      },
    ],
  },
  "fisher-price-piano-gym": {
    id: 7,
    name: "Fisher-Price Deluxe Kick & Play Piano Gym",
    price: "$49.99",
    rating: 4.8,
    reviewCount: 2456,
    amazonLink: "https://www.amazon.com/Fisher-Price-Playmat-Musical-Learning-Content/dp/B0CBQXD4PG",
    description:
      "Musical playmat with piano keys for infants, promoting sensory development with lights, sounds, and interactive toys.",
    images: [
      "https://m.media-amazon.com/images/I/81CXYaraFDL._AC_SX679_.jpg",
      "/fisher-price-gym-in-use.jpg",
      "/fisher-price-gym-toys.jpg",
    ],
    features: [
      "Light-up piano keys",
      "Multiple play modes",
      "Removable toy bar",
      "Machine-washable mat",
      "Encourages sensory development",
      "Adjustable for tummy time",
    ],
    specifications: {
      Material: "Polyester mat, plastic toys",
      Age: "0-36 months",
      Weight: "3 lbs",
      Power: "3 AA batteries",
      Dimensions: "27 x 36 inches",
      Package: "Playmat, piano, 5 activity toys",
    },
    reviews: [
      {
        id: 1,
        name: "Lisa W.",
        role: "Parent",
        avatar: "/parent-female-grayhair.png",
        rating: 5,
        date: "February 25, 2024",
        text: "This piano is amazing! The keys light up when pressed which my son finds fascinating. He's learning colors and music at the same time.",
      },
    ],
  },
  "taimasi-instruments-set": {
    id: 8,
    name: "TAIMASI Musical Instruments Set",
    price: "$29.99",
    rating: 4.5,
    reviewCount: 672,
    amazonLink: "https://www.amazon.com/TAIMASI-Instruments-Percussion-Tambourine-Xylophone/dp/B07W4H8N39",
    description:
      "Comprehensive percussion set with tambourine, xylophone, maracas, and more, perfect for group play and musical exploration.",
    images: [
      "https://m.media-amazon.com/images/I/817-cDUVLWL._AC_SX679_.jpg",
      "/taimasi-instruments-in-use.jpg",
      "/taimasi-instruments-packaging.jpg",
    ],
    features: [
      "Multiple percussion instruments",
      "Bright, engaging colors",
      "Durable for group play",
      "Promotes rhythm and coordination",
      "Includes storage backpack",
      "Safe for young children",
    ],
    specifications: {
      Material: "Wood, plastic, metal",
      Age: "3 years+",
      Weight: "2 lbs",
      Instruments: "8 pieces",
      Package: "Xylophone, tambourine, maracas, shakers, backpack",
      Safety: "Non-toxic materials",
    },
    reviews: [
      {
        id: 1,
        name: "James P.",
        role: "Parent",
        avatar: "/parent-male-bald.png",
        rating: 5,
        date: "February 28, 2024",
        text: "Bought the complete set for my twins. Best decision ever! They play together and it's helping them learn to share. Quality is top-notch.",
      },
    ],
  },
  "bluewood-montessori-climber": {
    id: 9,
    name: "BlueWood Triangle Foldable Climbing Montessori",
    price: "$129.99",
    rating: 4.6,
    reviewCount: 134,
    amazonLink: "https://www.amazon.com/BlueWood-Triangle-Foldable-Climbing-Montessori/dp/B0CT5GC65G",
    description:
      "Montessori climbing triangle with musical elements, encouraging physical activity and sensory development for young children.",
    images: [
      "https://m.media-amazon.com/images/I/716Wr3MdeKL._AC_SX679_.jpg",
      "/bluewood-climber-in-use.jpg",
      "/bluewood-climber-folded.jpg",
    ],
    features: [
      "Foldable Montessori climbing triangle",
      "Integrated musical elements",
      "Promotes physical development",
      "Made from natural wood",
      "Non-toxic finish",
      "Easy to store",
    ],
    specifications: {
      Material: "Natural wood, non-toxic finish",
      Age: "2-6 years",
      Weight: "15 lbs",
      Dimensions: "32 x 28 x 30 inches",
      Capacity: "Up to 100 lbs",
      Package: "Climbing triangle, musical attachments",
    },
    reviews: [
      {
        id: 1,
        name: "Maria G.",
        role: "Parent",
        avatar: "/parent-female.png",
        rating: 5,
        date: "February 15, 2024",
        text: "Beautiful climbing triangle with a lovely musical feature. My 18-month-old is learning to explore and it's wonderful to watch. Great educational toy!",
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
                {product.images.slice(1).map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-square rounded-lg overflow-hidden border border-border/40 bg-card/50 backdrop-blur cursor-pointer hover:border-primary/40 transition-colors"
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} ${index + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
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
