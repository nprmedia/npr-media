'use client'
import { motion } from 'framer-motion'
import MiniForm from './MiniForm'

export default function CTASection() {
  return (
    <section id="cta" className="relative bg-gradient-to-br from-umber via-blood to-crimson py-24 text-silver">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:px-12 lg:px-20 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold">Get Your Free Strategy Mockup</h2>
          <p className="text-[clamp(1rem,2vw,1.25rem)]">Share your goals and we’ll map a high-converting website approach—free.</p>
          <ul className="list-disc pl-5 text-sm marker:text-silver">
            <li>Actionable page-level insights</li>
            <li>Senior dev & design expertise</li>
            <li>100% obligation-free</li>
          </ul>
          <p className="text-sm text-silver">Prefer to schedule a call? <a href="https://calendly.com" target="_blank" className="underline">Book via Calendly</a></p>
        </motion.div>
        <MiniForm />
      </div>
    </section>
  )
}
