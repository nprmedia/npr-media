export interface FeatureItem {
  title: string
  body: string
  icon: string
}

export interface StepItem {
  title: string
  body: string
  icon: string
}

export const hero = {
  headline: 'Launch a Website That Sells While You Sleep',
  subheadline: 'Custom-built sites that load fast, convert better, and scale with your startup.',
  cta: {
    label: 'Get a Quote',
    href: '/contact',
  },
  image: {
    src: '/logos/authority-platform.jpg',
    alt: 'Screenshot of a high-converting website built by NPR Media',
    width: 800,
    height: 450,
  },
}

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
]

export const steps: StepItem[] = [
  { title: 'Plan', body: 'We align on goals, brand, and functionality.', icon: 'Map' },
  { title: 'Build', body: 'We design and develop your custom site.', icon: 'Hammer' },
  { title: 'Launch', body: 'We handle the tech. You go live with confidence.', icon: 'PartyPopper' },
]

export const testimonial = {
  quote: 'Working with NPR Media was a game changer. Our new site increased demo bookings by 42% in 2 weeks.',
  author: 'Jamie L., SaaS Founder',
}

