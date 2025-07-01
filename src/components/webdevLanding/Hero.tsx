'use client'

import { motion } from 'framer-motion'

interface HeroProps {
  headline: string
  subheadline: string
  cta: string
}

export default function Hero({ headline, subheadline, cta }: HeroProps) {
  const handleClick = () => {
    const el = document.getElementById('cta')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2, duration: 0.6 } }),
  }

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-neutral-950 text-white">
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10"
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity }}
      >
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-40 blur-3xl" />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={{}} className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-20 text-center space-y-6">
        <motion.h1 variants={textVariants} custom={0} className="text-[clamp(2rem,6vw,3.5rem)] font-bold">
          {headline}
        </motion.h1>
        <motion.p variants={textVariants} custom={1} className="mx-auto max-w-2xl text-[clamp(1rem,2.4vw,1.5rem)] text-gray-300">
          {subheadline}
        </motion.p>
        <motion.button
          variants={textVariants}
          custom={2}
          onClick={handleClick}
          data-event="webdev-scroll-trigger"
          className="mx-auto mt-4 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-xl transition hover:scale-105"
        >
          {cta}
        </motion.button>
      </motion.div>
    </section>
  )
}
