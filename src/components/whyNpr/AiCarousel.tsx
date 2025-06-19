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

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      if (isMoving.current) return
      const dir = e.deltaY > 0 ? 1 : -1
      const next = Math.max(0, Math.min(aiSlides.length - 1, index + dir))
      if (next === index) return
      isMoving.current = true
      setIndex(next)
      const child = container.children[next] as HTMLElement
      child.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setTimeout(() => {
        isMoving.current = false
      }, 500)
    }
    container.addEventListener('wheel', onWheel, { passive: false })
    return () => container.removeEventListener('wheel', onWheel)
  }, [index])

  return (
    <div className="h-screen overflow-hidden">
      <div
        ref={containerRef}
        className="h-full snap-y snap-mandatory overflow-y-scroll scroll-smooth"
      >
        {aiSlides.map((title) => (
          <motion.section
            key={title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex min-h-screen flex-col items-center justify-center snap-start space-y-4 bg-white px-6 text-center"
          >
            <h2 className="text-2xl font-bold">{title}</h2>
            <ul className="list-disc space-y-1 pl-5 text-left text-sm">
              <li>Subpoint 1</li>
              <li>Subpoint 2</li>
              <li>Subpoint 3</li>
            </ul>
          </motion.section>
        ))}
      </div>
    </div>
  )
}
