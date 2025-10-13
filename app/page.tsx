import { HeroSection } from "@/components/hero-section"
import { WhyUsSection } from "@/components/why-us-section"
import { CategoriesSection } from "@/components/categories-section"
import { FeaturedProductSection } from "@/components/featured-product-section"
import { TechnologySection } from "@/components/technology-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ComparisonSection } from "@/components/comparison-section"
import { GallerySection } from "@/components/gallery-section"
import { BlogSection } from "@/components/blog-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { FloatingElements } from "@/components/floating-elements"

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <FloatingElements />
      <HeroSection />
      <WhyUsSection />
      <CategoriesSection />
      <FeaturedProductSection />
      <TechnologySection />
      <TestimonialsSection />
      <ComparisonSection />
      <GallerySection />
      <BlogSection />
      <NewsletterSection />
      <ContactSection />
      <Footer />
      <CookieBanner />
    </main>
  )
}
