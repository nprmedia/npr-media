'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1500);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <motion.a
      href="#contact-form"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed right-4 bottom-4 z-50 block rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-110 sm:hidden"
    >
      Message Us
    </motion.a>
  );
}
