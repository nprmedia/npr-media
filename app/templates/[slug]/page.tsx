"use client"

import { notFound } from 'next/navigation'
import { industryTemplates } from '@/content/templates'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface PageProps {
  params: {
    slug: string
  }
}

export default function TemplatePage({ params }: PageProps) {
  const slug = params.slug
  const allTemplates = industryTemplates.flatMap((group) => group.templates)
  const template = allTemplates.find((t) => t.slug === slug)

  if (!template) {
    return notFound()
  }

  return (
    <section className="w-full py-24 bg-background scroll-mt-20">
      <div className="container max-w-3xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">
            {template.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            A proven website framework for the <span className="font-semibold text-foreground">{template.industry}</span> industry.
          </p>
        </div>

        <div className="aspect-video rounded-lg overflow-hidden border border-muted shadow mb-6">
          <iframe
            src={template.demoUrl}
            title={`Live preview of ${template.title}`}
            loading="lazy"
            sandbox=""
            scrolling="no"
            className="w-full h-full pointer-events-none"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">What This Template Includes</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              {template.features?.map((feature, i) => (
                <li key={i}>{feature}</li>
              )) || (
                <li>Conversion-focused layout built to scale</li>
              )}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">Best For</h2>
            <p className="text-muted-foreground">
              {template.useCase || 'Founders, consultants, or product owners looking to validate or scale a proven model.'}
            </p>
          </div>

          <div className="bg-muted border border-border rounded-xl p-4">
            <p className="text-sm text-muted-foreground mb-1">Typical build cost</p>
            <p className="text-2xl font-semibold text-foreground">{template.price || '$2,000–$3,000'}</p>
          </div>

          <div className="mt-6 flex gap-4">
            <a
              href={template.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition text-sm font-medium"
            >
              Open Live Demo <ArrowRight className="ml-2 w-4 h-4" />
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2 rounded-full border border-input bg-background hover:bg-muted transition text-sm font-medium text-foreground"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
