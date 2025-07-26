'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Routes } from '@/lib/routes';
import CTAButton from '../CTAButton';

interface HeaderProps {
  /**
   * When true, show dark text while the header background is transparent.
   * Useful on pages with light backgrounds so links remain visible.
   */
  light?: boolean;
  /** When true, apply a grayscale filter to the entire header */
  forceGray?: boolean;
}

export default function StickyHeader({ light = false, forceGray = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (docHeight > 0) {
        setProgress((window.scrollY / docHeight) * 100);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0.1 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

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
    <header role="banner" className="sticky top-0 z-50 w-full">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`w-full transition-all duration-500 ease-in-out transition-[filter] duration-[2000ms] ${
          scrolled
            ? 'bg-sepia/80 shadow-md backdrop-blur-md rounded-b-lg'
            : 'bg-transparent backdrop-blur-0'
        } ${textColor} ${forceGray ? 'filter grayscale' : ''}`}
      >
        <div
          className={`mx-auto flex h-[clamp(3rem,6vw,3.75rem)] w-full items-center pt-3 px-[clamp(1rem,4vw,3rem)] ${textColor}`}
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
              className="logo-glow logo-hover flex text-[clamp(0.9rem,1.4vw,1.25rem)] font-bold tracking-[0.5px] transition-transform transition-colors text-charcoal hover:text-olive hover:scale-105"
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
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          className="ml-auto flex md:hidden"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        <nav
          className="hidden items-center gap-x-6 md:flex ml-[calc(50vw-1rem)] md:ml-[calc(50vw-2.5rem)] lg:ml-[calc(50vw-5rem)]"
        >
          <Link
            href="/pricing" aria-label="Navigate to Pricing section"
            aria-current={activeSection === 'pricing' ? 'true' : undefined}
            className="group font-grotesk font-medium text-[clamp(0.75rem,1vw,0.875rem)] relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 group-hover:after:scale-x-100 hover:text-olive focus-visible:outline outline-offset-2"
          >
            Pricing
          </Link>
          <Link
            href="/about" aria-label="Navigate to About section"
            aria-current={activeSection === 'about' ? 'true' : undefined}
            className="group font-grotesk font-medium text-[clamp(0.75rem,1vw,0.875rem)] relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 group-hover:after:scale-x-100 hover:text-olive focus-visible:outline outline-offset-2"
          >
            About
          </Link>
          <Link
            href={Routes.contact} aria-label="Navigate to Contact section"
            aria-current={activeSection === 'contact' ? 'true' : undefined}
            className="group font-grotesk font-medium text-[clamp(0.75rem,1vw,0.875rem)] relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 group-hover:after:scale-x-100 hover:text-olive focus-visible:outline outline-offset-2"
          >
            Contact
          </Link>
          <Link
            href="/blog" aria-label="Navigate to Blog section"
            aria-current={activeSection === 'blog' ? 'true' : undefined}
            className="group font-grotesk font-medium text-[clamp(0.75rem,1vw,0.875rem)] relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 group-hover:after:scale-x-100 hover:text-olive focus-visible:outline outline-offset-2"
          >
            Blog
          </Link>
          <Link
            href="/why-npr" aria-label="Navigate to Why NPR section"
            aria-current={activeSection === 'why-npr' ? 'true' : undefined}
            className="group font-grotesk font-medium text-[clamp(0.75rem,1vw,0.875rem)] relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 group-hover:after:scale-x-100 hover:text-olive focus-visible:outline outline-offset-2"
          >
            Why NPR
          </Link>
            <CTAButton
              href="/webdev-landing"
              event="cta-navbar"
              aria-label="Start your project"
              className="group relative ml-4 inline-flex items-center gap-2 rounded-full px-[clamp(1rem,2.5vw,1.5rem)] py-[clamp(0.5rem,1.2vh,0.75rem)] text-[clamp(0.875rem,1.2vw,1rem)]"
            >
            <span>Get Started</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </CTAButton>
        </nav>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-antique text-charcoal md:hidden"
          >
            <Link onClick={() => setMenuOpen(false)} href="/pricing">Pricing</Link>
            <Link onClick={() => setMenuOpen(false)} href="/about">About</Link>
            <Link onClick={() => setMenuOpen(false)} href={Routes.contact}>Contact</Link>
            <Link onClick={() => setMenuOpen(false)} href="/blog">Blog</Link>
            <Link onClick={() => setMenuOpen(false)} href="/why-npr">Why NPR</Link>
              <CTAButton
                href="/webdev-landing"
                event="cta-navbar"
                aria-label="Start your project"
                className="mt-4 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm"
              >
              <span>Get Started</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </CTAButton>
          </motion.div>
        )}
        <div className="absolute bottom-0 left-0 h-0.5 bg-blood transition-[width] duration-300" style={{ width: `${progress}%` }} />
        </div>
      </motion.div>
    </header>
  );
}
