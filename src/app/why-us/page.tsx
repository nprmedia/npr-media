'use client'

import StickyHeader from '@/components/global/Header'
import FooterSection from '@/components/global/Footer'
import TruthStack from '@/components/whyus/TruthStack'
import Testimonial from '@/components/whyus/Testimonial'
import { sequences, cta } from '@/content/whyUs'
import { motion, useScroll } from 'framer-motion'
import { useRef, useEffect } from 'react'

export default function WhyUsPage() {
  const progressRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: progressRef })

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', v => {
      if (progressRef.current) progressRef.current.style.setProperty('--progress', `${v}`)
      if (v > 0.95) console.log('all stacks viewed')
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  const startTimeRef = useRef<number>(Date.now())
  useEffect(() => {
    return () => {
      const timeSpent = Date.now() - startTimeRef.current
      console.log('time on why-us', timeSpent)
    }
  }, [])

  return (
    <section>
      <StickyHeader />
      <main className="relative w-full overflow-x-hidden bg-white text-black" ref={progressRef}>
        <motion.div className="fixed top-0 left-0 h-1 w-full bg-pink-600" style={{ scaleX: scrollYProgress }} />
        {sequences.map((seq, i) => (
          <>
            <TruthStack key={i} {...seq} />
            {i === 3 && <Testimonial />}
          </>
        ))}
        <motion.div
          className="mx-auto my-20 max-w-xl space-y-4 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold">{cta.headline}</h2>
          <button
            onClick={() => console.log('cta click')}
            className="relative inline-block rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg hover:brightness-110"
          >
            {cta.button}
            <span className="absolute inset-0 -z-10 animate-pulse rounded-full bg-gradient-to-r from-pink-600 to-purple-700 opacity-50" />
          </button>
          <ul className="mx-auto mt-4 list-none space-y-1 text-sm text-gray-600">
            {cta.bullets.map((b, i) => (
              <li key={i}>✅ {b}</li>
            ))}
          </ul>
        </motion.div>
      </main>
      <FooterSection />
    </section>
  )
}
