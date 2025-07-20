'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import CTAButton from '@/components/CTAButton';

interface StatItem {
  value: string;
  text: string;
  source: string;
  href: string;
}

const stats: StatItem[] = [
  {
    value: '182%',
    text: 'more revenue within 3 months after an ecommerce redesign.',
    source: 'seoplus.com',
    href: 'https://seoplus.com/case-studies/redesigned-ecommerce-site-more-revenue',
  },
  {
    value: '81%',
    text: 'more SaaS signups from a homepage conversion overhaul.',
    source: 'conversionrate.store',
    href: 'https://conversionrate.store/case-studies/localizer',
  },
  {
    value: '137%',
    text: 'jump in SaaS signups after simplifying a landing page.',
    source: 'reddit.com',
    href: 'https://www.reddit.com/r/SaaS/comments/1imj02n/redesigned_my_landing_page_and_got_137_more',
  },
];

export default function StatImpact() {
  return (
    <section className="font-grotesk mt-[clamp(4rem,8vw,8rem)] bg-white px-6 md:px-12">
      <div className="mx-auto grid max-w-screen-xl gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-4 text-center lg:text-left">
          <h2 className="text-charcoal text-[clamp(1.5rem,4vw,2.5rem)] font-bold tracking-tight">
            Why Founders Invest in a Better Website
          </h2>
          <p className="text-charcoal font-grotesk mx-auto max-w-md text-base lg:mx-0">
            Real businesses see dramatic growth after modernizing their online presence.
          </p>
          <CTAButton href="/contact" event="cta-stats">
            Get a Site Review
          </CTAButton>
        </div>
        <div className="space-y-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-start">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-blood mr-4 inline-block w-[5ch] text-right align-top font-mono text-[clamp(3rem,6vw,5rem)] font-bold"
              >
                {stat.value}
              </motion.span>
              <div className="font-grotesk">
                <p className="text-charcoal text-base leading-snug">{stat.text}</p>
                <Link
                  href={stat.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-silver font-grotesk mt-2 inline-block text-sm hover:underline"
                >
                  Source: {stat.source}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
