'use client'

import StickyHeader from '@/components/global/Header'
import FooterSection from '@/components/global/Footer'
import WaveDivider from '@/components/whyNpr/WaveDivider'
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
      <main className="relative w-full overflow-x-hidden bg-gradient-to-b from-white via-white to-gray-50 text-black space-y-32 pt-[clamp(5rem,10vw,8rem)]">
        {/* SECTION 1: NPR Media vs AI */}
        <section id="vs-ai" className="relative overflow-hidden py-24">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-10 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 opacity-30 blur-3xl" />
          </div>
          <div className="container mx-auto max-w-6xl space-y-16 px-4">
            <div className="text-center">
              <h1 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight">NPR Media vs AI</h1>
              <p className="mt-2 text-[clamp(0.9rem,1.6vw,1.125rem)] text-gray-700">AI doesn’t think. It predicts. We build from principle, not probability.</p>
            </div>
            <div className="grid gap-10 md:grid-cols-2 md:divide-x md:divide-gray-300">
              <motion.div
                initial={{ x: -60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-4 pr-6"
              >
                <h2 className="text-lg font-semibold">What AI can’t do</h2>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Ban className="h-4 w-4 text-red-500" />
                    <span>No strategic prioritization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Ban className="h-4 w-4 text-red-500" />
                    <span>No creative foresight</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Ban className="h-4 w-4 text-red-500" />
                    <span>No brand context</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Ban className="h-4 w-4 text-red-500" />
                    <span>No performance ownership</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Ban className="h-4 w-4 text-red-500" />
                    <span>No ethics or accountability</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ x: 60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-4 pl-6"
              >
                <h2 className="text-lg font-semibold">How NPR delivers</h2>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Strategic tiering based on ROI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Behavioral conversion engineering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Custom UX psychology per vertical</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Thought partner on growth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Senior-level oversight—not prompts</span>
                  </li>
                </ul>
              </motion.div>
            </div>
            <hr className="my-16 h-px border-0 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-lg bg-gray-50 p-4 shadow"
              >
                <p className="font-semibold">“Client X wouldn’t exist if we used AI.”</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-lg bg-gray-50 p-4 shadow"
              >
                <p className="font-semibold">“Our last launch doubled signups after a human-led overhaul.”</p>
              </motion.div>
            </div>
            <hr className="my-16 h-px border-0 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative mt-12 flex items-start justify-center rounded-xl bg-white p-6 shadow-lg md:p-8"
            >
              <div className="w-1/2 pr-4 text-sm">
                <p className="mb-2 font-semibold">AI output</p>
                <div className="rounded bg-gray-200 p-3">
                  <TypingText text="10 tips for SEO…" />
                </div>
              </div>
              <div className="absolute left-1/2 top-1/2 h-10 w-px -translate-y-1/2 transform bg-gray-300" />
              <div className="w-1/2 pl-4 text-sm">
                <p className="mb-2 font-semibold">NPR Media approach</p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="rounded border bg-gray-50 p-3 shadow-inner"
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
          </div>
        </section>
        <WaveDivider className="text-gray-100" />

        {/* SECTION 2: NPR Media vs Other Firms */}
        <section id="vs-firms" className="relative overflow-hidden border-t border-gray-200 py-24">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute bottom-0 right-1/2 h-96 w-96 translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 via-teal-400 to-green-300 opacity-30 blur-3xl" />
          </div>
          <div className="container mx-auto max-w-6xl space-y-16 px-4">
            <div className="text-center">
              <h1 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight">NPR Media vs Other Firms</h1>
              <p className="mt-2 text-[clamp(0.9rem,1.6vw,1.125rem)] text-gray-700">Most agencies sell time. We sell outcomes.</p>
            </div>
            <motion.div
              className="space-y-6"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.15 } },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {[
                {
                  other: 'Opaque pricing',
                  npr: 'Clear fixed rates',
                  gain: 'Budget certainty',
                },
                {
                  other: 'Junior talent',
                  npr: 'Senior creators',
                  gain: 'Expert execution',
                },
                {
                  other: 'Design-only focus',
                  npr: 'Strategic copy + UX',
                  gain: 'Higher conversions',
                },
                {
                  other: 'Slow handoffs',
                  npr: 'Full stack dev',
                  gain: 'Faster launches',
                },
                {
                  other: 'No CRO testing',
                  npr: 'Behavioral UX',
                  gain: 'Data-driven wins',
                },
              ].map((row, i) => (
                <motion.div
                  key={i}
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                  className="grid gap-4 rounded-lg border border-gray-200 bg-white/60 p-4 shadow md:grid-cols-3"
                >
                  <div>
                    <p className="text-xs font-semibold text-gray-600">Other Firms</p>
                    <p className="text-sm">{row.other}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600">NPR Media</p>
                    <p className="text-sm">{row.npr}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600">Your Gain</p>
                    <p className="text-sm">{row.gain}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <hr className="my-16 h-px border-0 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            <div className="grid gap-8 text-sm md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-2 rounded-lg bg-red-50/60 p-4 shadow"
              >
                <p className="font-semibold">What other firms drag you through</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <Ban className="h-4 w-4 text-red-600" />
                    <span>4-week discovery calls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Ban className="h-4 w-4 text-red-600" />
                    <span>$2k wireframes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Ban className="h-4 w-4 text-red-600" />
                    <span>Slow handoffs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Ban className="h-4 w-4 text-red-600" />
                    <span>No CRO testing</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-2 rounded-lg bg-green-50/60 p-4 shadow"
              >
                <p className="font-semibold">How we keep projects moving</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Production-grade homepage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>9-section CMS site</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>SOP-aligned builds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Real-time revisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
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
