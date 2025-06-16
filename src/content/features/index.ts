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
  headline: 'Why Choose NPR Media',
  subheadline:
    'Our human specialists craft websites that outperform AI generators and cookie-cutter templates.',
  cta: {
    label: 'Request Your Quote',
    href: '/contact',
  },
  image: {
    url: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d',
    alt: 'Developers collaborating on website design',
    width: 600,
    height: 338,
  },
}

export const features: FeatureItem[] = [
  {
    title: 'Custom Strategy',
    body: 'We align every build with your unique business goals.',
    icon: 'MousePointerClick',
  },
  {
    title: 'Expert Craftsmanship',
    body: 'Our team hand-codes experiences AI tools simply can\u2019t match.',
    icon: 'GaugeCircle',
  },
  {
    title: 'Long-Term Partnership',
    body: 'We refine and scale your site as your needs evolve.',
    icon: 'Rocket',
  },
]

export const steps: StepItem[] = [
  { title: 'Discover', body: 'We workshop your goals and requirements.', icon: 'Map' },
  { title: 'Craft', body: 'Design and development proceed in tight cycles.', icon: 'Hammer' },
  { title: 'Amplify', body: 'Launch, test, and refine for continuous improvement.', icon: 'PartyPopper' },
]

export const testimonial = {
  quote: 'Our new site from NPR Media doubled signups in the first month.',
  author: 'Alex P., Startup CEO',
}

export const betterThanAI = [
  {
    title: 'Tailored to Your Audience',
    body: 'We design for real people, not generic algorithms.',
  },
  {
    title: 'Strategic Thinking',
    body: 'Our approach blends data with human intuition, so every page has purpose.',
  },
  {
    title: 'Accountability',
    body: 'We deliver measurable results and adjust based on feedback.',
  },
]

export const showcase = [
  {
    url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    alt: 'Laptop displaying modern website design',
    width: 600,
    height: 400,
  },
  {
    url: 'https://images.unsplash.com/photo-1587829751301-dc798b84f5c5',
    alt: 'Developer building responsive layout',
    width: 600,
    height: 400,
  },
  {
    url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    alt: 'Team collaborating over website wireframes',
    width: 600,
    height: 400,
  },
]
