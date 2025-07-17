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
  headline: 'Trusted by [blood]Founders Who Don’t Get a[/blood] [blood]Second Shot.[/blood]',
  subheadline: '70% of startups fail between years 2–5 — a weak website is one of the fastest ways to join them.',
  ctaText: 'Make Sure Your Website Isn’t the Reason',
  ctaLink: '/webdev-landing',
  // Preview image removed to avoid bundling binary assets
};