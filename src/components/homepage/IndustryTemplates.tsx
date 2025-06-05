'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { templates } from '@/content/homepage/templates';

export default function IndustryTemplatesSection() {
  const authority = templates
    .flatMap((group) => group.templates)
    .find((t) => t.slug === 'authority-platform');

  if (!authority) return null;

  return (
    <section
      id="templates"
      className="bg-background border-border from-background to-muted/10 w-full scroll-mt-[120px] overflow-x-hidden border-t bg-gradient-to-b py-24"
    >
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-foreground text-4xl font-bold tracking-tight sm:text-5xl">
            Authority Platform Demo
          </h2>
          <p className="text-muted-foreground mt-2 text-lg">
            Our premier template for coaches and consultants.
          </p>
        </div>

        <motion.div
          className="mx-auto max-w-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 40 } }}
        >
          <div
            className="group border-border bg-card ring-primary/5 hover:ring-primary/40 relative flex flex-col rounded-2xl border p-6 shadow-sm ring-1 transition ring-inset hover:-translate-y-1 hover:shadow-lg hover:ring-2"
            data-template-name={authority.title}
          >
            <motion.div
              className="border-muted bg-muted/30 relative mb-4 aspect-video w-full overflow-hidden rounded-lg border shadow after:absolute after:inset-x-0 after:bottom-0 after:h-8 after:bg-gradient-to-t after:from-card after:to-transparent"
              variants={{ hover: { rotate: -2, scale: 1.03, boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }, rest: { rotate: -5, scale: 1, boxShadow: '0 4px 10px rgba(0,0,0,0.05)' } }}
              initial="rest"
              whileHover="hover"
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <iframe
                src={authority.demoUrl}
                loading="lazy"
                scrolling="no"
                sandbox=""
                className="pointer-events-none block h-full w-full overflow-hidden rounded"
                title={`Live preview of ${authority.title}`}
              />
            </motion.div>
            <div className="flex flex-grow flex-col">
              <h4 className="text-foreground mb-1 truncate text-base font-semibold sm:text-lg">
                {authority.title}
              </h4>
              <p className="text-muted-foreground mb-1 text-sm">{authority.description}</p>
              <p className="text-muted-foreground mb-3 text-xs italic">
                Used by 12+ clients in this industry
              </p>
              <div className="mt-auto flex items-center justify-between gap-4 text-sm font-medium">
                <a
                  href={authority.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Opens in new tab"
                  aria-label={`Open demo for ${authority.title}`}
                  className="bg-muted text-foreground hover:bg-muted/80 focus:ring-primary rounded-full px-3 py-1.5 transition hover:scale-105 focus:ring-2 focus:outline-none"
                >
                  Open Demo →
                </a>
                <Link
                  href={`/templates/${authority.slug}`}
                  className="text-muted-foreground hover:text-primary focus:ring-primary rounded-full px-3 py-1.5 transition hover:underline focus:ring-2 focus:outline-none"
                  aria-label={`More info on ${authority.title}`}
                >
                  More Info
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}