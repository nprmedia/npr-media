'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const onMove = () => {
      clearTimeout(timer);
      timer = setTimeout(() => setVisible(true), 1500);
    };
    window.addEventListener('scroll', onMove);
    window.addEventListener('mousemove', onMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onMove);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  const handleClick = () => {
    const el = document.getElementById('contact-form');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4 }}
      className="fixed bottom-6 right-4 z-50 flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg md:hidden"
    >
      <MessageCircle className="h-4 w-4" /> Message Us
    </motion.button>
  );
}
