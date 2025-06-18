'use client';

import StickyHeader from '@/components/global/Header';
import FooterSection from '@/components/global/Footer';
import TruthStack from '@/components/whyus/TruthStack';
import { sequences, ctaCopy } from '@/content/why-us/sequences';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useWhyUsAnalytics } from '@/lib/hooks/useWhyUsAnalytics';

export default function WhyUsPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({ target: pageRef });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useWhyUsAnalytics(ctaRef);

  return (
    <section ref={pageRef} className="bg-white text-black">
      <StickyHeader />
      <motion.div
        className="fixed top-0 left-0 z-40 h-1 bg-pink-600"
        style={{ width: progressWidth }}
      />
      <main className="w-full overflow-x-hidden">
        {sequences.map((seq, i) => (
          <TruthStack
            key={seq.id}
            seq={seq}
            variant={i}
            showTestimonial={seq.id === 'outcomes'}
          />
        ))}
        <div className="border-t bg-gray-50 px-4 py-16 text-center">
          <h2 className="mx-auto max-w-xl text-2xl font-bold">{ctaCopy.headline}</h2>
          <motion.a
            href="#book"
            ref={ctaRef}
            className="mt-6 inline-block rounded-full bg-pink-600 px-6 py-3 font-semibold text-white shadow-md hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            {ctaCopy.button}
          </motion.a>
          <ul className="mx-auto mt-6 max-w-md space-y-1 text-sm text-gray-700">
            {ctaCopy.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <span>✅</span> <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <FooterSection />
    </section>
  );
}
