import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'NPR Media',
    template: '%s | NPR Media',
  },
  description: 'Institutional-grade websites, systems, and strategy for startups and founders.',
  metadataBase: new URL('https://nprmedia.vercel.app'), // 🔁 Replace with your domain when ready

  openGraph: {
    title: 'NPR Media',
    description: 'High-performance digital services for founders and scaling teams.',
    url: 'https://nprmedia.vercel.app',
    siteName: 'NPR Media',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NPR Media',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'NPR Media',
    description: 'Launch faster. Scale smarter.',
    creator: '@nprmedia',
    images: ['/og-image.png'],
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white text-gray-900 font-sans">
        <Navbar />
        <main className="relative min-h-screen flex flex-col pt-20">
          {children}
        </main>  
        <Footer />    
      </body>
    </html>
  )
}
