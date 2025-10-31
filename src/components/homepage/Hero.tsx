'use client';

import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
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
  image?: { url: string; alt?: string; width?: number; height?: number };
}

export function HeroContent({
  headline,
  subheadline,
  ctaText,
  ctaLink,
  forceGray = false,
  enableEffects = true,
}: HeroProps & { forceGray?: boolean; enableEffects?: boolean }) {
  const heroRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const controls = useAnimation();
  const prefersReducedMotion = useReducedMotion();

  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [personalizedHeadline, setPersonalizedHeadline] = useState('');
  const [filterState, setFilterState] = useState(
    'grayscale(1) brightness(0.15) contrast(3) saturate(0.1)' // start fully black-scale
  );
  const [videoOpacity, setVideoOpacity] = useState(0);

  useParticleBackground(heroRef);
  useHeroAnalytics({ heroRef, ctaRef });

  // personalize headline
  const searchParams = useSearchParams();
  useEffect(() => {
    const campaign = searchParams.get('utm_campaign');
    if (campaign === 'launch2025') setPersonalizedHeadline('Supercharge your launch in 30 days');
    else if (campaign === 'founders') setPersonalizedHeadline('Built exclusively for startup founders');
  }, [searchParams]);

  // fade video + filter transition
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      setVideoOpacity(0);
      setTimeout(() => setVideoOpacity(1), 800); // fade in video
      // after ~3 s fade filter from black-scale → normal
      setTimeout(() => {
        setFilterState('brightness(1) contrast(1) saturate(1)'); // normal look
      }, 3000);
    };
    const handleEnded = () => {
      video.pause();
      video.currentTime = video.duration - 0.1;
    };
    video.addEventListener('play', handlePlay);
    video.addEventListener('ended', handleEnded);
    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  // sticky CTA timer
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

  const headlineSegments = parseTaggedText(personalizedHeadline || headline);

  return (
    <motion.section
      id="hero"
      ref={heroRef}
      aria-label="Hero Section"
      style={{ scale: heroScale, opacity: heroOpacity }}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden font-sans bg-antique"
    >
      {/* Video background */}
      <video
        ref={videoRef}
        className="absolute inset-0 z-[1] h-full w-full object-cover transition-[opacity,filter] duration-[2000ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ opacity: videoOpacity, filter: filterState }}
        autoPlay
        muted
        playsInline
        preload="auto"
        poster={image?.url || '/fallback.jpg'}
      >
        <source src="/NPR Video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* overlays */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/40 via-black/10 to-black/70 pointer-events-none" />
      <div className="absolute inset-0 z-[2] pointer-events-none bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,0.85)_100%)]" />

      {/* text */}
      <motion.div
        className="relative z-10 mx-auto max-w-[88rem] grid grid-cols-1 md:grid-cols-2 gap-[clamp(2rem,6vw,5rem)] px-[clamp(1rem,4vw,2rem)] pt-[clamp(1rem,5vw,3rem)] pb-[clamp(4rem,8vw,6rem)]"
        initial="hidden"
        animate={controls}
      >
        <div className="px-0">
          <motion.div className="mb-6 ml-20 text-[clamp(0.85rem,1.2vw,0.9rem)] font-thin tracking-widest text-silver">
            HELLO, WE ARE NPR MEDIA
          </motion.div>

          <motion.h1 className="mb-6 ml-20 text-silver drop-shadow-[0_0_12px_rgba(0,0,0,0.6)] text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1] font-grotesk font-bold tracking-tight">
            {headlineSegments.map((seg, i) => (
              <span
                key={i}
                className={clsx('inline-block transition-colors duration-700', seg.highlight ? 'text-blood-glow' : 'text-silver')}
              >
                {seg.text}
              </span>
            ))}
          </motion.h1>

          {subheadline && (
            <p className="font-grotesk font-medium text-silver/90 mt-6 sm:mt-8 lg:mt-10 mb-7 ml-20 max-w-[60ch] text-left text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.6] drop-shadow-[0_0_8px_rgba(0,0,0,0.6)]">
              {subheadline}
            </p>
          )}

          {ctaText && ctaLink && (
            <div className="group relative inline-block ml-20">
              <button
                type="button"
                ref={ctaRef}
                onClick={() => router.push(ctaLink)}
                className="cta-glow ripple-hover inline-flex items-center justify-center rounded-full border border-blood bg-blood px-[clamp(0.875rem,2.75vw,1.5rem)] py-[clamp(0.4rem,1vw,.75rem)] text-[clamp(0.875rem,1vw,1rem)] font-bold uppercase tracking-wide text-silver shadow-[0_0_20px_rgba(179,0,0,0.3)] transition-transform duration-300 hover:scale-105 hover:bg-crimson focus-visible:outline focus-visible:outline-crimson"
              >
                <span>{ctaText}</span>
                <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <div className="ml-20 text-olive relative top-full left-0 mt-1 text-[0.65rem] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                No card required. Cancel anytime.
              </div>
            </div>
          )}

          <p className="mt-6 sm:mt-8 text-center sm:text-left flex items-center justify-center sm:justify-start text-olive text-[clamp(0.75rem,0.9vw,0.875rem)] font-medium uppercase tracking-wider font-smallcaps drop-shadow-[0_0_4px_rgba(0,0,0,0.6)]">
            <ShieldCheck className="ml-20 mr-2 h-4 w-4 flex-shrink-0" />
            <span>SOC2 Certified • GDPR Ready • Trusted by 10,000+ users</span>
          </p>
        </div>
      </motion.div>

      <button
        aria-label="Scroll to next section"
        onClick={() => document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-[2vh] left-1/2 z-20 -translate-x-1/2 border-none bg-transparent p-2 text-blood opacity-70 hover:opacity-100 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-blood"
      >
        <ChevronDown className="h-[clamp(1.5rem,2vw,2rem)] w-[clamp(1.5rem,2vw,2rem)] animate-[bounce_2.5s_infinite]" />
      </button>

      {isStickyVisible && (
        <div className="fixed bottom-36 left-1/2 z-50 -translate-x-1/2 rounded-full bg-blood px-4 py-2 text-sm font-bold text-charcoal opacity-90 shadow-xl hover:scale-105 hover:bg-blood">
          Still thinking? Start your free trial now →
        </div>
      )}
    </motion.section>
  );
}

export default function HeroSection({ reveal: revealProp, ...props }: HeroProps & { reveal?: boolean }) {
  const [reveal, setReveal] = useState(false);
  useEffect(() => {
    if (revealProp !== undefined) setReveal(revealProp);
    else {
      const t = setTimeout(() => setReveal(true), 1600);
      return () => clearTimeout(t);
    }
  }, [revealProp]);

  return (
    <div className="relative w-full overflow-hidden">
      <HeroContent {...props} />
    </div>
  );
}
