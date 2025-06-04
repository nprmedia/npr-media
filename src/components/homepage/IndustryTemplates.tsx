'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { templates } from '@/content/homepage/templates';

export default function IndustryTemplatesSection() {
  return (
    <section
      id="templates"
      className="bg-background border-border from-background to-muted/10 w-full scroll-mt-[120px] overflow-x-hidden border-t bg-gradient-to-b py-24"
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-foreground text-4xl font-bold tracking-tight sm:text-5xl">
            See Templates by Industry
          </h2>
          <p className="text-muted-foreground mt-2 text-lg">
            Real examples of our most profitable builds — tailored for top-performing clients.
          </p>
        </div>

        <div className="space-y-20">
          {templates.map((group, groupIdx) => (
            <motion.div
              key={group.industry}
              className="space-y-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
            >
              <h3 className="text-primary flex items-center justify-center gap-2 text-center text-xl font-semibold sm:text-2xl">
                <span className="bg-primary inline-block h-2 w-2 animate-pulse rounded-full"></span>
                {group.industry}
              </h3>
              <motion.div
                className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              >
                {group.templates.map((template, i) => (
                  <motion.div
                    key={template.slug}
                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                    whileHover={{ scale: 1.02, boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.05,
                      type: 'spring',
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    <div
                      className="group border-border bg-card ring-primary/5 hover:ring-primary/40 relative block flex h-full flex-col rounded-2xl border p-6 shadow-sm ring-1 transition ring-inset hover:-translate-y-1 hover:shadow-lg hover:ring-2"
                      data-template-name={template.title}
                    >
                      <div className="border-muted bg-muted/30 after:from-card relative mb-4 aspect-video w-full overflow-hidden rounded-lg border shadow after:absolute after:inset-x-0 after:bottom-0 after:h-8 after:bg-gradient-to-t after:to-transparent">
                        <iframe
                          src={template.demoUrl}
                          loading="lazy"
                          scrolling="no"
                          sandbox=""
                          className="pointer-events-none block h-full w-full overflow-hidden rounded"
                          title={`Live preview of ${template.title}`}
                        />
                      </div>
                      <div className="flex flex-grow flex-col">
                        <h4 className="text-foreground mb-1 truncate text-base font-semibold sm:text-lg">
                          {template.title}
                        </h4>
                        <p className="text-muted-foreground mb-1 text-sm">{template.description}</p>
                        <p className="text-muted-foreground mb-3 text-xs italic">
                          Used by 12+ clients in this industry
                        </p>
                        <div className="mt-auto flex items-center justify-between gap-4 text-sm font-medium">
                          <a
                            href={template.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Opens in new tab"
                            aria-label={`Open demo for ${template.title}`}
                            className="bg-muted text-foreground hover:bg-muted/80 focus:ring-primary rounded-full px-3 py-1.5 transition hover:scale-105 focus:ring-2 focus:outline-none"
                          >
                            Open Demo →
                          </a>
                          <Link
                            href={`/templates/${template.slug}`}
                            className="text-muted-foreground hover:text-primary focus:ring-primary rounded-full px-3 py-1.5 transition hover:underline focus:ring-2 focus:outline-none"
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
  );
}
