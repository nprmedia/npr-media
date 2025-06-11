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
      className="w-full scroll-mt-[120px] overflow-x-hidden bg-white text-black py-[clamp(5rem,10vw,8rem)]"
    >
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-[#212121] text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight">
            Authority Platform Demo
          </h2>
          <p className="text-gray-700 mt-2 text-[clamp(0.9rem,1.6vw,1.125rem)]">
            Our premier template for coaches and consultants.
          </p>
        </div>

        <div
          className="mx-auto flex max-w-4xl flex-col gap-6 md:flex-row md:items-start"
        >
          <div className="relative mb-4 h-[120vh] sm:h-[150vh] aspect-[2/3] overflow-hidden rounded-lg shadow md:mb-0 md:mr-6">
            <Image
              src="/authority-platform-preview.png"
              alt={`Screenshot of ${authority.title}`}
              width={800}
              height={1200}
              className="h-full w-full object-cover rounded-lg"
              priority
            />
          </div>
          <div className="flex flex-grow flex-col md:w-1/2">
            <h4 className="text-[#212121] mb-1 truncate text-[clamp(1rem,1.8vw,1.25rem)] font-semibold">
              {authority.title}
            </h4>
            <p className="text-gray-700 mb-1 text-[clamp(0.8rem,1.2vw,0.9rem)]">
              {authority.description}
            </p>
            <p className="text-gray-500 mb-3 text-[clamp(0.7rem,1vw,0.8rem)] italic">
              Used by 12+ clients in this industry
            </p>
            <div className="mt-auto text-[clamp(0.8rem,1vw,0.9rem)] font-medium">
              <a
                href={authority.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Opens in new tab"
                aria-label={`Open demo for ${authority.title}`}
                className="bg-[#d4af37] text-black hover:bg-[#c49e2e] focus:ring-[#d4af37] rounded-full px-[clamp(0.75rem,2vw,1rem)] py-[clamp(0.4rem,1vw,0.6rem)] transition hover:scale-105 focus:ring-2 focus:outline-none"
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
