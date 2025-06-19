import StickyHeader from '@/components/global/Header'
import FooterSection from '@/components/global/Footer'
import HeroIntro from '@/components/whyus/HeroIntro'
import VersusAI from '@/components/whyus/VersusAI'
import VersusAgency from '@/components/whyus/VersusAgency'
import FinalCTA from '@/components/whyus/FinalCTA'

export default function WhyUsPage() {
  return (
    <section>
      <StickyHeader />
      <main className="relative w-full overflow-x-hidden bg-black text-white">
        <HeroIntro />
        <VersusAI />
        <VersusAgency />
        <FinalCTA />
      </main>
      <FooterSection />
    </section>
  )
}
