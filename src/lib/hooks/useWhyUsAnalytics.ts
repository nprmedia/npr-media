import { useEffect } from 'react';

export function useWhyUsAnalytics(ctaRef: React.RefObject<HTMLAnchorElement | null>) {
  useEffect(() => {
    const start = performance.now();

    const log = (event: string, data: Record<string, unknown> = {}) => {
      console.log(`[WhyUsAnalytics] ${event}`, data);
    };

    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 100) {
        log('Viewed All Stacks', { ms: Math.round(performance.now() - start) });
        window.removeEventListener('scroll', onScroll);
      }
    };

    const onHover = () => log('CTA Hover');
    const onClick = () => log('CTA Click');

    window.addEventListener('scroll', onScroll);
    const cta = ctaRef.current;
    if (cta) {
      cta.addEventListener('mouseenter', onHover);
      cta.addEventListener('click', onClick);
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (cta) {
        cta.removeEventListener('mouseenter', onHover);
        cta.removeEventListener('click', onClick);
      }
    };
  }, [ctaRef]);
}
