import { useEffect } from 'react';

export function useHeroAnalytics(refs: {
  heroRef: React.RefObject<HTMLElement | null>;
  ctaRef: React.RefObject<HTMLButtonElement | null>;
}) {
  useEffect(() => {
    const ttfStart = performance.now();
    let interacted = false;
    let hoverStart: number | null = null;

    const logEvent = (event: string, payload: Record<string, unknown>) => {
      console.log(`[HeroAnalytics] ${event}`, payload);
      // Replace this with PostHog/Plausible/etc later
    };

    const onInteraction = () => {
      if (!interacted) {
        const timeToFirst = performance.now() - ttfStart;
        logEvent('TTFI', { ms: Math.round(timeToFirst) });
        interacted = true;
      }
    };

    const onMouseEnter = () => {
      hoverStart = performance.now();
    };

    const onMouseLeave = () => {
      if (hoverStart) {
        const duration = performance.now() - hoverStart;
        logEvent('CTA Hover', { ms: Math.round(duration) });

        if (duration > 5000) {
          logEvent('Replay Tag: Hover w/o Click >5s', { reason: 'Idle Hover' });
          sessionStorage.setItem('replay_flag', 'hero_cta_idle');
        }
        hoverStart = null;
      }
    };

    const onClick = () => {
      logEvent('CTA Click', { timestamp: Date.now() });
    };

    const onScroll = () => {
      const scrollDepth = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrollDepth > 0.4) {
        logEvent('Scroll Depth Passed 40%', { value: scrollDepth });
      }
    };

    document.addEventListener('mousemove', onInteraction);
    document.addEventListener('keydown', onInteraction);
    window.addEventListener('scroll', onScroll);

    const cta = refs.ctaRef.current;
    if (cta) {
      cta.addEventListener('mouseenter', onMouseEnter);
      cta.addEventListener('mouseleave', onMouseLeave);
      cta.addEventListener('click', onClick);
    }

    return () => {
      document.removeEventListener('mousemove', onInteraction);
      document.removeEventListener('keydown', onInteraction);
      window.removeEventListener('scroll', onScroll);

      if (cta) {
        cta.removeEventListener('mouseenter', onMouseEnter);
        cta.removeEventListener('mouseleave', onMouseLeave);
        cta.removeEventListener('click', onClick);
      }
    };
  }, [refs.heroRef, refs.ctaRef]);
}