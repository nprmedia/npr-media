'use client';

import { pricing } from '@/content/homepage/pricing';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ArrowRight, Info } from 'lucide-react';

export default function TabbedPricing() {
  const webDev = pricing.find((p) => p.category === 'Web Development');

  if (!webDev) return null;

  return (
    <section
      id="pricing"
      className="w-full border-t bg-[var(--color-bg-dark)] py-[clamp(5rem,10vw,8rem)] text-[var(--color-text-light)]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-4 text-center">
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight text-[var(--color-text-light)]">
            Web Development Packages
          </h2>
          <p className="text-[clamp(0.9rem,1.6vw,1.125rem)] text-gray-300">{webDev.headline}</p>
          <p className="text-[clamp(0.75rem,1.2vw,0.9rem)] text-gray-400">
            Trusted by 120+ teams worldwide
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {webDev.tiers.map((tier, index) => {
              const isMiddleCard = index === 1;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 260, delay: index * 0.1 }}
                  className={`${isMiddleCard ? 'relative z-10 scale-[1.01]' : ''}`}
                >
                  {isMiddleCard && (
                    <motion.div
                      className="absolute inset-0 -z-10 rounded-2xl blur-2xl"
                      animate={{ opacity: [0.2, 0.4, 0.2] }}
                      transition={{ duration: 5, repeat: Infinity }}
                      style={{
                        background:
                          'radial-gradient(circle, rgba(244, 208, 63, 0.45), transparent)',
                      }}
                    />
                  )}
                  <div
                    className={`relative rounded-2xl before:absolute before:inset-0 before:rounded-2xl ${isMiddleCard ? 'before:animate-pulse before:ring-2 before:ring-[var(--color-accent)]' : ''}`}
                  >
                    <Card className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-gray-600 bg-[var(--color-card)] shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] backdrop-blur-lg transition-shadow hover:shadow-xl dark:hover:shadow-zinc-900/30">
                      <CardContent className="space-y-4 p-5">
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <h3 className="text-[clamp(1rem,1.8vw,1.25rem)] leading-tight font-semibold text-[var(--color-text-light)]">
                                {tier.title}
                              </h3>
                            </div>
                            <p className="text-[clamp(1rem,1.8vw,1.25rem)] font-bold whitespace-nowrap text-gray-300">
                              {tier.price}
                            </p>
                          </div>
                          <p className="text-[clamp(0.8rem,1.2vw,0.9rem)] text-gray-400 italic">
                            {index === 0 &&
                              'Best for early-stage launches or proof-of-concept MVPs.'}
                            {index === 1 && 'Ideal for growth-focused startups scaling systems.'}
                            {index === 2 && 'Perfect for high-touch execution or advisory support.'}
                          </p>
                        </div>
                        <ul className="scrollbar-thin scrollbar-thumb-gray-700 max-h-[180px] space-y-2 overflow-y-auto text-[clamp(0.8rem,1.2vw,0.9rem)] text-gray-300">
                          {tier.features.map((feature, i) => (
                            <li
                              key={i}
                              className={`flex items-start gap-2 ${i === 0 ? 'font-semibold text-[var(--color-text-light)]' : ''}`}
                            >
                              <span className="text-[var(--color-accent)]">
                                {i === 0 ? '✅' : '✓'}
                              </span>{' '}
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className="pt-2">
                          <button className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-gray-600 bg-[var(--color-card)] px-[clamp(1rem,2.5vw,1.25rem)] py-[clamp(0.6rem,1.2vw,0.75rem)] text-[clamp(0.8rem,1vw,0.9rem)] font-medium text-[var(--color-text-light)] shadow-sm transition hover:scale-105 hover:bg-gray-700">
                            Start Plan
                            <ArrowRight className="h-4 w-4 opacity-70 transition-transform group-hover:translate-x-1 group-hover:opacity-100" />
                          </button>
                          <p className="mt-1 flex items-center justify-center gap-1 text-center text-[clamp(0.7rem,1vw,0.8rem)] text-gray-400 italic">
                            <Info className="h-3 w-3 opacity-70" />
                            {index === 0 && 'Launch Website Plan'}
                            {index === 1 && 'Funnel Setup Plan'}
                            {index === 2 && 'Full System Build'}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
