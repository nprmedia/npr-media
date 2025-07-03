'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type Slide = {
  title: string;
  description: string;
};

const slides: Slide[] = [
  {
    title: 'Value: Results Over Vanity',
    description:
      'Real growth matters most. Vanity metrics may look nice but rarely move the needle. Every feature ties back to concrete business results.',
  },
  {
    title: 'Value: Transparency Always',
    description:
      'Open communication builds trust. We share progress often so there are no surprises. Clear expectations set the stage for great partnerships.',
  },
  {
    title: 'Value: Simplicity Wins',
    description:
      'Complex sites slow teams down. We keep code lean so your product stays fast. Simple solutions are easier to maintain and extend.',
  },
  {
    title: 'Culture: Learn and Iterate',
    description:
      'We experiment constantly to improve. Each project teaches us something new. Continuous learning keeps our work fresh and effective.',
  },
  {
    title: 'Culture: Ownership Mentality',
    description:
      'We step up like it is our own product. Taking responsibility yields better outcomes. Everyone on the team is accountable for quality.',
  },
  {
    title: 'Culture: Remote Friendly',
    description:
      'Great talent lives everywhere. Our flexible approach lets us collaborate with the best people anywhere. Being remote keeps us nimble.',
  },
  {
    title: 'Belief: Partners Not Vendors',
    description:
      'True success comes from collaboration. We embed with your team to understand every goal. You get a dedicated partner, not just another vendor.',
  },
  {
    title: 'Belief: People Over Process',
    description:
      'Rigid frameworks slow innovation. We adapt methods to fit your business. Strong relationships drive outcomes more than strict processes.',
  },
  {
    title: 'Belief: Long-Term Success',
    description:
      'We build to last and grow. Scalable systems ensure your investment keeps delivering. Solutions should stand the test of time.',
  },
];

export default function ValuesCarousel() {
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

  return (
    <div className="relative mx-auto h-screen max-w-md overflow-hidden bg-olive">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10" style={{ height: '33%' }}>
        <div className="h-full bg-gradient-to-b from-antique via-antique/80 to-transparent" />
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
        style={{ height: '33%' }}
      >
        <div className="h-full bg-gradient-to-t from-antique via-antique/80 to-transparent" />
      </div>
      <div
        ref={containerRef}
        className="no-scrollbar h-full snap-y snap-mandatory overflow-y-scroll scroll-smooth py-12"
      >
        {slides.map((slide, i) => {
          const distance = Math.abs(index - i);
          const opacity = 1 - Math.min(distance * 0.4, 0.8);
          return (
            <section key={slide.title} className="snap-center py-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                style={{ opacity }}
                className="rounded-xl bg-olive p-6 text-charcoal shadow"
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
