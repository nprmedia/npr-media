'use client';

import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import HeroContent, { HeroContentProps } from './HeroContent';

export type HeroProps = HeroContentProps;

const HeroSection: React.FC<HeroProps> = (props) => {
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setReveal(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-0 grayscale z-10 pointer-events-none">
        <HeroContent {...props} forceGray />
      </div>
      <div
        className={clsx(
          'relative z-20 transition-[clip-path] duration-[2000ms] ease-in-out',
          reveal ? 'clip-reveal-full' : 'clip-reveal-hidden'
        )}
      >
        <HeroContent {...props} />
      </div>
    </div>
  );
};

export default HeroSection;
