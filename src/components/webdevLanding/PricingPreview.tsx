'use client'
import { motion } from 'framer-motion'

export default function PricingPreview() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[clamp(2rem,5vw,3rem)] font-bold"
        >
          Simple Pricing, No Surprises
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl text-[clamp(1rem,2vw,1.25rem)]"
        >
          Projects start at $1,000. Scope defines final cost — no retainers, no upsells.
        </motion.p>
        <motion.a
          href="#cta"
          data-event="webdev-scroll-trigger"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 inline-block rounded-full bg-blood px-6 py-3 font-semibold text-silver shadow-lg transition hover:scale-105"
        >
          Let’s Build Your Quote
        </motion.a>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 text-sm text-sepia"
        >
          We respond to every serious request within 1 business day.
        </motion.p>
      </div>
    </section>
  )
}
