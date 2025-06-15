// src/content/homepage/pricing.ts

export interface PricingTier {
  title: string;
  price: string;
  highlight?: boolean;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
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
    'Premium packages that grow with you. Select the firepower your launch deserves.',
  tiers: [
    {
      title: 'Quick Launch',
      price: '$1,000',
      image: {
        src:
          'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=800&q=80',
        alt: 'Developers collaborating quickly',
        width: 1200,
        height: 800,
      },
      microcopy: 'Elegant landing in a flash',
      description: 'Deploy a sleek single page in just one week.',
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
      image: {
        src:
          'https://images.unsplash.com/photo-1531497865146-810c7f59365c?auto=format&fit=crop&w=800&q=80',
        alt: 'Team huddling around a strategy',
        width: 1200,
        height: 800,
      },
      microcopy: 'Accelerate your MVP',
      description: 'Get a conversion\u2011ready site in under two weeks.',
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
      image: {
        src:
          'https://images.unsplash.com/photo-1487017159836-4d8bdeed776b?auto=format&fit=crop&w=800&q=80',
        alt: 'Developer building features for scale',
        width: 1200,
        height: 800,
      },
      microcopy: 'Most popular for scaling startups',
      description: 'Automate your funnel and CRM—save 40+ hours.',
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
      image: {
        src:
          'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80',
        alt: 'High-level planning session',
        width: 1200,
        height: 800,
      },
      microcopy: 'Tailored for enterprise growth',
      description: 'Scalable architecture and custom integrations.',
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
