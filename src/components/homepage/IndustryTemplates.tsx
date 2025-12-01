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
      className="bg-offwhite text-charcoal w-full scroll-mt-[120px] overflow-x-hidden py-[clamp(4rem,8vw,6rem)]"
    >
      <div className="mx-auto max-w-[88rem] px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mb-10 text-center">
          <h2 className="text-blood text-[clamp(1.75rem,3.2vw,2.4rem)] font-bold tracking-tight">
            Authority Platform Demo
          </h2>
          <p className="text-charcoal/90 mt-2 text-[clamp(0.95rem,1.35vw,1.1rem)]">
            Our flagship build for coaches and consultants who sell high-trust services.
          </p>
        </div>

        <div className="group mx-auto flex flex-col gap-8 md:flex-row md:items-center">
          {/* Preview card */}
          <div
            className="relative w-full max-w-[480px] overflow-hidden rounded-2xl border border-charcoal/5 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.16)] transition-transform duration-500 md:mr-8"
            style={{ perspective: '1000px' }}
          >
            <div className="relative aspect-[4/5]">
              <Image
                src="/logos/Authority Platform.webp"
                alt={`Screenshot of ${authority.title}`}
                width={640}
                height={800}
                className="h-full w-full origin-left rounded-2xl object-cover transition-transform duration-500 group-hover:[transform:rotateY(8deg)_translateX(-6px)]"
                priority
              />
            </div>
          </div>

          {/* Copy + CTA */}
          <div className="flex flex-1 flex-col justify-center md:max-w-[480px]">
            <h4 className="text-charcoal mb-2 text-[clamp(1.1rem,1.9vw,1.35rem)] font-semibold">
              {authority.title}
            </h4>

            <p className="text-charcoal/90 mb-2 text-[clamp(0.9rem,1.25vw,1rem)] leading-relaxed">
              {authority.description}
            </p>

            <p className="text-charcoal/70 mb-4 text-[clamp(0.8rem,1vw,0.9rem)] italic">
              Already battle-tested with 12+ clients in this niche.
            </p>

            <div className="mt-auto text-[clamp(0.85rem,1vw,0.95rem)] font-medium">
              <a
                href={authority.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Opens in new tab"
                aria-label={`Open demo for ${authority.title}`}
                className="inline-flex items-center justify-center rounded-full border border-blood bg-blood px-[clamp(0.85rem,2.25vw,1.2rem)] py-[clamp(0.45rem,1vw,0.7rem)] text-charcoal shadow-[0_0_18px_rgba(179,0,0,0.3)] transition-transform duration-200 hover:scale-105 hover:bg-crimson focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blood"
              >
                Open demo
                <span className="ml-1 text-[0.9em]">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
