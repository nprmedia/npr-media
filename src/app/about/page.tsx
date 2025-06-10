import StickyHeader from '@/components/global/Header'
import FooterSection from '@/components/global/Footer'

export default function AboutPage() {
  return (
    <section>
      <StickyHeader />
      <main className="relative w-full overflow-x-hidden bg-[#1F1F1F] text-[#F2F3F4] py-[clamp(5rem,10vw,8rem)]">
        <div className="container mx-auto max-w-3xl px-4 space-y-6">
          <h1 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight">ABOUT NPR MEDIA</h1>
          <p className="text-[clamp(0.9rem,1.6vw,1.125rem)] text-gray-300">
            NPR Media crafts high-performance web experiences for startups and creators.
            Our team blends strategy, design, and engineering to deliver platforms
            that scale.
          </p>
        </div>
      </main>
      <FooterSection />
    </section>
  )
}
