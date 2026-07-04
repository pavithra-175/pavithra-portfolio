"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-canvas"
        >
          <div className="flex items-center gap-3 font-display text-lg tracking-[0.3em] text-white">
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
              className="h-px w-10 origin-left bg-gradient-to-r from-accent-violet to-accent-sky"
            />
            PSS
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
