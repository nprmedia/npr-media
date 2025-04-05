import { useState } from 'react'
import { pricing } from '@/content/pricing'
import { Card, CardContent } from '@/components/ui/card'
import { motion, AnimatePresence } from 'framer-motion'

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
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {pricing
                .find((tab) => tab.category === active)
                ?.tiers.map((tier, index) => {
                  const isMiddleCard = index === 1
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className={isMiddleCard ? 'relative z-10' : ''}
                    >
                      {isMiddleCard && (
                        <motion.div
                          className="absolute inset-0 -z-10 blur-2xl rounded-2xl"
                          animate={{ opacity: [0.15, 0.3, 0.15] }}
                          transition={{ duration: 5, repeat: Infinity }}
                          style={{ background: 'radial-gradient(circle, rgba(255, 200, 0, 0.4), transparent)' }}
                        />
                      )}
                      <Card className={`flex flex-col justify-between border border-border shadow-2xl hover:shadow-3xl transition-all h-full rounded-2xl overflow-hidden ${isMiddleCard ? 'ring-2 ring-yellow-400' : ''}`}>
                        <CardContent className="p-6 space-y-6">
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
                              {/* Example placeholder — replace with real segments if needed */}
                              {index === 0 && 'Perfect for new or stuck founders'}
                              {index === 1 && 'Most popular: mid-stage scaling plan'}
                              {index === 2 && 'High-growth or advisor-backed support'}
                            </p>
                          </div>
                          <ul className="text-sm text-muted-foreground space-y-2">
                            {tier.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-green-500">✓</span> {feature}
                              </li>
                            ))}
                          </ul>
                          <div>
                            <button
                              className="mt-4 inline-flex w-full justify-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
                            >
                              Select This Plan
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
