'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.innerWidth < 640) setVisible(true);
    }, 1500);
    const hide = () => setVisible(false);
    window.addEventListener('scroll', hide, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', hide);
    };
  }, []);

  if (!visible) return null;

  return (
    <motion.a
      href="#contact-form"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className="fixed bottom-4 right-4 z-50 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg"
    >
      Message Us
    </motion.a>
  );
}
