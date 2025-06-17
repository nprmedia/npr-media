'use client'

import StickyHeader from '@/components/global/Header'
import FooterSection from '@/components/global/Footer'
import QuoteModal from '@/components/homepage/QuoteModal'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { BrainCog, Settings2, ShieldCheck } from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
}

const aiItems = [
  {
    icon: BrainCog,
    title: 'Human Insight',
    text: 'We tailor each build for real people, not generic algorithms.',
  },
  {
    icon: Settings2,
    title: 'Strategic Iteration',
    text: 'Rapid cycles and testing deliver results AI tools can\'t match.',
  },
  {
    icon: ShieldCheck,
    title: 'Accountability',
    text: 'You get measurable improvements and ongoing support.',
  },
]

const firmItems = [
  {
    img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0',
    alt: 'Mock competitor agency website',
    text: 'Lean, custom code outperforms bulky templates used elsewhere.',
  },
  {
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
    alt: 'Collaboration session',
    text: 'We offer hands-on collaboration instead of one-size-fits-all packages.',
  },
  {
    img: 'https://images.unsplash.com/photo-1487611459768-bd414656ea10',
    alt: 'Fast deployment',
    text: 'Rapid launches keep you ahead while competitors crawl.',
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
    <header className="mx-auto max-w-6xl space-y-6 px-4 py-[clamp(5rem,10vw,8rem)] text-center">
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
        className="mx-auto max-w-3xl text-[clamp(0.9rem,1.6vw,1.125rem)] text-gray-700"
      >
        Our human experts craft bespoke websites that outperform automated tools and stand out from the crowd.
      </motion.p>
      <motion.div variants={fadeIn} initial="hidden" animate="show" custom={2}>
        <QuoteModal triggerLabel="Request a Free Quote" />
      </motion.div>
    </header>
  )
}

function BetterThanAI() {
  const aiListRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = aiListRef.current
    if (!el) return

    const root = document.documentElement
    const body = document.body

    const disablePageScroll = () => {
      root.style.overflowY = 'hidden'
      body.style.overflowY = 'hidden'
    }
    const enablePageScroll = () => {
      root.style.overflowY = ''
      body.style.overflowY = ''
    }

    const onWheel = (e: WheelEvent) => {
      if (
        e.deltaY > 0 &&
        el.scrollTop + el.clientHeight >= el.scrollHeight
      ) {
        enablePageScroll()
        const section = el.closest('section')
        const next = section?.nextElementSibling as HTMLElement | null
        next?.scrollIntoView({ behavior: 'smooth' })
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          disablePageScroll()
        } else {
          enablePageScroll()
        }
      },
      { threshold: 0.6 }
    )

    observer.observe(el)
    el.addEventListener('wheel', onWheel)

    return () => {
      el.removeEventListener('wheel', onWheel)
      observer.disconnect()
      enablePageScroll()
    }
  }, [])
  return (
    <section id="against-ai" className="bg-gray-50 py-[clamp(4rem,8vw,6rem)]">
      <div className="container mx-auto grid max-w-5xl gap-8 px-4 md:grid-cols-2">
        <div className="space-y-4 md:sticky md:top-24 self-start">
          <motion.h2
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            className="text-[clamp(1.5rem,3vw,2rem)] font-bold"
          >
            Why We Beat AI
          </motion.h2>
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
            className="max-w-md text-[clamp(0.9rem,1.6vw,1.125rem)] text-gray-700"
          >
            Human-driven design and strategy ensure your site connects and performs beyond what any generator can do.
          </motion.p>
          <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} custom={2}>
            <QuoteModal triggerLabel="Start Your Project" />
          </motion.div>
        </div>
        <div
          ref={aiListRef}
          className="no-scrollbar h-[80vh] overflow-y-auto snap-y snap-mandatory"
        >
          {aiItems.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                custom={idx}
                className="snap-start flex min-h-[80vh] flex-col items-center justify-center space-y-3 text-center"
              >
                {Icon && <Icon className="h-12 w-12 text-[var(--color-accent)]" aria-hidden="true" />}
                <h3 className="text-[clamp(1.1rem,2vw,1.5rem)] font-semibold">{item.title}</h3>
                <p className="text-[clamp(0.8rem,1.2vw,0.9rem)] text-gray-700">{item.text}</p>
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
      <div className="container mx-auto max-w-5xl space-y-8 px-4">
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
          {firmItems.map((item, idx) => (
            <motion.div
              key={item.text}
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={idx}
              className="space-y-2 text-center"
            >
              <Image src={item.img} alt={item.alt} width={400} height={260} className="mx-auto rounded-lg shadow-lg object-cover" />
              <p className="text-[clamp(0.8rem,1.2vw,0.9rem)] text-gray-700">{item.text}</p>
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
        <p className="mx-auto max-w-xl text-[clamp(0.9rem,1.6vw,1.125rem)]">Let our team craft a custom web presence for you.</p>
        <QuoteModal triggerLabel="Talk with us" />
      </div>
    </motion.section>
  )
}

