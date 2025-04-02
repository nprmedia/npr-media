import Hero from '@/components/Hero'
import TabbedPricing from '@/components/TabbedPricing'
import IndustryTemplatesSection from '@/components/IndustryTemplatesSection'

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Hero />
      <TabbedPricing />
      <IndustryTemplatesSection />
    </main>
  )
}