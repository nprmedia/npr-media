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

  const textColor = light ? 'text-charcoal' : 'text-charcoal';

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 z-50 w-full transition-all ${
        scrolled ? 'bg-antique/90 shadow-md backdrop-blur-sm' : 'backdrop-blur-0 bg-transparent'
      } ${textColor}`}
    >
      <div
        className={`mx-auto flex h-[clamp(3rem,6vw,3.75rem)] w-full items-center px-4 md:px-8 lg:px-20 ${textColor} ${scrolled ? 'bg-antique' : 'bg-transparent'}`}
      >
        <Link
          href="/"
          className="text-[clamp(0.9rem,1.4vw,1.25rem)] font-bold tracking-tight transition-transform hover:scale-105"
        >
          NPR MEDIA
        </Link>
        <nav className="hidden ml-auto items-center gap-[clamp(0.75rem,2vw,1.25rem)] md:flex">
          <Link
            href="/pricing"
            className="hover:text-blood text-[clamp(0.75rem,1vw,0.875rem)] transition-transform hover:scale-105"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="hover:text-blood text-[clamp(0.75rem,1vw,0.875rem)] transition-transform hover:scale-105"
          >
            About
          </Link>
          <Link
            href={Routes.contact}
            className="hover:text-blood text-[clamp(0.75rem,1vw,0.875rem)] transition-transform hover:scale-105"
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className="hover:text-blood text-[clamp(0.75rem,1vw,0.875rem)] transition-transform hover:scale-105"
          >
            Blog
          </Link>
          <Link
            href="/why-npr"
            className="hover:text-blood text-[clamp(0.75rem,1vw,0.875rem)] transition-transform hover:scale-105"
          >
            Why NPR
          </Link>
          <CTAButton
            href="/webdev-landing"
            event="cta-navbar"
            className="bg-blood text-charcoal hover:bg-blood ml-3 inline-flex items-center gap-2 rounded-lg px-3 py-[0.4rem] text-[clamp(0.65rem,0.9vw,0.75rem)] font-semibold shadow transition-transform hover:scale-105"
          >
            Get Started →
          </CTAButton>
        </nav>
      </div>
    </motion.header>
  );
}
