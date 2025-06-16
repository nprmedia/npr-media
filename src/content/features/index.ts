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
  headline: 'Next-Level Websites Built by Real Experts',
  subheadline: 'Human creativity outperforms automated site builders every time.',
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
    title: 'Conversion-Focused UX',
    body: 'Each page guides visitors toward taking action.',
    icon: 'MousePointerClick',
  },
  {
    title: 'Lightning-Fast Performance',
    body: 'Optimized code and caching keep load times under a second.',
    icon: 'GaugeCircle',
  },
  {
    title: 'Flexible Architecture',
    body: 'Easily extend and iterate as your business grows.',
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
