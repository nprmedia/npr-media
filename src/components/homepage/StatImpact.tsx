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
    <section className="mt-[clamp(4rem,8vw,8rem)] bg-white font-grotesk">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="text-center">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-black tracking-tight text-charcoal text-center">
            Why Founders Invest in a Better Website
          </h2>
          <p className="text-muted text-lg text-center max-w-2xl mx-auto mt-2">
            Real businesses see dramatic growth after modernizing their online presence.
          </p>
          <Link
            href="/contact"
            data-event="cta-stats"
            className="bg-blood text-white px-5 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform font-semibold text-sm tracking-wide mt-6 mx-auto block"
          >
            Get a Site Review
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 text-left relative rounded-2xl shadow-md before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br before:from-crimson/5 before:to-white before:blur-2xl">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <p className="text-charcoal text-base leading-snug">
                <span className="text-[clamp(3rem,6vw,5rem)] font-extrabold text-blood bg-gradient-to-br from-blood/10 to-transparent rounded-xl px-3 py-2 float-left leading-none drop-shadow-md mr-4">
                  {stat.value}
                </span>
                {stat.text}
              </p>
              <Link
                href={stat.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-500 italic mt-2 inline-block"
              >
                Source: {stat.source}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
