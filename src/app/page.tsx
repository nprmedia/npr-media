'use client';

import { usePathname } from 'next/navigation';
import StickyHeader from '@/components/global/Header';
import HeroSection from '@/components/homepage/Hero';
import { hero } from '@/content/homepage/hero';
import IndustryTemplatesSection from '@/components/homepage/IndustryTemplates';
import TabbedPricing from '@/components/homepage/PricingSection';
import WhyTrustSection from '@/components/homepage/WhyTrustSection';
import ContactSection from '@/components/homepage/ContactSection';
import FinalCtaSection from '@/components/homepage/FinalCtaSection';
import FooterSection from '@/components/global/Footer';

export default function Page() {
  const pathname = usePathname();

  return (
    <section>
      <StickyHeader />
      <main key={pathname} className="relative w-full overflow-x-hidden bg-primary text-text-primary">
        <HeroSection {...hero} />
        <IndustryTemplatesSection />
        <TabbedPricing />
        <WhyTrustSection />
        <ContactSection />
        <FinalCtaSection />
      </main>
      <FooterSection />
    </section>
  );
}
