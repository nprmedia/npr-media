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
    <section className="mt-[clamp(2rem,4vw,4rem)] pb-[clamp(2rem,4vw,4rem)] font-grotesk">
      <div className="max-w-screen-lg mx-auto px-3 md:px-5">
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-black text-center text-blood">
          Why Founders Invest in a Better Website
        </h2>
        <p className="text-charcoal text-[clamp(1rem,1.1rem,1.125rem)] text-center max-w-prose mx-auto mt-2">
          Real businesses see dramatic growth after modernizing their online presence.
        </p>

        <div className="mt-6 space-y-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 rounded-xl bg-white/80 p-3.5 sm:p-4 shadow-md hover:shadow-lg border border-white/70 transition-all duration-300 ease-out"
            >
              <span className="min-w-[4.25rem] text-[clamp(2.4rem,5vw,3.4rem)] leading-none font-black text-blood bg-gradient-to-br from-blood/10 to-transparent px-2 py-1 rounded-xl text-center">
                {stat.value}
              </span>

              <div className="flex flex-col justify-between">
                <p className="text-[0.95rem] md:text-base text-charcoal/90 leading-snug max-w-[40ch]">
                  {stat.text}
                </p>
                <Link
                  href={stat.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.75rem] md:text-sm text-zinc-500 italic mt-1 underline-offset-2 hover:underline"
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
