'use client'

import { contactSection } from '@/content/homepage/contactSection'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ContactSection() {
  const { title, subtitle, cta, trust, urgency, exitLink } = contactSection

  return (
    <section
      id="contact"
      className="relative border-t bg-antique text-charcoal scroll-mt-[80px] py-[clamp(4rem,8vw,6rem)] overflow-hidden"
    >
      {/* soft background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-blood/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-[42rem] px-[clamp(1.5rem,5vw,4rem)] text-center space-y-5">
        <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] text-blood font-bold tracking-tight">
          {title}
        </h2>

        <p className="text-[clamp(0.9rem,1.6vw,1.125rem)] text-charcoal/90">
          {subtitle}
        </p>

        <div className="pt-3">
          <Link
            href={cta.href}
            data-event="cta-final"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-olive bg-olive px-[clamp(1.25rem,3vw,1.75rem)] py-[clamp(0.6rem,1.1vw,0.75rem)] text-[clamp(0.8rem,1vw,0.9rem)] font-semibold text-charcoal shadow-sm transition-transform duration-200 hover:scale-105 hover:bg-olive/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive"
          >
            {cta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <p className="text-[0.8rem] text-charcoal/80">
          {trust}
        </p>

        {urgency && (
          <p className="text-[0.75rem] font-semibold text-blood/90">
            {urgency}
          </p>
        )}

        <div className="pt-1">
          <Link
            href={exitLink.href}
            className="text-[clamp(0.75rem,1vw,0.875rem)] text-silver underline-offset-4 hover:underline"
          >
            {exitLink.label}
          </Link>
        </div>
      </div>

      <motion.div
        className="absolute bottom-3 right-3 text-blood/80"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Sparkles className="h-5 w-5" />
      </motion.div>
    </section>
  )
}
