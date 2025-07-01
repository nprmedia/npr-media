'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'NPR Media turned our ad clicks into paying users within days.',
    author: 'SaaS Founder',
  },
  {
    quote: 'Our new site looks incredible and converts like crazy.',
    author: 'Ecommerce Director',
  },
  {
    quote: 'Fast, strategic and obsessed with results — exactly what we needed.',
    author: 'Consulting Partner',
  },
]

export default function Proof() {
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
          Trusted by Founders Across Industries
        </motion.h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl bg-neutral-100 p-6 shadow-xl ring-1 ring-black/5 hover:ring-blue-500/20"
            >
              <p className="mb-3 text-sm italic">“{t.quote}”</p>
              <p className="text-sm font-semibold">{t.author}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center text-sm text-neutral-600">
          25+ sites launched • &lt;10 day average turnaround
        </div>
      </div>
    </section>
  )
}
