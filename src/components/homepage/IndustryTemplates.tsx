"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { industryTemplates } from '@/content/homepage/templates'

export default function IndustryTemplatesSection() {
  return (
    <section id="templates" className="w-full py-24 bg-background border-t border-border bg-gradient-to-b from-background to-muted/10 overflow-x-hidden scroll-mt-[120px]">
      <div className="container max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            See Templates by Industry
          </h2>
          <p className="mt-2 text-muted-foreground text-lg">
            Real examples of our most profitable builds — tailored for top-performing clients.
          </p>
        </div>

        <div className="space-y-20">
          {industryTemplates.map((group, groupIdx) => (
            <motion.div
              key={group.industry}
              className="space-y-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-center text-primary flex items-center justify-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                {group.industry}
              </h3>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              >
                {group.templates.map((template, i) => (
                  <motion.div
                    key={template.slug}
                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <div
                      className="group block rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-lg ring-1 ring-inset ring-primary/5 transition hover:-translate-y-1 hover:ring-2 hover:ring-primary/40 relative h-full flex flex-col"
                      data-template-name={template.title}
                    >
                      <div className="aspect-video w-full rounded-lg overflow-hidden mb-4 border border-muted bg-muted/30 shadow relative after:absolute after:inset-x-0 after:bottom-0 after:h-8 after:bg-gradient-to-t after:from-card after:to-transparent">
                        <iframe
                          src={template.demoUrl}
                          loading="lazy"
                          scrolling="no"
                          sandbox=""
                          className="w-full h-full pointer-events-none rounded block overflow-hidden"
                          title={`Live preview of ${template.title}`}
                        />
                      </div>
                      <div className="flex-grow flex flex-col">
                        <h4 className="text-base sm:text-lg font-semibold text-foreground mb-1 truncate">
                          {template.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-1">
                          {template.description}
                        </p>
                        <p className="text-xs text-muted-foreground italic mb-3">
                          Used by 12+ clients in this industry
                        </p>
                        <div className="mt-auto flex justify-between items-center text-sm font-medium gap-4">
                          <a
                            href={template.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Opens in new tab"
                            aria-label={`Open demo for ${template.title}`}
                            className="px-3 py-1.5 rounded-full bg-muted text-foreground hover:bg-muted/80 transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary"
                          >
                            Open Demo →
                          </a>
                          <Link
                            href={`/templates/${template.slug}`}
                            className="px-3 py-1.5 rounded-full text-muted-foreground hover:text-primary hover:underline transition focus:outline-none focus:ring-2 focus:ring-primary"
                            aria-label={`More info on ${template.title}`}
                          >
                            More Info
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
