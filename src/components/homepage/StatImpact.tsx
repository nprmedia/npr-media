'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface StatItem {
  value: string
  text: string
  source: string
  href: string
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
]

export default function StatImpact() {
  return (
    <section className="mt-[clamp(4rem,8vw,8rem)] bg-white px-6 md:px-12">
      <div className="mx-auto max-w-screen-xl">
        <h2 className="mb-8 text-center text-[clamp(1.5rem,4vw,2.5rem)] font-bold text-charcoal tracking-tight">
          Why Founders Invest in a Better Website
        </h2>
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="mx-auto mt-2 max-w-sm text-base leading-snug text-charcoal">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="mr-4 inline-block align-top text-[clamp(3rem,6vw,5rem)] font-bold text-blood"
                >
                  {stat.value}
                </motion.span>
                {stat.text}
              </p>
              <Link
                href={stat.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm text-silver hover:underline"
              >
                Source: {stat.source}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
