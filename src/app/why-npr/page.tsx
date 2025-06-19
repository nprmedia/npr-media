'use client'

import StickyHeader from '@/components/global/Header'
import FooterSection from '@/components/global/Footer'
import { motion } from 'framer-motion'

export default function WhyNprPage() {
  return (
    <section>
      <StickyHeader />
      <main className="relative w-full overflow-x-hidden bg-white text-black space-y-32 pt-[clamp(5rem,10vw,8rem)]">
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
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>No strategic prioritization</li>
                  <li>No creative foresight</li>
                  <li>No brand context</li>
                  <li>No performance ownership</li>
                  <li>No ethics or accountability</li>
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
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Strategic tiering based on ROI</li>
                  <li>Behavioral conversion engineering</li>
                  <li>Custom UX psychology per vertical</li>
                  <li>Thought partner on growth</li>
                  <li>Senior-level oversight—not prompts</li>
                </ul>
              </motion.div>
            </div>
            <hr className="my-16 border-gray-200" />
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
            <hr className="my-16 border-gray-200" />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative mt-12 flex items-start justify-center rounded-xl bg-white p-6 shadow-lg md:p-8"
            >
              <div className="w-1/2 pr-4 text-sm">
                <p className="mb-2 font-semibold">AI output</p>
                <div className="rounded bg-gray-200 p-3">10 tips for SEO…</div>
              </div>
              <div className="absolute left-1/2 top-1/2 h-10 w-px -translate-y-1/2 transform bg-gray-300" />
              <div className="w-1/2 pl-4 text-sm">
                <p className="mb-2 font-semibold">NPR Media approach</p>
                <div className="rounded border bg-gray-50 p-3">Bold hook → stat → CTA</div>
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
            <div className="overflow-x-auto">
              <table className="w-full border-separate border-spacing-x-0 text-sm md:border-spacing-x-6">
                <thead>
                  <tr className="text-left text-gray-600">
                    <th className="pb-2">Others</th>
                    <th className="pb-2">NPR Media</th>
                    <th className="pb-2">Your Gain</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr>
                    <td className="py-3">Opaque pricing</td>
                    <td className="py-3">Clear fixed rates</td>
                    <td className="py-3">Budget certainty</td>
                  </tr>
                  <tr>
                    <td className="py-3">Junior talent</td>
                    <td className="py-3">Senior creators</td>
                    <td className="py-3">Expert execution</td>
                  </tr>
                  <tr>
                    <td className="py-3">Design-only focus</td>
                    <td className="py-3">Strategic copy + UX</td>
                    <td className="py-3">Higher conversions</td>
                  </tr>
                  <tr>
                    <td className="py-3">Slow handoffs</td>
                    <td className="py-3">Full stack dev</td>
                    <td className="py-3">Faster launches</td>
                  </tr>
                  <tr>
                    <td className="py-3">No CRO testing</td>
                    <td className="py-3">Behavioral UX</td>
                    <td className="py-3">Data-driven wins</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr className="my-16 border-gray-200" />
            <div className="grid gap-8 text-sm md:grid-cols-2">
              <div className="space-y-2">
                <p className="font-semibold">Typical agency bloat:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>4-week discovery calls</li>
                  <li>$2k wireframes</li>
                  <li>Slow handoffs</li>
                  <li>No CRO testing</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="font-semibold">Our delivery stack:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Production-grade homepage</li>
                  <li>9-section CMS site</li>
                  <li>SOP-aligned builds</li>
                  <li>Real-time revisions</li>
                  <li>Vercel-level hosting</li>
                </ul>
              </div>
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
      </main>
      <FooterSection />
    </section>
  )
}
