'use client';

import React, { Suspense } from 'react';
import { usePathname } from 'next/navigation';
import StickyHeader from '@/components/global/Header';
import HeroSection from '@/components/homepage/Hero';
import { hero } from '@/content/homepage/hero';
import TabbedPricing from '@/components/homepage/PricingSection';
import FooterSection from '@/components/global/Footer';
import WhyTrustSection from '@/components/homepage/WhyTrustSection';
import ContactSection from '@/components/homepage/ContactSection';
import FinalCtaSection from '@/components/homepage/FinalCtaSection';

export default function Page() {
  const pathname = usePathname();

  return (
    <section>
    <StickyHeader />
    <main key={pathname} className="relative w-full overflow-x-hidden bg-white text-black">
        <Suspense>
          <HeroSection {...hero} />
        </Suspense>
        <TabbedPricing />
        <WhyTrustSection />
        <ContactSection />
        <FinalCtaSection />
    </main>
    <FooterSection />
    </section>  
  );
}