'use client';

import Image from 'next/image';
import { templates } from '@/content/homepage/templates';

export default function IndustryTemplatesSection() {
  const authority = templates
    .flatMap((group) => group.templates)
    .find((t) => t.slug === 'authority-platform');

  if (!authority) return null;

  return (
    <section
      id="templates"
      className="w-full scroll-mt-[120px] overflow-x-hidden bg-[var(--color-antique)] text-[var(--color-charcoal)] py-[clamp(5rem,10vw,8rem)]"
    >
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-[var(--color-charcoal)] text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight">
            Authority Platform Demo
          </h2>
          <p className="mt-2 text-[clamp(0.9rem,1.6vw,1.125rem)] text-[var(--color-sepia)]">
            Our premier template for coaches and consultants.
          </p>
        </div>

        <div
          className="group mx-auto flex max-w-4xl flex-col gap-6 md:flex-row md:items-start"
        >
          <div
            className="relative mb-4 aspect-[2/3] h-[80vh] max-h-[80vh] overflow-hidden rounded-lg md:mb-0 md:mr-6"
            style={{ perspective: '1000px' }}
          >
            <Image
              src="/logos/Authority Platform.webp"
              alt={`Screenshot of ${authority.title}`}
              width={640}
              height={960}
              className="h-full w-full rounded-lg object-cover transition-transform duration-500 origin-left group-hover:[transform:rotateY(12deg)]"
              priority
            />
          </div>
          <div
            className="flex flex-grow flex-col md:w-1/2 origin-left transform-gpu transition-all duration-500 group-hover:[transform:translateX(1.5rem)_rotateY(-6deg)]"
          >
            <h4 className="mb-1 truncate text-[clamp(1rem,1.8vw,1.25rem)] font-semibold text-[var(--color-charcoal)]">
              {authority.title}
            </h4>
            <p className="mb-1 text-[clamp(0.8rem,1.2vw,0.9rem)] text-[var(--color-sepia)]">
              {authority.description}
            </p>
            <p className="mb-3 text-[clamp(0.7rem,1vw,0.8rem)] italic text-[var(--color-antique)]">
              Used by 12+ clients in this industry
            </p>
            <div className="mt-auto text-[clamp(0.8rem,1vw,0.9rem)] font-medium">
              <a
                href={authority.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Opens in new tab"
                aria-label={`Open demo for ${authority.title}`}
                className="bg-[var(--color-blood)] text-[var(--color-silver)] hover:bg-[var(--color-crimson)] focus:ring-[var(--color-blood)] rounded-full px-[clamp(0.75rem,2vw,1rem)] py-[clamp(0.4rem,1vw,0.6rem)] transition hover:scale-105 focus:ring-2 focus:outline-none"
              >
                Open Demo →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
