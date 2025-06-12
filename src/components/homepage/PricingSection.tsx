'use client'

import { pricing } from '@/content/homepage/pricing'
import QuoteModal from './QuoteModal'

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="w-full border-t bg-[#1F1F1F] text-[#F2F3F4] py-[clamp(5rem,10vw,8rem)]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-4 text-center">
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight">
            Our Packages
          </h2>
          <p className="text-[clamp(0.9rem,1.6vw,1.125rem)] text-gray-300">
            {pricing.headline}
          </p>
        </div>

        <div className="mx-auto mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pricing.tiers.map((tier) => (
            <div
              key={tier.title}
              className={`flex flex-col rounded-2xl border border-gray-700 bg-[#262626] p-6 ${tier.highlight ? 'ring-2 ring-[var(--color-accent)]' : ''}`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-[clamp(1rem,1.8vw,1.25rem)] font-semibold">
                  {tier.title}
                </h3>
                <span className="text-[clamp(1rem,1.8vw,1.25rem)] font-bold text-gray-300">
                  {tier.price}
                </span>
              </div>
              <p className="mt-1 text-[clamp(0.8rem,1.2vw,0.9rem)] italic text-gray-400">
                {tier.microcopy}
              </p>
              <p className="mt-2 text-[clamp(0.8rem,1.2vw,0.9rem)] text-gray-300">
                {tier.description}
              </p>
              <ul className="mt-4 flex-1 space-y-1 text-[clamp(0.8rem,1.2vw,0.9rem)] text-gray-300">
                {tier.features.map((feature, i) => (
                  <li
                    key={i}
                    className={i === 0 ? 'font-semibold text-white' : ''}
                  >
                    <span className="mr-1 text-[var(--color-accent)]">
                      {i === 0 ? '✅' : '✓'}
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <button className="w-full rounded-full border border-gray-600 bg-[#1F1F1F] px-[clamp(1rem,2.5vw,1.25rem)] py-[clamp(0.6rem,1.2vw,0.75rem)] text-[clamp(0.8rem,1vw,0.9rem)] font-medium text-[#F2F3F4] shadow-sm transition hover:scale-105 hover:bg-[#333]">
                  {tier.cta}
                </button>
              </div>
            </div>
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
  )
}
