'use client'

import Link from 'next/link'
import { hero } from '@/content/hero'
import FadeInSection from '@/components/FadeInSection'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import type { HeroContent } from '@/types/hero'
import { useTheme } from 'next-themes'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const content: HeroContent = hero
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const hash = window.location.hash
    if (hash === '#hero' && heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const headlineWords = content.headline.split(' ')

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
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.05 } },
              }}
              className="text-balance text-[clamp(2.5rem,8vw,6rem)] font-extrabold tracking-tighter leading-[1.05] text-gray-900 dark:text-white"
            >
              {headlineWords.map((word, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0"
            >
              {content.subheadline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.4 }}
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
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-sm text-muted-foreground pt-6"
            >
              Trusted by over 120 scaling teams
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="relative lg:col-span-2 w-full mx-auto lg:mx-0 aspect-[16/10] rounded-xl overflow-hidden shadow-xl lg:scale-105 lg:translate-x-2"
          >
            <motion.div
              className="absolute -inset-4 -z-10 rounded-xl blur-2xl"
              animate={{ opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 6, repeat: Infinity }}
              style={{ background: 'radial-gradient(circle, rgba(0,132,255,0.5), transparent)' }}
            />
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

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-muted-foreground"
        >
          ↓
        </motion.div>
      </section>
    </FadeInSection>
  )
}
