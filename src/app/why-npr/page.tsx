'use client'

import StickyHeader from '@/components/global/Header'
import FooterSection from '@/components/global/Footer'
import { motion } from 'framer-motion'

export default function WhyNprPage() {
  return (
    <section>
      <StickyHeader />
      <main className="relative w-full overflow-x-hidden bg-white text-black py-[clamp(5rem,10vw,8rem)] space-y-24">
        {/* SECTION 1: NPR Media vs AI */}
        <motion.section
          id="vs-ai"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl px-4 space-y-10"
        >
          <h1 className="text-center text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">
            NPR Media vs AI
          </h1>
          <p className="text-center text-gray-600 text-[clamp(0.9rem,1.6vw,1.125rem)] font-medium">
            AI doesn’t think. It predicts. We build from principle, not probability.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="mb-2 font-semibold">What AI can’t do</h2>
              <ul className="space-y-1 text-sm list-disc list-inside">
                <li>No strategic prioritization</li>
                <li>No creative foresight</li>
                <li>No brand context</li>
                <li>No performance ownership</li>
                <li>No ethics or accountability</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 font-semibold">How NPR delivers</h2>
              <ul className="space-y-1 text-sm list-disc list-inside">
                <li>Strategic tiering based on ROI</li>
                <li>Behavioral conversion engineering</li>
                <li>Custom UX psychology per vertical</li>
                <li>Thought partner on growth</li>
                <li>Senior-level oversight—not prompts</li>
              </ul>
            </div>
          </div>
          <div className="text-sm font-semibold italic text-gray-700">
            <p>&quot;Client X wouldn’t exist if we used AI&quot;</p>
            <p>&quot;Our last launch doubled signups after a human-led overhaul&quot;</p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative flex items-start justify-center bg-gray-50 p-4 rounded-lg shadow"
          >
            <div className="w-1/2 pr-2 text-sm">
              <p className="font-semibold mb-1">AI output</p>
              <div className="bg-gray-200 p-2 rounded">10 tips for SEO…</div>
            </div>
            <div className="w-1/2 pl-2 text-sm">
              <p className="font-semibold mb-1">NPR Media approach</p>
              <div className="bg-white p-2 rounded border">Bold hook → stat → CTA</div>
            </div>
          </motion.div>
          <div className="text-center pt-6">
            <a href="/pricing" className="inline-block rounded-full bg-black px-6 py-3 text-white text-sm font-semibold hover:scale-105 transition">
              Don’t get AI’d. Get outcomes.
            </a>
          </div>
        </motion.section>

        {/* SECTION 2: NPR Media vs Other Firms */}
        <motion.section
          id="vs-firms"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl px-4 space-y-10"
        >
          <h1 className="text-center text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">
            NPR Media vs Other Firms
          </h1>
          <p className="text-center text-gray-600 text-[clamp(0.9rem,1.6vw,1.125rem)] font-medium">
            Most agencies sell time. We sell outcomes.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="border px-3 py-2">Others</th>
                  <th className="border px-3 py-2">NPR Media</th>
                  <th className="border px-3 py-2">Your Gain</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2">Opaque pricing</td>
                  <td className="border px-3 py-2">Clear fixed rates</td>
                  <td className="border px-3 py-2">Budget certainty</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">Junior talent</td>
                  <td className="border px-3 py-2">Senior creators</td>
                  <td className="border px-3 py-2">Expert execution</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">Design-only focus</td>
                  <td className="border px-3 py-2">Strategic copy + UX</td>
                  <td className="border px-3 py-2">Higher conversions</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">Slow handoffs</td>
                  <td className="border px-3 py-2">Full stack dev</td>
                  <td className="border px-3 py-2">Faster launches</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">No CRO testing</td>
                  <td className="border px-3 py-2">Behavioral UX</td>
                  <td className="border px-3 py-2">Data-driven wins</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-2 text-sm">
            <p>Typical agency bloat: 4-week discovery calls, $2k wireframes, slow handoffs, no CRO testing.</p>
            <p className="font-semibold">Our delivery stack:</p>
            <ul className="list-disc list-inside">
              <li>Production-grade homepage</li>
              <li>9-section CMS site</li>
              <li>SOP-aligned builds</li>
              <li>Real-time revisions</li>
              <li>Vercel-level hosting</li>
            </ul>
            <p className="italic font-semibold">&quot;94% of our clients switch from other firms—and never go back.&quot;</p>
          </div>
          <div className="text-center pt-6">
            <a href="/about" className="inline-block rounded-full bg-black px-6 py-3 text-white text-sm font-semibold hover:scale-105 transition">
              This time, don’t settle.
            </a>
          </div>
        </motion.section>
      </main>
      <FooterSection />
    </section>
  )
}
