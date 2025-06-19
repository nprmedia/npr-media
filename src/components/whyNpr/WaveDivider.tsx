'use client'

interface WaveDividerProps {
  flip?: boolean
  className?: string
}

export default function WaveDivider({ flip, className }: WaveDividerProps) {
  return (
    <svg
      className={`${className} ${flip ? 'rotate-180' : ''}`}
      viewBox="0 0 1440 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0 0h1440v80c-144 0-288-16-432-24-144-8-288-8-432 0C432 64 288 80 144 80 96 80 48 80 0 80V0z"
        className="fill-current"
      />
    </svg>
  )
}
