'use client'
import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'NPR Media delivered a polished site that doubled our demo sign-ups.',
    name: 'Sarah K.',
    title: 'SaaS Founder',
  },
  {
    quote: 'Our new DTC store went from zero to profitable in weeks.',
    name: 'Mike L.',
    title: 'Ecommerce Owner',
  },
  {
    quote: 'Fast, strategic, and conversion-focused. Exactly what we needed.',
    name: 'Ana R.',
    title: 'Marketing Director',
  },
]

export default function Proof() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-[clamp(2rem,5vw,3rem)] font-bold"
        >
          Trusted by Founders Across Industries
        </motion.h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-antique/70 p-6 shadow-xl ring-1 ring-umber/20 backdrop-blur-md hover:shadow-2xl"
            >
              <p className="text-sm italic">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-4 font-semibold">{t.name}</p>
              <p className="text-xs text-charcoal">{t.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
