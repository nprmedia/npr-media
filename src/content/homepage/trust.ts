export interface ClientLogo {
  name: string;
  src: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  logo: string;
}

export interface Badge {
  label: string;
  icon: string;
}

export interface TrustData {
  headline: string;
  clients: ClientLogo[];
  testimonials: Testimonial[];
  badges: Badge[];
  microcopy: string;
}

export const trust: TrustData = {
  headline: 'Trusted by SaaS Teams Backed by Y Combinator & Techstars',
  clients: [
    {
      name: 'SaaSFlow',
      src: 'https://images.unsplash.com/photo-1584467735871-b0060c4f50f4?auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'GrowthKit',
      src: 'https://images.unsplash.com/photo-1584467735871-b0060c4f50f4?auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'LaunchHero',
      src: 'https://images.unsplash.com/photo-1584467735871-b0060c4f50f4?auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'MetricMax',
      src: 'https://images.unsplash.com/photo-1584467735871-b0060c4f50f4?auto=format&fit=crop&w=200&q=80',
    },
  ],
  testimonials: [
    {
      quote: 'NPR Media boosted our signups by 212% in 30 days.',
      name: 'Mark P.',
      role: 'SaaSFlow CEO',
      logo: 'https://images.unsplash.com/photo-1584467735871-b0060c4f50f4?auto=format&fit=crop&w=200&q=80',
    },
    {
      quote: 'Our funnel ROI skyrocketed 150% after launch.',
      name: 'Lisa W.',
      role: 'LaunchHero Founder',
      logo: 'https://images.unsplash.com/photo-1584467735871-b0060c4f50f4?auto=format&fit=crop&w=200&q=80',
    },
    {
      quote: 'We hit 95% CSAT and passed SOC2 with ease.',
      name: 'Raj K.',
      role: 'SecureApp CTO',
      logo: 'https://images.unsplash.com/photo-1584467735871-b0060c4f50f4?auto=format&fit=crop&w=200&q=80',
    },
  ],
  badges: [
    { label: 'SSL Secured', icon: 'Lock' },
    { label: 'SOC2 Compliant', icon: 'ShieldCheck' },
  ],
  microcopy: 'All testimonials are 100% verified clients.',
};
