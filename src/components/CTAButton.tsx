import Link from 'next/link';
import type { ReactNode } from 'react';

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  event?: string;
  className?: string;
}

export default function CTAButton({ href, children, event, className = 'inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-foreground shadow-md transition hover:scale-105 hover:bg-primary' }: CTAButtonProps) {
  return (
    <Link href={href} data-event={event} className={className}>
      {children}
    </Link>
  );
}
