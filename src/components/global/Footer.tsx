'use client';

import Link from 'next/link';
import { ROUTES } from '@/lib/routes';

export default function Footer() {
  return (
    <footer
      id="footer"
      className="space-y-6 border-t bg-[var(--color-bg-dark)] px-[clamp(1rem,4vw,3rem)] py-[clamp(2.5rem,6vw,4rem)] text-center text-[clamp(0.75rem,1vw,0.875rem)] text-[var(--color-text-light)]"
    >
      <div>
        <Link
          href={ROUTES.contact}
          className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-black shadow transition hover:scale-105"
        >
          Let’s Talk
        </Link>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p>&copy; {new Date().getFullYear()} NPR Media. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
          <Link href="mailto:hello@npr.media">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
