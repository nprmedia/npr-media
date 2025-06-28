'use client'

import { useMemo, type CSSProperties } from 'react'

interface NewsBackgroundProps {
  articles?: string[]
}

export default function AnimatedNewsBackground({ articles }: NewsBackgroundProps) {
  const items = useMemo(() => {
    const texts =
      articles ?? [
        'TechCrunch: NPR Media sets new bar',
        'Awarded Top Dev Agency',
        'Clients See 200% Growth',
      ]

    const random = (min: number, max: number) => Math.random() * (max - min) + min

    // duplicate each article with square and wide aspect ratios
    return texts.flatMap((text) => {
      return [
        {
          text,
          width: 35 + random(-5, 5),
          aspect: 1,
          top: random(0, 65),
          left: random(0, 65),
          delay: random(0, 20),
          rotate: random(-10, 10),
        },
        {
          text,
          width: 55 + random(-5, 5),
          aspect: 16 / 9,
          top: random(0, 65),
          left: random(0, 65),
          delay: random(0, 20),
          rotate: random(-10, 10),
        },
      ]
    })
  }, [articles])

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {items.map((item, i) => {
        const style: CSSProperties & { '--rot': string } = {
          top: `${item.top}%`,
          left: `${item.left}%`,
          width: `${item.width}%`,
          aspectRatio: `${item.aspect}`,
          animationDelay: `${item.delay}s`,
          '--rot': `${item.rotate}deg`,
        }
        return (
          <div
            key={i}
            style={style}
            className="news-floating pointer-events-none absolute flex items-center justify-center rounded-md border border-gray-200 bg-white/80 p-3 text-[0.65rem] text-gray-700 shadow"
          >
            {item.text}
          </div>
        )
      })}
    </div>
  )
}
