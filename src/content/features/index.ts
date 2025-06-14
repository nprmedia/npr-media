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
  headline: 'Elevate Every Click Into Profit',
  subheadline:
    'Harness a polished platform built to mesmerize visitors and turn curiosity into loyal customers.',
  cta: {
    label: 'Request Your Quote',
    href: '/contact',
  },
  image: {
    src:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    alt: 'Screenshot of a high-converting website built by NPR Media',
    width: 800,
    height: 450,
  },
}

export const features: FeatureItem[] = [
  {
    title: 'Inspire Action',
    body:
      'Data\u2011driven UX flows turn casual interest into decisive engagement.',
    icon: 'MousePointerClick',
  },
  {
    title: 'Lightning-Fast Performance',
    body: 'Blazing speeds keep visitors immersed and eager to explore.',
    icon: 'GaugeCircle',
  },
  {
    title: 'Built for the Future',
    body: 'A flexible CMS positions you to scale without limits.',
    icon: 'Rocket',
  },
]

export const steps: StepItem[] = [
  {
    title: 'Plan',
    body: 'We dive deep into your goals and craft a strategic blueprint.',
    icon: 'Map',
  },
  {
    title: 'Build',
    body: 'Our experts develop clean, scalable code tailored to your growth.',
    icon: 'Hammer',
  },
  {
    title: 'Launch',
    body: 'We optimize, host and train you so you excel from day one.',
    icon: 'PartyPopper',
  },
]

export const testimonial = {
  quote: 'Working with NPR Media was a game changer. Our new site increased demo bookings by 42% in 2 weeks.',
  author: 'Jamie L., SaaS Founder',
}

export interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
}

export const gallery: GalleryImage[] = [
  {
    src:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    alt: 'Team collaborating in a sleek meeting room',
    width: 1200,
    height: 800,
  },
  {
    src:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    alt: 'Startup founders planning next steps',
    width: 1200,
    height: 800,
  },
  {
    src:
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80',
    alt: 'Developer perfecting a polished interface',
    width: 1200,
    height: 800,
  },
  {
    src:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    alt: 'Pair programming session in progress',
    width: 1200,
    height: 800,
  },
]

