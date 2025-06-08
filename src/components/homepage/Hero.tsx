'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import {
  motion,
  useAnimation,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from 'framer-motion';
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
  const ctaRef = useRef<HTMLAnchorElement>(null);

  const searchParams = useSearchParams();
  const controls = useAnimation();
  const prefersReducedMotion = useReducedMotion();

  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [personalizedHeadline, setPersonalizedHeadline] = useState('');

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const overlayRaw = useTransform(scrollYProgress, [0, 1], ['0vh', '-60vh']);
  const overlayY = useSpring(overlayRaw, { stiffness: 60, damping: 20 });

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useTransform(tiltY, [-60, 60], [12, -12]);
  const rotateY = useTransform(tiltX, [-60, 60], [-12, 12]);

  const handleTilt = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = e.clientX - rect.left - rect.width / 2;
    const dy = e.clientY - rect.top - rect.height / 2;
    tiltX.set(dx);
    tiltY.set(dy);
  };

  const resetTilt = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      aria-label="Hero Section"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#1F1F1F] font-sans"
    >
      <div
        ref={containerRef}
        className="pointer-events-none absolute inset-0 z-[3] h-full w-full"
      />

      <motion.div
        className="relative z-10 mx-auto grid w-full max-w-[88rem] grid-cols-1 items-center gap-[clamp(2rem,6vw,5rem)] px-[clamp(1rem,4vw,2rem)] py-[clamp(4rem,8vw,6rem)] md:grid-cols-2"
        initial="hidden"
        animate={controls}
      >
        <div className="pl-[clamp(2rem,4vw,3rem)]">
          <div className="mb-1 text-[clamp(0.65rem,1.2vw,0.9rem)] font-bold uppercase text-[#ACFF4F]">
            HELLO, WE ARE NPR MEDIA
          </div>
          <div className="pl-[clamp(1.25rem,4vw,2.5rem)]">
            <motion.h1
              variants={textVariants}
              custom={1}
              className="mb-4 text-[clamp(1.5rem,3.6vw,2.8rem)] leading-tight font-extrabold tracking-tight text-[#F2F3F4] hover:scale-103"
            >
              {personalizedHeadline || headline}
            </motion.h1>
            {subheadline && (
              <motion.p
                variants={textVariants}
                custom={1.5}
                className="mb-4 max-w-xl text-[clamp(0.75rem,1.6vw,1rem)] text-[#F2F3F4] hover:scale-102"
              >
                {subheadline}
              </motion.p>
            )}
            {ctaText && ctaLink && (
              <motion.div
                variants={textVariants}
                custom={2}
                className="relative inline-block"
              >
                <motion.a
                  ref={ctaRef}
                  href={ctaLink}
                  onMouseMove={handleTilt}
                  onMouseLeave={resetTilt}
                  style={{ rotateX, rotateY }}
                  className="relative isolate flex items-center justify-center overflow-hidden rounded-xl bg-black/70 px-[clamp(1rem,2.5vw,1.5rem)] py-[clamp(0.6rem,1.3vw,0.8rem)] text-[clamp(0.75rem,1vw,0.95rem)] font-semibold uppercase tracking-wider text-white shadow-2xl backdrop-blur-lg"
                >
                  <motion.span
                    aria-hidden
                    className="absolute inset-0 rounded-xl bg-gradient-conic from-primary via-accent to-primary opacity-60"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, ease: 'linear', duration: 8 }}
                    style={{ scale: 1.4 }}
                  />
                  <motion.span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-xl bg-white/5 mix-blend-overlay blur-lg"
                  />
                  <span className="relative z-10">{ctaText}</span>
                </motion.a>
                <div className="text-muted relative top-full left-1/2 mt-1 -translate-x-1/2 text-[0.65rem]">
                  No card required. Cancel anytime.
                </div>
              </motion.div>
            )}
            <div className="text-muted mt-4 text-[0.6rem] hover:scale-101">
              SOC2 Certified • GDPR Ready • Trusted by 10,000+ users
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
        }}
        className="pointer-events-none absolute right-[25%] z-20 hidden md:flex"
        style={{ opacity: 0.35, top: 0, bottom: 0, y: overlayY, willChange: 'transform' }}
      >
        {['N', 'P', 'R'].map((letter) => (
          <motion.span
            key={letter}
            variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
            className="block font-extrabold text-gray-500 mix-blend-difference leading-none"
            style={{ fontSize: '50vh', lineHeight: 1 }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>

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
        </div>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 transform">
        <div className="text-primary animate-bounce text-lg drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]">
          ↓
        </div>
      </div>

      {isStickyVisible && (
        <div className="fixed bottom-36 left-1/2 z-50 -translate-x-1/2 rounded-full bg-black px-4 py-2 text-sm font-bold text-white opacity-90 shadow-xl hover:scale-105">
          Still thinking? Start your free trial now →
        </div>
      )}
    </section>
  );
};

export default HeroSection;
