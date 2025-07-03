'use client';

import { useEffect, useState } from 'react';
import StickyHeader from '@/components/global/Header';
import FooterSection from '@/components/global/Footer';
import ContactForm from '@/components/ContactForm';
import StickyCTA from '@/components/StickyCTA';
import { Phone, Mail, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface Copy {
  headline: string;
  subtext: string;
}

const defaultCopy: Copy = {
  headline: 'Get in Touch',
  subtext: "Tell us a bit about your project and we'll respond shortly.",
};

export default function ContactPage() {
  const [copy, setCopy] = useState<Copy>(defaultCopy);

  useEffect(() => {
    async function loadCopy() {
      if (process.env.NEXT_PUBLIC_CMS === 'true') {
        try {
          const mod = await import('@/content/contact');
          if (mod?.contactCopy) {
            setCopy({ ...defaultCopy, ...mod.contactCopy });
          }
        } catch {
          // ignore missing file
        }
      }
    }
    loadCopy();
  }, []);

  return (
    <section className="flex min-h-screen flex-col">
      <StickyHeader light />
      <main className="flex flex-1 items-center px-6 py-12 lg:px-12">
        <div className="relative mx-auto w-full max-w-3xl space-y-8">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <motion.div
              className="h-72 w-72 rounded-full bg-antique/30 blur-3xl"
              animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold md:text-5xl">{copy.headline}</h1>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">{copy.subtext}</p>
          </motion.div>
          <ContactForm />
          <StickyCTA />
          <motion.div
            className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col items-center rounded-xl bg-olive/80 p-4 shadow-md ring-1 ring-silver/20 backdrop-blur-md">
              <Phone className="mb-2 h-5 w-5 text-blood" />
              <p className="text-sm">+1 (555) 123-4567</p>
            </div>
            <div className="flex flex-col items-center rounded-xl bg-olive/80 p-4 shadow-md ring-1 ring-silver/20 backdrop-blur-md">
              <Mail className="mb-2 h-5 w-5 text-blood" />
              <p className="text-sm">contact@npr-media.com</p>
            </div>
            <div className="flex flex-col items-center rounded-xl bg-olive/80 p-4 shadow-md ring-1 ring-silver/20 backdrop-blur-md">
              <Calendar className="mb-2 h-5 w-5 text-blood" />
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
      <FooterSection />
    </section>
  );
}
