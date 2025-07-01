'use client'

import { useEffect, useState } from 'react'
import Hero from '@/components/webdevLanding/Hero'
import PainPoints from '@/components/webdevLanding/PainPoints'
import OfferStack from '@/components/webdevLanding/OfferStack'
import Proof from '@/components/webdevLanding/Proof'
import PricingPreview from '@/components/webdevLanding/PricingPreview'
import FinalCTA from '@/components/webdevLanding/FinalCTA'

interface Content {
  hero: { headline: string; subheadline: string; cta: string }
}

const defaultContent: Content = {
  hero: {
    headline: 'Web Development That Converts Cold Clicks Into Clients',
    subheadline:
      'We build elite, conversion-optimized sites for SaaS startups, DTC brands, and professional services firms.',
    cta: 'Get a Free Strategy Mockup',
  },
}

export default function WebdevLandingPage() {
  const [content, setContent] = useState<Content>(defaultContent)

  useEffect(() => {
    async function loadContent() {
      if (process.env.NEXT_PUBLIC_CMS === 'true') {
        try {
          const mod = await import('@/content/landing/webdev')
          if (mod?.content) {
            setContent({ ...defaultContent, ...mod.content })
          }
        } catch {
          // ignore missing file
        }
      }
    }
    loadContent()
  }, [])

  return (
    <main className="scroll-smooth">
      <Hero {...content.hero} />
      <PainPoints />
      <OfferStack />
      <Proof />
      <PricingPreview />
      <FinalCTA />
    </main>
  )
}
