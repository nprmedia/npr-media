'use client'
import { motion } from 'framer-motion'
import { Code, Smartphone, LayoutDashboard, Rocket, Database } from 'lucide-react'

const items = [
  { icon: Code, label: 'Custom-coded frontend', text: 'Next.js + Tailwind for blazing speed' },
  { icon: Smartphone, label: 'Mobile-first design', text: 'Optimized UX across all devices' },
  { icon: LayoutDashboard, label: 'Strategy-backed layouts', text: 'Built to convert, not just look good' },
  { icon: Database, label: 'CMS integration', text: 'Easily manage content at scale' },
  { icon: Rocket, label: 'Fast turnaround', text: 'Launch weeks faster than typical shops' },
]

export default function OfferStack() {
  return (
    <section className="bg-antique py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-[clamp(2rem,5vw,3rem)] font-bold"
        >
          What You’ll Get With NPR Media
        </motion.h2>
        <div className="mt-12 grid gap-8 md:grid-cols-5">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-antique/70 p-6 text-center shadow-xl ring-1 ring-black/10 backdrop-blur-md hover:shadow-2xl"
            >
              <item.icon className="mx-auto mb-3 h-6 w-6 text-blood" />
              <h3 className="mb-1 font-semibold text-[clamp(1rem,1.6vw,1.25rem)]">{item.label}</h3>
              <p className="text-sm text-charcoal">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
