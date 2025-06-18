export interface TruthSequence {
  id: string;
  claim: string;
  truth: string;
  counter: string;
}

export const truthSequences: TruthSequence[] = [
  {
    id: 'ai-sites',
    claim: 'Launch in minutes!',
    truth: 'Zero strategy. Zero retention.',
    counter: 'Custom funnels. Built for buyer logic.',
  },
  {
    id: 'agencies',
    claim: 'Award-winning creative.',
    truth: 'Templated. Outsourced. Overbilled.',
    counter: 'Founder-led systems that scale with you.',
  },
  {
    id: 'cost',
    claim: '$10/mo websites!',
    truth: "You're the product. You're locked in.",
    counter: 'Full code ownership. Built for ROI.',
  },
  {
    id: 'stack',
    claim: 'No-code magic',
    truth: 'Rigid. Unscalable. Bloated.',
    counter: 'Next.js + CMS. Fast, dynamic, future-ready.',
  },
  {
    id: 'control',
    claim: 'One-click AI hosting',
    truth: 'Closed platform. No control.',
    counter: 'You own everything — content, stack, path.',
  },
  {
    id: 'outcomes',
    claim: 'We design pretty sites.',
    truth: 'No KPIs. No growth. Just views.',
    counter: 'Every section engineered to convert.',
  },
];
