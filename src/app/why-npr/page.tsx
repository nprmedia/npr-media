'use client'

import StickyHeader from '@/components/global/Header'
import FooterSection from '@/components/global/Footer'
import ScrollCue from '@/components/global/ScrollCue'
import WaveDivider from '@/components/whyNpr/WaveDivider'
import AiCarousel from '@/components/whyNpr/AiCarousel'
import NprCarousel from '@/components/whyNpr/NprCarousel'
import FirmCarousel from '@/components/whyNpr/FirmCarousel'
import FinalCTA from '@/components/sections/FinalCTA'
import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Ban, CheckCircle2 } from 'lucide-react'
import { routes } from '@/lib/routes'

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
              <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight">Why Human Strategy Beats AI Guesswork</h1>
              <p className="text-[clamp(0.9rem,1.6vw,1.125rem)] text-gray-300">AI can parse data but it can&rsquo;t read minds or context.</p>
              <p className="mx-auto max-w-xl text-sm text-gray-300">Our strategists apply lived experience and own the results from concept to launch.</p>
            </div>
            <div className="space-y-12">
              <div className="md:grid md:grid-cols-2 md:items-center md:gap-8">
                <div className="pb-8 text-center md:pb-0 md:text-left space-y-2">
                  <h2 className="text-3xl sm:text-4xl font-bold">What AI Can’t Do</h2>
                  <p className="text-sm text-gray-300">Where automation simply can&rsquo;t compete</p>
                  <div className="pt-2">
                    <a
                      href="/pricing"
                      className="inline-block rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] px-4 py-2 text-xs font-semibold text-white shadow transition hover:scale-105"
                    >
                      See the difference
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
              <div className="space-y-1 text-center">
                <h2 className="text-xl font-bold text-gray-100">Here&rsquo;s where we step in</h2>
                <p className="text-sm text-gray-400">Real humans refine the data and own the outcome.</p>
                <ScrollCue href="#npr-delivers" className="mx-auto mt-2 text-[var(--color-accent)]" />
              </div>
              <div id="npr-delivers" className="md:grid md:grid-cols-2 md:items-center md:gap-8">
                <div className="pb-8 text-center md:pb-0 md:text-left space-y-2">
                  <h2 className="text-3xl sm:text-4xl font-bold">How NPR Media Delivers</h2>
                  <p className="text-sm text-gray-300">Hands-on strategy that actually moves the needle</p>
                  <div className="pt-2">
                    <a
                      href="/pricing"
                      className="inline-block rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] px-4 py-2 text-xs font-semibold text-white shadow transition hover:scale-105"
                    >
                      Explore our approach
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
              Leaving growth to algorithms only repeats old mistakes. We build every campaign hands-on and measure success by your metrics.
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
            <p className="mt-6 text-center text-sm text-gray-600">Skip the bloat and keep momentum with a senior crew measured on outcomes.</p>
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
              AI isn&rsquo;t your only risk. Bloated agencies drain budgets and momentum.
              Keep scrolling to see how our lean team drives faster wins.
            </p>
            <ScrollCue href="#vs-firms" className="mx-auto mt-4 text-[var(--color-accent)]" />
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
                <p className="text-[clamp(0.9rem,1.6vw,1.125rem)] text-gray-600">AI tools won&rsquo;t own your numbers&mdash;and neither will bloated agencies. While others bill hours, we deliver outcomes.</p>
                <p className="mx-auto max-w-xl text-sm text-gray-600 md:mx-0">Large firms pad projects with juniors and endless steps. Our senior strike team ships fast and stands behind every metric.</p>
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
            <p className="text-center text-sm font-semibold text-gray-500">Here&rsquo;s how we do it differently.</p>
            <div className="grid gap-8 text-sm md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-2 rounded-xl bg-white p-6 shadow-md text-gray-800"
              >
                <p className="text-lg font-semibold">What other firms drag you through</p>
                <p className="text-sm text-gray-500">Extras you don&rsquo;t actually need</p>
                <div className="pt-2">
                  <a
                    href="/about"
                    className="inline-block rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] px-4 py-2 text-xs font-semibold text-white shadow transition hover:scale-105"
                  >
                    Break free
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
                    href={routes.contact}
                    className="inline-block rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] px-4 py-2 text-xs font-semibold text-white shadow transition hover:scale-105"
                  >
                    Start winning
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
            <ScrollCue href="#footer" className="mx-auto mt-4 text-[var(--color-accent)]" />
          </div>
        </section>
        <WaveDivider flip className="text-gray-100" />
      </main>
      <FinalCTA />
      <FooterSection />
    </section>
  )
}
