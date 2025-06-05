"use client"

import { useState } from 'react'
import { pricing } from '@/content/homepage/pricing'
import { Card, CardContent } from '@/components/ui/card'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Info } from 'lucide-react'

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
            {"Whether you're launching, scaling, or streamlining — each tier is scoped for ROI, speed, and clarity."}
          </p>
          <p className="text-sm text-muted-foreground">Trusted by 120+ teams worldwide</p>
        </div>

        <div className="mt-12 flex justify-center gap-3 sm:gap-4 flex-wrap sticky top-0 z-20 bg-white dark:bg-black/90 backdrop-blur supports-backdrop-blur:border-b">
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

        <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {pricing
                .find((tab) => tab.category === active)
                ?.tiers.map((tier, index) => {
                  const isMiddleCard = index === 1
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: 'spring', stiffness: 260, delay: index * 0.1 }}
                      className={`${isMiddleCard ? 'relative z-10 scale-[1.01]' : ''}`}
                    >
                      {isMiddleCard && (
                        <motion.div
                          className="absolute inset-0 -z-10 blur-2xl rounded-2xl"
                          animate={{ opacity: [0.15, 0.3, 0.15] }}
                          transition={{ duration: 5, repeat: Infinity }}
                          style={{ background: 'radial-gradient(circle, rgba(250, 204, 21, 0.4), transparent)' }}
                        />
                      )}
                      <div className={`relative rounded-2xl before:absolute before:inset-0 before:rounded-2xl ${isMiddleCard ? 'before:ring-2 before:ring-yellow-400 before:animate-pulse' : ''}`}>
                        <Card
                          className="relative flex flex-col justify-between bg-[linear-gradient(white,white),linear-gradient(to_right,#e0e0e0,#facc15)] bg-clip-padding border border-transparent shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] backdrop-blur-lg transition-shadow hover:shadow-xl dark:hover:shadow-zinc-900/30 h-full rounded-2xl overflow-hidden"
                        >
                          <CardContent className="p-5 space-y-4">
                            <div className="space-y-1">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <h3 className="text-lg sm:text-xl font-semibold leading-tight text-gray-900 dark:text-white">
                                    {tier.title}
                                  </h3>
                                </div>
                                <p className="text-lg font-bold text-gray-800 dark:text-gray-100 whitespace-nowrap">
                                  {tier.price}
                                </p>
                              </div>
                              <p className="text-sm italic text-muted-foreground">
                                {index === 0 && 'Best for early-stage launches or proof-of-concept MVPs.'}
                                {index === 1 && 'Ideal for growth-focused startups scaling systems.'}
                                {index === 2 && 'Perfect for high-touch execution or advisory support.'}
                              </p>
                            </div>
                            <ul className="text-sm text-muted-foreground space-y-2 max-h-[180px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
                              {tier.features.map((feature, i) => (
                                <li key={i} className={`flex items-start gap-2 ${i === 0 ? 'font-semibold text-gray-900 dark:text-white' : ''}`}>
                                  <span className="text-green-500">{i === 0 ? '✅' : '✓'}</span> {feature}
                                </li>
                              ))}
                            </ul>
                            <div className="pt-2">
                              <button
                                className="group mt-4 inline-flex w-full justify-center items-center gap-2 rounded-full border border-gray-300 bg-gradient-to-br from-white to-gray-50 px-4 py-2 text-sm font-medium text-gray-900 shadow-sm hover:from-gray-100 hover:to-white dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 hover:scale-105 transition"
                              >
                                Start Plan
                                <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform group-hover:opacity-100" />
                              </button>
                              <p className="text-xs text-center text-muted-foreground mt-1 flex items-center justify-center gap-1 italic">
                                <Info className="w-3 h-3 opacity-70" />
                                {index === 0 && 'Launch Website Plan'}
                                {index === 1 && 'Funnel Setup Plan'}
                                {index === 2 && 'Full System Build'}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
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
