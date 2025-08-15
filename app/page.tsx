import { DeliveryBanner } from "@/components/delivery-banner"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { BrandsSection } from "@/components/brands-section"
import { StoreInfo } from "@/components/store-info"
import { StoreHours } from "@/components/store-hours"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <DeliveryBanner />
      <Navbar />
      <main>
        <HeroSection />
        <BrandsSection />
        <StoreInfo />
        <StoreHours />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
