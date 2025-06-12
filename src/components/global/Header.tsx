'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled
          ? 'bg-[#0A0F1C]/90 backdrop-blur-sm shadow-md'
          : 'bg-transparent backdrop-blur-0'
      } text-[var(--color-text-light)]`}
    >
      <div
        className="mx-auto flex h-[clamp(3rem,6vw,3.75rem)] w-full items-center justify-between px-3 md:px-10 lg:px-60 text-[var(--color-text-light)]"
        style={{ backgroundColor: scrolled ? 'var(--color-bg-dark)' : 'transparent' }}
      >
        <Link
          href="/"
          className="text-[clamp(0.9rem,1.4vw,1.25rem)] font-bold tracking-tight hover:scale-105 transition-transform"
        >
          NPR MEDIA
        </Link>
        <nav className="hidden md:flex gap-[clamp(1.25rem,3vw,2rem)] items-center">
          <Link href="/features" className="text-[clamp(0.75rem,1vw,0.875rem)] hover:text-blue-600 hover:scale-105 transition-transform">
            Features
          </Link>
          <Link href="/pricing" className="text-[clamp(0.75rem,1vw,0.875rem)] hover:text-blue-600 hover:scale-105 transition-transform">
            Pricing
          </Link>
          <Link href="/about" className="text-[clamp(0.75rem,1vw,0.875rem)] hover:text-blue-600 hover:scale-105 transition-transform">
            About
          </Link>
          <Link href="/contact" className="text-[clamp(0.75rem,1vw,0.875rem)] hover:text-blue-600 hover:scale-105 transition-transform">
            Contact
          </Link>
          <Link href="/blog" className="text-[clamp(0.75rem,1vw,0.875rem)] hover:text-blue-600 hover:scale-105 transition-transform">
            Blog
          </Link>
          <Link
            href="/signup"
            className="ml-4 inline-flex items-center gap-2 bg-black text-white px-4 py-[0.45rem] rounded-lg text-[clamp(0.65rem,0.9vw,0.75rem)] font-semibold shadow hover:brightness-110 hover:scale-105 transition-transform"
          >
            Get Started →
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}