'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { ChevronRight } from 'lucide-react'

const slides = [
  'Strategic tiering based on ROI',
  'Behavioral conversion engineering',
  'Custom UX psychology per vertical',
  'Thought partner on growth',
  'Senior-level oversight\u2014not prompts',
]

export default function NprCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const isMoving = useRef(false)
  const deltaRef = useRef(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const threshold = 120
    const onWheel = (e: WheelEvent) => {
      if (index === slides.length - 1 && e.deltaY > 0) {
        return
      }
      e.preventDefault()
      if (isMoving.current) return
      deltaRef.current += e.deltaY + e.deltaX
      if (Math.abs(deltaRef.current) < threshold) return
      const dir = deltaRef.current > 0 ? 1 : -1
      deltaRef.current = 0
      const next = Math.max(0, Math.min(slides.length - 1, index + dir))
      if (next === index) return
      isMoving.current = true
      setIndex(next)
      const child = container.children[next] as HTMLElement
      child.scrollIntoView({ behavior: 'smooth', inline: 'start' })
      setTimeout(() => {
        isMoving.current = false
      }, 750)
    }
    container.addEventListener('wheel', onWheel, { passive: false })
    return () => container.removeEventListener('wheel', onWheel)
  }, [index])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        ref={containerRef}
        className="flex h-full w-full snap-x snap-mandatory overflow-x-scroll scroll-smooth no-scrollbar"
      >
        {slides.map((title) => (
          <section
            key={title}
            className="flex h-full w-full flex-shrink-0 items-center justify-center snap-center"
          >
            <AnimatePresence mode="wait" initial={false}>
              {index === slides.indexOf(title) && (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.5 }}
                  className="mx-auto w-[clamp(16rem,40vw,22rem)] space-y-4 rounded-xl border border-silver/20 bg-gradient-to-br from-blood via-blood to-blood p-6 text-center text-charcoal shadow-2xl"
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
      <ChevronRight
        className="pointer-events-none absolute right-4 lg:right-6 top-1/2 h-8 w-8 -translate-y-1/2 animate-bounce text-blood"
      />
    </div>
  )
}
