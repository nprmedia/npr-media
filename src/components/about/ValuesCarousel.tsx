'use client';

import { motion, useSpring } from 'framer-motion';
import type { MotionStyle } from 'framer-motion';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { KeyboardEvent, TouchEvent as ReactTouchEvent } from 'react';
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

type MotionConfig = {
  initial: Record<string, number>;
  animate: Record<string, number>;
  transition: { duration: number; ease: string };
};

const cultureScaleForDistance = (distance: number) =>
  Math.max(0.86, 1 - distance * 0.08);

function CarouselCard({
  group,
  card,
  cardIndex,
  activeIndex,
  isHorizontal,
  motionConfig,
}: {
  group: SlideGroup;
  card: Slide;
  cardIndex: number;
  activeIndex: number;
  isHorizontal: boolean;
  motionConfig: MotionConfig;
}) {
  const distance = Math.abs(activeIndex - cardIndex);
  const opacity = 1 - Math.min(distance * 0.4, 0.8);
  const isCulture = group.motionKey === 'culture';
  const targetScale = isCulture ? cultureScaleForDistance(distance) : 1;
  const scaleSpring = useSpring(targetScale, {
    stiffness: 220,
    damping: 28,
    mass: 0.9,
  });

  useEffect(() => {
    scaleSpring.set(targetScale);
  }, [scaleSpring, targetScale]);

  const style: MotionStyle = {
    opacity,
    transformOrigin: 'center center',
  };

  if (isCulture) {
    style.scale = scaleSpring;
  }

  return (
    <motion.div
      data-card-index={cardIndex}
      initial={motionConfig.initial}
      animate={motionConfig.animate}
      transition={motionConfig.transition}
      style={style}
      className={clsx(
        'snap-center rounded-xl bg-antique p-6 text-charcoal shadow-silver/20',
        isHorizontal && 'min-w-[calc(100%-1.5rem)] shrink-0',
        group.axis === 'paged' && 'snap-always',
        isCulture && 'will-change-transform',
      )}
    >
      <p className="text-xl font-bold leading-snug">{card.title}</p>
      <p className="mt-2 text-lg leading-relaxed text-charcoal">
        {card.description}
      </p>
    </motion.div>
  );
}

