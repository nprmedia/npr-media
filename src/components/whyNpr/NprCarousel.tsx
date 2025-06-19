'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

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
    <div className="h-screen overflow-hidden">
      <div
        ref={containerRef}
        className="flex h-full snap-x snap-mandatory overflow-x-scroll scroll-smooth no-scrollbar"
      >
        {slides.map((title) => (
          <motion.section
            key={title}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex min-h-screen min-w-full items-center justify-center snap-center"
          >
            <div className="mx-auto w-[clamp(16rem,40vw,22rem)] space-y-4 rounded-lg bg-white p-6 text-center text-black shadow-lg">
              <h2 className="text-2xl font-bold">{title}</h2>
              <ul className="list-disc space-y-1 pl-5 text-left text-sm">
                <li>Subpoint 1</li>
                <li>Subpoint 2</li>
                <li>Subpoint 3</li>
              </ul>
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  )
}
