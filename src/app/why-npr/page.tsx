'use client'

import StickyHeader from '@/components/global/Header'
import FooterSection from '@/components/global/Footer'
import Link from 'next/link'
import { motion } from 'framer-motion'

function AISection() {
  return (
    <section className="border-b bg-white text-black py-[clamp(4rem,8vw,6rem)] px-[clamp(1rem,4vw,2rem)] space-y-8">
      <div className="mx-auto max-w-4xl space-y-4 text-center">
        <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">NPR Media vs AI</h2>
        <p className="text-[clamp(0.9rem,1.6vw,1.125rem)] italic">{`AI doesn't think. It predicts. We build from principle, not probability.`}</p>
      </div>
      <div className="mx-auto max-w-5xl grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h3 className="font-semibold">{`What AI can't do`}</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>No strategic prioritization</li>
            <li>No creative foresight</li>
            <li>No brand context</li>
            <li>No performance ownership</li>
            <li>No ethics or accountability</li>
          </ul>
          <h3 className="font-semibold pt-4">What NPR does differently</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Strategic tiering based on ROI</li>
            <li>Behavioral conversion engineering</li>
            <li>Custom UX psychology per vertical</li>
            <li>Thought partner on growth</li>
            <li>Senior-level oversight—not prompts</li>
          </ul>
          <div className="pt-4 text-sm text-gray-600">
            <p>{"Our client's funnel lift of 30% wouldn't exist if we relied on generic AI copy."}</p>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="w-56 h-40 border rounded-md p-2 text-xs bg-gray-100 text-gray-600"
          >
            <p>10 tips for SEO...</p>
            <p className="mt-2 text-center">(AI output)</p>
          </motion.div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute -bottom-12 w-56 h-40 border rounded-md p-2 bg-black text-white"
          >
            <p className="font-semibold">Clear call-to-action</p>
            <p className="text-sm">Backed by data, built for conversion.</p>
            <p className="mt-2 text-center">(NPR build)</p>
          </motion.div>
        </div>
      </div>
      <div className="text-center pt-6">
        <Link href="/pricing" className="inline-block rounded-full bg-black px-6 py-2 text-white text-sm font-semibold hover:scale-105 transition">See Real Results</Link>
      </div>
    </section>
  )
}

function AgencySection() {
  return (
    <section className="bg-[var(--color-bg-dark)] text-[var(--color-text-light)] py-[clamp(4rem,8vw,6rem)] px-[clamp(1rem,4vw,2rem)] space-y-8">
      <div className="mx-auto max-w-4xl space-y-4 text-center">
        <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">NPR Media vs Other Firms</h2>
        <p className="text-[clamp(0.9rem,1.6vw,1.125rem)] italic">Most agencies sell time. We sell outcomes.</p>
      </div>
      <div className="mx-auto max-w-5xl overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2">Others</th>
              <th className="border-b p-2">NPR</th>
              <th className="border-b p-2">Your Gain</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Hidden fees</td>
              <td className="p-2">Pricing transparency</td>
              <td className="p-2">Know your costs</td>
            </tr>
            <tr>
              <td className="p-2">Junior talent</td>
              <td className="p-2">Senior specialists</td>
              <td className="p-2">Expert execution</td>
            </tr>
            <tr>
              <td className="p-2">Slow handoffs</td>
              <td className="p-2">Full stack dev & design</td>
              <td className="p-2">Faster launches</td>
            </tr>
            <tr>
              <td className="p-2">No CRO testing</td>
              <td className="p-2">Behavioral UX</td>
              <td className="p-2">Higher conversions</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-auto max-w-4xl space-y-4 text-sm">
        <h3 className="font-semibold">Typical agency bloat</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>4-week discovery calls</li>
          <li>$2k for wireframes</li>
          <li>Slow handoffs</li>
          <li>No CRO or testing baked in</li>
        </ul>
        <h3 className="font-semibold pt-4">NPR delivery stack</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Production-grade homepage</li>
          <li>9-section CMS site</li>
          <li>SOP-aligned builds</li>
          <li>Real-time revisions</li>
          <li>Vercel-level hosting</li>
        </ul>
        <p className="pt-4 font-semibold">{"94% of our clients switch from other firms—and never go back."}</p>
      </div>
      <div className="text-center pt-6">
        <Link href="/about" className="inline-block rounded-full bg-white px-6 py-2 text-black text-sm font-semibold hover:scale-105 transition">View Our Process</Link>
      </div>
    </section>
  )
}

export default function WhyNPRPage() {
  return (
    <section>
      <StickyHeader />
      <main className="relative w-full overflow-x-hidden bg-white text-black">
        <AISection />
        <AgencySection />
      </main>
      <FooterSection />
      <div className="fixed bottom-0 left-0 right-0 bg-black text-white text-center py-3 text-sm font-semibold">
        <Link href="/contact" className="hover:underline">{`Let's build what AI and other firms can't. Schedule Your Strategy Sprint`}</Link>
      </div>
    </section>
  )
}

