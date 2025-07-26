import Link from 'next/link';
import type { ReactNode } from 'react';

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  event?: string;
  className?: string;
}

export default function CTAButton({
  href,
  children,
  event,
  className =
    'inline-flex items-center justify-center rounded-[6px] bg-antique/70 backdrop-blur-md px-8 py-5 text-sm font-bold text-charcoal shadow-[0_2px_6px_rgba(28,28,28,0.06),_0_8px_24px_rgba(28,28,28,0.04)] transition hover:ring-4 hover:ring-blood/50 cta-glow',
}: CTAButtonProps) {
  return (
    <Link href={href} data-event={event} className={className}>
      {children}
    </Link>
  );
}
