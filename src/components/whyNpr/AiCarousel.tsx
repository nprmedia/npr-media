'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

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
    <div className="h-screen overflow-hidden">
      <div
        ref={containerRef}
        className="h-full snap-y snap-mandatory overflow-y-scroll scroll-smooth no-scrollbar"
      >
        {aiSlides.map((title) => (
          <motion.section
            key={title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex min-h-screen items-center justify-center snap-start"
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