export default function ValuesCarousel({ className }: ValuesCarouselProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const groupRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [activeIndices, setActiveIndices] = useState<Record<string, number>>(() =>
    Object.fromEntries(slideGroups.map((group) => [group.heading, 0])),
  );
  const activeIndicesRef = useRef(activeIndices);
  const [currentStage, setCurrentStage] = useState(0);
  const isTransitioningRef = useRef(false);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const hasMountedRef = useRef(false);

  const motionConfigs = useMemo<Record<SlideGroup['motionKey'], MotionConfig>>(
    () => ({
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
    }),
    [],
  );

  useEffect(() => {
    activeIndicesRef.current = activeIndices;
  }, [activeIndices]);

  const clampScroll = useCallback((value: number, max: number) => {
    if (max <= 0) return 0;
    if (value < 0) return 0;
    if (value > max) return max;
    return value;
  }, []);

  const scrollToCard = useCallback(
    (group: SlideGroup, index: number, behavior: ScrollBehavior = 'smooth') => {
      const container = groupRefs.current[group.heading];
      if (!container) return;
      const card = container.querySelector<HTMLElement>(
        `[data-card-index="${index}"]`,
      );
      if (!card) return;

      if (group.axis === 'x') {
        const desired =
          card.offsetLeft - container.clientWidth / 2 + card.clientWidth / 2;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        const left = clampScroll(desired, maxScrollLeft);
        container.scrollTo({ left, behavior });
      } else {
        const desired =
          card.offsetTop - container.clientHeight / 2 + card.clientHeight / 2;
        const maxScrollTop = container.scrollHeight - container.clientHeight;
        const top = clampScroll(desired, maxScrollTop);
        container.scrollTo({ top, behavior });
      }
    },
    [clampScroll],
  );

  const stepWithinStage = useCallback(
    (direction: 1 | -1) => {
      const stage = slideGroups[currentStage];
      if (!stage) return;
      const heading = stage.heading;
      const currentIndex = activeIndicesRef.current[heading] ?? 0;
      const nextIndex = Math.min(
        Math.max(currentIndex + direction, 0),
        stage.cards.length - 1,
      );

      if (nextIndex !== currentIndex) {
        setActiveIndices((prev) => ({ ...prev, [heading]: nextIndex }));
        return;
      }

      if (direction > 0 && currentStage < slideGroups.length - 1) {
        setCurrentStage((prev) => prev + 1);
      } else if (direction < 0 && currentStage > 0) {
        setCurrentStage((prev) => prev - 1);
      }
    },
    [currentStage],
  );

  const requestStageStep = useCallback(
    (direction: 1 | -1) => {
      if (isTransitioningRef.current) return;
      isTransitioningRef.current = true;
      stepWithinStage(direction);
      window.setTimeout(() => {
        isTransitioningRef.current = false;
      }, 420);
    },
    [stepWithinStage],
  );

  const handleWheel = useCallback(
    (event: WheelEvent) => {
      const stage = slideGroups[currentStage];
      if (!stage) return;
      const { deltaX, deltaY } = event;
      const primary =
        stage.axis === 'x'
          ? Math.abs(deltaY) > Math.abs(deltaX)
            ? deltaY
            : deltaX
          : deltaY;

      if (primary === 0) return;
      event.preventDefault();
      requestStageStep(primary > 0 ? 1 : -1);
    },
    [currentStage, requestStageStep],
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [handleWheel]);

  useEffect(() => {
    slideGroups.forEach((group, index) => {
      const targetIndex = activeIndices[group.heading] ?? 0;
      const behavior: ScrollBehavior =
        hasMountedRef.current && index === currentStage ? 'smooth' : 'auto';
      scrollToCard(group, targetIndex, behavior);
    });
    hasMountedRef.current = true;
  }, [activeIndices, currentStage, scrollToCard]);

  useEffect(() => {
    const stage = slideGroups[currentStage];
    if (!stage) return;
    const index = activeIndicesRef.current[stage.heading] ?? 0;
    scrollToCard(stage, index, 'auto');
  }, [currentStage, scrollToCard]);

  const handleTouchStart = useCallback((event: ReactTouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    if (!touch) return;
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  }, []);

  const handleTouchMove = useCallback(
    (event: ReactTouchEvent<HTMLDivElement>) => {
      const start = touchStartRef.current;
      if (!start) return;
      const touch = event.touches[0];
      if (!touch) return;
      const deltaX = touch.clientX - start.x;
      const deltaY = touch.clientY - start.y;
      const stage = slideGroups[currentStage];
      if (!stage) return;

      const primary =
        stage.axis === 'x'
          ? Math.abs(deltaY) > Math.abs(deltaX)
            ? deltaY
            : deltaX
          : deltaY;
      if (Math.abs(primary) < 24) return;
      event.preventDefault();
      requestStageStep(primary < 0 ? 1 : -1);
      touchStartRef.current = null;
    },
    [currentStage, requestStageStep],
  );

  const handleTouchEnd = useCallback(() => {
    touchStartRef.current = null;
  }, []);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight' || event.key === 'PageDown') {
        event.preventDefault();
        requestStageStep(1);
      } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft' || event.key === 'PageUp') {
        event.preventDefault();
        requestStageStep(-1);
      }
    },
    [requestStageStep],
  );

  return (
    <div
      ref={containerRef}
      className={clsx(
        'relative mx-auto h-screen max-w-md overflow-hidden bg-olive',
        className,
      )}
      tabIndex={0}
      role="group"
      aria-label="Values, Culture & Beliefs"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
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
      <div className="relative z-10 h-full pb-12 pt-6">
        <div className="relative h-full px-6">
          {slideGroups.map((group, index) => {
            const activeIndex = activeIndices[group.heading] ?? 0;
            const isHorizontal = group.axis === 'x';
            const isActiveStage = index === currentStage;
            const spacerClass = clsx(
              'pointer-events-none snap-none self-stretch',
              'flex-[0_0_50%] shrink-0',
            );
            const containerClasses = clsx(
              'group/card no-scrollbar flex gap-6',
              'min-h-0 flex-1',
              group.axis === 'y' &&
                'snap-y snap-mandatory flex-col overflow-y-scroll pb-4',
              isHorizontal &&
                'snap-x snap-mandatory overflow-x-scroll pb-4 flex-nowrap',
              group.axis === 'paged' &&
                'snap-y snap-mandatory flex-col overflow-y-scroll pb-4 scroll-py-6',
            );
            return (
              <section
                key={group.heading}
                className={clsx(
                  'absolute inset-0 flex min-h-0 flex-col gap-6 transition-opacity duration-500 ease-out',
                  isActiveStage
                    ? 'opacity-100 pointer-events-auto'
                    : 'opacity-0 pointer-events-none',
                )}
                aria-hidden={!isActiveStage}
              >
                <div className="flex justify-center">
                  <p className="text-center text-lg font-semibold uppercase tracking-[0.3em] text-antique/80">
                    {group.heading}
                  </p>
                </div>
                <div
                  ref={(node) => {
                    groupRefs.current[group.heading] = node;
                  }}
                  className={containerClasses}
                >
                  <div aria-hidden className={spacerClass} />
                  {group.cards.map((card, cardIndex) => (
                    <CarouselCard
                      key={card.title}
                      group={group}
                      card={card}
                      cardIndex={cardIndex}
                      activeIndex={activeIndex}
                      isHorizontal={isHorizontal}
                      motionConfig={motionConfigs[group.motionKey]}
                    />
                  ))}
                  <div aria-hidden className={spacerClass} />
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
