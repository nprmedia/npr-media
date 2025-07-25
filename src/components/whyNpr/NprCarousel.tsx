'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

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
  const isScrolling = useRef(false)
  const touchStartY = useRef<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const hovering = useRef(false)

  const nextSlide = () => {
    setIndex((i) => (i + 1) % slides.length)
  }

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!hovering.current) return
      e.preventDefault()
      if (isScrolling.current) return
      if (e.deltaY > 30) {
        isScrolling.current = true
        nextSlide()
        setTimeout(() => {
          isScrolling.current = false
        }, 800)
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      if (!hovering.current) return
      touchStartY.current = e.touches[0].clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!hovering.current || touchStartY.current === null || isScrolling.current) return
      const deltaY = touchStartY.current - e.touches[0].clientY
      if (deltaY > 40) {
        isScrolling.current = true
        nextSlide()
        touchStartY.current = null
        setTimeout(() => {
          isScrolling.current = false
        }, 800)
      }
    }

    const handleMouseEnter = () => {
      hovering.current = true
      document.body.style.overflow = 'hidden'
    }

    const handleMouseLeave = () => {
      hovering.current = false
      document.body.style.overflow = ''
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mouseenter', handleMouseEnter)
      container.addEventListener('mouseleave', handleMouseLeave)
      container.addEventListener('wheel', handleWheel, { passive: false })
      container.addEventListener('touchstart', handleTouchStart, { passive: true })
      container.addEventListener('touchmove', handleTouchMove, { passive: true })
    }

    return () => {
      if (container) {
        container.removeEventListener('mouseenter', handleMouseEnter)
        container.removeEventListener('mouseleave', handleMouseLeave)
        container.removeEventListener('wheel', handleWheel)
        container.removeEventListener('touchstart', handleTouchStart)
        container.removeEventListener('touchmove', handleTouchMove)
      }
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-screen-xl px-4">
        <div
          ref={containerRef}
          className="relative h-[300px] overflow-hidden"
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
              className="absolute inset-0 w-full max-w-md mx-auto rounded-xl border border-silver/20 bg-gradient-to-br from-blood via-blood to-blood p-6 text-charcoal shadow-2xl select-none"
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
