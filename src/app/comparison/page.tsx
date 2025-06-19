import StickyHeader from '@/components/global/Header'
import FooterSection from '@/components/global/Footer'
import NPRvsAI from '@/components/comparison/NPRvsAI'
import NPRvsFirms from '@/components/comparison/NPRvsFirms'

export default function ComparisonPage() {
  return (
    <section>
      <StickyHeader />
      <main className="relative w-full overflow-x-hidden bg-white text-black">
        <NPRvsAI />
        <NPRvsFirms />
      </main>
      <FooterSection />
    </section>
  )
}
