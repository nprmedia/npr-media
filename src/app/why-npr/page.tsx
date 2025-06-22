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
        className="relative w-full overflow-x-hidden bg-[var(--color-bg-dark)] text-[var(--color-text-light)] space-y-24"
        style={{ paddingTop: 'calc(var(--header-height) + 1rem)' }}
      >
        {/* SECTION 1: NPR Media vs AI */}
        <section
          id="vs-ai"
          className="relative overflow-hidden py-20 bg-[var(--color-bg-dark)] text-[var(--color-text-light)]"
        >
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-10 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-br from-[var(--color-accent)] via-pink-500 to-[var(--color-accent-dark)] opacity-30 blur-3xl" />
          </div>
          <div className="container mx-auto max-w-6xl space-y-12 px-4">
            <div className="text-center space-y-2">
              <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight">AI Guesswork vs Human Strategy</h1>
              <p className="text-[clamp(0.9rem,1.6vw,1.125rem)] text-gray-300">AI doesn’t think. It predicts. That leaves you with generic output and zero accountability.</p>
              <p className="mx-auto max-w-xl text-sm text-gray-300">We craft every build from principle, not probability, owning the performance from concept to launch.</p>
            </div>
            <div className="space-y-12">
              <div className="md:grid md:grid-cols-2 md:items-center md:gap-8">
                <div className="pb-8 text-center md:pb-0 md:text-left space-y-2">
                  <h2 className="text-3xl sm:text-4xl font-bold">What AI Can’t Do</h2>
                  <p className="text-sm text-gray-300">Where automation falls short</p>
                  <div className="pt-2">
                    <a
                      href="/pricing"
                      className="inline-block rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] px-4 py-2 text-xs font-semibold text-white shadow transition hover:scale-105"
                    >
                      View examples
                    </a>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <AiCarousel />
                </motion.div>
              </div>
              <div className="md:grid md:grid-cols-2 md:items-center md:gap-8">
                <div className="pb-8 text-center md:pb-0 md:text-left space-y-2">
                  <h2 className="text-3xl sm:text-4xl font-bold">How NPR Media Delivers</h2>
                  <p className="text-sm text-gray-300">Human-guided strategy for real results</p>
                  <div className="pt-2">
                    <a
                      href="/pricing"
                      className="inline-block rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] px-4 py-2 text-xs font-semibold text-white shadow transition hover:scale-105"
                    >
                      See our approach
                    </a>
                  </div>
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
            </div>
            <p className="mx-auto mt-6 max-w-xl text-center text-sm text-gray-300">
              Leaving growth to algorithms leads to cookie-cutter results. Our strategists own every outcome from start to finish.
            </p>
            <hr className="my-16 h-px border-0 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-xl bg-white/10 p-6 shadow-lg text-white"
              >
                <p className="font-semibold">“Client X wouldn’t exist if we used AI.”</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-xl bg-white/10 p-6 shadow-lg text-white"
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
                className="inline-block rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] px-6 py-3 text-sm font-semibold text-white shadow-md ring-1 ring-white/10 transition hover:scale-105"
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
        <section
          id="vs-firms"
          className="relative overflow-hidden py-20 bg-white text-black"
        >
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute bottom-0 right-1/2 h-96 w-96 translate-x-1/2 rounded-full bg-gradient-to-br from-[var(--color-accent)] via-pink-400 to-[var(--color-accent-dark)] opacity-30 blur-3xl" />
          </div>
          <div className="container mx-auto max-w-6xl space-y-12 px-4">
            <div className="md:grid md:grid-cols-2 md:items-center md:gap-8">
              <div className="text-center md:text-left space-y-4">
                <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight">Agency Bloat vs NPR Media</h1>
                <p className="text-[clamp(0.9rem,1.6vw,1.125rem)] text-gray-600">Most agencies sell time. We sell outcomes.</p>
                <p className="mx-auto max-w-xl text-sm text-gray-600 md:mx-0">Big shops pad projects with junior talent and endless steps. Our senior strike team ships fast and owns the metrics.</p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <FirmCarousel />
              </motion.div>
            </div>
            <hr className="my-16 h-px border-0 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
            <div className="grid gap-8 text-sm md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-2 rounded-xl bg-white p-6 shadow-md text-gray-800"
              >
                <p className="text-lg font-semibold">What other firms drag you through</p>
                <p className="text-sm text-gray-500">All the extras you don’t need</p>
                <div className="pt-2">
                  <a
                    href="/about"
                    className="inline-block rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] px-4 py-2 text-xs font-semibold text-white shadow transition hover:scale-105"
                  >
                    Choose better
                  </a>
                </div>
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
                className="space-y-2 rounded-xl bg-white p-6 shadow-md text-gray-800"
              >
                <p className="text-lg font-semibold">How we keep projects moving</p>
                <p className="text-sm text-gray-500">The NPR no-bloat process</p>
                <div className="pt-2">
                  <a
                    href="/contact"
                    className="inline-block rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] px-4 py-2 text-xs font-semibold text-white shadow transition hover:scale-105"
                  >
                    Start your project
                  </a>
                </div>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[var(--color-accent)]" />
                    <span>Production-grade homepage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[var(--color-accent)]" />
                    <span>9-section CMS site</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[var(--color-accent)]" />
                    <span>SOP-aligned builds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[var(--color-accent)]" />
                    <span>Real-time revisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[var(--color-accent)]" />
                    <span>Vercel-level hosting</span>
                  </li>
                </ul>
              </motion.div>
            </div>
            <p className="mt-8 text-center text-sm font-semibold italic">“94% of our clients switch from other firms—and never go back.”</p>
            <div className="pt-8 text-center">
              <a
                href="/about"
                className="inline-block rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] px-6 py-3 text-sm font-semibold text-white shadow-md ring-1 ring-black/10 transition hover:scale-105"
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
