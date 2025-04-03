'use client'

import { finalCta } from '@/content/finalCta'
import FadeInSection from '@/components/FadeInSection'
import Link from 'next/link'

export default function FinalCtaSection() {
  return (
    <FadeInSection>
      <section className="bg-gray-900 text-white px-6 py-20 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            {finalCta.title}
          </h2>
          <Link
            href={finalCta.button.href}
            className="inline-block rounded-full bg-white text-black px-6 py-3 text-sm font-semibold shadow hover:bg-gray-200 transition"
          >
            {finalCta.button.label}
          </Link>
        </div>
      </section>
    </FadeInSection>
  )
}
