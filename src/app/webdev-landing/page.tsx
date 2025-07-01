'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import CTAForm from '@/components/webdevLanding/CTAForm';
import { Sparkles, Timer, CheckCircle, Rocket } from 'lucide-react';

interface LandingCopy {
  heroHeadline: string;
  heroSub: string;
  painPoints: { icon: React.ReactNode; title: string; text: string }[];
  offers: { icon: React.ReactNode; title: string }[];
  testimonials: { quote: string; author: string }[];
  pricingText: string;
  ctaTitle: string;
  ctaBullets: string[];
}

const defaultCopy: LandingCopy = {
  heroHeadline: 'Web Development That Converts Cold Clicks Into Clients',
  heroSub:
    'We build elite, conversion-optimized sites for SaaS startups, DTC brands, and professional services firms.',
  painPoints: [
    { icon: <Sparkles className="h-6 w-6" />, title: 'They Miss the Strategy', text: 'Most devs just code. We build with your revenue goals front and center.' },
    { icon: <Timer className="h-6 w-6" />, title: 'Slow and Overpriced', text: 'Bloated agencies drag projects for months. We ship in weeks.' },
    { icon: <Rocket className="h-6 w-6" />, title: 'Not Built to Convert', text: 'Pretty pages alone don\'t sell. Every layout we craft is performance driven.' },
  ],
  offers: [
    { icon: <CheckCircle className="h-6 w-6" />, title: 'Custom-coded frontend (Next.js + Tailwind)' },
    { icon: <CheckCircle className="h-6 w-6" />, title: 'Mobile-first responsive design' },
    { icon: <CheckCircle className="h-6 w-6" />, title: 'Strategy-backed layouts' },
    { icon: <CheckCircle className="h-6 w-6" />, title: 'CMS integration' },
    { icon: <CheckCircle className="h-6 w-6" />, title: 'Fast turnaround' },
  ],
  testimonials: [
    { quote: 'NPR Media rebuilt our funnel and signups jumped 40% in two weeks.', author: 'A SaaS Founder' },
    { quote: 'Lightning-fast delivery without compromising quality.', author: 'DTC Brand Manager' },
    { quote: 'The only dev team that truly understood our growth goals.', author: 'Consulting CEO' },
  ],
  pricingText:
    'Projects start at $1,000. Scope defines final cost — no retainers, no upsells.',
  ctaTitle: 'Get Your Free Strategy Mockup',
  ctaBullets: [
    'Custom roadmap for your next launch',
    'No obligation or hard sells',
    'Response within 1 business day',
  ],
};

export default function WebdevLandingPage() {
  const [copy, setCopy] = useState<LandingCopy>(defaultCopy);

  useEffect(() => {
    async function loadCopy() {
      if (process.env.NEXT_PUBLIC_CMS === 'true') {
        try {
          const mod = await import('@/content/landing/webdev');
          if (mod?.webdevLandingCopy) {
            setCopy({ ...copy, ...mod.webdevLandingCopy });
          }
        } catch {
          // ignore missing file
        }
      }
    }
    loadCopy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2, duration: 0.6 } }),
  };

  return (
    <main className="scroll-snap-y mandatory overflow-y-scroll text-black">
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 text-center text-white" style={{ scrollSnapAlign: 'start' }}>
        <motion.div initial="hidden" animate="visible" variants={{}} className="space-y-6 px-6 md:px-12 lg:px-20 max-w-7xl">
          <motion.h1 variants={textVariant} custom={0} className="text-[clamp(2rem,6vw,3.5rem)] font-bold">
            {copy.heroHeadline}
          </motion.h1>
          <motion.p variants={textVariant} custom={1} className="mx-auto max-w-2xl text-[clamp(1rem,2vw,1.25rem)]">
            {copy.heroSub}
          </motion.p>
          <motion.div variants={textVariant} custom={2}>
            <Link href="#cta" data-event="webdev-scroll-trigger" className="inline-block rounded-full bg-white px-6 py-3 font-semibold text-black shadow-lg ring-1 ring-black/10 transition hover:scale-105">
              Get a Free Strategy Mockup
            </Link>
          </motion.div>
        </motion.div>
        <motion.div className="absolute inset-0 -z-10" animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 10, repeat: Infinity }} style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,0.2), transparent 70%)' }} />
      </section>

      {/* Pain Points */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24" style={{ scrollSnapAlign: 'start' }}>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center text-[clamp(1.5rem,4vw,2.5rem)] font-bold">
          The Problem With Most Web Dev Agencies…
        </motion.h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {copy.painPoints.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="rounded-2xl bg-white/60 p-6 shadow-xl backdrop-blur-md">
              <div className="mb-3 text-[var(--color-accent)]">{p.icon}</div>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-sm text-neutral-700">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Offer Stack */}
      <section className="bg-gray-50 py-24" style={{ scrollSnapAlign: 'start' }}>
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center text-[clamp(1.5rem,4vw,2.5rem)] font-bold">
            What You’ll Get With NPR Media
          </motion.h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {copy.offers.map((o, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="flex items-start gap-3 rounded-2xl bg-white p-6 shadow-xl">
                <div className="text-[var(--color-accent)]">{o.icon}</div>
                <p className="font-medium">{o.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="py-24" style={{ scrollSnapAlign: 'start' }}>
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center text-[clamp(1.5rem,4vw,2.5rem)] font-bold">
            Trusted by Founders Across Industries
          </motion.h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {copy.testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="rounded-2xl bg-white p-6 shadow-xl transition hover:ring-2 hover:ring-[var(--color-accent)]">
                <p className="text-sm italic">“{t.quote}”</p>
                <p className="mt-3 text-sm font-semibold text-neutral-700">— {t.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="bg-gray-50 py-24" style={{ scrollSnapAlign: 'start' }}>
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 text-center space-y-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold">
            Simple Pricing, No Surprises
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mx-auto max-w-2xl text-[clamp(1rem,2vw,1.25rem)]">
            {copy.pricingText}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Link href="#cta" data-event="webdev-scroll-trigger" className="inline-block rounded-full bg-black px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105">
              Let’s Build Your Quote
            </Link>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="text-sm text-neutral-600">
            We respond to every serious request within 1 business day.
          </motion.p>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="relative py-24" style={{ scrollSnapAlign: 'start' }}>
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:px-12 lg:px-20 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-4">
            <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold">{copy.ctaTitle}</h2>
            <ul className="list-disc pl-5 text-[clamp(1rem,2vw,1.125rem)] text-neutral-700">
              {copy.ctaBullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <p className="text-sm text-neutral-500">Prefer to schedule a call?{' '}
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="underline">
                Book via Calendly
              </a>
            </p>
          </motion.div>
          <CTAForm />
        </div>
      </section>
    </main>
  );
}
