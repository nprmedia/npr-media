import Link from 'next/link';
import type { ReactNode } from 'react';

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  event?: string;
  className?: string;
}

export default function CTAButton({ href, children, event, className = 'inline-flex items-center justify-center rounded-full bg-blood px-6 py-3 text-sm font-semibold text-silver shadow-md transition hover:bg-crimson hover:scale-105' }: CTAButtonProps) {
  return (
    <Link href={href} data-event={event} className={className}>
      {children}
    </Link>
  );
}
