'use client'

import StickyHeader from '@/components/global/Header'
import FooterSection from '@/components/global/Footer'
import TruthStack from '@/components/whyus/TruthStack'
import CTASection from '@/components/whyus/CTASection'
import { truthSequences } from '@/content/whyus/sequences'
import { usePathname } from 'next/navigation'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'

export default function WhyUsPage() {
  const pathname = usePathname()
  const containerRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: containerRef })

  return (
    <section>
      <StickyHeader />
      <main
        key={pathname}
        ref={containerRef}
        className="relative w-full overflow-x-hidden bg-white text-black"
      >
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="fixed left-0 top-0 h-1 w-full origin-left bg-[var(--color-accent)]"
        />
        {truthSequences.map((seq, i) => (
          <TruthStack key={seq.id} sequence={seq} index={i} />
        ))}
        <CTASection />
      </main>
      <FooterSection />
    </section>
  )
}
