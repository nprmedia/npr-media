'use client'

import StickyHeader from '@/components/global/Header'
import FooterSection from '@/components/global/Footer'
import ValuesCarousel from '@/components/about/ValuesCarousel'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <section>
      <StickyHeader />
      <main
        className="relative w-full overflow-x-hidden bg-[var(--color-bg-dark)] text-[var(--color-text-light)]"
        style={{ paddingTop: 'calc(var(--header-height) + 1rem)' }}
      >
        {/* Hero */}
        <section
          className="bg-[var(--color-bg-dark)] text-[var(--color-text-light)] py-[clamp(5rem,10vw,8rem)] px-4 text-center"
        >
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold">About NPR Media</h1>
          <p className="mx-auto mt-4 max-w-2xl text-[clamp(0.9rem,1.6vw,1.125rem)] text-gray-300">
            We craft high-performing websites and systems that help founders and startups scale faster.
          </p>
        </section>

        {/* Values */}
        <section className="relative overflow-hidden py-20 bg-white text-black">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-10 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-br from-[var(--color-accent)] via-pink-300 to-[var(--color-accent-dark)] opacity-20 blur-3xl" />
          </div>
          <div className="container mx-auto max-w-6xl px-4 md:grid md:grid-cols-2 md:items-center md:gap-8">
            <div className="pb-8 text-center md:pb-0 md:text-left space-y-2">
              <h2 className="text-3xl sm:text-4xl font-bold">Values, Culture & Beliefs</h2>
              <p className="text-sm text-gray-600">Principles that guide every build</p>
              <div className="pt-2">
                <a
                  href="/pricing"
                  className="inline-block rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] px-4 py-2 text-xs font-normal text-white shadow transition hover:scale-105"
                >
                  Work with us
                </a>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ValuesCarousel />
            </motion.div>
          </div>
        </section>

        {/* Approach */}
        <section className="bg-[var(--color-bg-dark)] text-[var(--color-text-light)] py-[clamp(4rem,8vw,6rem)] px-4">
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3 text-center">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Strategy First</h3>
              <p className="text-sm text-gray-400">Every build starts with clear goals so your site drives real revenue.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Senior Expertise</h3>
              <p className="text-sm text-gray-400">A compact team of vets ships faster than bloated agencies.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Proven Results</h3>
              <p className="text-sm text-gray-400">From SaaS dashboards to marketing sites, our work converts.</p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="relative bg-white text-black py-[clamp(4rem,8vw,6rem)] px-4">
          <div className="absolute inset-0 -z-10 grid grid-cols-1 sm:grid-cols-3">
            <img
              src="/logos/Article%201%20-%20Template.png"
              alt="Article 1"
              className="h-full w-full object-cover"
            />
            <img
              src="/logos/Article%202%20-%20Template.png"
              alt="Article 2"
              className="h-full w-full object-cover"
            />
            <img
              src="/logos/Article%203%20-%20Template.png"
              alt="Article 3"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <h2 className="text-2xl font-bold">Meet the Team</h2>
            <div className="flex justify-center">
              <div className="space-y-2">
                <div className="mx-auto h-32 w-32 rounded-full bg-gray-300" />
                <p className="font-normal">Taylor</p>
                <p className="text-sm text-gray-600">Founder & CEO</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[var(--color-bg-dark)] text-[var(--color-text-light)] py-[clamp(4rem,8vw,6rem)] px-4 text-center">
          <h2 className="text-2xl font-bold">Ready to accelerate?</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-gray-300">Let&rsquo;s craft a website that scales with you. See how our process works.</p>
          <div className="pt-6">
            <a href="/pricing" className="inline-block rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-normal text-white shadow-md transition hover:scale-105 hover:bg-[var(--color-accent-dark)]">
              View Pricing
            </a>
          </div>
        </section>
      </main>
      <FooterSection />
    </section>
  )
}
