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
    <section className="mt-[clamp(4rem,8vw,8rem)] font-grotesk">
      <div className="max-w-screen-md mx-auto px-4 md:px-8">
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-black text-center text-charcoal">
          Why Founders Invest in a Better Website
        </h2>
        <p className="text-silver text-lg text-center max-w-prose mx-auto mt-2">
          Real businesses see dramatic growth after modernizing their online presence.
        </p>

        <div className="mt-8 space-y-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex items-stretch gap-4 rounded-2xl bg-white/60 p-4 shadow-md hover:shadow-lg transition-all duration-300 ease-out"
            >
              <span className="flex h-full flex-col justify-between text-[clamp(2.5rem,6vw,4rem)] font-black text-blood bg-gradient-to-br from-blood/10 to-transparent px-3 py-1 rounded-xl leading-none">
                {stat.value}
              </span>
              <div className="flex flex-col justify-between">
                <p className="text-base text-charcoal leading-snug max-w-[36ch]">{stat.text}</p>
                <Link
                  href={stat.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-500 italic mt-1 underline-offset-2 hover:underline"
                >
                  Source: {stat.source}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
