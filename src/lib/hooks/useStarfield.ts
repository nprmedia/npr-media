import { useEffect } from 'react'

export function useStarfield(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = canvas.offsetWidth
    let height = canvas.offsetHeight
    canvas.width = width
    canvas.height = height

    const stars = Array.from({ length: 800 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      depth: Math.random(),
    }))

    let animationId: number
    const render = () => {
      animationId = requestAnimationFrame(render)
      ctx.clearRect(0, 0, width, height)
      for (const star of stars) {
        ctx.fillStyle = `rgba(255,255,255,${0.5 + star.depth / 2})`
        ctx.beginPath()
        ctx.arc(star.x, star.y, 2 * star.depth, 0, Math.PI * 2)
        ctx.fill()
        star.y += 0.5 * (0.2 + star.depth)
        if (star.y > height) {
          star.y = 0
          star.x = Math.random() * width
        }
      }
    }

    render()
    const handleResize = () => {
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width = width
      canvas.height = height
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [canvasRef])
}
