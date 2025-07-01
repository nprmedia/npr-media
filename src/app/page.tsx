'use client';

import React, { Suspense } from 'react';
import { usePathname } from 'next/navigation';
import StickyHeader from '@/components/global/Header';
import HeroSection from '@/components/homepage/Hero';
import { hero } from '@/content/homepage/hero';
import IndustryTemplatesSection from '@/components/homepage/IndustryTemplates';
import PricingSection from '@/components/homepage/PricingSection';
import FooterSection from '@/components/global/Footer';
import ContactSection from '@/components/homepage/ContactSection';

export default function Page() {
  const pathname = usePathname();

  return (
    <section>
      <StickyHeader light />
      <main key={pathname} className="relative w-full overflow-x-hidden bg-[var(--color-antique)] text-[var(--color-charcoal)]">
        <Suspense>
          <HeroSection {...hero} />
        </Suspense>
        <IndustryTemplatesSection />
        <PricingSection />
        <ContactSection />
      </main>
      <FooterSection />
    </section>
  );
}
