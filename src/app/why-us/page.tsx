'use client'

import StickyHeader from '@/components/global/Header'
import FooterSection from '@/components/global/Footer'
import TruthStack from '@/components/whyus/TruthStack'
import { truthStacks } from '@/content/whyus/truths'
import { motion, useScroll } from 'framer-motion'
import Link from 'next/link'

export default function WhyUsPage() {
  const { scrollYProgress } = useScroll()

  return (
    <section>
      <StickyHeader />
      <main className="relative w-full overflow-x-hidden bg-white text-black">
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="fixed left-0 right-0 top-16 h-1 origin-left bg-pink-500/70"
        />
        {truthStacks.map((stack, idx) => (
          <TruthStack key={idx} index={idx} {...stack} />
        ))}
        <CTASection />
      </main>
      <FooterSection />
    </section>
  )
}

function CTASection() {
  return (
    <section className="bg-gray-50 py-[clamp(5rem,10vw,8rem)] text-center">
      <div className="mx-auto max-w-2xl space-y-6 px-4">
        <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold">
          Don&apos;t fall for the hype. Build the system your business actually needs.
        </h2>
        <Link
          href="#booking"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-[clamp(1.25rem,3vw,1.5rem)] py-[clamp(0.6rem,1.2vw,0.75rem)] font-semibold text-black shadow hover:scale-105 hover:shadow-lg"
        >
          Book Your Strategy Call →
        </Link>
        <ul className="mx-auto mt-4 max-w-md space-y-1 text-left text-sm text-gray-700">
          <li>✅ We audit your current site for leaks</li>
          <li>✅ Show you where you&apos;re leaving money on the table</li>
          <li>✅ You leave with clarity — whether we work together or not</li>
        </ul>
      </div>
    </section>
  )
}
