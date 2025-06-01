'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion, useAnimation, useReducedMotion } from 'framer-motion';
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
  const parallaxRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  const searchParams = useSearchParams();
  const controls = useAnimation();
  const prefersReducedMotion = useReducedMotion();

  const [isFrozen, setIsFrozen] = useState(true);
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [modifiedCTA, setModifiedCTA] = useState(false);
  const [personalizedHeadline, setPersonalizedHeadline] = useState('');
  const [greeting, setGreeting] = useState('');
  const [regionImageUrl, setRegionImageUrl] = useState<string | null>(null);

  useParticleBackground(containerRef);
  useHeroAnalytics({ heroRef, ctaRef });

  useEffect(() => {
    const hour = new Date().getHours();
    setGreeting(hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening');
  }, []);

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

    const locale = navigator.language || '';
    setRegionImageUrl(locale.includes('de') || locale.includes('fr') ? '/images/ui-eu.png' : '/images/ui-us.png');

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
      setIsFrozen(false);
    });

    return () => {
      document.body.style.overflow = original;
    };
  }, [controls, prefersReducedMotion]);

  useEffect(() => {
    if (!parallaxRef.current || prefersReducedMotion) return;
    const handleScroll = () => {
      const offset = window.scrollY;
      if (parallaxRef.current) {
        const translateY = offset * -0.1;
        const blurAmount = Math.min(offset * 0.03, 12);
        parallaxRef.current.style.transform = `translateY(${translateY}px)`;
        parallaxRef.current.style.filter = `blur(${blurAmount}px) brightness(1.1)`;
      }
      if (offset > 300 && !modifiedCTA) setModifiedCTA(true);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [modifiedCTA, prefersReducedMotion]);

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
      className={`relative isolate overflow-hidden min-h-screen flex items-center justify-center bg-gradient-depth animate-gradient-slow text-textDark font-sans ${isFrozen ? 'overflow-hidden' : ''}`}
    >
      <div ref={containerRef} className="absolute inset-0 w-full h-full z-[3] pointer-events-none" />

      <div className="absolute w-full h-full overflow-hidden z-0">
        <div className="relative w-full h-full">
          <Image src="/images/mountain.jpg" alt="Snowy mountain backdrop" fill priority className="object-cover object-left-top opacity-60" style={{ objectPosition: 'left 30%' }} />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[60px] bg-white/10 blur-2xl z-[2]" />
      </div>

      <div className="absolute left-0 top-0 h-full w-1/2 z-[4] pointer-events-none">
        <div className="h-full w-full bg-gradient-to-r from-white via-white/90 to-transparent" />
      </div>
      <div className="absolute inset-0 z-[5] pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(0, 170, 255, 0.25), rgba(255,220,180,0.05))' }} />

      <motion.div className="relative z-10 max-w-[88rem] w-full mx-auto px-[clamp(1rem,4vw,2rem)] py-[clamp(4rem,8vw,6rem)] grid grid-cols-1 md:grid-cols-2 gap-[clamp(2rem,6vw,5rem)] items-center" initial="hidden" animate={controls}>
        <div className="pl-[clamp(1.25rem,3vw,2rem)]">
          <motion.div variants={textVariants} custom={0} className="text-[clamp(0.65rem,1.2vw,0.9rem)] font-bold mb-1 hover:scale-101 text-black">
            {greeting}
          </motion.div>
          <motion.h1 variants={textVariants} custom={1} className="text-[clamp(1.5rem,3.6vw,2.8rem)] font-extrabold tracking-tight leading-tight mb-4 hover:scale-103">
            {personalizedHeadline || headline}
          </motion.h1>
          {subheadline && (
            <motion.p variants={textVariants} custom={1.5} className="text-[clamp(0.75rem,1.6vw,1rem)] text-textLight mb-4 max-w-xl hover:scale-102">
              {subheadline}
            </motion.p>
          )}
          {ctaText && ctaLink && (
            <motion.div variants={textVariants} custom={2} className="relative group inline-block hover:scale-105">
              <div className="absolute -inset-1.5 rounded-full bg-primary/20 animate-pulse z-[-1]" />
              <Link ref={ctaRef} href={{ pathname: ctaLink }} className={`inline-flex items-center justify-center px-4 py-[0.4rem] text-[clamp(0.7rem,1vw,0.9rem)] text-black font-semibold rounded-full transition shadow-lg ring-1 ${modifiedCTA ? 'bg-accent text-black' : 'bg-primary text-black'}`}>
                {modifiedCTA ? 'Claim My Free Trial' : ctaText}
              </Link>
              <div className="relative left-0 top-full mt-1 text-[0.65rem] text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                No card required. Cancel anytime.
              </div>
            </motion.div>
          )}
          <div className="mt-4 text-[0.6rem] text-muted hover:scale-101">SOC2 Certified • GDPR Ready • Trusted by 10,000+ users</div>
        </div>
      </motion.div>

      <motion.div
        variants={textVariants}
        custom={2.5}
        className="absolute z-30 group hover:scale-105 w-full max-w-[clamp(22rem,38vw,38rem)] left-1/2 transform -translate-x-1/2 md:left-[74%] md:transform-none"
        style={{ bottom: '28%', filter: 'contrast(0.85) brightness(1.05)', transition: 'transform 0.4s ease' }}
      >
        <div className="relative w-full rounded-xl">
          {image && (
            <Image
              src={image.url}
              alt={image.alt || 'Product Screenshot'}
              width={image.width || 480}
              height={image.height || 480}
              className="w-full h-auto rounded-xl shadow-2xl"
              priority
            />
          )}
          <div
            className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-xl"
            style={{ background: 'linear-gradient(270deg, rgba(0, 0, 0, 0.15), transparent 60%)' }}
          />
        </div>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce text-primary text-lg drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]">↓</div>
      </div>

      {isStickyVisible && (
        <div className="fixed bottom-36 left-1/2 -translate-x-1/2 bg-black text-white text-sm font-bold opacity-90 hover:scale-105 px-4 py-2 rounded-full shadow-xl z-50">
          Still thinking? Start your free trial now →
        </div>
      )}
    </section>
  );
};

export default HeroSection;