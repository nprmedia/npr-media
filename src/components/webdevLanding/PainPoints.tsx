'use client'
import { motion } from 'framer-motion'
import { AlertTriangle, Clock, Ban } from 'lucide-react'

interface Point {
  icon: React.ReactNode
  title: string
  text: string
}

const points: Point[] = [
  { icon: <AlertTriangle className="h-6 w-6" />, title: 'They Miss the Strategy', text: 'Most devs jump straight to code without understanding conversions.' },
  { icon: <Clock className="h-6 w-6" />, title: 'Slow and Overpriced', text: 'Bloated teams pad timelines and budgets.' },
  { icon: <Ban className="h-6 w-6" />, title: 'Not Built to Convert', text: 'Pretty sites that forget UX and revenue.' },
]

export default function PainPoints() {
  return (
    <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-[clamp(2rem,5vw,3rem)] font-bold"
      >
        The Problem With Most Web Dev Agencies…
      </motion.h2>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {points.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl bg-olive/60 p-6 text-center shadow-xl ring-1 ring-silver/20 backdrop-blur-md hover:shadow-2xl"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blood/20 text-blood">
              {p.icon}
            </div>
            <h3 className="mb-2 font-semibold text-[clamp(1.1rem,1.8vw,1.25rem)]">{p.title}</h3>
            <p className="text-sm text-charcoal">{p.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
