import StickyHeader from '@/components/global/Header'
import FooterSection from '@/components/global/Footer'
import IndustryTemplatesSection from '@/components/homepage/IndustryTemplates'
import TrustSection from '@/components/homepage/TrustSection'

export default function FeaturesPage() {
  return (
    <section>
      <StickyHeader />
      <main className="relative w-full overflow-x-hidden bg-white text-black">
        <IndustryTemplatesSection />
        <TrustSection />
      </main>
      <FooterSection />
    </section>
  )
}
