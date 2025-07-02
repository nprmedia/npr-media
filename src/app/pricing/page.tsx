import StickyHeader from '@/components/global/Header';
import FooterSection from '@/components/global/Footer';
import PricingSection from '@/components/homepage/PricingSection';
import FinalCTA from '@/components/sections/FinalCTA';

export default function PricingPage() {
  return (
    <section>
      <StickyHeader />
      <main className="relative w-full overflow-x-hidden bg-surface text-foreground">
        <PricingSection />
      </main>
      <FinalCTA />
      <FooterSection />
    </section>
  );
}
