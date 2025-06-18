'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  responseMicrocopy,
  TruthSequence,
  AnimationVariant,
} from '@/content/why-us/sequences';

interface StackProps {
  seq: TruthSequence;
  showTestimonial?: boolean;
}

export default function TruthStack({ seq, showTestimonial }: StackProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const variant: AnimationVariant = seq.animation ?? 'left';
  const transforms = {
    left: {
      card1: { x: useTransform(scrollYProgress, [0, 0.33], ['0%', '-120%']) },
      card2: {
        x: useTransform(scrollYProgress, [0, 0.33, 0.66], ['100%', '0%', '-120%']),
      },
      card3: { x: useTransform(scrollYProgress, [0.66, 1], ['100%', '0%']) },
    },
    right: {
      card1: { x: useTransform(scrollYProgress, [0, 0.33], ['0%', '120%']) },
      card2: {
        x: useTransform(scrollYProgress, [0, 0.33, 0.66], ['-100%', '0%', '120%']),
      },
      card3: { x: useTransform(scrollYProgress, [0.66, 1], ['-100%', '0%']) },
    },
    up: {
      card1: { y: useTransform(scrollYProgress, [0, 0.33], ['0%', '-120%']) },
      card2: {
        y: useTransform(scrollYProgress, [0, 0.33, 0.66], ['100%', '0%', '-120%']),
      },
      card3: { y: useTransform(scrollYProgress, [0.66, 1], ['100%', '0%']) },
    },
    down: {
      card1: { y: useTransform(scrollYProgress, [0, 0.33], ['0%', '120%']) },
      card2: {
        y: useTransform(scrollYProgress, [0, 0.33, 0.66], ['-100%', '0%', '120%']),
      },
      card3: { y: useTransform(scrollYProgress, [0.66, 1], ['-100%', '0%']) },
    },
    rotate: {
      card1: { rotate: useTransform(scrollYProgress, [0, 0.33], ['0deg', '-90deg']) },
      card2: {
        rotate: useTransform(scrollYProgress, [0, 0.33, 0.66], ['90deg', '0deg', '-90deg']),
      },
      card3: { rotate: useTransform(scrollYProgress, [0.66, 1], ['90deg', '0deg']) },
    },
    zoom: {
      card1: { scale: useTransform(scrollYProgress, [0, 0.33], [1, 0.6]) },
      card2: {
        scale: useTransform(scrollYProgress, [0, 0.33, 0.66], [0.6, 1, 0.6]),
      },
      card3: { scale: useTransform(scrollYProgress, [0.66, 1], [0.6, 1]) },
    },
  } as const;

  const { card1, card2, card3 } = transforms[variant];

  return (
    <div ref={ref} className="relative h-[200vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center">
        <div className="relative h-[80vh] w-full max-w-md">
          <motion.div
            style={card1}
            className="absolute inset-0 z-30 flex flex-col items-center justify-center rounded-xl bg-white p-6 text-center shadow-lg"
          >
            <p className="text-lg font-semibold">{seq.claim}</p>
          </motion.div>

          <motion.div
            style={card2}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center rounded-xl bg-gray-800 p-6 text-center text-white shadow-lg"
          >
            <p className="text-lg font-semibold">{seq.truth}</p>
          </motion.div>

          <motion.div
            style={card3}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-pink-600 to-purple-600 p-6 text-center text-white shadow-xl"
          >
            <p className="text-lg font-semibold">{seq.response}</p>
            <p className="mt-2 text-sm text-white/80">{responseMicrocopy}</p>
            <span className="pointer-events-none absolute right-2 bottom-2 text-[10px] opacity-60">
              Built by NPR Media
            </span>
          </motion.div>
        </div>
      </div>
      {showTestimonial && (
        <div className="absolute bottom-8 left-1/2 z-40 w-full max-w-sm -translate-x-1/2 rounded-md bg-white p-4 text-center shadow-lg">
          <p className="text-sm italic">&ldquo;Our leads doubled within a month!&rdquo;</p>
          <p className="text-xs font-semibold text-gray-500">&mdash; Jane, SaaS Founder</p>
        </div>
      )}
    </div>
  );
}
