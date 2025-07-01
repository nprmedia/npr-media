'use client'

import { motion } from 'framer-motion'

export default function PricingPreview() {
  return (
    <section className="bg-neutral-50 py-24 text-black">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 text-center space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold"
        >
          Simple Pricing, No Surprises
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-xl text-[clamp(1rem,2.2vw,1.25rem)] text-neutral-700"
        >
          Projects start at $1,000. Scope defines final cost — no retainers, no upsells.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
          data-event="webdev-scroll-trigger"
          className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-xl transition hover:scale-105"
        >
          Let’s Build Your Quote
        </motion.button>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm text-neutral-600"
        >
          We respond to every serious request within 1 business day.
        </motion.p>
      </div>
    </section>
  )
}
