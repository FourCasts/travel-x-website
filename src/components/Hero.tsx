import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[80vh] md:h-[92vh] flex items-center justify-center overflow-hidden rounded-xl">
      <motion.img
        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=60"
        alt="Mountain landscape"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-brand-white">
          Discover Beyond Journeys
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-brand-white/80">
          Premium sustainable travel experiences curated for visionary brands and explorers.
        </p>
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="inline-block mt-10 border border-brand-gold text-brand-gold px-8 py-3 rounded-full backdrop-blur-sm hover:bg-brand-gold hover:text-brand-black transition-colors"
        >
          Explore More
        </motion.a>
      </motion.div>
    </section>
  );
}
