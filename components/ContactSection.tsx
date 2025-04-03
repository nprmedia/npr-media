'use client'

import { contactSection } from '@/content/contactSection'
import FadeInSection from '@/components/FadeInSection'
import Link from 'next/link'

export default function ContactSection() {
  return (
    <FadeInSection>
      <section className="bg-black text-white py-24 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            {contactSection.title}
          </h2>
          <p className="text-lg text-gray-300">
            {contactSection.description}
          </p>
          <div className="pt-4">
            <Link
              href={contactSection.button.href}
              className="inline-block rounded-full bg-white text-black px-6 py-3 text-sm font-semibold shadow hover:bg-gray-200 transition"
            >
              {contactSection.button.label}
            </Link>
          </div>
        </div>
      </section>
    </FadeInSection>
  )
}
