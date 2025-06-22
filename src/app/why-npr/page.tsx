'use client'

import StickyHeader from '@/components/global/Header'
import FooterSection from '@/components/global/Footer'
import WaveDivider from '@/components/whyNpr/WaveDivider'
import AiCarousel from '@/components/whyNpr/AiCarousel'
import NprCarousel from '@/components/whyNpr/NprCarousel'
import FirmCarousel from '@/components/whyNpr/FirmCarousel'
import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Ban, CheckCircle2 } from 'lucide-react'

function TypingText({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const [display, setDisplay] = useState('')

  useEffect(() => {
    if (!isInView) return
    let i = 0
    const id = setInterval(() => {
      i += 1
      setDisplay(text.slice(0, i))
      if (i >= text.length) clearInterval(id)
    }, 40)
    return () => clearInterval(id)
  }, [isInView, text])

  return <div ref={ref}>{display}</div>
}

export default function WhyNprPage() {
  return (
    <section>
      <StickyHeader />
      <main
        className="relative w-full overflow-x-hidden bg-white text-gray-800 space-y-32 pt-[clamp(5rem,10vw,8rem)]"
      >
        {/* SECTION 1: NPR Media vs AI */}
        <section id="vs-ai" className="relative overflow-hidden py-24 bg-gradient-to-r from-cyan-700 to-indigo-700 text-white">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-10 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-r from-teal-500 to-indigo-600 opacity-30 blur-3xl" />
          </div>
          <div className="container mx-auto max-w-6xl space-y-16 px-4">
            <div className="text-center space-y-4">
              <h1 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight">AI Guesswork vs Human Strategy</h1>
              <p className="text-[clamp(0.9rem,1.6vw,1.125rem)] text-blue-200">AI doesn’t think. It predicts. That leaves you with generic output and zero accountability.</p>
              <p className="mx-auto max-w-xl text-sm text-blue-200">We craft every build from principle, not probability, owning the performance from concept to launch.</p>
            </div>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <AiCarousel />
              </motion.div>
              <div className="py-12 text-center">
                <h2 className="text-2xl font-bold">How NPR Media Delivers</h2>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <NprCarousel />
              </motion.div>
            </div>
            <p className="mx-auto mt-6 max-w-xl text-center text-sm text-blue-200">
              Leaving growth to algorithms leads to cookie-cutter results. Our strategists own every outcome from start to finish.
            </p>
            <hr className="my-16 h-px border-0 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-lg bg-white/10 p-4 shadow text-white"
              >
                <p className="font-semibold">“Client X wouldn’t exist if we used AI.”</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-lg bg-white/10 p-4 shadow text-white"
              >
                <p className="font-semibold">“Our last launch doubled signups after a human-led overhaul.”</p>
              </motion.div>
            </div>
            <hr className="my-16 h-px border-0 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative mt-12 flex items-start justify-center rounded-xl bg-white/5 p-6 shadow-lg text-white md:p-8"
            >
              <div className="w-1/2 pr-4 text-sm">
                <p className="mb-2 font-semibold">AI output</p>
                <div className="rounded bg-indigo-900 p-3 text-white">
                  <TypingText text="10 tips for SEO…" />
                </div>
              </div>
              <div className="absolute left-1/2 top-1/2 h-10 w-px -translate-y-1/2 transform bg-white/30" />
              <div className="w-1/2 pl-4 text-sm">
                <p className="mb-2 font-semibold">NPR Media approach</p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="rounded border border-white/30 bg-white/10 p-3 shadow-inner text-white"
                >
                  Bold hook → stat → CTA
                </motion.div>
              </div>
            </motion.div>
            <div className="pt-8 text-center">
              <a
                href="/pricing"
                className="inline-block rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow transition hover:scale-105"
              >
                Don’t get AI’d. Get outcomes.
              </a>
            </div>
            <p className="mt-10 text-center text-sm font-semibold text-gray-600">
              Next, see how we outperform typical agencies.
            </p>
          </div>
        </section>
        <WaveDivider className="text-gray-100" />

        {/* SECTION 2: NPR Media vs Other Firms */}
        <section id="vs-firms" className="relative overflow-hidden py-24 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute bottom-0 right-1/2 h-96 w-96 translate-x-1/2 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-30 blur-3xl" />
          </div>
          <div className="container mx-auto max-w-6xl space-y-16 px-4">
            <div className="text-center space-y-4">
              <h1 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight">Agency Bloat vs NPR Media</h1>
              <p className="text-[clamp(0.9rem,1.6vw,1.125rem)] text-gray-600">Most agencies sell time. We sell outcomes.</p>
              <p className="mx-auto max-w-xl text-sm text-gray-600">Big shops pad projects with junior talent and endless steps. Our senior strike team ships fast and owns the metrics.</p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FirmCarousel />
            </motion.div>
            <hr className="my-16 h-px border-0 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
            <div className="grid gap-8 text-sm md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-2 rounded-lg bg-white p-4 shadow text-gray-800"
              >
                <p className="font-semibold">What other firms drag you through</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <Ban className="h-4 w-4 text-pink-500" />
                    <span>4-week discovery calls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Ban className="h-4 w-4 text-pink-500" />
                    <span>$2k wireframes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Ban className="h-4 w-4 text-pink-500" />
                    <span>Slow handoffs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Ban className="h-4 w-4 text-pink-500" />
                    <span>No CRO testing</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-2 rounded-lg bg-white p-4 shadow text-gray-800"
              >
                <p className="font-semibold">How we keep projects moving</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-600" />
                    <span>Production-grade homepage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-600" />
                    <span>9-section CMS site</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-600" />
                    <span>SOP-aligned builds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-600" />
                    <span>Real-time revisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-600" />
                    <span>Vercel-level hosting</span>
                  </li>
                </ul>
              </motion.div>
            </div>
            <p className="mt-8 text-center text-sm font-semibold italic">“94% of our clients switch from other firms—and never go back.”</p>
            <div className="pt-8 text-center">
              <a
                href="/about"
                className="inline-block rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow transition hover:scale-105"
              >
                This time, don’t settle.
              </a>
            </div>
          </div>
        </section>
        <WaveDivider flip className="text-gray-100" />
      </main>
      <FooterSection />
    </section>
  )
}
