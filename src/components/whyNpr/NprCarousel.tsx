'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  'Strategic tiering based on ROI',
  'Behavioral conversion engineering',
  'Custom UX psychology per vertical',
  'Thought partner on growth',
  'Senior-level oversight\u2014not prompts',
]

export default function NprCarousel() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((index + 1) % slides.length)
  const prev = () => setIndex((index - 1 + slides.length) % slides.length)

  return (
    <div className="relative mx-auto flex max-w-md flex-col items-center justify-center space-y-4">
      <div className="relative h-40 w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex items-center justify-center text-center"
          >
            <h2 className="text-2xl font-bold">{slides[index]}</h2>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex items-center gap-4">
        <button
          aria-label="Previous"
          onClick={prev}
          className="rounded-full bg-gray-200 p-2 hover:bg-gray-300"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          aria-label="Next"
          onClick={next}
          className="rounded-full bg-gray-200 p-2 hover:bg-gray-300"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
