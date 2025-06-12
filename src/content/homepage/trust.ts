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
    { name: 'SaaSFlow', src: '/logos/authority-platform.jpg' },
    { name: 'GrowthKit', src: '/logos/authority-platform.jpg' },
    { name: 'LaunchHero', src: '/logos/authority-platform.jpg' },
    { name: 'MetricMax', src: '/logos/authority-platform.jpg' },
  ],
  testimonials: [
    {
      quote: 'NPR Media boosted our signups by 212% in 30 days.',
      name: 'Mark P.',
      role: 'SaaSFlow CEO',
      logo: '/logos/authority-platform.jpg',
    },
    {
      quote: 'Our funnel ROI skyrocketed 150% after launch.',
      name: 'Lisa W.',
      role: 'LaunchHero Founder',
      logo: '/logos/authority-platform.jpg',
    },
    {
      quote: 'We hit 95% CSAT and passed SOC2 with ease.',
      name: 'Raj K.',
      role: 'SecureApp CTO',
      logo: '/logos/authority-platform.jpg',
    },
  ],
  badges: [
    { label: 'SSL Secured', icon: 'Lock' },
    { label: 'SOC2 Compliant', icon: 'ShieldCheck' },
  ],
  microcopy: 'All testimonials are 100% verified clients.',
};
