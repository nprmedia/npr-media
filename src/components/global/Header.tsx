'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Routes } from '@/lib/routes';
import CTAButton from '../CTAButton';

interface HeaderProps {
  /**
   * When true, show dark text while the header background is transparent.
   * Useful on pages with light backgrounds so links remain visible.
   */
  light?: boolean;
}

export default function StickyHeader({ light = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const textColor = scrolled || !light ? 'text-[var(--color-text-light)]' : 'text-charcoal';

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 z-50 w-full transition-all ${
        scrolled ? 'bg-[#0A0F1C]/90 shadow-md backdrop-blur-sm' : 'backdrop-blur-0 bg-transparent'
      } ${textColor}`}
    >
      <div
        className={`mx-auto flex h-[clamp(3rem,6vw,3.75rem)] w-full items-center justify-between px-3 md:px-10 lg:px-60 ${textColor}`}
        style={{ backgroundColor: scrolled ? 'var(--color-bg-dark)' : 'transparent' }}
      >
        <Link
          href="/"
          className="text-[clamp(0.9rem,1.4vw,1.25rem)] font-bold tracking-tight transition-transform hover:scale-105"
        >
          NPR MEDIA
        </Link>
        <nav className="hidden items-center gap-[clamp(1.25rem,3vw,2rem)] md:flex">
          <Link
            href="/pricing"
            className="text-[clamp(0.75rem,1vw,0.875rem)] transition-transform hover:scale-105 hover:text-blood"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="text-[clamp(0.75rem,1vw,0.875rem)] transition-transform hover:scale-105 hover:text-blood"
          >
            About
          </Link>
          <Link
            href={Routes.contact}
            className="text-[clamp(0.75rem,1vw,0.875rem)] transition-transform hover:scale-105 hover:text-blood"
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className="text-[clamp(0.75rem,1vw,0.875rem)] transition-transform hover:scale-105 hover:text-blood"
          >
            Blog
          </Link>
          <Link
            href="/why-npr"
            className="text-[clamp(0.75rem,1vw,0.875rem)] transition-transform hover:scale-105 hover:text-blood"
          >
            Why NPR
          </Link>
          <CTAButton
            href="/webdev-landing"
            event="cta-navbar"
            className="ml-4 inline-flex items-center gap-2 rounded-lg bg-blood px-4 py-[0.45rem] text-[clamp(0.65rem,0.9vw,0.75rem)] font-semibold text-silver shadow transition-transform hover:scale-105 hover:bg-crimson"
          >
            Get Started →
          </CTAButton>
        </nav>
      </div>
    </motion.header>
  );
}
