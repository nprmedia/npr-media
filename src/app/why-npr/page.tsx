import StickyHeader from '@/components/global/Header';
import FooterSection from '@/components/global/Footer';
import VsAiSection from '@/components/comparison/VsAiSection';
import VsAgencySection from '@/components/comparison/VsAgencySection';
import FinalStickyCTA from '@/components/comparison/FinalStickyCTA';

export default function WhyNprPage() {
  return (
    <section>
      <StickyHeader />
      <main className="relative w-full overflow-x-hidden bg-white text-black">
        <VsAiSection />
        <VsAgencySection />
      </main>
      <FooterSection />
      <FinalStickyCTA />
    </section>
  );
}
