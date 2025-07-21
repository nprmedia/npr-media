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
      className="relative border-t bg-antique text-charcoal scroll-mt-[80px] py-[clamp(5rem,10vw,8rem)] px-[clamp(1rem,4vw,3rem)] overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-blood opacity-20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-2xl text-center space-y-6">
        <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] text-blood font-bold">{title}</h2>
        <p className="text-[clamp(0.9rem,1.6vw,1.125rem)] text-charcoal">{subtitle}</p>
        <div className="pt-4">
          <Link
            href={cta.href}
            data-event="cta-final"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-olive px-[clamp(1.25rem,3vw,1.5rem)] py-[clamp(0.6rem,1.2vw,0.75rem)] text-[clamp(0.8rem,1vw,0.9rem)] font-semibold text-charcoal shadow-lg transition hover:scale-105 hover:bg-olive"
          >
            {cta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <p className="text-sm text-charcoal">{trust}</p>
        {urgency && <p className="text-xs font-medium text-blood">{urgency}</p>}
        <div className="pt-2">
          <Link
            href={exitLink.href}
            className="text-[clamp(0.75rem,1vw,0.875rem)] text-silver underline-offset-4 hover:underline"
          >
            {exitLink.label}
          </Link>
        </div>
      </div>
      <motion.div
        className="absolute bottom-2 right-2 text-blood"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Sparkles className="h-6 w-6" />
      </motion.div>
    </section>
  )
}
