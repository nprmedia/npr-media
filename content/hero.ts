// content/hero.ts
import type { HeroContent } from '@/types/hero'

export const hero: HeroContent = {
  headline: 'Stop Duct-Taping Your Startup Together',
  subheadline: 'You don’t need another template. You need strategy-backed execution — websites, systems, and workflows built to scale.',
  cta: {
    label: 'Show Me What You Build',
    href: '#services',
  },
  altCta: {
    label: 'Book a Strategy Call',
    href: '#contact',
  },
  image: {
    src: '/hero-preview.webp',
    alt: 'Preview of NPR Media platform interface',
  },
}
