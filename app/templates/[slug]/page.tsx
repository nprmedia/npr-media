import { notFound } from 'next/navigation'
import { industryTemplates } from '@/content/templates'

type Params = {
  params: {
    slug: string
  }
}

export default function TemplatePage({ params }: Params) {
  const allTemplates = industryTemplates.flatMap(group => group.templates)
  const template = allTemplates.find(t => t.slug === params.slug)

  if (!template) {
    notFound()
  }

  return (
    <main className="min-h-screen w-full bg-background text-foreground py-24 px-6 sm:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto space-y-6">
        <a href="/#templates" className="text-sm text-primary underline">
          ← Back to templates
        </a>

        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{template.title}</h1>
          <p className="mt-2 text-muted-foreground text-base">{template.description}</p>
        </div>

        <div className="pt-8">
          <a
            href={template.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-3 text-sm font-medium hover:scale-105 transition"
          >
            Open Live Demo →
          </a>
        </div>
      </div>
    </main>
  )
}
