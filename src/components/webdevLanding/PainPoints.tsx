'use client'

import { motion } from 'framer-motion'
import { AlertCircle, Clock, Ban } from 'lucide-react'

interface PainPoint {
  icon: React.ReactNode
  title: string
  text: string
}

const points: PainPoint[] = [
  {
    icon: <AlertCircle className="h-6 w-6" />,
    title: 'They Miss the Strategy',
    text: 'Most shops build first and ask questions later.',
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Slow and Overpriced',
    text: 'Bloated teams drag out timelines and costs.',
  },
  {
    icon: <Ban className="h-6 w-6" />,
    title: 'Not Built to Convert',
    text: 'Pretty sites alone rarely drive revenue.',
  },
]

export default function PainPoints() {
  return (
    <section className="bg-white py-24 text-black">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-[clamp(1.75rem,4vw,2.5rem)] font-bold"
        >
          The Problem With Most Web Dev Agencies…
        </motion.h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl bg-neutral-100 p-6 text-center shadow-xl hover:shadow-2xl"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-200 text-neutral-700">
                {p.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{p.title}</h3>
              <p className="text-sm text-neutral-600">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
