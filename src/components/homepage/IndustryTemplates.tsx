'use client';

import Image from 'next/image';
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
      className="w-full scroll-mt-[120px] overflow-x-hidden bg-[#212121] text-[#F2F3F4] py-[clamp(5rem,10vw,8rem)]"
    >
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-[#F2F3F4] text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight">
            Authority Platform Demo
          </h2>
          <p className="text-gray-300 mt-2 text-[clamp(0.9rem,1.6vw,1.125rem)]">
            Our premier template for coaches and consultants.
          </p>
        </div>

        <motion.div
          className="mx-auto max-w-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 40 } }}
        >
          <div
            className="group relative flex flex-col gap-6 rounded-2xl p-[clamp(1rem,2.5vw,1.5rem)] shadow-sm transition hover:-translate-y-1 hover:shadow-lg md:flex-row md:items-start"
            data-template-name={authority.title}
          >
            <motion.div
              className="relative mb-4 aspect-[2/3] w-full max-h-[80vh] overflow-hidden rounded-lg shadow md:mb-0 md:mr-6 md:w-[60%]"
              variants={{
                hover: { rotate: -2, scale: 1.03, boxShadow: '0 8px 20px rgba(0,0,0,0.1)' },
                rest: { rotate: -5, scale: 1, boxShadow: '0 4px 10px rgba(0,0,0,0.05)' },
              }}
              initial="rest"
              whileHover="hover"
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <a
                href={authority.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open demo for ${authority.title}`}
                className="block h-full w-full"
              >
                <Image
                  src="/logos/authority-platform.jpg"
                  alt="Authority Platform preview"
                  sizes="(max-width: 768px) 90vw, 60vw"
                  width={800}
                  height={1200}
                  className="h-full w-full object-contain"
                  priority
                />
              </a>
            </motion.div>
            <div className="flex flex-grow flex-col md:w-1/2">
              <h4 className="text-foreground mb-1 truncate text-[clamp(1rem,1.8vw,1.25rem)] font-semibold">
                {authority.title}
              </h4>
              <p className="text-gray-300 mb-1 text-[clamp(0.8rem,1.2vw,0.9rem)]">{authority.description}</p>
              <p className="text-gray-400 mb-3 text-[clamp(0.7rem,1vw,0.8rem)] italic">
                Used by 12+ clients in this industry
              </p>
              <div className="mt-auto text-[clamp(0.8rem,1vw,0.9rem)] font-medium">
                <a
                  href={authority.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Opens in new tab"
                  aria-label={`Open demo for ${authority.title}`}
                  className="bg-gray-700 text-[#F2F3F4] hover:bg-gray-600 focus:ring-[#d4af37] rounded-full px-[clamp(0.75rem,2vw,1rem)] py-[clamp(0.4rem,1vw,0.6rem)] transition hover:scale-105 focus:ring-2 focus:outline-none"
                >
                  Open Demo →
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}