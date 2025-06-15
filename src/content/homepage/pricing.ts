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

export interface PricingData {
  headline: string;
  tiers: PricingTier[];
}

export const pricing: PricingData = {
  headline:
    'Transparent packages with room to grow. Choose the plan that best aligns with your launch goals and budget.',
  tiers: [
    {
      title: 'Quick Launch',
      price: '$1,000',
      microcopy: 'Perfect for a fast online debut',
      description: 'Launch a polished landing page within a week.',
      features: [
        'Single-page design',
        'Contact form setup',
        'Basic SEO pass',
        'One revision round',
      ],
      cta: 'Kickstart Now',
    },
    {
      title: 'Launch Pad',
      price: '$4,000',
      microcopy: 'Ideal for SaaS MVPs',
      description: 'Spin up a conversion\u2011ready MVP in less than two weeks.',
      features: [
        'Core pages & blog setup',
        'Responsive design & basic analytics',
        'Lead capture funnel',
        'Launch roadmap session',
      ],
      cta: 'Build My Plan',
    },
    {
      title: 'Growth Engine',
      price: '$7,500',
      highlight: true,
      microcopy: 'Most popular for funded startups',
      description: 'Save 40+ hours with an automated funnel and CRM.',
      features: [
        'Full CMS with SEO polish',
        'CRM & email automations',
        'Analytics dashboards & A/B testing',
        'Ongoing optimization support',
      ],
      cta: 'Unlock ROI',
    },
    {
      title: 'Scale Partner',
      price: '$10,000+',
      microcopy: 'Custom enterprise scope',
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
