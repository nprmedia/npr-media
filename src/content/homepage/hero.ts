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
  subheadline: "We build websites that don't fail — you won't get a second chance.",
  ctaText: 'Book a Demo',
  ctaLink: '/webdev-landing',
  // Preview image removed to avoid bundling binary assets
};