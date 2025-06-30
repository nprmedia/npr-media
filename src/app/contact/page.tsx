'use client';

import StickyHeader from '@/components/global/Header';
import FooterSection from '@/components/global/Footer';
import { Phone, Mail, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import StickyCTA from '@/components/StickyCTA';

export default function ContactPage() {
  return (
    <section className="flex min-h-screen flex-col">
      <StickyHeader light />
      <main className="flex flex-1 items-center px-6 py-12 lg:px-12">
        <div className="relative mx-auto w-full max-w-3xl space-y-8">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <motion.div
              className="h-72 w-72 rounded-full bg-blue-300/30 blur-3xl"
              animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </div>
          <ContactForm />
          <motion.div
            className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col items-center rounded-lg border bg-neutral-50 p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
              <Phone className="mb-2 h-5 w-5 text-[var(--color-accent)]" />
              <p className="text-sm">+1 (555) 123-4567</p>
            </div>
            <div className="flex flex-col items-center rounded-lg border bg-neutral-50 p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
              <Mail className="mb-2 h-5 w-5 text-[var(--color-accent)]" />
              <p className="text-sm">contact@npr-media.com</p>
            </div>
            <div className="flex flex-col items-center rounded-lg border bg-neutral-50 p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
              <Calendar className="mb-2 h-5 w-5 text-[var(--color-accent)]" />
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline"
              >
                Book a Call
              </a>
            </div>
          </motion.div>
        </div>
      </main>
      <StickyCTA />
      <FooterSection />
    </section>
  );
}
