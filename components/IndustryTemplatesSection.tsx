'use client'

import FadeInSection from '@/components/FadeInSection'
import Link from 'next/link'
import { industryTemplates } from '@/content/industryTemplates'

export default function IndustryTemplatesSection() {
  return (
    <FadeInSection>
      <section className="bg-white dark:bg-black py-24 px-6 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              See Templates by Industry
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
              Real examples of our most profitable builds — tailored for top-performing clients.
            </p>
          </div>

          <div className="space-y-12">
            {industryTemplates.map((industry) => (
              <div key={industry.name} className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  {industry.name}
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {industry.tiers.map((tier, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition"
                    >
                      <h4 className="text-md font-bold text-gray-900 dark:text-white mb-1">
                        {tier.label}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {tier.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-10">
            <Link
              href="/web-templates"
              className="inline-block rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow hover:bg-gray-800 transition"
            >
              View All Templates →
            </Link>
          </div>
        </div>
      </section>
    </FadeInSection>
  )
}
