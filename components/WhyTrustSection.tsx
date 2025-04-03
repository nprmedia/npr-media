'use client'

import { trustPoints } from '@/content/trustPoints'
import { LucideIcon, Target, Zap, UserCircle, Layers } from 'lucide-react'
import FadeInSection from '@/components/FadeInSection'

const icons: Record<string, LucideIcon> = {
  Target,
  Zap,
  UserCircle,
  Layers,
}

export default function WhyTrustSection() {
  return (
    <FadeInSection>
      <section className="bg-slate-50 dark:bg-gray-950 py-24 px-6 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Why Founders Trust Us
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
              Behind every polished build is a founder-first strategy. Here’s what sets NPR Media apart.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            {trustPoints.map((point) => {
              const Icon = icons[point.icon]
              return (
                <div
                  key={point.title}
                  className="flex items-start gap-4 bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition"
                >
                  {Icon && <Icon className="w-6 h-6 text-black dark:text-white mt-1" />}
                  <div>
                    <h4 className="text-md font-bold text-gray-900 dark:text-white">
                      {point.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      {point.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </FadeInSection>
  )
}
