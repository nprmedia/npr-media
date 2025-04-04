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
            Pricing built for growth
          </h2>
          <p className="text-lg text-muted-foreground">
            Transparent plans for every stage of scale.
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
                ?.tiers.map((tier, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Card className="flex flex-col justify-between border-border shadow-sm hover:shadow-xl transition-all h-full">
                      <CardContent className="p-6 space-y-6">
                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {tier.title}
                          </h3>
                          <p className="text-3xl font-bold text-gray-900 dark:text-white">
                            {tier.price}
                          </p>
                        </div>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          {tier.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-green-500">✓</span> {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
