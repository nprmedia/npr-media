'use client'

import StickyHeader from '@/components/global/Header'
import FooterSection from '@/components/global/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'


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
        Launch a Website That Sells While You Sleep
      </motion.h1>
      <motion.p
        variants={fadeIn}
        initial="hidden"
        animate="show"
        custom={1}
        className="mx-auto max-w-2xl text-[clamp(0.9rem,1.6vw,1.125rem)] text-gray-700"
      >
        Custom-built sites that load fast, convert better, and scale with your startup.
      </motion.p>
      <motion.div variants={fadeIn} initial="hidden" animate="show" custom={2}>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-[clamp(1.25rem,3vw,1.5rem)] py-[clamp(0.6rem,1.2vw,0.75rem)] text-[clamp(0.8rem,1vw,0.9rem)] font-semibold text-black shadow transition hover:scale-105"
        >
          Get a Quote
        </Link>
      </motion.div>
      <motion.div variants={fadeIn} initial="hidden" animate="show" custom={3} className="mx-auto mt-8 max-w-3xl">
        <Image
          src="/logos/authority-platform.jpg"
          alt="Website mockup"
          width={800}
          height={450}
          className="mx-auto rounded-lg shadow-lg"
          priority
        />
      </motion.div>
    </section>
  )
}

function FeaturePillars() {
  const features = [
    {
      title: 'Designed to Convert',
      body: 'We use proven UX frameworks to guide users to action.',
    },
    {
      title: 'Optimized for Speed & SEO',
      body: 'Your site hits 90+ on Lighthouse and gets indexed right.',
    },
    {
      title: 'Built to Grow with You',
      body: 'Easily update content and scale pages with built-in CMS.',
    },
  ]

  return (
    <section className="bg-[var(--color-bg-dark)] text-[var(--color-text-light)] py-[clamp(5rem,10vw,8rem)]">
      <div className="container mx-auto grid gap-8 px-4 md:grid-cols-3">
        {features.map((f, idx) => (
          <motion.div
            key={f.title}
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={idx}
            className="space-y-2 text-center"
          >
            <h3 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold">{f.title}</h3>
            <p className="text-[clamp(0.8rem,1.2vw,0.9rem)] text-gray-300">{f.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function ProcessOverview() {
  const steps = [
    { title: 'Plan', body: 'We align on goals, brand, and functionality.' },
    { title: 'Build', body: 'We design and develop your custom site.' },
    { title: 'Launch', body: 'We handle the tech. You go live with confidence.' },
  ]

  return (
    <section className="py-[clamp(5rem,10vw,8rem)]">
      <div className="container mx-auto max-w-4xl space-y-8 px-4">
        <h2 className="text-center text-[clamp(1.5rem,3vw,2rem)] font-bold">Simple Process</h2>
        <ol className="grid gap-8 md:grid-cols-3">
          {steps.map((s, idx) => (
            <motion.li
              key={s.title}
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={idx}
              className="space-y-2 text-center"
            >
              <div className="text-[clamp(1.1rem,2vw,1.5rem)] font-semibold">{s.title}</div>
              <p className="text-[clamp(0.8rem,1.2vw,0.9rem)] text-gray-700">{s.body}</p>
            </motion.li>
          ))}
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
          “Working with NPR Media was a game changer. Our new site increased demo bookings by 42% in 2 weeks.”
        </motion.p>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={1}
          className="text-[clamp(0.8rem,1vw,0.9rem)]"
        >
          — Jamie L., SaaS Founder
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
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-black px-[clamp(1.25rem,3vw,1.5rem)] py-[clamp(0.6rem,1.2vw,0.75rem)] text-[clamp(0.8rem,1vw,0.9rem)] font-semibold text-white shadow transition hover:scale-105"
        >
          Request My Quote
        </Link>
      </div>
    </section>
  )
}
