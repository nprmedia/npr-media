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
import Link from 'next/link';

export default function Page() {
  const pathname = usePathname();

  return (
    <section>
      <StickyHeader />
      <main key={pathname} className="relative w-full overflow-x-hidden bg-white text-black">
        <Suspense>
          <HeroSection {...hero} />
        </Suspense>
        <section className="bg-gray-50 py-8 text-center">
          <p className="text-[clamp(0.9rem,1.2vw,1rem)]">
            Curious how humans beat the bots?{' '}
            <Link href="/why-us#against-ai" className="text-primary font-semibold underline">
              See why we\u2019re better than AI
            </Link>
            .
          </p>
        </section>
        <IndustryTemplatesSection />
        <PricingSection />
        <ContactSection />
      </main>
      <FooterSection />
    </section>
  );
}
