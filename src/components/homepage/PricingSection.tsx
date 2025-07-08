'use client';

import { pricing } from '@/content/homepage/pricing';
import QuoteModal from './QuoteModal';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="bg-antique text-charcoal w-full border-t py-[clamp(5rem,10vw,8rem)]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-4 text-center">
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight">
            Our Packages
          </h2>
          <p className="text-silver text-[clamp(0.9rem,1.6vw,1.125rem)]">{pricing.headline}</p>
        </div>

        <div className="mx-auto mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pricing.tiers.map((tier, index) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`border-silver bg-olive relative flex flex-col overflow-hidden rounded-2xl border p-6 ${tier.highlight ? 'ring-blood ring-2' : ''}`}
            >
              {tier.highlight && (
                <motion.div
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="from-blood/25 pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-[radial-gradient(circle,var(--tw-gradient-stops))] to-transparent"
                />
              )}
              <div className="flex items-baseline justify-between">
                <h3 className="text-[clamp(1rem,1.8vw,1.25rem)] font-semibold">{tier.title}</h3>
                <span className="text-charcoal text-[clamp(1rem,1.8vw,1.25rem)] font-bold">
                  {tier.price}
                </span>
              </div>
              <p className="text-charcoal mt-1 text-[clamp(0.8rem,1.2vw,0.9rem)] italic">
                {tier.microcopy}
              </p>
              <p className="text-charcoal mt-2 text-[clamp(0.8rem,1.2vw,0.9rem)]">
                {tier.description}
              </p>
              <ul className="text-charcoal mt-4 flex-1 space-y-1 text-[clamp(0.8rem,1.2vw,0.9rem)]">
                {tier.features.map((feature, i) => (
                  <li key={i} className={i === 0 ? 'text-silver font-semibold' : ''}>
                    <span className="text-blood mr-1">{i === 0 ? '✅' : '✓'}</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link
                  href="/contact"
                  data-event="cta-pricing"
                  className="border-silver bg-antique text-charcoal hover:bg-silver block w-full rounded-full border px-[clamp(1rem,2.5vw,1.25rem)] py-[clamp(0.6rem,1.2vw,0.75rem)] text-center text-[clamp(0.8rem,1vw,0.9rem)] font-medium shadow-sm transition hover:scale-105"
                >
                  {tier.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-xl space-y-4 text-center">
          <p className="text-[clamp(0.9rem,1.6vw,1.125rem)] font-semibold">
            Need a scalable, enterprise-grade solution?
          </p>
          <QuoteModal triggerLabel="Start Scoping" />
        </div>
      </div>
    </section>
  );
}
