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
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  const handleManualAdvance = () => {
    setIndex((i) => (i + 1) % slides.length)
  }

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-screen-xl px-4">
        <div
          className="relative h-[300px] cursor-pointer group"
          onClick={handleManualAdvance}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[index].title}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.8, 0.25, 1],
              }}
              className="absolute inset-0 w-full max-w-md mx-auto rounded-xl border border-silver/20 bg-gradient-to-br from-blood via-blood to-blood p-6 text-charcoal shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-white">{slides[index].title}</h3>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-white/90">
                {slides[index].bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              {/* Motion cue (right arrow animation) */}
              <div className="absolute bottom-4 right-4 flex items-center gap-1 opacity-50 transition-opacity group-hover:opacity-100">
                <div className="h-1 w-5 bg-white rounded-full animate-slide-right" />
                <div className="h-1 w-2 bg-white rounded-full animate-slide-right-delay" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Custom animation keyframes (in globals.css or injected via Tailwind plugin if supported) */}
      <style jsx>{`
        @keyframes slideRight {
          0% {
            transform: translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateX(6px);
            opacity: 1;
          }
          100% {
            transform: translateX(0);
            opacity: 0.3;
          }
        }

        .animate-slide-right {
          animation: slideRight 1.4s infinite ease-in-out;
        }

        .animate-slide-right-delay {
          animation: slideRight 1.4s infinite ease-in-out;
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  )
}
