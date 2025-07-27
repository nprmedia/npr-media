'use client';

import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import { ShieldCheck, ChevronDown } from 'lucide-react';
import { motion, useAnimation, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useParticleBackground } from '@/lib/hooks/useParticleBackground';
import { useHeroAnalytics } from '@/lib/hooks/useHeroAnalytics';
import { parseTaggedText } from '@/components/common/HighlightedText';

export interface HeroProps {
  headline: string;
  subheadline?: string;
  ctaText?: string;
  ctaLink?: string;
  image?: {
    url: string;
    alt?: string;
    width?: number;
    height?: number;
  };
}

export function HeroContent({
  headline,
  subheadline,
  ctaText,
  ctaLink,
  image,
  forceGray = false,
  enableEffects = true,
}: HeroProps & { forceGray?: boolean; enableEffects?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const disabledContainerRef = useRef<HTMLDivElement>(null);
  const disabledHeroRef = useRef<HTMLElement>(null);
  const disabledCtaRef = useRef<HTMLButtonElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  // Offset the overlay downward so the "N" sits fully below the sticky header
  // when the page loads. The letters then travel roughly 53% of their wrapper
  // height so the "R" finishes just above the hero's bottom padding as the
  // section scrolls away.
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  const searchParams = useSearchParams();
  const controls = useAnimation();
  const prefersReducedMotion = useReducedMotion();

  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [personalizedHeadline, setPersonalizedHeadline] = useState('');

  useParticleBackground(enableEffects ? containerRef : disabledContainerRef);
  useHeroAnalytics({
    heroRef: enableEffects ? heroRef : disabledHeroRef,
    ctaRef: enableEffects ? ctaRef : disabledCtaRef,
  });

  useEffect(() => {
    const storedHeadline = localStorage.getItem('hero_headline_variant');
    if (storedHeadline) {
      setPersonalizedHeadline(storedHeadline);
      return;
    }

    const campaign = searchParams.get('utm_campaign');
    if (campaign === 'launch2025') {
      setPersonalizedHeadline('Supercharge your launch in 30 days');
      localStorage.setItem('hero_headline_variant', 'Supercharge your launch in 30 days');
    } else if (campaign === 'founders') {
      setPersonalizedHeadline('Built exclusively for startup founders');
      localStorage.setItem('hero_headline_variant', 'Built exclusively for startup founders');
    }

    const email = localStorage.getItem('user_email');
    if (email && email.includes('@bigco.com')) {
      setPersonalizedHeadline('The #1 platform for enterprise teams like BigCo');
    }
  }, [searchParams]);

  useEffect(() => {
    if (prefersReducedMotion || !enableEffects) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    controls.start('visible').then(() => {
      document.body.style.overflow = original;
    });

    return () => {
      document.body.style.overflow = original;
    };
  }, [controls, prefersReducedMotion, enableEffects]);

  useEffect(() => {
    if (!enableEffects) return;
    let timer: NodeJS.Timeout;
    const onScroll = () => {
      setIsStickyVisible(false);
      clearTimeout(timer);
      timer = setTimeout(() => setIsStickyVisible(true), 15000);
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, [enableEffects]);

  const textVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };
  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };
  const subheadlineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 0.9,
      y: 0,
      transition: { delay: 2.4, duration: 0.6 },
    },
  };
  const ctaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 3, duration: 0.6 },
    },
  };
  const badgeVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1.8, duration: 0.6, ease: 'easeOut' },
    },
  };
  const cueVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 0.7,
      y: 0,
      transition: { delay: 2.2, duration: 0.6, ease: 'easeOut' },
    },
  };
  const rawHeadline = personalizedHeadline || headline;
  const headlineSegments = parseTaggedText(rawHeadline);

  return (
    <motion.section
      id="hero"
      ref={heroRef}
      aria-label="Hero Section"
      style={{ scale: heroScale, opacity: heroOpacity, willChange: 'transform, opacity' }}
      className="bg-antique relative flex min-h-[100svh] items-center justify-center overflow-hidden pb-[5vh] font-sans"
    >
      <div
        ref={containerRef}
        className="pointer-events-none absolute inset-0 z-[3] h-full w-full"
      />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-black/20 via-transparent to-transparent" />

      <motion.div
        className="relative z-10 mx-auto grid w-full max-w-[88rem] grid-cols-1 items-center gap-[clamp(2rem,6vw,5rem)] px-[clamp(1rem,4vw,2rem)] pt-[clamp(1rem,5vw,3rem)] pb-[clamp(4rem,8vw,6rem)] md:grid-cols-2"
        initial="hidden"
        animate={controls}
      >
        <div className="px-0">
          <motion.div
            variants={textVariants}
            custom={0}
            className={clsx(
              'text-charcoal mb-6 ml-20 text-[clamp(0.85rem,1.2vw,0.9rem)] font-thin tracking-widest',
              forceGray && 'text-gray-400 grayscale filter',
            )}
          >
            HELLO, WE ARE NPR MEDIA
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="w-full"
          >
            <motion.h1
              id="hero-headline"
              data-scroll
              variants={textVariants}
              custom={1}
              className="text-charcoal font-grotesk mb-6 ml-20 w-full text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1] font-bold tracking-tight"
            >
              {headlineSegments.map((seg, si) => (
                <motion.span
                  key={si}
                  className={clsx(
                    'inline-block transition-colors duration-700',
                    forceGray
                      ? seg.text.trim() === 'Trusted by'
                        ? 'text-blood-glow filter-none'
                        : 'text-gray-400 grayscale filter'
                      : seg.highlight
                        ? 'text-blood-glow'
                        : 'text-charcoal',
                  )}
                  variants={wordVariants}
                  custom={si}
                >
                  {seg.text}
                </motion.span>
              ))}
            </motion.h1>
            {subheadline && (
              <motion.p
                id="hero-subheadline"
                aria-describedby="hero-headline"
                variants={subheadlineVariants}
                className={clsx(
                  'font-grotesk text-charcoal mt-6 mb-7 ml-20 max-w-[60ch] text-left text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.6] font-medium opacity-90 sm:mt-8 md:opacity-100 lg:mt-10',
                  forceGray && 'text-gray-400 grayscale filter',
                )}
              >
                {subheadline}
              </motion.p>
            )}
            {ctaText && ctaLink && (
              <motion.div
                variants={ctaVariants}
                className={clsx(
                  'group relative ml-20 inline-block',
                  forceGray && 'grayscale filter',
                )}
              >
                <motion.button
                  type="button"
                  ref={ctaRef}
                  aria-label="Start your project with NPR Media"
                  onClick={() => router.push(ctaLink)}
                  className="cta-glow ripple-hover border-blood bg-blood text-silver hover:bg-crimson focus-visible:outline-crimson inline-flex items-center justify-center rounded-full border px-[clamp(0.875rem,2.75vw,1.5rem)] py-[clamp(0.4rem,1vw,.75rem)] text-[clamp(0.875rem,1vw,1rem)] font-bold tracking-wide uppercase shadow-[0_0_20px_rgba(179,0,0,0.2)] transition-transform duration-300 hover:scale-105 focus-visible:outline"
                >
                  <span>{ctaText}</span>
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.6, duration: 0.5 }}
                    className="ml-1 transition-transform group-hover:translate-x-1"
                  >
                    →
                  </motion.span>
                </motion.button>
                <div className="text-olive relative top-full left-0 mt-1 ml-20 text-[0.65rem] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  No card required. Cancel anytime.
                </div>
              </motion.div>
            )}
            <motion.p
              role="note"
              aria-label="SOC2 certified and founder-backed"
              variants={badgeVariants}
              className={clsx(
                'text-olive font-smallcaps mt-6 flex items-center justify-center text-center text-[clamp(0.75rem,0.9vw,0.875rem)] font-medium tracking-wider uppercase sm:mt-8 sm:justify-start sm:text-left',
                forceGray && 'grayscale filter',
              )}
            >
              <ShieldCheck className="mr-2 ml-20 h-4 w-4 flex-shrink-0" />
              <span>SOC2 Certified • GDPR Ready • Trusted by 10,000+ users</span>
            </motion.p>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center mix-blend-overlay">
          <span
            className={clsx(
              'font-grotesk text-sepia/30 text-[clamp(8rem,75vw,45vh)] leading-none font-extrabold tracking-tight uppercase select-none',
              forceGray && 'grayscale filter',
            )}
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.05)' }}
          >
            NPR
          </span>
        </div>

        <motion.div
          variants={textVariants}
          custom={2.5}
          className={clsx(
            'group absolute left-1/2 z-30 w-full max-w-[clamp(22rem,38vw,38rem)] -translate-x-1/2 transform hover:scale-105 md:left-[74%] md:transform-none',
            forceGray && 'grayscale filter',
          )}
          style={{
            bottom: '28%',
            filter: 'contrast(0.85) brightness(1.05)',
            transition: 'transform 0.4s ease',
          }}
        >
          <div className="relative w-full rounded-xl">
            {image && (
              <Image
                src={image.url}
                alt={image.alt || 'Product Screenshot'}
                width={image.width || 480}
                height={image.height || 480}
                className={clsx('h-auto w-full rounded-xl shadow-2xl', forceGray && 'grayscale')}
                priority
              />
            )}
            <div className="from-charcoal/15 pointer-events-none absolute top-0 left-0 h-full w-full rounded-xl bg-[linear-gradient(270deg,var(--tw-gradient-stops))] to-transparent" />
          </div>
        </motion.div>
      </motion.div>

      <motion.button
        aria-label="Scroll to next section"
        onClick={() => document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' })}
        variants={cueVariants}
        initial="hidden"
        animate="visible"
        className={clsx(
          'text-blood focus-visible:outline-blood absolute bottom-[2vh] left-1/2 z-20 -translate-x-1/2 appearance-none border-none bg-transparent p-2 opacity-70 transition hover:opacity-100 focus-visible:outline focus-visible:outline-2',
          forceGray && 'grayscale filter',
        )}
      >
        <ChevronDown className="h-[clamp(1.5rem,2vw,2rem)] w-[clamp(1.5rem,2vw,2rem)] animate-[bounce_2.5s_infinite]" />
      </motion.button>

      {isStickyVisible && (
        <div className="bg-blood text-charcoal hover:bg-blood fixed bottom-36 left-1/2 z-50 -translate-x-1/2 rounded-full px-4 py-2 text-sm font-bold opacity-90 shadow-xl hover:scale-105">
          Still thinking? Start your free trial now →
        </div>
      )}
    </motion.section>
  );
}

