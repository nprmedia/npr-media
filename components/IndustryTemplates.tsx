"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { industryTemplates } from '@/content/templates'

export default function IndustryTemplatesSection() {
  return (
    <section id="templates" className="w-full py-24 bg-background border-t border-border">
      <div className="container max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            See Templates by Industry
          </h2>
          <p className="mt-2 text-muted-foreground text-lg">
            Real examples of our most profitable builds — tailored for top-performing clients.
          </p>
        </div>

        <div className="space-y-16">
          {industryTemplates.map((group, groupIdx) => (
            <div key={group.industry} className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-center text-primary">
                {group.industry}
              </h3>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
              >
                {group.templates.map((template, i) => (
                  <motion.div
                    key={template.slug}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <div className="group block rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-lg ring-1 ring-inset ring-primary/5 transition hover:-translate-y-1">
                      <div className="aspect-video w-full rounded-lg overflow-hidden mb-4 border border-muted bg-muted/30">
                        <iframe
                          src={template.demoUrl}
                          loading="lazy"
                          className="w-full h-full pointer-events-none"
                          title={`Live preview of ${template.title}`}
                        />
                      </div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-1 truncate">
                        {template.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {template.description}
                      </p>
                      <p className="text-xs text-muted-foreground italic mb-4">
                        Used by 12+ clients in this industry
                      </p>
                      <div className="flex justify-between items-center text-sm font-medium gap-4">
                        <a
                          href={template.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Opens in new tab"
                          aria-label={`Open demo for ${template.title}`}
                          className="px-3 py-1.5 rounded-full bg-muted text-foreground hover:bg-muted/80 transition"
                        >
                          Open Demo →
                        </a>
                        <Link
                          href={`/templates/${template.slug}`}
                          className="px-3 py-1.5 rounded-full text-muted-foreground hover:text-primary hover:underline transition"
                          aria-label={`More info on ${template.title}`}
                        >
                          More Info
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}