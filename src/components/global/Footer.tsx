'use client'

import Link from 'next/link'
import { routes } from '@/lib/routes'

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[var(--color-bg-dark)] text-[var(--color-text-light)] border-t px-[clamp(1rem,4vw,3rem)] py-[clamp(2.5rem,6vw,4rem)] text-[clamp(0.75rem,1vw,0.875rem)] text-center"
    >
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Ready to start?</h2>
          <Link
            href={routes.contact}
            className="inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black shadow-md transition hover:scale-105"
          >
            Let’s Talk
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
  )
}
