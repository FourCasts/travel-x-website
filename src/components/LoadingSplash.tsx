import { motion } from 'framer-motion';

export default function LoadingSplash() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-white dark:bg-brand-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.6 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center"
      >
        <div className="text-3xl font-semibold tracking-tight">Travel X</div>
        <div className="mt-3 text-sm uppercase tracking-widest text-neutral-500 dark:text-neutral-400">Loading Experience</div>
      </motion.div>
    </motion.div>
  );
}
