export interface FeatureItem {
  title: string;
  body: string;
  icon: string;
}

export interface StepItem {
  title: string;
  body: string;
  icon: string;
}

export const hero = {
  headline: 'Human‑Crafted Websites That Outperform AI',
  subheadline:
    'Our experts build experiences tuned to real people\u2014something a bot can\u2019t match.',
  cta: {
    label: 'Get a Quote',
    href: '/contact',
  },
};

export const features: FeatureItem[] = [
  {
    title: 'Designed to Convert',
    body: 'We use proven UX frameworks to guide users to action.',
    icon: 'MousePointerClick',
  },
  {
    title: 'Optimized for Speed & SEO',
    body: 'Your site hits 90+ on Lighthouse and gets indexed right.',
    icon: 'GaugeCircle',
  },
  {
    title: 'Built to Grow with You',
    body: 'Easily update content and scale pages with built-in CMS.',
    icon: 'Rocket',
  },
];

export const steps: StepItem[] = [
  { title: 'Plan', body: 'We align on goals, brand, and functionality.', icon: 'Map' },
  { title: 'Build', body: 'We design and develop your custom site.', icon: 'Hammer' },
  {
    title: 'Launch',
    body: 'We handle the tech. You go live with confidence.',
    icon: 'PartyPopper',
  },
];

export const testimonial = {
  quote:
    'Working with NPR Media was a game changer. Our new site increased demo bookings by 42% in 2 weeks.',
  author: 'Jamie L., SaaS Founder',
};

export const betterThanAI = [
  {
    title: 'Human insight',
    body: 'Real experience means we design for emotions, not algorithms.',
  },
  {
    title: 'Iterative expertise',
    body: 'We refine your site through testing and feedback\u2014AI can\u2019t improvise.',
  },
  {
    title: 'Transparent code',
    body: 'No black boxes or hallucinations\u2014just maintainable, scalable sites.',
  },
];
