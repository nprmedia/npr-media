'use client'

import { finalCta } from '@/content/homepage/finalCta'
import Link from 'next/link'

export default function FinalCtaSection() {
  return (
      <section className="bg-gray-900 text-white px-[clamp(1rem,4vw,3rem)] py-[clamp(5rem,10vw,8rem)] text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">
            {finalCta.title}
          </h2>
          <Link
            href={finalCta.button.href}
            className="inline-block rounded-full bg-white text-black px-[clamp(1.25rem,3vw,1.5rem)] py-[clamp(0.6rem,1.2vw,0.75rem)] text-[clamp(0.8rem,1vw,0.9rem)] font-semibold shadow hover:bg-gray-200 transition"
          >
            {finalCta.button.label}
          </Link>
        </div>
      </section>
  )
}