export default function HeroSection({
  reveal: revealProp,
  ...props
}: HeroProps & { reveal?: boolean }) {
  const [reveal, setReveal] = useState(false);
  const overlaySegments = parseTaggedText(props.headline);

  useEffect(() => {
    if (revealProp !== undefined) {
      setReveal(revealProp);
      return;
    }
    const timeout = setTimeout(() => setReveal(true), 1600);
    return () => clearTimeout(timeout);
  }, [revealProp]);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-10">
        <HeroContent {...props} forceGray enableEffects={false} />
      </div>
      <motion.div
        className="pointer-events-none absolute inset-0 z-[70]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: reveal ? 0 : 1, y: 0, transition: { duration: 0.6 } }}
      >
        <div className="relative mx-auto grid w-full max-w-[88rem] grid-cols-1 items-center gap-[clamp(2rem,6vw,5rem)] px-[clamp(1rem,4vw,2rem)] pt-[clamp(1rem,5vw,3rem)] pb-[clamp(4rem,8vw,6rem)] md:grid-cols-2">
          <div className="px-0">
            <div className="text-charcoal invisible mb-6 ml-20 text-[clamp(0.85rem,1.2vw,0.9rem)] font-thin tracking-widest">
              HELLO, WE ARE NPR MEDIA
            </div>
            <h1 className="text-charcoal/30 font-grotesk mb-6 ml-20 w-full text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1] font-bold tracking-tight">
              {overlaySegments.map((seg, i) => (
                <span
                  key={i}
                  className={clsx(
                    seg.text.trim() === 'Trusted by' ? 'text-blood-glow' : 'text-charcoal/50',
                  )}
                >
                  {seg.text}
                </span>
              ))}
            </h1>
          </div>
        </div>
      </motion.div>
      <div
        className={clsx(
          'relative z-20 transition-[clip-path] duration-[1000ms] ease-in-out',
          reveal ? 'clip-reveal-full' : 'clip-reveal-hidden',
        )}
      >
        <HeroContent {...props} />
      </div>
    </div>
  );
}
