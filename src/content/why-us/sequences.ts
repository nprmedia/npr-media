export interface TruthSequence {
  id: string;
  claim: string;
  truth: string;
  response: string;
}

export const sequences: TruthSequence[] = [
  {
    id: 'ai',
    claim: 'Launch in minutes!',
    truth: 'Zero strategy. Zero retention.',
    response: 'Custom funnels. Built for buyer logic.',
  },
  {
    id: 'agencies',
    claim: 'Award-winning creative.',
    truth: 'Templated. Outsourced. Overbilled.',
    response: 'Founder-led systems that scale with you.',
  },
  {
    id: 'cost',
    claim: '$10/mo websites!',
    truth: "You're the product. You're locked in.",
    response: 'Full code ownership. Built for ROI.',
  },
  {
    id: 'stack',
    claim: 'No-code magic',
    truth: 'Rigid. Unscalable. Bloated.',
    response: 'Next.js + CMS. Fast, dynamic, future-ready.',
  },
  {
    id: 'control',
    claim: 'One-click AI hosting',
    truth: 'Closed platform. No control.',
    response: 'You own everything \u2014 content, stack, path.',
  },
  {
    id: 'outcomes',
    claim: 'We design pretty sites.',
    truth: 'No KPIs. No growth. Just views.',
    response: 'Every section engineered to convert.',
  },
];

export const responseMicrocopy =
  'Built with the same frameworks used by $50k+ startup sites. No guesswork.';

export const testimonial = {
  quote: '“Our leads doubled within a month!”',
  author: 'Jane, SaaS Founder',
};

export const ctaCopy = {
  headline: 'Don\u2019t fall for the hype. Build the system your business actually needs.',
  button: 'Book Your Strategy Call \u2192',
  bullets: [
    'We audit your current site for leaks',
    'Show you where you\u2019re leaving money on the table',
    'You leave with clarity \u2014 whether we work together or not',
  ],
};
