'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      id="footer"
      className="border-t bg-antique px-[clamp(1rem,4vw,3rem)] py-[clamp(2.5rem,6vw,4rem)] text-center text-[clamp(0.75rem,1vw,0.875rem)] text-charcoal"
    >
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p>&copy; {new Date().getFullYear()} NPR Media. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="/contact" data-event="cta-footer-contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
