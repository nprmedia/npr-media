'use client'

import React, { Suspense } from 'react'
import StickyHeader from '@/components/global/Header'
import FooterSection from '@/components/global/Footer'
import HeroSection from '@/components/homepage/Hero'
import QuoteModal from '@/components/homepage/QuoteModal'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { features, steps, hero, testimonial } from '@/content/features'
import { templates } from '@/content/homepage/templates'
import { LucideIcon, GaugeCircle, Map, Hammer, PartyPopper, MousePointerClick, Rocket } from 'lucide-react'


const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.3 } }),
}

export default function FeaturesPage() {
  return (
    <section>
      <StickyHeader />
      <main className="relative w-full overflow-x-hidden bg-white text-black">
        <Suspense>
          <HeroSection
            headline={hero.headline}
            subheadline={hero.subheadline}
            ctaText={hero.cta.label}
            ctaLink={hero.cta.href}
            image={{ url: hero.image.src, alt: hero.image.alt, width: hero.image.width, height: hero.image.height }}
          />
        </Suspense>
        <FeaturePillars />
        <FeatureShowcase />
        <ProcessOverview />
        <TestimonialSection />
        <FinalCTA />
      </main>
      <FooterSection />
    </section>
  )
}


function FeaturePillars() {
  const icons: Record<string, LucideIcon> = {
    MousePointerClick,
    GaugeCircle,
    Rocket,
  }

  return (
    <section className="bg-[var(--color-bg-dark)] text-[var(--color-text-light)] py-[clamp(5rem,10vw,8rem)]">
      <div className="container mx-auto grid gap-8 px-4 md:grid-cols-3">
        {features.map((f, idx) => {
          const Icon = icons[f.icon]
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
          )
        })}
      </div>
    </section>
  )
}

function FeatureShowcase() {
  const authority = templates
    .flatMap((g) => g.templates)
    .find((t) => t.slug === 'authority-platform')
  if (!authority) return null

  return (
    <section className="bg-white py-[clamp(5rem,10vw,8rem)] text-black">
      <div className="container mx-auto flex flex-col items-center gap-8 px-4 md:flex-row">
        <div className="md:w-1/2">
          <Image
            src="/logos/authority-platform.jpg"
            alt={authority.title}
            width={800}
            height={600}
            className="w-full rounded-lg shadow-xl"
          />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-bold">High-Impact Features</h3>
          <ul className="list-disc space-y-2 pl-4 text-[clamp(0.9rem,1.2vw,0.95rem)] text-gray-700">
            {authority.features.slice(0,6).map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
          <QuoteModal triggerLabel="Request My Quote" />
        </div>
      </div>
    </section>
  )
}

function ProcessOverview() {
  const icons: Record<string, LucideIcon> = {
    Map,
    Hammer,
    PartyPopper,
  }

  return (
    <section className="py-[clamp(5rem,10vw,8rem)]">
      <div className="container mx-auto max-w-4xl space-y-8 px-4">
        <h2 className="text-center text-[clamp(1.5rem,3vw,2rem)] font-bold">Simple Process</h2>
        <ol className="grid gap-8 md:grid-cols-3">
          {steps.map((s, idx) => {
            const Icon = icons[s.icon]
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
            )
          })}
        </ol>
      </div>
    </section>
  )
}

function TestimonialSection() {
  return (
    <section className="bg-[var(--color-card)] text-[var(--color-text-light)] py-[clamp(5rem,10vw,8rem)]">
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
  )
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
        <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold">Launch Your High-Converting Site</h2>
        <p className="mx-auto max-w-xl text-[clamp(0.9rem,1.6vw,1.125rem)]">
          Get a personalized quote within 24 hours—no pressure, no fluff.
        </p>
        <QuoteModal triggerLabel="Request My Quote" />
      </div>
    </motion.section>
  )
}
