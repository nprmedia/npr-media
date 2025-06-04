'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion, useAnimation, useReducedMotion } from 'framer-motion';
import { useHeroAnalytics } from '@/lib/hooks/useHeroAnalytics';

interface HeroProps {
  headline: string;
  subheadline?: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroSection: React.FC<HeroProps> = ({ headline, subheadline, ctaText, ctaLink }) => {
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
    const handleScroll = () => {
      if (window.scrollY > 300 && !modifiedCTA) setModifiedCTA(true);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [modifiedCTA]);

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
      className={`relative min-h-screen flex items-center justify-center bg-[#1F1F1F] font-sans ${isFrozen ? 'overflow-hidden' : ''}`}
    >
      <motion.div
        className="relative z-10 max-w-[88rem] w-full mx-auto px-[clamp(1rem,4vw,2rem)] py-[clamp(4rem,8vw,6rem)] grid grid-cols-1 md:grid-cols-2 gap-[clamp(2rem,6vw,5rem)] items-center"
        initial="hidden"
        animate={controls}
      >
        <div className="relative flex flex-col items-start">
          <motion.div
            variants={textVariants}
            custom={0}
            className="text-[clamp(0.85rem,1.2vw,0.9rem)] text-[#ACFF4F] tracking-widest font-thin mb-6 ml-[10vw]"
          >
            WE ARE NPR-MEDIA
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="ml-[15vw] w-full"
          >
            <motion.h1
              variants={textVariants}
              custom={1}
              className="text-[clamp(2.5rem,5vw,4rem)] text-[#F2F3F4] font-extrabold tracking-tight leading-tight mb-4 w-full"
            >
              {personalizedHeadline || headline}
            </motion.h1>

            {subheadline && (
              <motion.p
                variants={textVariants}
                custom={1.5}
                className="text-[clamp(0.75rem,1.6vw,1rem)] text-[#F2F3F4] mb-6 w-full"
              >
                {subheadline}
              </motion.p>
            )}

            {ctaText && ctaLink && (
              <motion.div
                variants={textVariants}
                custom={2}
                className="relative inline-block group ml-[0.2rem]"
              >
                <Link
                  ref={ctaRef}
                  href={{ pathname: ctaLink }}
                  className="relative inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-[#3A7DFF] rounded-[9999px_9999px_9999px_40%] shadow-[0_0_40px_rgba(58,125,255,0.4)] transition-all duration-300 ease-in-out group-hover:scale-105"
                >
                  <span className="relative z-10 group-hover:tracking-wider transition-all duration-300">
                    {modifiedCTA ? 'Claim My Free Trial' : ctaText}
                  </span>
                  <span
                    className="absolute inset-0 z-0 rounded-[9999px_9999px_9999px_40%] bg-gradient-to-br from-[#3A7DFF66] to-transparent blur-xl opacity-70 group-hover:opacity-100 transition duration-500"
                    aria-hidden="true"
                  />
                  <span
                    className="absolute -inset-1 rounded-[9999px_9999px_9999px_40%] border border-[#3A7DFF66] opacity-30 group-hover:animate-ping"
                    aria-hidden="true"
                  />
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>

      {isStickyVisible && (
        <div className="fixed bottom-36 left-1/2 -translate-x-1/2 bg-[#1F1F1F] text-white text-sm font-bold opacity-90 px-4 py-2 rounded-full shadow-xl z-50">
          Still thinking? Start your free trial now →
        </div>
      )}
    </section>
  );
};

export default HeroSection;
