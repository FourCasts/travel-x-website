import { motion } from 'framer-motion';

export default function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-semibold tracking-tight flex items-center gap-3"
      >
        <span className="inline-block h-6 w-1 bg-brand-gold" /> {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base text-neutral-600 dark:text-neutral-300 max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
