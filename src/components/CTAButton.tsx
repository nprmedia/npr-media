import Link from 'next/link';
import type { ReactNode } from 'react';

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  event?: string;
  className?: string;
}

export default function CTAButton({ href, children, event, className = 'inline-flex items-center justify-center rounded-[6px] bg-blood px-8 py-5 text-sm font-bold text-charcoal shadow-md transition hover:scale-105 hover:bg-blood cta-glow ripple-hover' }: CTAButtonProps) {
  return (
    <Link href={href} data-event={event} className={className}>
      {children}
    </Link>
  );
}
