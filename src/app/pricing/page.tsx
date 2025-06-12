import StickyHeader from '@/components/global/Header';
import FooterSection from '@/components/global/Footer';
import PricingSection from '@/components/homepage/PricingSection';

export default function PricingPage() {
  return (
    <section>
      <StickyHeader />
      <main className="relative w-full overflow-x-hidden bg-white text-black">
        <PricingSection />
      </main>
      <FooterSection />
    </section>
  );
}
