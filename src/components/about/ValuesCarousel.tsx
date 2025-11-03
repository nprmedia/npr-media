'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

type Slide = {
  title: string;
  description: string;
};

type SlideGroup = {
  heading: string;
  cards: Slide[];
};

const slideGroups: SlideGroup[] = [
  {
    heading: 'Values',
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const slides = slideGroups.flatMap((group) =>
    group.cards.map((card) => ({ ...card, groupHeading: group.heading })),
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const onScroll = () => {
      const center = container.scrollTop + container.clientHeight / 2;
      const children = Array.from(container.children) as HTMLElement[];
      let closest = 0;
      let minDistance = Infinity;
      children.forEach((child, i) => {
        const childCenter = child.offsetTop + child.clientHeight / 2;
        const distance = Math.abs(childCenter - center);
        if (distance < minDistance) {
          minDistance = distance;
          closest = i;
        }
      });
      setIndex(closest);
    };
    container.addEventListener('scroll', onScroll);
    onScroll();
    return () => container.removeEventListener('scroll', onScroll);
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
        ref={containerRef}
        className="no-scrollbar h-full snap-y snap-mandatory overflow-y-scroll scroll-smooth pb-12 pt-6"
      >
        {slides.map((slide, i) => {
          const distance = Math.abs(index - i);
          const opacity = 1 - Math.min(distance * 0.4, 0.8);
          const showHeading =
            i === 0 || slides[i - 1]?.groupHeading !== slide.groupHeading;
          return (
            <section key={slide.title} className="snap-center py-4">
              {showHeading && (
                <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-antique/80">
                  {slide.groupHeading}
                </p>
              )}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                style={{ opacity }}
                className="rounded-xl bg-antique p-6 text-charcoal shadow-silver/20"
              >
                <p className="text-xl leading-snug font-bold">{slide.title}</p>
                <p className="mt-2 text-lg leading-relaxed text-charcoal">{slide.description}</p>
              </motion.div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
