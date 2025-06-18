'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import type { TruthStackData } from '@/content/whyus/truths'

interface Props extends TruthStackData {
  index: number
}

export default function TruthStack({ desire, disillusion, decision, index }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const desireOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const disillusionOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1])
  const decisionOpacity = useTransform(scrollYProgress, [0.6, 1], [0, 1])

  const desireY = useTransform(scrollYProgress, [0, 0.3], [0, -50])
  const disillusionY = useTransform(scrollYProgress, [0.3, 0.6], [50, 0])
  const decisionY = useTransform(scrollYProgress, [0.6, 1], [50, 0])

  return (
    <section ref={ref} className="relative h-[200vh]">
      <div className="sticky top-20 flex h-[80vh] items-center justify-center">
        <motion.div
          style={{ opacity: desireOpacity, y: desireY, zIndex: 30 - index }}
          className="absolute flex w-[min(90%,500px)] flex-col items-center rounded-xl bg-white p-6 text-center shadow-lg"
        >
          <p className="text-lg font-semibold">{desire}</p>
        </motion.div>
        <motion.div
          style={{ opacity: disillusionOpacity, y: disillusionY, zIndex: 20 - index }}
          className="absolute flex w-[min(90%,500px)] flex-col items-center rounded-xl bg-gray-800/90 p-6 text-center text-gray-100 backdrop-blur-sm"
        >
          <p className="text-lg font-semibold">{disillusion}</p>
        </motion.div>
        <motion.div
          style={{ opacity: decisionOpacity, y: decisionY, zIndex: 10 - index }}
          className="relative flex w-[min(90%,500px)] flex-col items-center rounded-xl bg-gradient-to-br from-pink-500 to-red-600 p-6 text-center text-white shadow-xl"
        >
          <p className="text-lg font-semibold">{decision}</p>
          <p className="mt-2 text-sm text-white/80">
            Built with the same frameworks used by $50k+ startup sites. No guesswork.
          </p>
          <span className="pointer-events-none absolute bottom-2 right-2 text-xs font-semibold text-white/40">
            Built by NPR Media
          </span>
        </motion.div>
      </div>
    </section>
  )
}
