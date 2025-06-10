import StickyHeader from '@/components/global/Header'
import FooterSection from '@/components/global/Footer'
import IndustryTemplatesSection from '@/components/homepage/IndustryTemplates'
import WhyTrustSection from '@/components/homepage/WhyTrustSection'

export default function FeaturesPage() {
  return (
    <section>
      <StickyHeader />
      <main className="relative w-full overflow-x-hidden bg-white text-black">
        <IndustryTemplatesSection />
        <WhyTrustSection />
      </main>
      <FooterSection />
    </section>
  )
}
