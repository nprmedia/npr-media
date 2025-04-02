'use client'

import Link from 'next/link'
import { hero } from '@/content/hero'
import FadeInSection from '@/components/FadeInSection'

export default function Hero() {
  return (
    <FadeInSection>
      <section
        id="hero"
        className="relative flex items-center justify-center text-center px-6 py-32 bg-gradient-to-b from-white to-slate-50 dark:from-black dark:to-gray-900"
      >
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            {hero.headline}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href={hero.cta.href}
              className="px-6 py-3 text-sm font-semibold bg-black text-white rounded-full shadow hover:bg-gray-800 transition"
            >
              {hero.cta.label}
            </Link>
            <Link
              href={hero.altCta.href}
              className="px-6 py-3 text-sm font-semibold border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {hero.altCta.label}
            </Link>
          </div>
        </div>
      </section>
    </FadeInSection>
  )
}
