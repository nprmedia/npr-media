import Hero from '@/components/Hero'
import TabbedPricing from '@/components/PricingSection'
import IndustryTemplatesSection from '@/components/IndustryTemplatesSection'
import WhyTrustSection from '@/components/WhyTrustSection'
import ContactSection from '@/components/ContactSection'
import FinalCtaSection from '@/components/FinalCtaSection'

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Hero />
      <TabbedPricing />
      <IndustryTemplatesSection />
      <WhyTrustSection />
      <ContactSection />
      <FinalCtaSection />
    </main>
  )
}