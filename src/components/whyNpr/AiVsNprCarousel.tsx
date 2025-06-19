'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const slides = [
  {
    type: 'ai',
    title: 'Human-Centric Problem Framing',
    subs: ['Subpoint 1', 'Subpoint 2', 'Subpoint 3'],
  },
  {
    type: 'ai',
    title: 'Taste, Vision, and Aesthetic Judgement',
    subs: ['Subpoint 1', 'Subpoint 2', 'Subpoint 3'],
  },
  {
    type: 'ai',
    title: 'Strategic Architecture & Tradeoffs',
    subs: ['Subpoint 1', 'Subpoint 2', 'Subpoint 3'],
  },
  {
    type: 'ai',
    title: 'Ethics, Law, and Societal Impacts',
    subs: ['Subpoint 1', 'Subpoint 2', 'Subpoint 3'],
  },
  {
    type: 'ai',
    title: 'Relationships & Trust Building',
    subs: ['Subpoint 1', 'Subpoint 2', 'Subpoint 3'],
  },
  {
    type: 'npr',
    title: 'How NPR delivers',
    bullets: [
      'Strategic tiering based on ROI',
      'Behavioral conversion engineering',
      'Custom UX psychology per vertical',
      'Thought partner on growth',
      'Senior-level oversight\u2014not prompts',
    ],
  },
] as const

type Slide = (typeof slides)[number]

export default function AiVsNprCarousel() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((i) => (i + 1) % slides.length)
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)

  const slide: Slide = slides[index]

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-white" />
      <div className="mx-auto w-full max-w-lg p-6 text-center space-y-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.title}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold">{slide.title}</h2>
            {slide.type === 'ai' ? (
              <ul className="list-disc space-y-1 text-left text-sm pl-5">
                {slide.subs.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            ) : (
              <ul className="space-y-1 text-left text-sm">
                {slide.bullets!.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-6">
        <button
          aria-label="Previous"
          onClick={prev}
          className="rounded-full p-2 hover:bg-gray-100"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          aria-label="Next"
          onClick={next}
          className="rounded-full p-2 hover:bg-gray-100"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
