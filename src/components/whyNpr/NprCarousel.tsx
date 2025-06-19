'use client'

import { motion } from 'framer-motion'

const slides = [
  'Strategic tiering based on ROI',
  'Behavioral conversion engineering',
  'Custom UX psychology per vertical',
  'Thought partner on growth',
  'Senior-level oversight\u2014not prompts',
]

export default function NprCarousel() {
  return (
    <div className="h-screen overflow-hidden">
      <div className="flex h-full snap-x snap-mandatory overflow-x-scroll scroll-smooth">
        {slides.map((title) => (
          <motion.section
            key={title}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex min-h-screen min-w-full flex-col items-center justify-center snap-center space-y-4 bg-white px-6 text-center"
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
