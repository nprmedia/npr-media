'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { ChevronRight } from 'lucide-react'

const slides = [
  'Strategic tiering based on ROI',
  'Behavioral conversion engineering',
  'Custom UX psychology per vertical',
  'Thought partner on growth',
  'Senior-level oversight—not prompts',
]

export default function NprCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const isMoving = useRef(false)
  const deltaRef = useRef(0)

  const scrollToIndex = (i: number) => {
    const container = containerRef.current
    if (!container) return
    const target = container.children[i] as HTMLElement
    container.scrollTo({
      left: target.offsetLeft,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const threshold = 120
    const onWheel = (e: WheelEvent) => {
      if (index === slides.length - 1 && e.deltaY > 0) return
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
      scrollToIndex(next)
      setTimeout(() => {
        isMoving.current = false
      }, 750)
    }
    container.addEventListener('wheel', onWheel, { passive: false })
    return () => container.removeEventListener('wheel', onWheel)
  }, [index])

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="max-w-screen-xl mx-auto h-full">
        <div
          ref={containerRef}
          className="flex h-full snap-x snap-mandatory overflow-x-scroll scroll-smooth no-scrollbar"
        >
          {slides.map((title, i) => (
            <section
              key={title}
              className="flex min-h-screen w-[100vw] max-w-screen-xl items-center justify-start snap-start px-4 lg:px-0"
            >
              <AnimatePresence mode="wait" initial={false}>
                {index === i && (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.5 }}
                    className="w-[90%] max-w-md space-y-4 rounded-xl border border-silver/20 bg-gradient-to-br from-blood via-blood to-blood p-6 text-center text-charcoal shadow-2xl"
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
          className="pointer-events-none absolute right-6 top-1/2 h-8 w-8 -translate-y-1/2 animate-bounce text-blood"
        />
      </div>
    </div>
  )
}
