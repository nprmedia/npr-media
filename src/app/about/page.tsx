'use client'

import StickyHeader from '@/components/global/Header'
import FooterSection from '@/components/global/Footer'

export default function AboutPage() {
  return (
    <section>
      <StickyHeader />
      <main className="relative w-full overflow-x-hidden">
        <section className="bg-[var(--color-bg-dark)] text-[var(--color-text-light)] pt-[calc(var(--header-height)+4rem)] pb-20 px-4 space-y-6 text-center">
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight">About NPR Media</h1>
          <p className="mx-auto max-w-2xl text-[clamp(0.9rem,1.6vw,1.125rem)] text-gray-300">We craft high-performance websites and systems that convert visitors into customers.</p>
        </section>
        <section className="py-20 px-4">
          <div className="mx-auto max-w-5xl md:grid md:grid-cols-2 md:gap-12 md:items-start">
            <div className="space-y-4">
              <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold">Our Mission</h2>
              <p className="text-[clamp(0.9rem,1.6vw,1rem)] text-gray-700">Our mission is to build fast, conversion-focused websites that help founders and teams scale efficiently.</p>
            </div>
            <div className="space-y-4 mt-8 md:mt-0">
              <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold">What Sets Us Apart</h2>
              <ul className="list-disc list-inside space-y-2 text-[clamp(0.9rem,1.6vw,1rem)] text-gray-700">
                <li>Production-grade builds delivered in weeks</li>
                <li>Designs informed by proven growth strategies</li>
                <li>Real-time collaboration with our experts</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="bg-[var(--color-bg-dark)] text-[var(--color-text-light)] py-20 px-4">
          <div className="mx-auto max-w-4xl text-center space-y-6">
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">Ready to accelerate your web presence?</h2>
            <p className="text-[clamp(0.9rem,1.6vw,1.125rem)] text-gray-300">Partner with NPR Media for websites that scale with your ambitions.</p>
            <a href="/contact" className="inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-lg transition hover:scale-105">Let&rsquo;s Talk</a>
          </div>
        </section>
      </main>
      <FooterSection />
    </section>
  )
}
