'use client'

import StickyHeader from '@/components/global/Header'
import FooterSection from '@/components/global/Footer'
import Image from 'next/image'

function CeoSection() {
  return (
    <section id="ceo" className="relative overflow-hidden text-white" style={{height:'60vh'}}> 
      <div className="absolute inset-0 grid grid-cols-3 gap-0"> 
        <div className="relative"><Image src="/logos/Article 1 - Template.png" alt="Article 1" fill className="object-cover" /></div>
        <div className="relative"><Image src="/logos/Article 2 - Template.png" alt="Article 2" fill className="object-cover" /></div>
        <div className="relative"><Image src="/logos/Article 3 - Template.png" alt="Article 3" fill className="object-cover" /></div>
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center space-y-4">
        <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">Message from our CEO</h2>
        <p className="text-[clamp(0.9rem,1.6vw,1.125rem)] max-w-xl">Our mission is to deliver exceptional value through human-focused strategy.</p>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <section>
      <StickyHeader />
      <main className="relative w-full overflow-x-hidden bg-white text-black" style={{ paddingTop: 'calc(var(--header-height) + 1rem)' }}>
        <CeoSection />
      </main>
      <FooterSection />
    </section>
  )
}
