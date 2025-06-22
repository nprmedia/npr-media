'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'

const slides = [
  {
    other: 'Opaque pricing',
    npr: 'Clear fixed rates',
    gain: 'Budget certainty',
  },
  {
    other: 'Junior talent',
    npr: 'Senior creators',
    gain: 'Expert execution',
  },
  {
    other: 'Design-only focus',
    npr: 'Strategic copy + UX',
    gain: 'Higher conversions',
  },
  {
    other: 'Slow handoffs',
    npr: 'Full stack dev',
    gain: 'Faster launches',
  },
  {
    other: 'No CRO testing',
    npr: 'Behavioral UX',
    gain: 'Data-driven wins',
  },
]

export default function FirmCarousel() {
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
      deltaRef.current += e.deltaY
      if (Math.abs(deltaRef.current) < threshold) return
      const dir = deltaRef.current > 0 ? 1 : -1
      deltaRef.current = 0
      const next = Math.max(0, Math.min(slides.length - 1, index + dir))
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
        {slides.map((row, i) => (
          <section
            key={i}
            className="flex min-h-screen items-center justify-center snap-start"
          >
            <AnimatePresence mode="wait" initial={false}>
              {index === i && (
                <motion.div
                  key={row.other}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                  className="mx-auto w-[clamp(18rem,60vw,28rem)] rounded-xl bg-gradient-to-br from-gray-50 via-white to-gray-100 p-6 text-black shadow-lg ring-1 ring-black/10 transition-transform hover:scale-105"
                >
                  <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4">
                    <div>
                      <p className="text-xs font-semibold text-gray-500">Other Firms</p>
                      <p className="text-sm">{row.other}</p>
                    </div>
                    <ArrowRight className="mx-auto text-gray-400" />
                    <div>
                      <p className="text-xs font-semibold text-gray-500">NPR Media</p>
                      <p className="text-sm">{row.npr}</p>
                    </div>
                    <ArrowRight className="mx-auto text-gray-400" />
                    <div>
                      <p className="text-xs font-semibold text-gray-500">Your Gain</p>
                      <p className="text-sm">{row.gain}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        ))}
      </div>
    </div>
  )
}
