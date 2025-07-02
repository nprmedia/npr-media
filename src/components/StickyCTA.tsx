'use client';

import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const el = document.getElementById('contact-form');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          whileHover={{ scale: 1.05 }}
          onClick={handleClick}
          className="fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-foreground shadow-lg md:hidden hover:bg-primary/90"
        >
          <MessageCircle className="h-4 w-4" /> Message Us
        </motion.button>
      )}
    </AnimatePresence>
  );
}
