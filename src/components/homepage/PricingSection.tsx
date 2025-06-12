'use client';

import { pricing } from '@/content/homepage/pricing';
import { Card, CardContent } from '@/components/ui/card';
import QuoteModal from './QuoteModal';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="w-full border-t bg-[var(--color-bg-dark)] py-[clamp(5rem,10vw,8rem)] text-[var(--color-text-light)]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-4 text-center">
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight text-[var(--color-text-light)]">
            Our Packages
          </h2>
          <p className="text-[clamp(0.9rem,1.6vw,1.125rem)] text-[var(--color-gray-300)]">
            {pricing.headline}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3">
            {pricing.tiers.map((tier, index) => {
              const isMiddleCard = tier.highlight;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 260, delay: index * 0.1 }}
                  className={`${isMiddleCard ? 'relative z-10 scale-[1.01]' : ''} min-w-[85%] flex-shrink-0 snap-start`}
                >
                  {isMiddleCard && (
                    <motion.div
                      className="absolute inset-0 -z-10 rounded-2xl blur-2xl"
                      animate={{ opacity: [0.2, 0.4, 0.2] }}
                      transition={{ duration: 5, repeat: Infinity }}
                      style={{
                        background: 'radial-gradient(circle, rgba(var(--color-accent-rgb),0.45), transparent)',
                      }}
                    />
                  )}
                  <div className={`relative rounded-2xl ${isMiddleCard ? 'animate-pulse ring-2 ring-[var(--color-accent)]' : ''}`}
                  >
                    <Card className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[var(--color-gray-600)] bg-[var(--color-card)] shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] backdrop-blur-lg transition-shadow hover:shadow-xl dark:hover:shadow-zinc-900/30">
                      <CardContent className="space-y-4 p-5">
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-[clamp(1rem,1.8vw,1.25rem)] leading-tight font-semibold text-[var(--color-text-light)]">
                              {tier.title}
                            </h3>
                            <p className="text-[clamp(1rem,1.8vw,1.25rem)] font-bold whitespace-nowrap text-[var(--color-gray-300)]">
                              {tier.price}
                            </p>
                          </div>
                          <p className="text-[clamp(0.8rem,1.2vw,0.9rem)] text-[var(--color-gray-400)] italic">
                            {tier.microcopy}
                          </p>
                          <p className="text-[clamp(0.8rem,1.2vw,0.9rem)] text-[var(--color-gray-300)]">
                            {tier.description}
                          </p>
                        </div>
                        <ul className="scrollbar-thin scrollbar-thumb-[var(--color-gray-700)] max-h-[180px] space-y-2 overflow-y-auto text-[clamp(0.8rem,1.2vw,0.9rem)] text-[var(--color-gray-300)]">
                          {tier.features.map((feature, i) => (
                            <li
                              key={i}
                              className={`flex items-start gap-2 ${i === 0 ? 'font-semibold text-[var(--color-text-light)]' : ''}`}
                            >
                              <span className="text-[var(--color-accent)]">{i === 0 ? '✅' : '✓'}</span> {feature}
                            </li>
                          ))}
                        </ul>
                        <div className="pt-2">
                          <button className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--color-gray-600)] bg-[var(--color-card)] px-[clamp(1rem,2.5vw,1.25rem)] py-[clamp(0.6rem,1.2vw,0.75rem)] text-[clamp(0.8rem,1vw,0.9rem)] font-medium text-[var(--color-text-light)] shadow-sm transition hover:scale-105 hover:bg-[var(--color-gray-700)]">
                            {tier.cta}
                            <ArrowRight className="h-4 w-4 opacity-70 transition-transform group-hover:translate-x-1 group-hover:opacity-100" />
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mx-auto mt-16 max-w-xl space-y-4 text-center">
            <p className="text-[clamp(0.9rem,1.6vw,1.125rem)] font-semibold">
              Need a scalable, enterprise-grade solution?
            </p>
            <QuoteModal />
          </div>
        </div>
      </div>
    </section>
  );
}
