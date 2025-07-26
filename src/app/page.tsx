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
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    setPrefersReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    const delay = prefersReduced ? 0 : 1400;
    const timer = setTimeout(() => setReveal(true), delay);
    return () => clearTimeout(timer);
  }, [prefersReduced]);

  return (
    <section>
      <StickyHeader light forceGray={!reveal} />
      <div
        className={clsx(
          'pointer-events-none fixed inset-0 z-[60] backdrop-grayscale',
          prefersReduced ? 'transition-none' : 'transition-[clip-path] duration-[1000ms] ease-in-out',
          reveal ? 'clip-reveal-hidden' : 'clip-reveal-full'
        )}
      />
      <main
        key={pathname}
        className={clsx(
          'relative w-full overflow-x-hidden bg-antique text-charcoal transition-[filter] duration-500',
          reveal ? 'filter-none' : 'filter grayscale'
        )}
      >
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
