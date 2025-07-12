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

  const scrollToTop = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      scrollToTop(e);
    }
  };

  const textColor = scrolled || light ? 'text-charcoal' : 'text-offwhite';

  return (
    <header role="banner" className="fixed top-0 left-0 z-50 w-full">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`w-full transition-all ${
          scrolled ? 'bg-antique/90 shadow-md backdrop-blur-sm' : 'backdrop-blur-0 bg-transparent'
        } ${textColor}`}
      >
        <div
          className={`mx-auto flex h-[clamp(3rem,6vw,3.75rem)] w-full items-center pt-2 px-4 md:px-10 lg:px-20 ${textColor} ${scrolled ? 'bg-antique' : 'bg-transparent'}`}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Link
              href="/"
              aria-label="Go to homepage"
              tabIndex={0}
              onClick={scrollToTop}
              onKeyDown={handleKey}
              className="logo-glow logo-hover flex text-[clamp(0.9rem,1.4vw,1.25rem)] font-bold tracking-[0.5px] transition-transform transition-colors text-[#666] hover:text-[#222] hover:scale-105"
            >
              {"NPR MEDIA".split("").map((ch, i) =>
                ch === " " ? (
                  <span key={i} className="mx-[0.15em]" />
                ) : (
                  <span key={i} className="logo-letter">
                    {ch}
                  </span>
                )
              )}
            </Link>
          </motion.div>
        <nav
          className="hidden items-center gap-[clamp(1rem,3vw,1.75rem)] md:flex ml-[calc(50vw-1rem)] md:ml-[calc(50vw-2.5rem)] lg:ml-[calc(50vw-5rem)]"
        >
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
            className="border border-blood bg-blood text-charcoal hover:bg-transparent hover:text-blood ml-4 inline-flex items-center gap-2 rounded-lg px-4 py-[0.45rem] text-[clamp(0.65rem,0.9vw,0.75rem)] font-semibold shadow transition-transform hover:scale-105 cta-glow ripple-hover"
          >
            Get Started →
          </CTAButton>
        </nav>
        </div>
      </motion.div>
    </header>
  );
}
