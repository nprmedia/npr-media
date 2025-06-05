'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 px-[clamp(1rem,4vw,3rem)] py-[clamp(2.5rem,6vw,4rem)] text-[clamp(0.75rem,1vw,0.875rem)] text-center text-gray-500 dark:text-gray-400">
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
