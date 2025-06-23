'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const aiSlides = [
  'Human-Centric Problem Framing',
  'Taste, Vision, and Aesthetic Judgement',
  'Strategic Architecture & Tradeoffs',
  'Ethics, Law, and Societal Impacts',
  'Relationships & Trust Building',
]

export default function AiCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const isMoving = useRef(false)
  const deltaRef = useRef(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const threshold = 120
    const onWheel = (e: WheelEvent) => {
      if (index === aiSlides.length - 1 && e.deltaY > 0) {
        // release scroll on last slide
        return
      }
      e.preventDefault()
      if (isMoving.current) return
      deltaRef.current += e.deltaY
      if (Math.abs(deltaRef.current) < threshold) return
      const dir = deltaRef.current > 0 ? 1 : -1
      deltaRef.current = 0
      const next = Math.max(0, Math.min(aiSlides.length - 1, index + dir))
      if (next === index) return
      isMoving.current = true
      setIndex(next)
      const child = container.children[next] as HTMLElement
      child.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setTimeout(() => {
        isMoving.current = false
      }, 750)
    }
    container.addEventListener('wheel', onWheel, { passive: false })
    return () => container.removeEventListener('wheel', onWheel)
  }, [index])

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        ref={containerRef}
        className="h-full snap-y snap-mandatory overflow-y-scroll scroll-smooth no-scrollbar"
      >
        {aiSlides.map((title) => (
          <section
            key={title}
            className="flex min-h-screen items-center justify-center snap-start"
          >
            <AnimatePresence mode="wait" initial={false}>
              {index === aiSlides.indexOf(title) && (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                  className="mx-auto w-[clamp(16rem,40vw,22rem)] space-y-4 rounded-xl border border-white/10 bg-[var(--color-card)] p-6 text-center text-gray-100 shadow-2xl"
                >
                  <h2 className="text-2xl font-bold">{title}</h2>
                  <ul className="list-disc space-y-1 pl-5 text-left text-sm">
                    <li>Subpoint 1</li>
                    <li>Subpoint 2</li>
                    <li>Subpoint 3</li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        ))}
      </div>
      <ChevronDown
        className="pointer-events-none absolute bottom-4 left-1/2 h-8 w-8 -translate-x-1/2 animate-bounce text-[var(--color-accent)]"
      />
    </div>
  )
}
