'use client';

import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { useSearchParams, useRouter } from 'next/navigation';
import { ShieldCheck, ChevronDown } from 'lucide-react';
import {
  motion,
  useAnimation,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
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

/* ──────────────────────────────────────────────────────────────── */
/* HERO INNER CORE                                                 */
/* ──────────────────────────────────────────────────────────────── */
function HeroInner({
  headline,
  subheadline,
  ctaText,
  ctaLink,
  image,
  enableEffects = true,
}: HeroProps & { enableEffects?: boolean }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  const controls = useAnimation();
  const prefersReducedMotion = useReducedMotion();

  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [personalizedHeadline, setPersonalizedHeadline] = useState('');

  // Video state
  const [videoOpacity, setVideoOpacity] = useState(0);
  const [filterState, setFilterState] = useState(
    'grayscale(1) brightness(0.1) contrast(3) saturate(0)'
  ); // start pure black

  /* ─── Background logic ───────────────────────────── */
  useParticleBackground(particlesRef);
  useHeroAnalytics({ heroRef, ctaRef });

  /* ─── Personalization ────────────────────────────── */
  const searchParams = useSearchParams();
  useEffect(() => {
    const stored = localStorage.getItem('hero_headline_variant');
    if (stored) {
      setPersonalizedHeadline(stored);
      return;
    }
    const campaign = searchParams.get('utm_campaign');
    if (campaign === 'launch2025') {
      setPersonalizedHeadline('Supercharge your launch in 30 days');
      localStorage.setItem(
        'hero_headline_variant',
        'Supercharge your launch in 30 days'
      );
    } else if (campaign === 'founders') {
      setPersonalizedHeadline('Built exclusively for startup founders');
      localStorage.setItem(
        'hero_headline_variant',
        'Built exclusively for startup founders'
      );
    }
    const email = localStorage.getItem('user_email');
    if (email && email.includes('@bigco.com')) {
      setPersonalizedHeadline('The #1 platform for enterprise teams like BigCo');
    }
  }, [searchParams]);

  /* ─── Animate on mount ───────────────────────────── */
  useEffect(() => {
    if (prefersReducedMotion || !enableEffects) return;
    controls.start('visible');
  }, [controls, prefersReducedMotion, enableEffects]);

  /* ─── Sticky CTA Timer ───────────────────────────── */
  useEffect(() => {
    if (!enableEffects) return;
    let timer: ReturnType<typeof setTimeout>;
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

  /* ─── Video lifecycle ────────────────────────────── */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    v.playsInline = true;

    const startTransitions = () => {
      setVideoOpacity(1);
      const t = setTimeout(
        () => setFilterState('brightness(1) contrast(1) saturate(1)'),
        5000 // ← fade to normal over 5 s
      );
      return t;
    };

    let timer: ReturnType<typeof setTimeout> | undefined;

    const onLoadedData = () => {
      v.play().catch(() => {});
      if (timer) clearTimeout(timer);
      timer = startTransitions();
    };

    const onPlay = () => {
      if (!timer) timer = startTransitions();
    };

    const onEnded = () => {
      v.pause();
      v.currentTime = Math.max(0, v.duration - 0.1);
    };

    v.addEventListener('loadeddata', onLoadedData, { once: true });
    v.addEventListener('play', onPlay);
    v.addEventListener('ended', onEnded);

    const fallback = setTimeout(() => {
      v.play().catch(() => {});
      if (!timer) timer = startTransitions();
    }, 1000);

    return () => {
      if (timer) clearTimeout(timer);
      clearTimeout(fallback);
      v.removeEventListener('play', onPlay);
      v.removeEventListener('ended', onEnded);
    };
  }, []);

  /* ─── Motion Variants ────────────────────────────── */
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
    visible: { opacity: 0.9, y: 0, transition: { delay: 2.4, duration: 0.6 } },
  };
  const ctaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 3, duration: 0.6 } },
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

  /* ─── JSX ────────────────────────────────────────── */
  return (
    <motion.div
      id="hero"
      ref={heroRef}
      aria-label="Hero Section"
      style={{ scale: heroScale, opacity: heroOpacity, willChange: 'transform, opacity' }}
      className="relative min-h-[100svh] pb-[5vh] flex items-center justify-center bg-black font-sans overflow-hidden"
    >
      {/* Video background */}
      <video
        ref={videoRef}
        className="absolute inset-0 z-[1] h-full w-full object-cover transition-[opacity,filter] duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ opacity: videoOpacity, filter: filterState }}
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        <source src="/NPR Video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* readability overlays */}
      <div className="absolute inset-0 z-[2] pointer-events-none bg-gradient-to-b from-black/40 via-black/10 to-black/70" />
      <div className="absolute inset-0 z-[2] pointer-events-none bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,0.85)_100%)]" />

      {/* particles */}
      <div ref={particlesRef} className="pointer-events-none absolute inset-0 z-[3]" />

      {/* Text and CTA */}
      <motion.div
        className="relative z-10 mx-auto grid w-full max-w-[88rem] grid-cols-1 items-center gap-[clamp(2rem,6vw,5rem)] px-[clamp(1rem,4vw,2rem)] pt-[clamp(1rem,5vw,3rem)] pb-[clamp(4rem,8vw,6rem)] md:grid-cols-2"
        initial="hidden"
        animate={controls}
      >
        <div className="px-0">
          <motion.div
            variants={textVariants}
            custom={0}
            className="mb-6 ml-20 text-[clamp(0.85rem,1.2vw,0.9rem)] font-thin tracking-widest text-silver"
          >
            HELLO, WE ARE NPR MEDIA
          </motion.div>

          <motion.h1
            id="hero-headline"
            variants={textVariants}
            custom={1}
            className="mb-6 ml-20 w-full text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1] font-grotesk font-bold tracking-tight text-silver drop-shadow-[0_0_12px_rgba(0,0,0,0.6)]"
          >
            {headlineSegments.map((seg, si) => (
              <motion.span
                key={si}
                className={clsx(
                  'inline-block transition-colors duration-700',
                  seg.highlight ? 'text-blood-glow' : 'text-silver'
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
              variants={subheadlineVariants}
              className="font-grotesk font-medium text-silver/90 mt-6 sm:mt-8 lg:mt-10 mb-7 ml-20 max-w-[60ch] text-left text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.6] drop-shadow-[0_0_8px_rgba(0,0,0,0.6)]"
            >
              {subheadline}
            </motion.p>
          )}

          {ctaText && ctaLink && (
            <motion.div variants={ctaVariants} className="group relative inline-block ml-20">
              <motion.button
                type="button"
                ref={ctaRef}
                onClick={() => router.push(ctaLink)}
                className="cta-glow ripple-hover inline-flex items-center justify-center rounded-full border border-blood bg-blood px-[clamp(0.875rem,2.75vw,1.5rem)] py-[clamp(0.4rem,1vw,.75rem)] text-[clamp(0.875rem,1vw,1rem)] font-bold uppercase tracking-wide text-silver shadow-[0_0_20px_rgba(179,0,0,0.3)] transition-transform duration-300 hover:scale-105 hover:bg-crimson focus-visible:outline focus-visible:outline-crimson"
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
              <div className="ml-20 text-olive relative top-full left-0 mt-1 text-[0.65rem] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                No card required. Cancel anytime.
              </div>
            </motion.div>
          )}

          <motion.p
            role="note"
            variants={badgeVariants}
            className="mt-6 sm:mt-8 flex items-center justify-center sm:justify-start text-olive text-[clamp(0.75rem,0.9vw,0.875rem)] font-medium uppercase tracking-wider drop-shadow-[0_0_4px_rgba(0,0,0,0.6)]"
          >
            <ShieldCheck className="ml-20 mr-2 h-4 w-4" />
            <span>SOC2 Certified • GDPR Ready • Trusted by 10 000 + users</span>
          </motion.p>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.button
        aria-label="Scroll to next section"
        onClick={() =>
          document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' })
        }
        variants={cueVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-[2vh] left-1/2 z-20 -translate-x-1/2 border-none bg-transparent p-2 text-blood opacity-70 transition hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blood"
      >
        <ChevronDown className="h-[clamp(1.5rem,2vw,2rem)] w-[clamp(1.5rem,2vw,2rem)] animate-[bounce_2.5s_infinite]" />
      </motion.button>

      {/* Sticky CTA */}
      {isStickyVisible && (
        <div className="fixed bottom-36 left-1/2 z-50 -translate-x-1/2 rounded-full bg-blood px-4 py-2 text-sm font-bold text-charcoal opacity-90 shadow-xl hover:scale-105 hover:bg-blood">
          Still thinking? Start your free trial now →
        </div>
      )}
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────────────── */
/* MAIN EXPORT                                                    */
/* ──────────────────────────────────────────────────────────────── */
export default function HeroSection(props: HeroProps) {
  return (
    <div className="relative w-full overflow-hidden">
      <HeroInner {...props} />
    </div>
  );
}
