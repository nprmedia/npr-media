'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { responseMicrocopy, TruthSequence } from '@/content/why-us/sequences';

interface StackProps {
  seq: TruthSequence;
  showTestimonial?: boolean;
  variant?: number;
}

export default function TruthStack({ seq, showTestimonial, variant = 0 }: StackProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const card1Style: Record<string, unknown> = {};
  const card2Style: Record<string, unknown> = {};
  const card3Style: Record<string, unknown> = {};

  const xLeft1 = useTransform(scrollYProgress, [0, 0.33], ['0%', '-120%']);
  const xLeft2 = useTransform(scrollYProgress, [0, 0.33, 0.66], ['100%', '0%', '-120%']);
  const xLeft3 = useTransform(scrollYProgress, [0.66, 1], ['100%', '0%']);

  const xRight1 = useTransform(scrollYProgress, [0, 0.33], ['0%', '120%']);
  const xRight2 = useTransform(scrollYProgress, [0, 0.33, 0.66], ['-100%', '0%', '120%']);
  const xRight3 = useTransform(scrollYProgress, [0.66, 1], ['-100%', '0%']);

  const yUp1 = useTransform(scrollYProgress, [0, 0.33], ['0%', '-120%']);
  const yUp2 = useTransform(scrollYProgress, [0, 0.33, 0.66], ['100%', '0%', '-120%']);
  const yUp3 = useTransform(scrollYProgress, [0.66, 1], ['100%', '0%']);

  const yDown1 = useTransform(scrollYProgress, [0, 0.33], ['0%', '120%']);
  const yDown2 = useTransform(scrollYProgress, [0, 0.33, 0.66], ['-100%', '0%', '120%']);
  const yDown3 = useTransform(scrollYProgress, [0.66, 1], ['-100%', '0%']);

  const scale1 = useTransform(scrollYProgress, [0, 0.33], [1, 0.5]);
  const scale2 = useTransform(scrollYProgress, [0, 0.33, 0.66], [0.5, 1, 0.5]);
  const scale3 = useTransform(scrollYProgress, [0.66, 1], [0.5, 1]);

  const opacity1 = useTransform(scrollYProgress, [0, 0.33], [1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.33, 0.66], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.66, 1], [0, 1]);

  const rotate1 = useTransform(scrollYProgress, [0, 0.33], ['0deg', '180deg']);
  const rotate2 = useTransform(scrollYProgress, [0, 0.33, 0.66], ['-180deg', '0deg', '180deg']);
  const rotate3 = useTransform(scrollYProgress, [0.66, 1], ['-180deg', '0deg']);

  switch (variant % 6) {
    case 1:
      card1Style.x = xRight1;
      card2Style.x = xRight2;
      card3Style.x = xRight3;
      break;
    case 2:
      card1Style.y = yUp1;
      card2Style.y = yUp2;
      card3Style.y = yUp3;
      break;
    case 3:
      card1Style.y = yDown1;
      card2Style.y = yDown2;
      card3Style.y = yDown3;
      break;
    case 4:
      card1Style.scale = scale1;
      card1Style.opacity = opacity1;
      card2Style.scale = scale2;
      card2Style.opacity = opacity2;
      card3Style.scale = scale3;
      card3Style.opacity = opacity3;
      break;
    case 5:
      card1Style.rotate = rotate1;
      card2Style.rotate = rotate2;
      card3Style.rotate = rotate3;
      break;
    default:
      card1Style.x = xLeft1;
      card2Style.x = xLeft2;
      card3Style.x = xLeft3;
  }

  return (
    <div ref={ref} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center">
        <div className="relative h-[80vh] w-full max-w-md">
          <motion.div
            style={card1Style}
            className="absolute inset-0 z-30 flex flex-col items-center justify-center rounded-xl bg-white p-6 text-center shadow-lg"
          >
            <p className="text-lg font-semibold">{seq.claim}</p>
          </motion.div>

          <motion.div
            style={card2Style}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center rounded-xl bg-gray-800 p-6 text-center text-white shadow-lg"
          >
            <p className="text-lg font-semibold">{seq.truth}</p>
          </motion.div>

          <motion.div
            style={card3Style}
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
