'use client'

import Link from 'next/link'
import { hero } from '@/content/hero'
import FadeInSection from '@/components/FadeInSection'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import type { HeroContent } from '@/types/hero'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const content: HeroContent = hero

  useEffect(() => {
    const hash = window.location.hash
    if (hash === '#hero' && heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <FadeInSection>
      <section
        id="hero"
        ref={heroRef}
        role="region"
        aria-labelledby="hero-title"
        className="relative px-4 sm:px-8 lg:px-12 pt-40 pb-32 sm:pt-52 sm:pb-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-slate-50 to-slate-100 dark:from-black dark:via-gray-900 dark:to-gray-950 before:absolute before:inset-0 before:bg-[url('/noise.svg')] before:opacity-5 before:pointer-events-none overflow-hidden"
      >
        <span className="sr-only" aria-live="polite">
          Welcome to NPR Media's homepage
        </span>
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-8 sm:space-y-10 text-center lg:text-left">
            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-balance text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[1.05] text-gray-900 dark:text-white"
            >
              {content.headline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0"
            >
              {content.subheadline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
            >
              <Link
                href={content.cta.href}
                aria-label="Primary call to action"
                className="w-full sm:w-auto px-6 py-3 text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-[1.04] bg-gradient-to-r from-gray-900 to-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              >
                {content.cta.label}
              </Link>
              <Link
                href={content.altCta.href}
                aria-label="Secondary call to action"
                className="w-full sm:w-auto px-6 py-3 text-base font-semibold rounded-full border border-gray-300 dark:border-gray-600 bg-white/30 dark:bg-white/10 backdrop-blur-sm hover:bg-white/50 dark:hover:bg-white/20 transition text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              >
                {content.altCta.label}
              </Link>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-sm text-muted-foreground pt-6"
            >
              Trusted by over 120 scaling teams
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="lg:col-span-2 w-full mx-auto lg:mx-0 aspect-[16/10] rounded-xl overflow-hidden shadow-xl lg:scale-105 lg:translate-x-2"
            >
            <img
              src={content.image.src}
              alt={content.image.alt}
              className="w-full h-full object-cover"
              loading="lazy"
              width={1280}
              height={720}
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          </motion.div>
        </div>
      </section>
    </FadeInSection>
  )
}
