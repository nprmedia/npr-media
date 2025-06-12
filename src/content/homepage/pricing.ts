// src/content/homepage/pricing.ts

export interface PricingTier {
  title: string;
  price: string;
  highlight?: boolean;
  microcopy: string;
  description: string;
  features: string[];
  cta: string;
}

export const pricing = {
  headline: 'Transparent packages for growing teams with room for custom enterprise scopes.',
  tiers: [
    {
      title: 'Launch Pad',
      price: '$4,000',
      microcopy: 'Ideal for SaaS MVPs',
      description: 'Deploy a conversion ready MVP in under two weeks.',
      features: [
        'Core landing pages & blog setup',
        'Responsive design + basic analytics',
        'Lead capture and onboarding funnel',
        'Launch roadmap session',
      ],
      cta: 'Build My Plan',
    },
    {
      title: 'Growth Engine',
      price: '$7,500',
      highlight: true,
      microcopy: 'Most popular for funded startups',
      description: 'Save 40+ hours on funnel setup and automation.',
      features: [
        'Multi-page CMS with SEO polish',
        'CRM & email automations',
        'Analytics dashboards & A/B testing',
        'Ongoing optimization support',
      ],
      cta: 'Unlock ROI',
    },
    {
      title: 'Scale Partner',
      price: '$10,000+',
      microcopy: 'Enterprise or custom scope',
      description: 'We architect a scalable system tailored to your ops.',
      features: [
        'Custom integrations & API work',
        'Advanced animations & UX',
        'Scalable CMS architecture',
        'Roadmapping with our founder',
      ],
      cta: 'Start Partnership',
    },
  ],
};
