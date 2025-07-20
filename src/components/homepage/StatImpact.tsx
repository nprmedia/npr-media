'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import CTAButton from '@/components/CTAButton'

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
      <div className="max-w-screen-md mx-auto grid gap-10 px-6 md:px-8 lg:grid-cols-2 lg:items-start">
        <div className="space-y-4 text-center lg:text-left">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-black tracking-tight text-charcoal">
            Why Founders Invest in a Better Website
          </h2>
          <p className="text-silver text-lg mt-2">
            Real businesses see dramatic growth after modernizing their online presence.
          </p>
          <CTAButton
            href="/contact"
            event="cta-stats"
            className="bg-blood text-white px-5 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform font-semibold text-sm tracking-wide block w-max"
          >
            Get a Site Review
          </CTAButton>
        </div>
        <div className="space-y-0 mt-8 lg:mt-0">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="flex items-start gap-4 py-6 border-t border-silver/30 last:border-b bg-white/60 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <span className="text-[clamp(3rem,6vw,5rem)] font-extrabold text-blood bg-gradient-to-br from-blood/10 to-transparent px-3 py-1 rounded-xl drop-shadow-md shrink-0 transition-transform hover:scale-105">
                {stat.value}
              </span>
              <div className="flex-1">
                <p className="text-base text-charcoal leading-snug">{stat.text}</p>
                <Link
                  href={stat.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-500 italic mt-1"
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
