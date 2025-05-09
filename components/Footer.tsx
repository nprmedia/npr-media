'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 px-6 py-10 text-sm text-center text-gray-500 dark:text-gray-400">
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
