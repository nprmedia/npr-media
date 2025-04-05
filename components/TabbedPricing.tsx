"use client"

import { useState } from 'react'
import { pricing } from '@/content/pricing'
import { Card, CardContent } from '@/components/ui/card'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function TabbedPricing() {
  const [active, setActive] = useState(pricing[0].category)

  return (
    <section
      id="pricing"
      className="w-full py-24 bg-white dark:bg-black border-t border-border"
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            Transparent Pricing. Tiered For Growth.
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're launching, scaling, or streamlining — each tier is scoped for ROI, speed, and clarity.
          </p>
        </div>

        <div className="mt-12 flex justify-center gap-3 sm:gap-4 flex-wrap">
          {pricing.map((tab) => (
            <button
              key={tab.category}
              onClick={() => setActive(tab.category)}
              className={`px-5 py-2.5 rounded-full border text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 ring-offset-2 ring-gray-300 dark:ring-gray-600
                ${
                  active === tab.category
                    ? 'bg-gray-900 text-white dark:bg-white dark:text-black shadow-md'
                    : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              {tab.category}
            </button>
          ))}
        </div>

        <div className="mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {pricing
                .find((tab) => tab.category === active)
                ?.tiers.map((tier, index) => {
                  const isMiddleCard = index === 1
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: 'spring', stiffness: 260 }}
                      className={isMiddleCard ? 'relative z-10' : ''}
                    >
                      {isMiddleCard && (
                        <motion.div
                          className="absolute inset-0 -z-10 blur-2xl rounded-2xl"
                          animate={{ opacity: [0.1, 0.2, 0.1] }}
                          transition={{ duration: 5, repeat: Infinity }}
                          style={{ background: 'radial-gradient(circle, rgba(255, 200, 0, 0.4), transparent)' }}
                        />
                      )}
                      <Card className={`relative flex flex-col justify-between border border-border backdrop-blur-xl bg-white/80 dark:bg-white/10 shadow-xl transition-all h-full rounded-2xl overflow-hidden ${isMiddleCard ? 'ring-2 ring-yellow-400' : ''}`}>
                        <CardContent className="p-5 space-y-4">
                          <div className="space-y-1">
                            <div className="flex items-center justify-between">
                              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                {tier.title}
                              </h3>
                              <p className="text-base text-gray-600 dark:text-gray-300">
                                {tier.price}
                              </p>
                            </div>
                            <p className="text-sm italic text-muted-foreground">
                              {index === 0 && 'Best for early-stage launches or proof-of-concept MVPs.'}
                              {index === 1 && 'Ideal for growth-focused startups scaling systems.'}
                              {index === 2 && 'Perfect for high-touch execution or advisory support.'}
                            </p>
                          </div>
                          <ul className="text-sm text-muted-foreground space-y-2">
                            {tier.features.map((feature, i) => (
                              <li key={i} className={`flex items-start gap-2 ${i === 0 ? 'font-semibold text-gray-900 dark:text-white' : ''}`}>
                                <span className="text-green-500">✓</span> {feature}
                              </li>
                            ))}
                          </ul>
                          <div className="pt-2">
                            <button
                              className="group mt-4 inline-flex w-full justify-center items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 hover:scale-105 transition"
                            >
                              {index === 0 && 'Book Launch Plan'}
                              {index === 1 && 'Start This Funnel'}
                              {index === 2 && 'Schedule Full Build'}
                              <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
                            </button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
