'use client'
import { motion } from 'framer-motion'

interface HeroProps {
  headline: string
  subheadline: string
  cta: string
}

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function Hero({ headline, subheadline, cta }: HeroProps) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-antique via-blood to-blood text-center text-charcoal">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        className="mx-auto max-w-4xl px-6 md:px-12 lg:px-20"
      >
        <motion.h1
          variants={textVariants}
          className="text-[clamp(2.5rem,6vw,4rem)] text-blood font-extrabold"
        >
          {headline}
        </motion.h1>
        <motion.p
          variants={textVariants}
          className="mt-4 text-[clamp(1rem,2.2vw,1.5rem)]"
        >
          {subheadline}
        </motion.p>
        <motion.a
          variants={textVariants}
          href="#cta"
          data-event="webdev-scroll-trigger"
          className="mt-8 inline-block rounded-full bg-blood px-6 py-3 font-semibold text-charcoal shadow-lg ring-1 ring-silver/20 transition hover:scale-105 hover:bg-crimson"
        >
          {cta}
        </motion.a>
      </motion.div>
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-silver/20 to-transparent"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </section>
  )
}
