'use client';

import Link from 'next/link';
import { Routes } from '@/lib/routes';

export default function Footer() {
  return (
    <footer
      id="footer"
      className="border-t bg-[var(--color-bg-dark)] px-[clamp(1rem,4vw,3rem)] py-[clamp(2.5rem,6vw,4rem)] text-center text-[clamp(0.75rem,1vw,0.875rem)] text-[var(--color-text-light)]"
    >
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-4">
          <p className="text-lg font-semibold">Ready to discuss your project?</p>
          <Link
            href={Routes.contact}
            className="inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-md transition hover:scale-105"
          >
            Let&rsquo;s Talk
          </Link>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p>&copy; {new Date().getFullYear()} NPR Media. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="mailto:hello@npr.media">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
