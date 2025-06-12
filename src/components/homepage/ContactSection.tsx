'use client'

import { contactSection } from '@/content/homepage/contactSection'
import Link from 'next/link'

export default function ContactSection() {
  return (
      <section className="bg-[var(--color-bg-dark)] text-[var(--color-text-light)] py-[clamp(4rem,8vw,6rem)] px-[clamp(1rem,4vw,3rem)]">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">
            {contactSection.title}
          </h2>
          <p className="text-[clamp(0.9rem,1.6vw,1.125rem)] text-gray-300">
            {contactSection.description}
          </p>
          <div className="pt-4">
            <Link
              href={contactSection.button.href}
              className="inline-block rounded-full bg-white text-black px-[clamp(1.25rem,3vw,1.5rem)] py-[clamp(0.6rem,1.2vw,0.75rem)] text-[clamp(0.8rem,1vw,0.9rem)] font-semibold shadow hover:bg-gray-200 transition"
            >
              {contactSection.button.label}
            </Link>
          </div>
        </div>
      </section>
  )
}
