'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type Slide = {
  title: string
  description: string
}

const slides: Slide[] = [
  {
    title: 'Value: Results Over Vanity',
    description:
      'Real growth matters most. Vanity metrics may look nice but rarely move the needle. Every feature ties back to concrete business results.'
  },
  {
    title: 'Value: Transparency Always',
    description:
      'Open communication builds trust. We share progress often so there are no surprises. Clear expectations set the stage for great partnerships.'
  },
  {
    title: 'Value: Simplicity Wins',
    description:
      'Complex sites slow teams down. We keep code lean so your product stays fast. Simple solutions are easier to maintain and extend.'
  },
  {
    title: 'Culture: Learn and Iterate',
    description:
      'We experiment constantly to improve. Each project teaches us something new. Continuous learning keeps our work fresh and effective.'
  },
  {
    title: 'Culture: Ownership Mentality',
    description:
      'We step up like it is our own product. Taking responsibility yields better outcomes. Everyone on the team is accountable for quality.'
  },
  {
    title: 'Culture: Remote Friendly',
    description:
      'Great talent lives everywhere. Our flexible approach lets us collaborate with the best people anywhere. Being remote keeps us nimble.'
  },
  {
    title: 'Belief: Partners Not Vendors',
    description:
      'True success comes from collaboration. We embed with your team to understand every goal. You get a dedicated partner, not just another vendor.'
  },
  {
    title: 'Belief: People Over Process',
    description:
      'Rigid frameworks slow innovation. We adapt methods to fit your business. Strong relationships drive outcomes more than strict processes.'
  },
  {
    title: 'Belief: Long-Term Success',
    description:
      'We build to last and grow. Scalable systems ensure your investment keeps delivering. Solutions should stand the test of time.'
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
      child.scrollIntoView({ behavior: 'smooth', block: 'center' })
      setTimeout(() => {
        isMoving.current = false
      }, 600)
    }
    container.addEventListener('wheel', onWheel, { passive: false })
    return () => container.removeEventListener('wheel', onWheel)
  }, [index])

  return (
    <div className="relative mx-auto h-96 max-w-sm overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10" style={{ height: '25%' }}>
        <div className="h-full bg-gradient-to-b from-white via-white/80 to-transparent" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10" style={{ height: '25%' }}>
        <div className="h-full bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>
      <div
        ref={containerRef}
        className="h-full snap-y snap-mandatory overflow-y-scroll scroll-smooth no-scrollbar py-6"
      >
        {slides.map((slide, i) => {
          const distance = Math.abs(index - i)
          const opacity = 1 - Math.min(distance * 0.4, 0.8)
          return (
            <section key={slide.title} className="snap-center py-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                style={{ opacity }}
                className="rounded-xl bg-white p-4 text-black shadow"
              >
                <p className="font-bold">{slide.title}</p>
                <p className="mt-1 text-sm text-gray-600">{slide.description}</p>
              </motion.div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
