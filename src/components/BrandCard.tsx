import { motion } from 'framer-motion';

interface BrandCardProps {
  name: string;
  logo?: string;
}

export default function BrandCard({ name, logo }: BrandCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="group relative rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 flex items-center justify-center bg-white/60 dark:bg-white/5 backdrop-blur-sm hover:shadow-glow transition-shadow"
    >
      {logo ? (
        <img src={logo} alt={name} className="h-12 w-auto opacity-80 group-hover:opacity-100 transition-opacity" />
      ) : (
        <span className="font-medium tracking-wide text-neutral-700 dark:text-neutral-200">{name}</span>
      )}
    </motion.div>
  );
}
