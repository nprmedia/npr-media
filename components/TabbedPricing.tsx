'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import { Check } from 'lucide-react'
import { pricing } from '@/content/pricing'
import FadeInSection from '@/components/FadeInSection'

const services = Object.entries(pricing).map(([key, value]) => ({
  key,
  category: value.label,
  tiers: value.tiers,
}))

export default function TabbedPricing() {
  const [active, setActive] = useState('websites')
  const current = services.find((s) => s.key === active)

  return (
    <FadeInSection>
      <section id="pricing" className="bg-gradient-to-b from-white to-slate-50 dark:from-black dark:to-gray-900 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Transparent Pricing. Tiered For Growth.
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Whether you're launching, scaling, or streamlining — each tier is scoped for ROI, speed, and clarity.
            </p>
          </div>

          <div className="sticky top-0 bg-slate-50 dark:bg-black z-10 border-b border-gray-200 dark:border-gray-700">
            <div className="flex justify-center gap-4 pb-4">
              {services.map((s) => (
                <button
                  key={s.key}
                  onClick={() => setActive(s.key)}
                  className={clsx(
                    'text-sm font-medium px-4 py-2 rounded-full transition',
                    active === s.key
                      ? 'bg-black text-white shadow'
                      : 'text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-800'
                  )}
                >
                  {s.category}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-3 gap-8 text-left"
            >
              {current?.tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={clsx(
                    'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 transition shadow-sm hover:shadow-md',
                    tier.highlight && 'ring-2 ring-yellow-400 scale-[1.02] shadow-lg'
                  )}
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-md font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      {tier.name}
                      {tier.highlight && (
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded-full">
                          Most Booked
                        </span>
                      )}
                    </h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{tier.price}</span>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    {tier.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-600 mt-1" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  {tier.note && (
                    <p className="mt-3 text-xs text-gray-500 italic dark:text-gray-400">{tier.note}</p>
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="pt-10">
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              Not sure what tier fits your stage?
            </p>
            <a
              href="#contact"
              className="inline-block rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-gray-800 transition"
            >
              Start a Strategy Call →
            </a>
          </div>
        </div>
      </section>
    </FadeInSection>
  )
}
