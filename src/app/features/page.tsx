'use client';

import React, { useRef } from 'react';
import StickyHeader from '@/components/global/Header';
import FooterSection from '@/components/global/Footer';
import QuoteModal from '@/components/homepage/QuoteModal';
import Link from 'next/link';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { features, steps, hero, testimonial, betterThanAI } from '@/content/features';
import { templates } from '@/content/homepage/templates';
import {
  LucideIcon,
  GaugeCircle,
  Map,
  Hammer,
  PartyPopper,
  MousePointerClick,
  Rocket,
} from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.3 } }),
};

export default function FeaturesPage() {
  return (
    <section>
      <StickyHeader />
      <main className="relative w-full overflow-x-hidden bg-white text-black">
        <Hero />
        <BetterThanAI />
        <FeaturePillars />
        <FeatureShowcase />
        <ProcessOverview />
        <TestimonialSection />
        <FinalCTA />
      </main>
      <FooterSection />
    </section>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="mx-auto max-w-6xl px-4 py-[clamp(5rem,10vw,8rem)] text-center">
      <motion.div style={prefersReducedMotion ? {} : { y, opacity }} className="space-y-6">
        <motion.h1
          variants={fadeIn}
          initial="hidden"
          animate="show"
          custom={0}
          className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold"
        >
          {hero.headline}
        </motion.h1>
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="show"
          custom={1}
          className="mx-auto max-w-2xl text-[clamp(0.9rem,1.6vw,1.125rem)] text-gray-700"
        >
          {hero.subheadline}
        </motion.p>
        <motion.div variants={fadeIn} initial="hidden" animate="show" custom={2}>
          <Link
            href={hero.cta.href}
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-[clamp(1.25rem,3vw,1.5rem)] py-[clamp(0.6rem,1.2vw,0.75rem)] text-[clamp(0.8rem,1vw,0.9rem)] font-semibold text-black shadow transition hover:scale-105"
          >
            {hero.cta.label}
          </Link>
        </motion.div>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          custom={3}
          className="from-primary/30 to-accent/30 mx-auto mt-8 max-w-3xl rounded-lg bg-gradient-to-r p-12"
        >
          <p className="text-[clamp(1rem,1.6vw,1.125rem)] font-medium text-gray-700">
            Imagine your next big launch \u2014 then let us build it without limits.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

function BetterThanAI() {
  return (
    <section id="better-than-ai" className="bg-gray-50 py-[clamp(4rem,8vw,6rem)]">
      <div className="container mx-auto max-w-5xl space-y-8 px-4">
        <h2 className="text-center text-[clamp(1.5rem,3vw,2rem)] font-bold">
          Why We\u2019re Better Than AI
        </h2>
        <ul className="grid gap-6 md:grid-cols-3">
          {betterThanAI.map((item, idx) => (
            <motion.li
              key={item.title}
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              custom={idx}
              className="space-y-2 text-center"
            >
              <h3 className="text-[clamp(1.1rem,2vw,1.5rem)] font-semibold">{item.title}</h3>
              <p className="text-[clamp(0.8rem,1.2vw,0.9rem)] text-gray-700">{item.body}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FeaturePillars() {
  const icons: Record<string, LucideIcon> = {
    MousePointerClick,
    GaugeCircle,
    Rocket,
  };

  return (
    <section className="bg-[var(--color-bg-dark)] py-[clamp(5rem,10vw,8rem)] text-[var(--color-text-light)]">
      <div className="container mx-auto grid gap-8 px-4 md:grid-cols-3">
        {features.map((f, idx) => {
          const Icon = icons[f.icon];
          return (
            <motion.div
              key={f.title}
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              custom={idx}
              className="space-y-2 text-center"
            >
              {Icon && <Icon className="mx-auto h-8 w-8" aria-hidden="true" />}
              <h3 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold">{f.title}</h3>
              <p className="text-[clamp(0.8rem,1.2vw,0.9rem)] text-gray-300">{f.body}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function FeatureShowcase() {
  const authority = templates
    .flatMap((g) => g.templates)
    .find((t) => t.slug === 'authority-platform');
  if (!authority) return null;

  return (
    <section className="bg-white py-[clamp(5rem,10vw,8rem)] text-black">
      <div className="container mx-auto flex flex-col items-center gap-8 px-4 md:flex-row">
        <div className="space-y-4 md:w-1/2">
          <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-bold">High-Impact Features</h3>
          <ul className="list-disc space-y-2 pl-4 text-[clamp(0.9rem,1.2vw,0.95rem)] text-gray-700">
            {authority.features.slice(0, 6).map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
          <QuoteModal triggerLabel="Request My Quote" />
        </div>
      </div>
    </section>
  );
}

function ProcessOverview() {
  const icons: Record<string, LucideIcon> = {
    Map,
    Hammer,
    PartyPopper,
  };

  return (
    <section className="py-[clamp(5rem,10vw,8rem)]">
      <div className="container mx-auto max-w-4xl space-y-8 px-4">
        <h2 className="text-center text-[clamp(1.5rem,3vw,2rem)] font-bold">Simple Process</h2>
        <ol className="grid gap-8 md:grid-cols-3">
          {steps.map((s, idx) => {
            const Icon = icons[s.icon];
            return (
              <motion.li
                key={s.title}
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.4 }}
                custom={idx}
                className="space-y-2 text-center"
              >
                {Icon && <Icon className="mx-auto h-8 w-8" aria-hidden="true" />}
                <div className="text-[clamp(1.1rem,2vw,1.5rem)] font-semibold">{s.title}</div>
                <p className="text-[clamp(0.8rem,1.2vw,0.9rem)] text-gray-700">{s.body}</p>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function TestimonialSection() {
  return (
    <section className="bg-[var(--color-card)] py-[clamp(5rem,10vw,8rem)] text-[var(--color-text-light)]">
      <div className="container mx-auto max-w-3xl space-y-4 px-4 text-center">
        <motion.p
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          custom={0}
          className="text-[clamp(0.9rem,1.2vw,1rem)] font-medium italic"
        >
          “{testimonial.quote}”
        </motion.p>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          custom={1}
          className="text-[clamp(0.8rem,1vw,0.9rem)]"
        >
          — {testimonial.author}
        </motion.div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <motion.section
      className="bg-[var(--color-accent)] py-[clamp(5rem,10vw,8rem)] text-center text-black"
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.4 }}
    >
      <div className="container mx-auto space-y-6 px-4">
        <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold">
          Launch Your High-Converting Site
        </h2>
        <p className="mx-auto max-w-xl text-[clamp(0.9rem,1.6vw,1.125rem)]">
          Get a personalized quote within 24 hours—no pressure, no fluff.
        </p>
        <QuoteModal triggerLabel="Request My Quote" />
      </div>
    </motion.section>
  );
}
