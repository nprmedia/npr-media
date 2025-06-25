'use client';

import StickyHeader from '@/components/global/Header';
import FooterSection from '@/components/global/Footer';
import AboutHero from '@/components/about/Hero';
import MissionSection from '@/components/about/Mission';
import TeamSection from '@/components/about/Team';
import ContactSection from '@/components/homepage/ContactSection';

export default function AboutPage() {
  return (
    <section>
      <StickyHeader />
      <main className="relative w-full overflow-x-hidden bg-white text-black">
        <AboutHero />
        <MissionSection />
        <TeamSection />
        <ContactSection />
      </main>
      <FooterSection />
    </section>
  );
}
