'use client'

import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { ShieldCheck } from 'lucide-react'
import { motion, type AnimationControls, type MotionValue } from 'framer-motion'
import type { HighlightedSegment } from '@/components/common/HighlightedText'

export interface HeroContentProps {
  headlineSegments: HighlightedSegment[]
  subheadline?: string
  ctaText?: string
  ctaLink?: string
  image?: { url: string; alt?: string; width?: number; height?: number }
  controls: AnimationControls
  overlayY: MotionValue<string | number>
  rOpacity: MotionValue<number>
  overlayRef: React.RefObject<HTMLDivElement>
  ctaRef: React.RefObject<HTMLButtonElement>
  onCtaClick: () => void
  forceGray?: boolean
}

export function HeroContent({
  headlineSegments,
  subheadline,
  ctaText,
  ctaLink,
  image,
  controls,
  overlayY,
  rOpacity,
  overlayRef,
  ctaRef,
  onCtaClick,
  forceGray = false,
}: HeroContentProps) {
  const textVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  }
  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  }
  const subheadlineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 0.9,
      y: 0,
      transition: { delay: 1, duration: 0.6 },
    },
  }
  const ctaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1.5, duration: 0.6 },
    },
  }
  const badgeVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1.8, duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <motion.div
      className="relative z-10 mx-auto grid w-full max-w-[88rem] grid-cols-1 items-center gap-[clamp(2rem,6vw,5rem)] px-[clamp(1rem,4vw,2rem)] pt-[clamp(1rem,5vw,3rem)] pb-[clamp(4rem,8vw,6rem)] md:grid-cols-2"
      initial="hidden"
      animate={controls}
    >
      <div className="px-0">
        <motion.div
          variants={textVariants}
          custom={0}
          className={clsx(
            'mb-6 text-[clamp(0.85rem,1.2vw,0.9rem)] font-thin tracking-widest',
            forceGray ? 'text-gray-400' : 'text-charcoal'
          )}
        >
          HELLO, WE ARE NPR MEDIA
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          className="w-full"
        >
          <motion.h1
            id="hero-headline"
            data-scroll
            variants={textVariants}
            custom={1}
            className="mb-6 w-full text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1] font-grotesk font-bold tracking-tight"
          >
            {headlineSegments.map((seg, si) => {
              const isTrustedBy = seg.text.trim().toLowerCase() === 'trusted by';
              const cls = clsx(
                'inline-block transition-colors duration-700',
                forceGray
                  ? isTrustedBy
                    ? 'text-blood glow-blood filter-none'
                    : 'text-gray-400 filter grayscale'
                  : seg.highlight
                    ? 'text-blood glow-blood'
                    : 'text-charcoal'
              );
              return (
                <motion.span key={si} className={cls} variants={wordVariants} custom={si}>
                  {seg.text}
                </motion.span>
              )
            })}
          </motion.h1>
          {subheadline && (
            <motion.p
              id="hero-subheadline"
              aria-describedby="hero-headline"
              variants={subheadlineVariants}
              className={clsx(
                'font-grotesk font-medium mt-6 sm:mt-8 lg:mt-10 mb-7 mx-auto max-w-[60ch] text-center text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.6]',
                forceGray ? 'text-gray-400 filter grayscale' : 'text-charcoal opacity-90 md:opacity-100'
              )}
            >
              {subheadline}
            </motion.p>
          )}
          {ctaText && ctaLink && (
            <motion.div variants={ctaVariants} className="group relative inline-block mx-auto md:mx-0">
              <motion.button
                type="button"
                ref={ctaRef}
                aria-label="Start your project with NPR Media"
                onClick={onCtaClick}
                className={clsx(
                  'cta-glow ripple-hover inline-flex items-center justify-center rounded-full border px-[clamp(1.875rem,3.75vw,2.5rem)] py-[clamp(0.9rem,1.5vw,1.25rem)] text-[clamp(0.875rem,1vw,1rem)] font-bold uppercase tracking-wide shadow-[0_0_20px_rgba(179,0,0,0.2)] transition-transform duration-300 focus-visible:outline',
                  forceGray
                    ? 'border-gray-400 bg-gray-400 text-charcoal filter grayscale'
                    : 'border-blood bg-blood text-silver hover:scale-105 hover:bg-crimson focus-visible:outline-crimson'
                )}
              >
                <span>{ctaText}</span>
                <motion.span
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6, duration: 0.5 }}
                  className="ml-1 transition-transform group-hover:translate-x-1"
                >
                  →
                </motion.span>
              </motion.button>
              <div className={clsx('relative top-full left-0 mt-1 text-[0.65rem] transition-opacity duration-200', forceGray ? 'text-gray-400 opacity-0' : 'text-olive opacity-0 group-hover:opacity-100')}>
                No card required. Cancel anytime.
              </div>
            </motion.div>
          )}
          <motion.p
            role="note"
            aria-label="SOC2 certified and founder-backed"
            variants={badgeVariants}
            className={clsx(
              'mt-6 sm:mt-8 text-center sm:text-left flex items-center justify-center sm:justify-start text-[clamp(0.75rem,0.9vw,0.875rem)] font-medium uppercase tracking-wider font-smallcaps',
              forceGray ? 'text-gray-400 filter grayscale' : 'text-olive'
            )}
          >
            <ShieldCheck className="mr-2 h-4 w-4 flex-shrink-0" />
            <span>SOC2 Certified • GDPR Ready • Trusted by 10,000+ users</span>
          </motion.p>
        </motion.div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 z-0 hidden -translate-x-1/2 md:flex justify-center mix-blend-overlay"
        style={{ left: '80%', width: '25%' }}
      >
        <motion.div
          ref={overlayRef}
          style={{ y: overlayY, willChange: 'transform' }}
          initial="hidden"
          animate="visible"
          className="flex h-[200%] flex-col items-center pb-[5vh]"
        >
          {['N', 'P', 'R'].map((letter) => (
            <motion.span
              key={letter}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 1, ease: 'easeIn' } }}
              style={{ opacity: letter === 'R' ? rOpacity : 1 }}
              className="block font-grotesk font-extrabold uppercase leading-none text-sepia text-[45vh]"
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
        style={{ bottom: '28%', filter: 'contrast(0.85) brightness(1.05)', transition: 'transform 0.4s ease' }}
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
          <div className="pointer-events-none absolute top-0 left-0 h-full w-full rounded-xl bg-[linear-gradient(270deg,var(--tw-gradient-stops))] from-charcoal/15 to-transparent" />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default HeroContent
