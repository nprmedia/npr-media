'use client';

import { motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';

type Slide = {
  title: string;
  description: string;
};

type SlideGroup = {
  heading: string;
  cards: Slide[];
  axis: 'x' | 'y' | 'paged';
  motionKey: 'values' | 'culture' | 'beliefs';
};

const slideGroups: SlideGroup[] = [
  {
    heading: 'Values',
    axis: 'y',
    motionKey: 'values',
    cards: [
      {
        title: 'Results Over Vanity',
        description:
          'Real growth matters most. Vanity metrics may look nice but rarely move the needle. Every feature ties back to concrete business results.',
      },
      {
        title: 'Transparency Always',
        description:
          'Open communication builds trust. We share progress often so there are no surprises. Clear expectations set the stage for great partnerships.',
      },
      {
        title: 'Simplicity Wins',
        description:
          'Complex sites slow teams down. We keep code lean so your product stays fast. Simple solutions are easier to maintain and extend.',
      },
    ],
  },
  {
    heading: 'Culture',
    axis: 'x',
    motionKey: 'culture',
    cards: [
      {
        title: 'Learn and Iterate',
        description:
          'We experiment constantly to improve. Each project teaches us something new. Continuous learning keeps our work fresh and effective.',
      },
      {
        title: 'Ownership Mentality',
        description:
          'We step up like it is our own product. Taking responsibility yields better outcomes. Everyone on the team is accountable for quality.',
      },
      {
        title: 'Remote Friendly',
        description:
          'Great talent lives everywhere. Our flexible approach lets us collaborate with the best people anywhere. Being remote keeps us nimble.',
      },
    ],
  },
  {
    heading: 'Beliefs',
    axis: 'paged',
    motionKey: 'beliefs',
    cards: [
      {
        title: 'Partners Not Vendors',
        description:
          'True success comes from collaboration. We embed with your team to understand every goal. You get a dedicated partner, not just another vendor.',
      },
      {
        title: 'People Over Process',
        description:
          'Rigid frameworks slow innovation. We adapt methods to fit your business. Strong relationships drive outcomes more than strict processes.',
      },
      {
        title: 'Long-Term Success',
        description:
          'We build to last and grow. Scalable systems ensure your investment keeps delivering. Solutions should stand the test of time.',
      },
    ],
  },
];

export interface ValuesCarouselProps {
  className?: string;
}

export default function ValuesCarousel({ className }: ValuesCarouselProps) {
  const groupRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [activeIndices, setActiveIndices] = useState<Record<string, number>>(() =>
    Object.fromEntries(slideGroups.map((group) => [group.heading, 0])),
  );
  const activeIndicesRef = useRef(activeIndices);

  const motionConfigs = useMemo(
    () =>
      ({
        values: {
          initial: { opacity: 0, y: 32 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.45, ease: 'easeOut' },
        },
        culture: {
          initial: { opacity: 0, x: 48 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.5, ease: 'easeOut' },
        },
        beliefs: {
          initial: { opacity: 0, x: -24, y: 24, scale: 0.92 },
          animate: { opacity: 1, x: 0, y: 0, scale: 1 },
          transition: { duration: 0.55, ease: 'easeOut' },
        },
      } as const),
    [],
  );

  useEffect(() => {
    activeIndicesRef.current = activeIndices;
  }, [activeIndices]);

  useEffect(() => {
    const cleanups = slideGroups.map((group) => {
      const container = groupRefs.current[group.heading];
      if (!container) return undefined;
      const isHorizontal = group.axis === 'x';

      const handleScroll = () => {
        const center = isHorizontal
          ? container.scrollLeft + container.clientWidth / 2
          : container.scrollTop + container.clientHeight / 2;
        const children = Array.from(container.children) as HTMLElement[];
        let closest = 0;
        let minDistance = Infinity;
        children.forEach((child, index) => {
          const childCenter = isHorizontal
            ? child.offsetLeft + child.clientWidth / 2
            : child.offsetTop + child.clientHeight / 2;
          const distance = Math.abs(childCenter - center);
          if (distance < minDistance) {
            minDistance = distance;
            closest = index;
          }
        });
        setActiveIndices((prev) => {
          if (prev[group.heading] === closest) return prev;
          return { ...prev, [group.heading]: closest };
        });
      };

      container.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
      return () => container.removeEventListener('scroll', handleScroll);
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup?.());
    };
  }, []);

  useEffect(() => {
    const beliefsContainer = groupRefs.current['Beliefs'];
    if (!beliefsContainer) return;

    let ticking = false;

    const handleWheel = (event: WheelEvent) => {
      if (!beliefsContainer) return;
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      event.preventDefault();
      if (ticking) return;
      ticking = true;

      const direction = event.deltaY > 0 ? 1 : -1;
      const children = Array.from(beliefsContainer.children) as HTMLElement[];
      const currentIndex = activeIndicesRef.current['Beliefs'] ?? 0;
      const nextIndex = Math.min(
        Math.max(currentIndex + direction, 0),
        Math.max(children.length - 1, 0),
      );
      const target = children[nextIndex];
      if (target) {
        const targetRect = target.getBoundingClientRect();
        const containerRect = beliefsContainer.getBoundingClientRect();
        const offset = targetRect.top - containerRect.top + beliefsContainer.scrollTop;
        beliefsContainer.scrollTo({
          top: offset,
          behavior: 'smooth',
        });
      }
      window.setTimeout(() => {
        ticking = false;
      }, 400);
    };

    beliefsContainer.addEventListener('wheel', handleWheel, { passive: false });
    return () => beliefsContainer.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div
      className={clsx(
        'relative mx-auto h-screen max-w-md overflow-hidden bg-olive',
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10"
        style={{
          height: '33%',
          background:
            'linear-gradient(to bottom, rgba(var(--color-olive-rgb) / 1), rgba(var(--color-olive-rgb) / 0.85), rgba(var(--color-olive-rgb) / 0))',
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
        style={{
          height: '33%',
          background:
            'linear-gradient(to top, rgba(var(--color-olive-rgb) / 1), rgba(var(--color-olive-rgb) / 0.85), rgba(var(--color-olive-rgb) / 0))',
        }}
      />
      <div className="relative z-10 px-6 pt-10">
        <h2 className="text-center text-3xl font-semibold text-antique md:text-4xl">
          Values, Culture &amp; Beliefs
        </h2>
      </div>
      <div
        className="no-scrollbar h-full overflow-y-scroll scroll-smooth pb-12 pt-6"
      >
        <div className="space-y-10 px-6">
          {slideGroups.map((group) => {
            const activeIndex = activeIndices[group.heading] ?? 0;
            const isHorizontal = group.axis === 'x';
            const containerClasses = clsx(
              'group/card no-scrollbar flex gap-6',
              group.axis === 'y' &&
                'h-[22rem] snap-y snap-mandatory flex-col overflow-y-scroll pb-4',
              isHorizontal &&
                'snap-x snap-mandatory overflow-x-scroll pb-4 flex-nowrap',
              group.axis === 'paged' &&
                'h-[22rem] snap-y snap-mandatory flex-col overflow-y-scroll pb-4 scroll-py-6',
            );
            return (
              <section key={group.heading} className="space-y-4">
                <p className="text-center text-lg font-semibold uppercase tracking-[0.3em] text-antique/80">
                  {group.heading}
                </p>
                <div
                  ref={(node) => {
                    groupRefs.current[group.heading] = node;
                  }}
                  className={containerClasses}
                >
                  {group.cards.map((card, cardIndex) => {
                    const distance = Math.abs(activeIndex - cardIndex);
                    const opacity = 1 - Math.min(distance * 0.4, 0.8);
                    const motionConfig = motionConfigs[group.motionKey];
                    return (
                      <motion.div
                        key={card.title}
                        initial={motionConfig.initial}
                        animate={motionConfig.animate}
                        transition={motionConfig.transition}
                        style={{ opacity }}
                        className={clsx(
                          'snap-center rounded-xl bg-antique p-6 text-charcoal shadow-silver/20',
                          isHorizontal && 'min-w-[calc(100%-1.5rem)] shrink-0',
                          group.axis === 'paged' && 'snap-always',
                        )}
                      >
                        <p className="text-xl font-bold leading-snug">{card.title}</p>
                        <p className="mt-2 text-lg leading-relaxed text-charcoal">{card.description}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
