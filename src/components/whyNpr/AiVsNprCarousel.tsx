'use client'

import { motion } from 'framer-motion'

const aiSlides = [
  'Human-Centric Problem Framing',
  'Taste, Vision, and Aesthetic Judgement',
  'Strategic Architecture & Tradeoffs',
  'Ethics, Law, and Societal Impacts',
  'Relationships & Trust Building',
]

const nprSlides = [
  'Strategic tiering based on ROI',
  'Behavioral conversion engineering',
  'Custom UX psychology per vertical',
  'Thought partner on growth',
  'Senior-level oversight\u2014not prompts',
]

export default function AiVsNprCarousel() {
  return (
    <div className="h-screen overflow-hidden">
      <div className="h-full snap-y snap-mandatory overflow-y-scroll scroll-smooth">
        {aiSlides.map((title) => (
          <motion.section
            key={title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex min-h-screen flex-col items-center justify-center snap-start px-6 text-center space-y-4 bg-white"
          >
            <h2 className="text-2xl font-bold">{title}</h2>
            <ul className="list-disc space-y-1 text-left text-sm pl-5">
              <li>Subpoint 1</li>
              <li>Subpoint 2</li>
              <li>Subpoint 3</li>
            </ul>
          </motion.section>
        ))}
        {nprSlides.map((title) => (
          <motion.section
            key={title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex min-h-screen flex-col items-center justify-center snap-start px-6 text-center space-y-4 bg-white"
          >
            <h2 className="text-2xl font-bold">{title}</h2>
          </motion.section>
        ))}
      </div>
    </div>
  )
}
