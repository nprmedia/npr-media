'use client'

import StickyHeader from '@/components/global/Header'
import FooterSection from '@/components/global/Footer'
import Image from 'next/image'

export default function WhyUsPage() {
  return (
    <section>
      <StickyHeader />
      <main className="relative w-full overflow-x-hidden bg-white text-black">
        <header className="mx-auto max-w-6xl space-y-6 px-4 py-[clamp(5rem,10vw,8rem)] text-center">
          <h1 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">Why Choose NPR Media</h1>
          <p className="mx-auto max-w-3xl text-[clamp(0.9rem,1.6vw,1.125rem)] text-gray-700">
            Our human experts craft bespoke websites that outperform automated tools and stand out from the crowd.
          </p>
        </header>
        <section id="against-ai" className="bg-gray-50 py-[clamp(4rem,8vw,6rem)]">
          <div className="container mx-auto max-w-5xl space-y-8 px-4">
            <h2 className="text-center text-[clamp(1.5rem,3vw,2rem)] font-bold">Why We Beat AI</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2 text-center">
                <Image src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" alt="Brainstorming" width="400" height="260" className="mx-auto rounded-lg shadow-lg" />
                <p className="text-[clamp(0.8rem,1.2vw,0.9rem)] text-gray-700">Human insight tailors every pixel to real audiences.</p>
              </div>
              <div className="space-y-2 text-center">
                <Image src="https://images.unsplash.com/photo-1503389152951-9f343605f61e" alt="Design sketch" width="400" height="260" className="mx-auto rounded-lg shadow-lg" />
                <p className="text-[clamp(0.8rem,1.2vw,0.9rem)] text-gray-700">We iterate quickly with strategy that AI generators lack.</p>
              </div>
              <div className="space-y-2 text-center">
                <Image src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" alt="Testing" width="400" height="260" className="mx-auto rounded-lg shadow-lg" />
                <p className="text-[clamp(0.8rem,1.2vw,0.9rem)] text-gray-700">Accountability means constant refinement for performance.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="against-firms" className="py-[clamp(4rem,8vw,6rem)]">
          <div className="container mx-auto max-w-5xl space-y-8 px-4">
            <h2 className="text-center text-[clamp(1.5rem,3vw,2rem)] font-bold">Why We Beat Other Firms</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2 text-center">
                <Image src="https://images.unsplash.com/photo-1557804506-669a67965ba0" alt="Mock agency site" width="400" height="260" className="mx-auto rounded-lg shadow-lg" />
                <p className="text-[clamp(0.8rem,1.2vw,0.9rem)] text-gray-700">Lean, custom code outperforms bulky templates used elsewhere.</p>
              </div>
              <div className="space-y-2 text-center">
                <Image src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0" alt="Collaboration" width="400" height="260" className="mx-auto rounded-lg shadow-lg" />
                <p className="text-[clamp(0.8rem,1.2vw,0.9rem)] text-gray-700">We offer hands-on collaboration instead of one-size-fits-all packages.</p>
              </div>
              <div className="space-y-2 text-center">
                <Image src="https://images.unsplash.com/photo-1487611459768-bd414656ea10" alt="Fast deployment" width="400" height="260" className="mx-auto rounded-lg shadow-lg" />
                <p className="text-[clamp(0.8rem,1.2vw,0.9rem)] text-gray-700">Rapid launches keep you ahead while competitors crawl.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </section>
  )
}
