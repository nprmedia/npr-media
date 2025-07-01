'use client'

import StickyHeader from '@/components/global/Header'
import FooterSection from '@/components/global/Footer'
import ValuesCarousel from '@/components/about/ValuesCarousel'
import { motion } from 'framer-motion'
import Image from 'next/image'
import CTAButton from '@/components/CTAButton'

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
          <p className="mx-auto mt-4 max-w-2xl text-[clamp(0.9rem,1.6vw,1.125rem)] text-silver">
            We craft high-performing websites and systems that help founders and startups scale faster.
          </p>
        </section>

        {/* Values */}
        <section className="relative overflow-hidden py-20 bg-antique text-charcoal">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-10 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-br from-[var(--color-accent)] via-blood to-[var(--color-accent-dark)] opacity-20 blur-3xl" />
          </div>
          <div className="container mx-auto max-w-6xl px-4 md:grid md:grid-cols-2 md:items-center md:gap-8">
            <div className="pb-8 text-center md:pb-0 md:text-left space-y-2">
              <h2 className="text-3xl sm:text-4xl font-bold">Values, Culture & Beliefs</h2>
              <p className="text-sm text-charcoal">Principles that guide every build</p>
              <div className="pt-2">
                <CTAButton href="/webdev-landing" event="cta-about-values" className="inline-block px-4 py-2 text-xs font-normal">
                  Work with us
                </CTAButton>
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
              <p className="text-sm text-olive">Every build starts with clear goals so your site drives real revenue.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Senior Expertise</h3>
              <p className="text-sm text-olive">A compact team of vets ships faster than bloated agencies.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Proven Results</h3>
              <p className="text-sm text-olive">From SaaS dashboards to marketing sites, our work converts.</p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="relative bg-antique text-charcoal py-[clamp(4rem,8vw,6rem)] px-4">
          <div className="pointer-events-none absolute inset-0 z-0 grid grid-cols-3 gap-0">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: "url('/logos/Article 1 - Template.png')",
                filter: 'grayscale(100%) sepia(20%) brightness(110%)',
              }}
            />
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: "url('/logos/Article 2 - Template.png')",
                filter: 'grayscale(100%) sepia(20%) brightness(110%)',
              }}
            />
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: "url('/logos/Article 3 - Template.png')",
                filter: 'grayscale(100%) sepia(20%) brightness(110%)',
              }}
            />
          </div>
          <div className="pointer-events-none absolute inset-0 z-10 bg-[#f8f3e3]/60" />
          <div className="relative z-20 mx-auto max-w-md text-center space-y-8">
            <h2 className="text-2xl font-bold">Meet the Team</h2>
            <div className="flex justify-center">
              <div className="space-y-2">
                <Image
                  src="/profile-placeholder.svg"
                  alt="Taylor portrait"
                  width={300}
                  height={400}
                  className="mx-auto h-64 w-48 rounded-md object-cover shadow-2xl shadow-black/40"
                />
                <p className="font-normal">Taylor</p>
                <p className="text-sm text-charcoal">Founder & CEO</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[var(--color-bg-dark)] text-[var(--color-text-light)] py-[clamp(4rem,8vw,6rem)] px-4 text-center">
          <h2 className="text-2xl font-bold">Ready to accelerate?</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-silver">Let&rsquo;s craft a website that scales with you. See how our process works.</p>
          <div className="pt-6">
            <CTAButton href="/webdev-landing" event="cta-about-final" className="inline-block px-6 py-3 text-sm font-normal">
              See Our Process
            </CTAButton>
          </div>
        </section>
      </main>
      <FooterSection />
    </section>
  )
}
