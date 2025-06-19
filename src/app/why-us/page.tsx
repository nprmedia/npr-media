import StickyHeader from '@/components/global/Header';
import FooterSection from '@/components/global/Footer';
import WhyHero from '@/components/why/WhyHero';
import VsAISection from '@/components/why/VsAISection';
import VsAgencySection from '@/components/why/VsAgencySection';
import FinalCTA from '@/components/why/FinalCTA';

export const metadata = {
  title: 'Why Us - NPR Media',
};

export default function WhyUsPage() {
  return (
    <section>
      <StickyHeader />
      <main className="relative w-full overflow-x-hidden bg-white text-black">
        <WhyHero />
        <VsAISection />
        <VsAgencySection />
        <FinalCTA />
      </main>
      <FooterSection />
    </section>
  );
}
