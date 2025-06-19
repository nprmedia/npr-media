import { useEffect } from 'react'

export function useStarfield(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = canvas.clientWidth
    let height = canvas.clientHeight
    canvas.width = width
    canvas.height = height

    const handleResize = () => {
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width
      canvas.height = height
    }
    window.addEventListener('resize', handleResize)

    const stars = Array.from({ length: 800 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      depth: Math.random()
    }))

    let raf = 0
    const render = () => {
      raf = requestAnimationFrame(render)
      ctx.clearRect(0, 0, width, height)
      for (const star of stars) {
        ctx.fillStyle = `rgba(255,255,255,${0.3 + star.depth * 0.7})`
        ctx.beginPath()
        ctx.arc(star.x, star.y, 1 + star.depth, 0, Math.PI * 2)
        ctx.fill()
        star.y += 0.5 + star.depth
        if (star.y > height) {
          star.y = 0
          star.x = Math.random() * width
        }
      }
    }
    render()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', handleResize)
    }
  }, [canvasRef])
}
