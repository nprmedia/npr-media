'use client'

import { trustPoints } from '@/content/trustPoints'
import { LucideIcon, Target, Zap, UserCircle, Layers } from 'lucide-react'

const icons: Record<string, LucideIcon> = {
  Target,
  Zap,
  UserCircle,
  Layers,
}

export default function WhyTrustSection() {
  return (
      <section className="bg-slate-50 dark:bg-gray-950 py-[clamp(5rem,10vw,8rem)] px-[clamp(1rem,4vw,3rem)] border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-gray-900 dark:text-white">
              Why Founders Trust Us
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-[clamp(0.9rem,1.6vw,1.125rem)]">
              Behind every polished build is a founder-first strategy. Here’s what sets NPR Media apart.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            {trustPoints.map((point) => {
              const Icon = icons[point.icon]
              return (
                <div
                  key={point.title}
                  className="flex items-start gap-4 bg-white dark:bg-gray-900 p-[clamp(1rem,2.5vw,1.5rem)] rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition"
                >
                  {Icon && <Icon className="w-6 h-6 text-black dark:text-white mt-1" />}
                  <div>
                    <h4 className="text-[clamp(0.95rem,1.25vw,1.1rem)] font-bold text-gray-900 dark:text-white">
                      {point.title}
                    </h4>
                    <p className="text-[clamp(0.8rem,1.2vw,0.9rem)] text-gray-600 dark:text-gray-300 mt-1">
                      {point.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
  )
}
