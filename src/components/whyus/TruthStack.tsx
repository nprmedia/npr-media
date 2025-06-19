'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { responseMicrocopy, TruthSequence } from '@/content/why-us/sequences';

interface StackProps {
  seq: TruthSequence;
  showTestimonial?: boolean;
}

export default function TruthStack({ seq, showTestimonial }: StackProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Start the scroll progress when the stack enters the viewport from the bottom
  // and finish when its center aligns with the screen center so the final card
  // is perfectly positioned at that point.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  // Animate each card sequentially so the third card finishes sliding when the
  // stack reaches the center of the viewport.
  const card1X = useTransform(scrollYProgress, [0, 0.33], ['0%', '-120%']);
  // Card two should stop moving once centered so visitors can read it
  const card2X = useTransform(scrollYProgress, [0, 0.33, 0.66], ['100%', '0%', '0%']);
  const card3X = useTransform(scrollYProgress, [0.66, 1], ['100%', '0%']);

  return (
    <div ref={ref} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center">
        <div className="relative h-[80vh] w-full max-w-md">
          <motion.div
            style={{ x: card1X }}
            className="absolute inset-0 z-30 flex flex-col items-center justify-center rounded-xl bg-white p-6 text-center shadow-lg"
          >
            <p className="text-lg font-semibold">{seq.claim}</p>
          </motion.div>

          <motion.div
            style={{ x: card2X }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center rounded-xl bg-gray-800 p-6 text-center text-white shadow-lg"
          >
            <p className="text-lg font-semibold">{seq.truth}</p>
          </motion.div>

          <motion.div
            style={{ x: card3X }}
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
