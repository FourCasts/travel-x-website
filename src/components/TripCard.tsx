import { motion } from 'framer-motion';

interface TripCardProps {
  title: string;
  image: string;
  location?: string;
}

export default function TripCard({ title, image, location }: TripCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl aspect-[4/5] border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
      <div className="absolute bottom-0 p-5">
        <h3 className="text-lg font-semibold text-brand-white tracking-tight">{title}</h3>
        {location && <p className="text-xs text-brand-white/70 mt-1">{location}</p>}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
            whileHover={{ scale: 1.05 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 text-sm px-4 py-2 rounded-full border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-colors"
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
}
