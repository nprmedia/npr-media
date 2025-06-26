'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type Slide = {
  title: string
  description: string
}

const slides: Slide[] = [
  {
    title: 'Value: Results Over Vanity',
    description: 'We measure success by real business growth, not just surface metrics.'
  },
  {
    title: 'Value: Transparency Always',
    description: 'Open communication and clear expectations build trusted partnerships.'
  },
  {
    title: 'Value: Simplicity Wins',
    description: 'We strip away bloat so your site stays fast and easy to maintain.'
  },
  {
    title: 'Culture: Learn and Iterate',
    description: 'Continuous improvement keeps our work fresh and effective.'
  },
  {
    title: 'Culture: Ownership Mentality',
    description: 'Everyone on the team is accountable for quality results.'
  },
  {
    title: 'Culture: Remote Friendly',
    description: 'Flexibility in location lets us collaborate with top talent.'
  },
  {
    title: 'Belief: Partners Not Vendors',
    description: 'We act as an extension of your team working toward shared goals.'
  },
  {
    title: 'Belief: People Over Process',
    description: 'Strong relationships drive outcomes more than rigid frameworks.'
  },
  {
    title: 'Belief: Long-Term Success',
    description: 'Solutions should scale with you and stand the test of time.'
  },
]

export default function ValuesCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const isMoving = useRef(false)
  const deltaRef = useRef(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const threshold = 120
    const onWheel = (e: WheelEvent) => {
      if (index === slides.length - 1 && e.deltaY > 0) return
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
      }, 600)
    }
    container.addEventListener('wheel', onWheel, { passive: false })
    return () => container.removeEventListener('wheel', onWheel)
  }, [index])

  return (
    <div className="relative mx-auto h-96 max-w-sm overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-10 bg-gradient-to-b from-white to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-10 bg-gradient-to-t from-white to-transparent" />
      <div ref={containerRef} className="h-full snap-y snap-mandatory overflow-y-scroll scroll-smooth no-scrollbar py-6">
        {slides.map((slide) => (
          <section key={slide.title} className="snap-start py-4">
            <AnimatePresence mode="wait" initial={false}>
              {index === slides.indexOf(slide) && (
                <motion.div
                  key={slide.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-xl bg-gray-50 p-4 text-black shadow"
                >
                  <p className="font-bold">{slide.title}</p>
                  <p className="mt-1 text-sm text-gray-600">{slide.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        ))}
      </div>
    </div>
  )
}
