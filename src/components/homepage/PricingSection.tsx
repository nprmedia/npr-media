'use client';

import { pricing } from '@/content/homepage/pricing';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="bg-offwhite text-charcoal w-full border-t scroll-mt-[80px] overflow-x-hidden py-[clamp(4rem,8vw,6rem)]"
    >
      <div className="mx-auto max-w-[88rem] px-[clamp(1.5rem,5vw,4rem)]">
        {/* Heading */}
        <div className="mx-auto max-w-4xl space-y-3 text-center">
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] text-crimson font-bold tracking-tight">
            Our Packages
          </h2>
          <p className="text-charcoal text-[clamp(0.9rem,1.6vw,1.125rem)]">
            {pricing.headline}
          </p>
        </div>

        {/* Grid */}
        <div className="mx-auto mt-[clamp(2.5rem,5vw,3.5rem)] grid gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-4">
          {pricing.tiers.map((tier, index) => {
            const isFeatured = tier.highlight;

            return (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-300 ease-out ${
                  isFeatured
                    ? 'border-blood bg-antique shadow-[0_18px_45px_rgba(15,23,42,0.22)] ring-1 ring-blood/70 scale-[1.02]'
                    : 'border-charcoal/10 bg-sepia/90 shadow-md hover:shadow-lg'
                }`}
              >
                {/* Featured badge */}
                {isFeatured && (
                  <div className="absolute right-4 top-4 rounded-full bg-blood px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-charcoal">
                    Most Popular
                  </div>
                )}

                {/* Header */}
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-umber text-[clamp(1rem,1.8vw,1.25rem)] font-semibold">
                    {tier.title}
                  </h3>
                  <span className="text-blood text-[clamp(1rem,1.8vw,1.25rem)] font-bold">
                    {tier.price}
                  </span>
                </div>

                <p className="text-olive mt-1 text-[clamp(0.8rem,1.2vw,0.9rem)] italic">
                  {tier.microcopy}
                </p>

                <p className="text-charcoal mt-2 text-[clamp(0.8rem,1.2vw,0.9rem)] leading-relaxed">
                  {tier.description}
                </p>

                {/* Features */}
                <ul className="text-charcoal mt-4 flex-1 space-y-1.5 text-[clamp(0.8rem,1.2vw,0.9rem)]">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span
                        className={`mt-[0.15rem] text-blood ${
                          i === 0 ? 'font-bold' : ''
                        }`}
                      >
                        {i === 0 ? '•' : '✓'}
                      </span>
                      <span
                        className={i === 0 ? 'font-semibold text-charcoal' : ''}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="pt-5">
                  <Link
                    href="/contact"
                    data-event="cta-pricing"
                    className={`block w-full box-border rounded-full px-[clamp(1rem,2.5vw,1.25rem)] py-[clamp(0.6rem,1.2vw,0.75rem)] text-center text-[clamp(0.8rem,1vw,0.9rem)] font-semibold shadow-sm transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blood ${
                      isFeatured
                        ? 'border-blood bg-blood text-silver shadow-[0_0_18px_rgba(179,0,0,0.35)] hover:bg-crimson'
                        : 'border-silver bg-antique text-charcoal hover:bg-silver/80'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mx-auto mt-[clamp(2.5rem,5vw,3.5rem)] max-w-xl space-y-3 text-center">
          <p className="text-[clamp(0.9rem,1.6vw,1.125rem)] font-semibold text-charcoal">
            Need a scalable, enterprise-grade solution?
          </p>
          <Link
            href="/webdev-landing"
            className="inline-flex items-center justify-center rounded-full border border-olive bg-olive px-[clamp(1.25rem,3vw,1.75rem)] py-[clamp(0.5rem,1.1vw,0.7rem)] text-[0.85rem] font-semibold text-charcoal shadow-sm transition-transform duration-200 hover:scale-105 hover:bg-olive/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive"
          >
            Start scoping
          </Link>
        </div>
      </div>
    </section>
  );
}
