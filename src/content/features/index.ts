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
  headline: 'Experience Digital Craftsmanship',
  subheadline:
    'Our design-first approach fuses stunning aesthetics with marketing science to captivate and convert.',
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
    title: 'Compel Action',
    body: 'Data\u2011driven journeys turn curiosity into genuine commitment.',
    icon: 'MousePointerClick',
  },
  {
    title: 'Speed That Thrills',
    body: 'Ultra-fast pages keep visitors engaged and eager to explore.',
    icon: 'GaugeCircle',
  },
  {
    title: 'Limitless Scalability',
    body: 'A flexible CMS empowers you to grow without restrictions.',
    icon: 'Rocket',
  },
]

export const steps: StepItem[] = [
  {
    title: 'Plan',
    body: 'Together we map a strategy that aligns every pixel to your business goals.',
    icon: 'Map',
  },
  {
    title: 'Build',
    body: 'Our team crafts clean, scalable code tailored for long-term growth.',
    icon: 'Hammer',
  },
  {
    title: 'Launch',
    body: 'We optimize, host and train you so you shine from day one.',
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

