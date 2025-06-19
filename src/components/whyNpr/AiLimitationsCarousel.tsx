'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const points = [
  {
    title: 'Human-Centric Problem Framing',
    subs: ['Subpoint 1', 'Subpoint 2', 'Subpoint 3'],
  },
  {
    title: 'Taste, Vision, and Aesthetic Judgement',
    subs: ['Subpoint 1', 'Subpoint 2', 'Subpoint 3'],
  },
  {
    title: 'Strategic Architecture & Tradeoffs',
    subs: ['Subpoint 1', 'Subpoint 2', 'Subpoint 3'],
  },
  {
    title: 'Ethics, Law, and Societal Impacts',
    subs: ['Subpoint 1', 'Subpoint 2', 'Subpoint 3'],
  },
  {
    title: 'Relationships & Trust Building',
    subs: ['Subpoint 1', 'Subpoint 2', 'Subpoint 3'],
  },
]

export default function AiLimitationsCarousel() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((i) => (i + 1) % points.length)
  const prev = () => setIndex((i) => (i - 1 + points.length) % points.length)

  const point = points[index]

  return (
    <div className="flex items-center gap-4">
      <button
        aria-label="Previous"
        onClick={prev}
        className="rounded-full p-2 hover:bg-gray-100"
      >
        <ArrowLeft className="h-4 w-4" />
      </button>
      <div className="relative w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={point.title}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
            className="space-y-2"
          >
            <h3 className="text-lg font-semibold">{point.title}</h3>
            <ul className="list-disc pl-5 text-sm space-y-1">
              {point.subs.map((sub, i) => (
                <li key={i}>{sub}</li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
      <button
        aria-label="Next"
        onClick={next}
        className="rounded-full p-2 hover:bg-gray-100"
      >
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  )
}
