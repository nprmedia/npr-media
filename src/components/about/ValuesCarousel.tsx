'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

type ValueCard = {
  title: string;
  description: string;
};

type ValueGroup = {
  heading: string;
  cards: ValueCard[];
};

const groups: ValueGroup[] = [
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

  const getOpacity = (sectionIndex: number) => {
    const distance = Math.abs(index - sectionIndex);
    return 1 - Math.min(distance * 0.4, 0.8);
  };

  return (
    <div
      className={clsx(
        'relative mx-auto h-screen max-w-md overflow-hidden bg-offwhite',
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10" style={{ height: '33%' }}>
        <div className="h-full bg-gradient-to-b from-white via-white/80 to-transparent" />
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
        style={{ height: '33%' }}
      >
        <div className="h-full bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>
      <div
        ref={containerRef}
        className="no-scrollbar h-full snap-y snap-mandatory overflow-y-scroll scroll-smooth py-12"
      >
        <section className="snap-center py-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{ opacity: getOpacity(0) }}
            className="rounded-xl bg-olive p-6 text-charcoal shadow"
          >
            <h2 className="text-2xl font-bold leading-snug">Values, Culture &amp; Beliefs</h2>
            <p className="mt-2 text-lg leading-relaxed text-charcoal">
              The principles and mindsets that guide how we collaborate, ship, and support long-term success.
            </p>
          </motion.div>
        </section>
        {groups.map((group, groupIndex) => {
          const sectionIndex = groupIndex + 1;
          return (
            <section key={group.heading} className="snap-center py-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                style={{ opacity: getOpacity(sectionIndex) }}
                className="rounded-xl bg-olive p-6 text-charcoal shadow"
              >
                <h3 className="text-xl font-semibold leading-snug">{group.heading}</h3>
                <div className="mt-4 space-y-4">
                  {group.cards.map((card) => (
                    <article key={card.title}>
                      <h4 className="text-lg font-semibold leading-snug">{card.title}</h4>
                      <p className="mt-1 text-base leading-relaxed text-charcoal">{card.description}</p>
                    </article>
                  ))}
                </div>
              </motion.div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
