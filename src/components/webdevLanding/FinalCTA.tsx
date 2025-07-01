'use client'

import { motion } from 'framer-motion'
import CTAForm from './CTAForm'

export default function FinalCTA() {
  return (
    <section id="cta" className="relative bg-neutral-950 py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-12 lg:px-20 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold">Get Your Free Strategy Mockup</h2>
          <p className="text-[clamp(1rem,2.2vw,1.25rem)] text-gray-300">
            Share a few details and we’ll craft a quick roadmap showing how we’d boost your conversions.
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-gray-400">
            <li>Actionable layout suggestions</li>
            <li>Conversion quick wins</li>
            <li>No obligation to hire us</li>
          </ul>
          <p className="pt-2 text-xs text-gray-500">Prefer to schedule a call?{' '}
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Book on Calendly
            </a>
          </p>
        </motion.div>
        <CTAForm />
      </div>
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10"
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      >
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/30 blur-3xl" />
      </motion.div>
    </section>
  )
}
