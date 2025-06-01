// src/content/homepage/hero.ts

export interface HeroProps {
  headline: string;
  subheadline?: string;
  ctaText?: string;
  ctaLink?: string;
  image?: {
    url: string;
    alt?: string;
    width?: number;
    height?: number;
  };
}

export const hero: HeroProps = {
  headline: 'Automate Reporting. Save 12+ Hours Weekly.',
  subheadline: 'Built for SaaS teams who want cleaner dashboards and less spreadsheet chaos. Try it free — no card required.',
  ctaText: 'Start Free Trial',
  ctaLink: '/signup',
  image: {
    url: '/hero-preview.png',
    alt: 'Product demo screenshot',
    width: 800,
    height: 600,
  },
};