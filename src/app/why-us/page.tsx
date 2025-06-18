'use client'

import StickyHeader from '@/components/global/Header'
import FooterSection from '@/components/global/Footer'
import QuoteModal from '@/components/homepage/QuoteModal'
import Image from 'next/image'
import { BrainCog, Code2, Handshake } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
}

const aiPoints = [
  {
    icon: BrainCog,
    title: 'Human Creativity',
    text: 'Real experts craft tailored experiences that no algorithm can match.',
  },
  {
    icon: Code2,
    title: 'Hand-Tuned Code',
    text: 'Every line is optimized for performance and SEO.',
  },
  {
    icon: Handshake,
    title: 'Personal Guidance',
    text: 'From strategy to launch, you work with real people invested in success.',
  },
]

const firmPoints = [
  {
    img: 'https://images.unsplash.com/photo-1587614382346-acff9d6a3d0b',
    alt: 'Example agency website',
    text: 'We design from scratch while many firms lean on generic templates.',
  },
  {
    img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
    alt: 'Collaborative team',
    text: 'Our close collaboration beats impersonal, ticket-based processes.',
  },
  {
    img: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c',
    alt: 'Fast launch illustration',
    text: 'Lean workflows launch your project quickly, keeping you ahead.',
  },
]

export default function WhyUsPage() {
  return (
    <section>
      <StickyHeader />
      <main className="relative w-full overflow-x-hidden bg-white text-black">
        <Hero />
        <BetterThanAI />
        <BetterThanFirms />
        <FinalCTA />
      </main>
      <FooterSection />
    </section>
  )
}

function Hero() {
  return (
    <header className="mx-auto max-w-5xl space-y-6 px-4 py-[clamp(5rem,10vw,8rem)] text-center">
      <motion.h1
        variants={fadeIn}
        initial="hidden"
        animate="show"
        custom={0}
        className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold"
      >
        Why Choose NPR Media
      </motion.h1>
      <motion.p
        variants={fadeIn}
        initial="hidden"
        animate="show"
        custom={1}
        className="mx-auto max-w-xl text-[clamp(0.9rem,1.6vw,1.125rem)] text-gray-700"
      >
        Hand-crafted websites built with creativity, speed and care.
      </motion.p>
      <motion.div variants={fadeIn} initial="hidden" animate="show" custom={2}>
        <QuoteModal triggerLabel="Start Your Project" />
      </motion.div>
    </header>
  )
}

function BetterThanAI() {
  return (
    <section id="against-ai" className="bg-gray-50 py-[clamp(4rem,8vw,6rem)]">
      <div className="container mx-auto grid max-w-5xl gap-10 px-4 md:grid-cols-2">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          className="space-y-4"
        >
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold">Why We Beat AI</h2>
          <p className="max-w-md text-[clamp(0.9rem,1.6vw,1.125rem)] text-gray-700">
            Our team delivers thoughtful design and seamless code you won’t get from automation.
          </p>
          <QuoteModal triggerLabel="Work with Humans" />
        </motion.div>
        <div className="space-y-8">
          {aiPoints.map((point, idx) => {
            const Icon = point.icon
            return (
              <motion.div
                key={point.title}
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                custom={idx}
                className="flex items-start gap-4"
              >
                <Icon className="h-10 w-10 text-[var(--color-accent)]" aria-hidden="true" />
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">{point.title}</h3>
                  <p className="text-sm text-gray-700">{point.text}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function BetterThanFirms() {
  return (
    <section id="against-firms" className="py-[clamp(4rem,8vw,6rem)]">
      <div className="container mx-auto space-y-8 px-4 max-w-5xl">
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          className="text-center text-[clamp(1.5rem,3vw,2rem)] font-bold"
        >
          Why We Beat Other Firms
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-3">
          {firmPoints.map((point, idx) => (
            <motion.div
              key={point.img}
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={idx}
              className="space-y-2 text-center"
            >
              <Image src={point.img} alt={point.alt} width={400} height={260} className="mx-auto rounded-lg object-cover shadow-lg" />
              <p className="text-sm text-gray-700">{point.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-[var(--color-accent)] py-[clamp(5rem,10vw,8rem)] text-center text-black"
    >
      <div className="container mx-auto space-y-6 px-4">
        <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold">Ready for your next-level site?</h2>
        <p className="mx-auto max-w-xl text-[clamp(0.9rem,1.6vw,1.125rem)]">Let our experts craft a web presence that stands above the rest.</p>
        <QuoteModal triggerLabel="Let’s Talk" />
      </div>
    </motion.section>
  )
}
