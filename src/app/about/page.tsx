'use client'

import StickyHeader from '@/components/global/Header'
import FooterSection from '@/components/global/Footer'

export default function AboutPage() {
  return (
    <section>
      <StickyHeader />
      <main className="relative w-full overflow-x-hidden bg-white text-black">
        <section className="bg-[var(--color-bg-dark)] text-[var(--color-text-light)] py-[clamp(5rem,10vw,8rem)] px-[clamp(1rem,4vw,3rem)]">
          <div className="mx-auto max-w-4xl text-center space-y-4">
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold">About NPR Media</h1>
            <p className="text-[clamp(0.9rem,1.6vw,1.125rem)] text-gray-300">We craft high-performance websites and systems that help startups and founders grow faster.</p>
          </div>
        </section>
        <section className="py-[clamp(5rem,10vw,8rem)] px-[clamp(1rem,4vw,3rem)] space-y-12">
          <div className="mx-auto max-w-5xl space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold text-[#212121]">Our Mission</h2>
              <p className="text-gray-600 text-[clamp(0.9rem,1.4vw,1rem)]">Empowering teams with lean, conversion‑focused web solutions built on modern stacks.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-[var(--color-card)] p-6 text-[var(--color-text-light)] shadow-md">
                <h3 className="mb-2 text-lg font-semibold">Strategy First</h3>
                <p className="text-sm text-gray-300">Every project starts with clear goals so development directly supports growth.</p>
              </div>
              <div className="rounded-lg bg-[var(--color-card)] p-6 text-[var(--color-text-light)] shadow-md">
                <h3 className="mb-2 text-lg font-semibold">Senior Expertise</h3>
                <p className="text-sm text-gray-300">Our small team brings years of launch experience without the agency bloat.</p>
              </div>
              <div className="rounded-lg bg-[var(--color-card)] p-6 text-[var(--color-text-light)] shadow-md">
                <h3 className="mb-2 text-lg font-semibold">Results Obsessed</h3>
                <p className="text-sm text-gray-300">We measure success by conversions and revenue—not hours billed.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[var(--color-bg-dark)] text-[var(--color-text-light)] py-[clamp(5rem,10vw,8rem)] px-[clamp(1rem,4vw,3rem)]">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h2 className="text-2xl font-bold">Ready to Work With Us?</h2>
            <p className="text-gray-300 text-[clamp(0.9rem,1.4vw,1rem)]">Let’s plan a roadmap that turns your site into a growth engine.</p>
            <a href="/contact" className="inline-block rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] px-6 py-3 text-sm font-semibold text-white shadow transition hover:scale-105">Start a Conversation</a>
          </div>
        </section>
      </main>
      <FooterSection />
    </section>
  )
}
