'use client';

import React, { Suspense, useEffect, useState } from 'react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import StickyHeader from '@/components/global/Header';
import HeroSection from '@/components/homepage/Hero';
import { hero } from '@/content/homepage/hero';
import IndustryTemplatesSection from '@/components/homepage/IndustryTemplates';
import StatImpact from '@/components/homepage/StatImpact';
import PricingSection from '@/components/homepage/PricingSection';
import FooterSection from '@/components/global/Footer';
import ContactSection from '@/components/homepage/ContactSection';

export default function Page() {
  const pathname = usePathname();
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReveal(true), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section>
      <StickyHeader light forceGray={!reveal} />
      <div
        className={clsx(
          'pointer-events-none fixed inset-0 z-[60] transition-[clip-path] duration-[2000ms] ease-in-out backdrop-grayscale',
          reveal ? 'clip-reveal-hidden' : 'clip-reveal-full'
        )}
      />
      <main key={pathname} className="relative w-full overflow-x-hidden bg-antique text-charcoal">
        <Suspense>
          <HeroSection {...hero} reveal={reveal} />
        </Suspense>
        <IndustryTemplatesSection />
        <StatImpact />
        <PricingSection />
        <ContactSection />
      </main>
      <FooterSection />
    </section>
  );
}
