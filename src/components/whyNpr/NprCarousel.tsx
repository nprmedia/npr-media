'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const slides = [
  {
    title: 'Strategic tiering based on ROI',
    bullets: ['Tiered delivery models', 'Maximize return per client', 'Conversion-first planning'],
  },
  {
    title: 'Behavioral conversion engineering',
    bullets: ['Scroll-based triggers', 'Copy timing logic', 'Trust-layer sequencing'],
  },
  {
    title: 'Custom UX psychology per vertical',
    bullets: ['Ecom ≠ SaaS ≠ Services', 'Flow design by segment', 'Buyer-specific trust cues'],
  },
  {
    title: 'Thought partner on growth',
    bullets: ['Not just builders—strategists', 'High-leverage moves', 'Results in 90 days'],
  },
  {
    title: 'Senior-level oversight—not prompts',
    bullets: ['Zero juniors or AI filler', 'Final review by leads', 'Uncompromised delivery'],
  },
]

export default function NprCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 7000) // slightly longer if user may click
    return () => clearInterval(interval)
  }, [])

  const handleManualAdvance = () => {
    setIndex((i) => (i + 1) % slides.length)
  }

  return (
    <section className="relative py-24">
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-12 px-4 md:grid-cols-2 md:items-center lg:gap-24">
        {/* Left Heading Block */}
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-charcoal">
            How NPR Media Delivers
          </h2>
          <p className="mt-4 text-lg text-muted">
            Psychology-driven, senior-built, and engineered for traction. No shortcuts. No fluff.
          </p>
        </div>

        {/* Right Animated Card — Clickable */}
        <div className="relative h-[280px] cursor-pointer" onClick={handleManualAdvance}>
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[index].title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full max-w-md rounded-xl border border-silver/20 bg-gradient-to-br from-blood via-blood to-blood p-6 text-charcoal shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-white">{slides[index].title}</h3>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-white/90">
                {slides[index].bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
