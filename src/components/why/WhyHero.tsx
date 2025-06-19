import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function WhyHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const stars = Array.from({ length: 800 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random(),
    }));

    let animationId: number;
    function render() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#fff';
      for (const s of stars) {
        const size = 1 + s.z * 1.5;
        ctx.globalAlpha = 0.5 + 0.5 * s.z;
        ctx.beginPath();
        ctx.arc(s.x, s.y, size, 0, Math.PI * 2);
        ctx.fill();
      }
      animationId = requestAnimationFrame(render);
    }

    if (!prefersReducedMotion) {
      render();
    }
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      if (orbRef.current) {
        orbRef.current.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
      }
      if (leftRef.current && rightRef.current) {
        leftRef.current.style.transform = `translateZ(${x * 6}px)`;
        rightRef.current.style.transform = `translateZ(${-x * 6}px)`;
      }
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <section id="heroIntro" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black text-white">
      <div ref={leftRef} id="pillarAI" className="pillar left absolute bottom-0 left-0 w-1/4 bg-gradient-to-b from-[#001B33] via-[#003D5C] to-transparent" />
      <div ref={rightRef} id="pillarAgency" className="pillar right absolute bottom-0 right-0 w-1/4 bg-gradient-to-b from-[#001B33] via-[#003D5C] to-transparent" />
      <canvas ref={canvasRef} id="starfield" className="absolute inset-0" />
      <div id="orbWrap" className="relative z-10 flex flex-col items-center">
        <div
          ref={orbRef}
          id="orb3D"
          className="relative h-32 w-32 rounded-full bg-gradient-to-br from-cyan-300 via-blue-500 to-purple-600 shadow-[0_0_20px_rgba(0,234,255,0.5)]"
        >
          <div id="orbPulse" className="absolute inset-0 rounded-full" />
        </div>
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="z-10 mt-8 text-center text-2xl font-bold"
      >
        Not All Websites Are Built to Grow Your Business.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="z-10 mt-2 max-w-xl text-center text-sm text-gray-200"
      >
        Most are fast or flashy. Few are strategic. We build the difference.
      </motion.p>
    </section>
  );
}

