import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { industryTemplates } from '@/content/templates'

export default function IndustryTemplatesSection() {
  return (
    <section id="templates" className="w-full py-24 bg-background border-t border-border">
      <div className="container max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            See Templates by Industry
          </h2>
          <p className="mt-2 text-muted-foreground text-lg">
            Real examples of our most profitable builds — tailored for top-performing clients.
          </p>
        </div>

        <div className="space-y-16">
          {industryTemplates.map((group, groupIdx) => (
            <div key={group.industry} className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-center text-primary">
                {group.industry}
              </h3>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
              >
                {group.templates.map((template, i) => (
                  <motion.div
                    key={template.slug}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <Link
                      href={`/templates/${template.slug}`}
                      className="group block rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition hover:-translate-y-1 hover:border-primary"
                    >
                      <h4 className="text-lg font-semibold text-foreground mb-1">
                        {template.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {template.description}
                      </p>
                      <span className="inline-flex items-center text-sm font-medium text-primary group-hover:underline">
                        View Live Demo
                        <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
