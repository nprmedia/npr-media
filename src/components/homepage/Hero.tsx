'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion, useAnimation, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useParticleBackground } from '@/lib/hooks/useParticleBackground';
import { useHeroAnalytics } from '@/lib/hooks/useHeroAnalytics';

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
  const ctaRef = useRef<HTMLAnchorElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  // Scroll the overlay fully offscreen so the last letter ends flush with the
  // bottom of the hero section. This accounts for bottom padding restrictions
  // from the moving background.
  // Scroll the overlay so the letters end slightly above the bottom of the hero
  // section. Moving about 53% of the wrapper height leaves roughly 5% padding
  // below the final "R" while keeping it hidden once the hero scrolls away.
  const overlayY = useTransform(scrollYProgress, [0, 1], ['0%', '-53%']);

  const searchParams = useSearchParams();
  const controls = useAnimation();
  const prefersReducedMotion = useReducedMotion();

  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [personalizedHeadline, setPersonalizedHeadline] = useState('');

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
  const headlineLines = (personalizedHeadline || headline).split('\n');

  return (
    <section
      id="hero"
      ref={heroRef}
      aria-label="Hero Section"
      className="relative min-h-screen pb-[5vh] flex items-center justify-center bg-antique font-sans overflow-hidden"
    >
      <div
        ref={containerRef}
        className="pointer-events-none absolute inset-0 z-[3] h-full w-full"
      />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-black/10 via-transparent to-transparent" />


      <motion.div
        className="relative z-10 mx-auto grid w-full max-w-[88rem] grid-cols-1 items-center gap-[clamp(2rem,6vw,5rem)] px-[clamp(1rem,4vw,2rem)] pt-[clamp(1rem,5vw,3rem)] pb-[clamp(4rem,8vw,6rem)] md:grid-cols-2"
        initial="hidden"
        animate={controls}
      >
        <div className="px-0">
        <motion.div
          variants={textVariants}
          custom={0}
          className="mb-6 text-[clamp(0.85rem,1.2vw,0.9rem)] font-thin tracking-widest text-charcoal"
        >
          HELLO, WE ARE NPR MEDIA
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="w-full">
          <motion.h1
            data-scroll
            variants={textVariants}
            custom={1}
            className="glow-blood mb-6 w-full text-transparent bg-gradient-to-r from-[#b30000] to-orange-500 bg-clip-text text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1] font-grotesk font-bold tracking-tight"
          >
            {headlineLines.map((line, li) => (
              <span key={li} className="block overflow-hidden">
                {line.split(' ').map((word, wi) => (
                  <motion.span
                    key={wi}
                    className="inline-block"
                    variants={wordVariants}
                    custom={wi + li * 10}
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>
          {subheadline && (
            <motion.p
              variants={textVariants}
              custom={1.5}
              className="text-[#333] mb-7 max-w-xl text-[clamp(0.85rem,1.8vw,1.1rem)] hover:scale-102"
            >
              {subheadline}
            </motion.p>
          )}
          {ctaText && ctaLink && (
            <motion.div
              variants={textVariants}
              custom={2}
              className="group relative inline-block hover:scale-105"
            >
              <Link
                ref={ctaRef}
                href={ctaLink}
                data-event="cta-hero"
                className="cta-glow ripple-hover inline-flex items-center justify-center rounded-[6px] px-5 py-[0.5rem] text-[clamp(0.7rem,1vw,0.9rem)] font-bold text-charcoal shadow-lg ring-1 bg-olive transition hover:bg-olive"
              >
                {ctaText}
              </Link>
              <div className="text-olive relative top-full left-0 mt-1 text-[0.65rem] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                No card required. Cancel anytime.
              </div>
            </motion.div>
          )}
          <div className="text-sepia mt-4 text-[0.6rem] font-smallcaps hover:scale-101">
            SOC2 Certified • GDPR Ready • Trusted by 10,000+ users
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-[15%] z-[5] hidden md:flex">
        <motion.div
          ref={overlayRef}
          style={{ y: overlayY }}
          initial="hidden"
          animate="visible"
          className="flex h-[200%] flex-col items-center pb-[5vh]"
        >
          {['N', 'P', 'R'].map((letter) => (
            <motion.span
              key={letter}
              style={{ fontSize: 'min(48vh,32vw)' }}
              variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 0.5, y: 0 } }}
              transition={{ duration: 0.6 }}
              className="block font-extrabold text-sepia leading-none"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <motion.div
        variants={textVariants}
        custom={2.5}
        className="group absolute left-1/2 z-30 w-full max-w-[clamp(22rem,38vw,38rem)] -translate-x-1/2 transform hover:scale-105 md:left-[74%] md:transform-none"
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
              className="h-auto w-full rounded-xl shadow-2xl"
              priority
            />
          )}
          <div
            className="pointer-events-none absolute top-0 left-0 h-full w-full rounded-xl bg-[linear-gradient(270deg,var(--tw-gradient-stops))] from-charcoal/15 to-transparent"
          />
        </div>
      </motion.div>

      </motion.div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 transform">
        <div className="text-blood animate-bounce text-lg drop-shadow">
          ↓
        </div>
      </div>

      {isStickyVisible && (
        <div className="fixed bottom-36 left-1/2 z-50 -translate-x-1/2 rounded-full bg-blood px-4 py-2 text-sm font-bold text-charcoal opacity-90 shadow-xl hover:scale-105 hover:bg-blood">
          Still thinking? Start your free trial now →
        </div>
      )}
    </section>
  );
};

export default HeroSection;
