'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="footer" className="bg-[var(--color-bg-dark)] text-[var(--color-text-light)] border-t px-[clamp(1rem,4vw,3rem)] py-[clamp(2.5rem,6vw,4rem)] text-[clamp(0.75rem,1vw,0.875rem)] text-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} NPR Media. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
          <Link href="mailto:hello@npr.media">Contact</Link>
        </div>
      </div>
    </footer>
  )
}
