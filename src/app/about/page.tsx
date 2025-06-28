'use client'

import StickyHeader from '@/components/global/Header'
import FooterSection from '@/components/global/Footer'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <section>
      <StickyHeader />
      <main
        className="relative w-full overflow-x-hidden bg-[var(--color-bg-dark)] text-[var(--color-text-light)]"
        style={{ paddingTop: 'calc(var(--header-height) + 1rem)' }}
      >
        {/* Hero */}
        <section className="bg-[var(--color-bg-dark)] text-[var(--color-text-light)] py-[clamp(5rem,10vw,8rem)] px-4 text-center">
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold">About NPR Media</h1>
          <p className="mx-auto mt-4 max-w-2xl text-[clamp(0.9rem,1.6vw,1.125rem)] text-gray-300">
            We craft high-performing websites and systems that help founders and startups scale faster.
          </p>
        </section>

        {/* Team */}
        <section className="relative bg-white text-black py-[clamp(4rem,8vw,6rem)] px-4 overflow-hidden">
          <div className="absolute inset-0 -z-10 grid grid-cols-3">
            <div className="relative">
              <Image src="/logos/Article 1 - Template.png" alt="Article 1" fill sizes="33vw" className="object-cover" />
            </div>
            <div className="relative">
              <Image src="/logos/Article 2 - Template.png" alt="Article 2" fill sizes="33vw" className="object-cover" />
            </div>
            <div className="relative">
              <Image src="/logos/Article 3 - Template.png" alt="Article 3" fill sizes="33vw" className="object-cover" />
            </div>
          </div>
          <div className="relative mx-auto max-w-4xl text-center space-y-8">
            <h2 className="text-2xl font-bold">Meet the Team</h2>
            <div className="flex justify-center">
              <div className="relative flex flex-col items-center space-y-2">
                <div className="relative" style={{ width: '15rem', height: '20rem' }}>
                  <div className="relative z-10 flex h-full w-full items-center justify-center rounded-md bg-gray-300 text-sm text-gray-600 shadow-2xl">
                    CEO
                  </div>
                </div>
                <p className="font-normal">Taylor</p>
                <p className="text-sm text-gray-600">Founder & CEO</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </section>
  )
}
