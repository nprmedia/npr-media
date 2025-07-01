'use client'

import { motion } from 'framer-motion'
import { Code2, Smartphone, LayoutDashboard, Database, Timer } from 'lucide-react'

interface Offer {
  icon: React.ReactNode
  title: string
  text: string
}

const offers: Offer[] = [
  { icon: <Code2 className="h-6 w-6" />, title: 'Custom-coded frontend', text: 'Next.js + Tailwind excellence.' },
  { icon: <Smartphone className="h-6 w-6" />, title: 'Mobile-first design', text: 'Looks sharp on every device.' },
  { icon: <LayoutDashboard className="h-6 w-6" />, title: 'Strategy-backed layouts', text: 'Built to convert cold traffic.' },
  { icon: <Database className="h-6 w-6" />, title: 'CMS integration', text: 'Manage content without dev help.' },
  { icon: <Timer className="h-6 w-6" />, title: 'Fast turnaround', text: 'Launch weeks faster than big shops.' },
]

export default function OfferStack() {
  return (
    <section className="bg-neutral-50 py-24 text-black">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-[clamp(1.75rem,4vw,2.5rem)] font-bold"
        >
          What You’ll Get With NPR Media
        </motion.h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {offers.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5 hover:shadow-2xl"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200 text-neutral-700">
                {o.icon}
              </div>
              <h3 className="mb-1 text-lg font-semibold">{o.title}</h3>
              <p className="text-sm text-neutral-600">{o.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
