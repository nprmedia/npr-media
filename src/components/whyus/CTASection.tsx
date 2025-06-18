'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="bg-[var(--color-bg-dark)] text-[var(--color-text-light)] py-20 px-4 text-center">
      <div className="mx-auto max-w-2xl space-y-6">
        <h2 className="text-2xl font-bold">
          Don’t fall for the hype. Build the system your business actually needs.
        </h2>
        <Link
          href="/contact"
          className="relative inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black shadow-md transition hover:scale-105"
        >
          Book Your Strategy Call <ArrowRight className="h-4 w-4" />
        </Link>
        <ul className="mt-4 space-y-1 text-sm text-gray-300">
          <li>✅ We audit your current site for leaks</li>
          <li>✅ Show you where you’re leaving money on the table</li>
          <li>✅ You leave with clarity — whether we work together or not</li>
        </ul>
      </div>
    </section>
  )
}
