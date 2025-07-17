'use client';


import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { useSearchParams, useRouter } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { motion, useAnimation, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useParticleBackground } from '@/lib/hooks/useParticleBackground';
import { useHeroAnalytics } from '@/lib/hooks/useHeroAnalytics';
import { parseTaggedText } from '@/components/common/HighlightedText';
import HeroContent from './HeroContent';

interface HeroProps {
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

const HeroSection: React.FC<HeroProps> = ({ headline, subheadline, ctaText, ctaLink, image }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  // Offset the overlay downward so the "N" sits fully below the sticky header
  // when the page loads. The letters then travel roughly 53% of their wrapper
  // height so the "R" finishes just above the hero's bottom padding as the
  // section scrolls away.
  const overlayY = useTransform(scrollYProgress, [0, 1], ['15%', '-43%']);
  const rOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  const searchParams = useSearchParams();
  const controls = useAnimation();
  const prefersReducedMotion = useReducedMotion();

  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [personalizedHeadline, setPersonalizedHeadline] = useState('');
  const [reveal, setReveal] = useState(false);

  useParticleBackground(containerRef);
  useHeroAnalytics({ heroRef, ctaRef });


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
    if (prefersReducedMotion) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    controls.start('visible').then(() => {
      document.body.style.overflow = original;
    });

    return () => {
      document.body.style.overflow = original;
    };
  }, [controls, prefersReducedMotion]);


  useEffect(() => {
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
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setReveal(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

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
  console.log('Parsed headline segments →', headlineSegments);


  return (
    <motion.section
      id="hero"
      ref={heroRef}
      aria-label="Hero Section"
      style={{ scale: heroScale, opacity: heroOpacity, willChange: 'transform, opacity' }}
      className="relative min-h-[100svh] pb-[5vh] flex items-center justify-center bg-antique font-sans overflow-hidden"
    >
      <div
        ref={containerRef}
        className="pointer-events-none absolute inset-0 z-[3] h-full w-full"
      />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-black/20 via-transparent to-transparent" />


      <div className="relative w-full overflow-hidden">
        {/* Grayscale layer */}
        <div className="absolute inset-0 grayscale z-10 pointer-events-none">
          <HeroContent
            forceGray
            headlineSegments={headlineSegments}
            subheadline={subheadline}
            ctaText={ctaText}
            ctaLink={ctaLink}
            image={image}
            controls={controls}
            overlayY={overlayY}
            rOpacity={rOpacity}
            overlayRef={overlayRef}
            ctaRef={ctaRef}
            onCtaClick={() => ctaLink && router.push(ctaLink)}
          />
        </div>

        {/* Reveal layer (color) */}
        <div
          className={clsx(
            'relative z-20 transition-[clip-path] duration-[2000ms] ease-in-out',
            reveal ? 'clip-reveal-full' : 'clip-reveal-hidden'
          )}
        >
          <HeroContent
            headlineSegments={headlineSegments}
            subheadline={subheadline}
            ctaText={ctaText}
            ctaLink={ctaLink}
            image={image}
            controls={controls}
            overlayY={overlayY}
            rOpacity={rOpacity}
            overlayRef={overlayRef}
            ctaRef={ctaRef}
            onCtaClick={() => ctaLink && router.push(ctaLink)}
          />
        </div>
      </div>

      <motion.button
        aria-label="Scroll to next section"
        onClick={() =>
          document
            .getElementById('templates')?.scrollIntoView({ behavior: 'smooth' })
        }
        variants={cueVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-[2vh] left-1/2 z-20 -translate-x-1/2 appearance-none border-none bg-transparent p-2 text-blood opacity-70 transition hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blood"
      >
        <ChevronDown className="h-[clamp(1.5rem,2vw,2rem)] w-[clamp(1.5rem,2vw,2rem)] animate-[bounce_2.5s_infinite]" />
      </motion.button>

      {isStickyVisible && (
        <div className="fixed bottom-36 left-1/2 z-50 -translate-x-1/2 rounded-full bg-blood px-4 py-2 text-sm font-bold text-charcoal opacity-90 shadow-xl hover:scale-105 hover:bg-blood">
          Still thinking? Start your free trial now →
        </div>
      )}
    </motion.section>
  );
};

export default HeroSection;
