'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { TruthSequence } from '@/content/whyus/sequences'

interface Props {
  sequence: TruthSequence
}

export default function TruthStack({ sequence }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-20% 0px -20% 0px' })

  const cardVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 }
    })
  }

  return (
    <div
      ref={ref}
      id={sequence.id}
      className="relative flex min-h-[80vh] items-center justify-center"
    >
      <div className="relative w-full max-w-md px-4 sm:px-0">
        <motion.div
          className="card-style pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-center rounded-xl bg-white p-6 text-center shadow-lg"
          variants={cardVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
        >
          <p className="text-xl font-semibold text-gray-800">{sequence.claim}</p>
        </motion.div>
        <motion.div
          className="card-style pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center rounded-xl bg-gray-800/90 p-6 text-center text-gray-100 backdrop-blur-sm"
          variants={cardVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={1}
        >
          <p className="text-xl font-semibold">{sequence.truth}</p>
        </motion.div>
        <motion.div
          className="pointer-events-auto relative flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 via-red-500 to-red-600 p-6 text-center text-white shadow-xl"
          variants={cardVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={2}
        >
          <p className="text-xl font-semibold">{sequence.counter}</p>
          <p className="mt-2 text-sm text-white/80">
            Built with the same frameworks used by $50k+ startup sites. No guesswork.
          </p>
          <span className="pointer-events-none absolute bottom-2 right-2 text-xs text-white/50">
            Built by NPR Media
          </span>
        </motion.div>
      </div>
    </div>
  )
}
