'use client'

import StickyHeader from '@/components/global/Header'
import FooterSection from '@/components/global/Footer'
import Image from 'next/image'
import Link from 'next/link'
import QuoteModal from '@/components/homepage/QuoteModal'
import { motion } from 'framer-motion'
import { features, steps, hero, testimonial } from '@/content/features'
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
        <Hero />
        <FeaturePillars />
        <ProcessOverview />
        <TestimonialSection />
        <FinalCTA />
      </main>
      <FooterSection />
    </section>
  )
}

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-[clamp(5rem,10vw,8rem)] text-center space-y-6">
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
      <motion.div variants={fadeIn} initial="hidden" animate="show" custom={3} className="mx-auto mt-8 max-w-3xl">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          width={hero.image.width}
          height={hero.image.height}
          className="mx-auto rounded-lg shadow-lg"
          priority
        />
      </motion.div>
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
              viewport={{ once: true }}
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
                viewport={{ once: true }}
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
          viewport={{ once: true }}
          custom={0}
          className="text-[clamp(0.9rem,1.2vw,1rem)] font-medium italic"
        >
          “{testimonial.quote}”
        </motion.p>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
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
    <section className="bg-[var(--color-accent)] py-[clamp(5rem,10vw,8rem)] text-center text-black">
      <div className="container mx-auto space-y-6 px-4">
        <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold">Let’s Build Your Sales-Ready Website</h2>
        <p className="mx-auto max-w-xl text-[clamp(0.9rem,1.6vw,1.125rem)]">
          We’ll respond with a tailored quote—no pressure, no fluff.
        </p>
        <QuoteModal triggerLabel="Request My Quote" />
      </div>
    </section>
  )
}
