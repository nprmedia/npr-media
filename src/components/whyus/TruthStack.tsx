'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { microcopy } from '@/content/whyUs'

interface TruthStackProps {
  desire: string
  disillusion: string
  decision: string
}

export default function TruthStack({ desire, disillusion, decision }: TruthStackProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const card2Y = useTransform(scrollYProgress, [0, 0.5], ['100%', '0%'])
  const card3Y = useTransform(scrollYProgress, [0.5, 1], ['100%', '0%'])
  const opacity1 = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  return (
    <div ref={ref} className="relative h-[120vh] flex items-center justify-center">
      <div className="sticky top-[20vh] h-[60vh] w-full max-w-xl">
        <motion.div style={{ opacity: opacity1 }} className="absolute inset-0 z-30 grid place-items-center rounded-xl bg-white p-6 shadow-lg">
          <p className="text-center text-lg font-semibold text-black">{desire}</p>
        </motion.div>
        <motion.div style={{ y: card2Y }} className="absolute inset-0 z-20 grid place-items-center rounded-xl bg-gray-900/90 p-6 text-gray-200 backdrop-blur-md">
          <p className="text-center text-lg font-semibold">{disillusion}</p>
        </motion.div>
        <motion.div style={{ y: card3Y }} className="absolute inset-0 z-10 grid place-items-center rounded-xl bg-gradient-to-br from-pink-600 to-purple-700 p-6 text-white shadow-2xl">
          <p className="text-center text-lg font-semibold">
            {decision}
          </p>
          <p className="mt-2 text-sm text-gray-100 opacity-80">{microcopy}</p>
          <span className="pointer-events-none absolute bottom-2 right-3 text-xs text-white/60">Built by NPR Media</span>
        </motion.div>
      </div>
    </div>
  )
}
