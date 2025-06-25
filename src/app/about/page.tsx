'use client'

import StickyHeader from '@/components/global/Header'
import FooterSection from '@/components/global/Footer'

export default function AboutPage() {
  return (
    <section>
      <StickyHeader />
      <main className="relative w-full overflow-x-hidden bg-white text-black" style={{ paddingTop: 'calc(var(--header-height) + 1rem)' }}>
        {/* Hero */}
        <section className="bg-[var(--color-bg-dark)] text-[var(--color-text-light)] py-[clamp(5rem,10vw,8rem)] px-4 text-center">
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold">About NPR Media</h1>
          <p className="mx-auto mt-4 max-w-2xl text-[clamp(0.9rem,1.6vw,1.125rem)] text-gray-300">
            We craft high-performing websites and systems that help founders and startups scale faster.
          </p>
        </section>

        {/* Approach */}
        <section className="py-[clamp(4rem,8vw,6rem)] px-4">
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3 text-center">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Strategy First</h3>
              <p className="text-sm text-gray-600">Every build starts with clear goals so your site drives real revenue.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Senior Expertise</h3>
              <p className="text-sm text-gray-600">A compact team of vets ships faster than bloated agencies.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Proven Results</h3>
              <p className="text-sm text-gray-600">From SaaS dashboards to marketing sites, our work converts.</p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-[var(--color-card)] text-[var(--color-text-light)] py-[clamp(4rem,8vw,6rem)] px-4">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <h2 className="text-2xl font-bold">Meet the Team</h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              <div className="space-y-2">
                <div className="mx-auto h-32 w-32 rounded-full bg-gray-600" />
                <p className="font-semibold">Taylor</p>
                <p className="text-sm text-gray-300">Founder & Lead Dev</p>
              </div>
              <div className="space-y-2">
                <div className="mx-auto h-32 w-32 rounded-full bg-gray-600" />
                <p className="font-semibold">Jordan</p>
                <p className="text-sm text-gray-300">UX Engineer</p>
              </div>
              <div className="space-y-2">
                <div className="mx-auto h-32 w-32 rounded-full bg-gray-600" />
                <p className="font-semibold">Alex</p>
                <p className="text-sm text-gray-300">Growth Strategist</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-[clamp(4rem,8vw,6rem)] px-4 text-center">
          <h2 className="text-2xl font-bold">Ready to accelerate?</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-gray-600">Let&rsquo;s craft a website that scales with you. See how our process works.</p>
          <div className="pt-6">
            <a href="/pricing" className="inline-block rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:scale-105 hover:bg-[var(--color-accent-dark)]">
              View Pricing
            </a>
          </div>
        </section>
      </main>
      <FooterSection />
    </section>
  )
}
