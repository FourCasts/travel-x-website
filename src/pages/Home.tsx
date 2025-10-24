import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import BrandCard from '../components/BrandCard';
import TripCard from '../components/TripCard';
import { brands } from '../data/brands';
import { trips } from '../data/trips';
import { successStories } from '../data/successStories';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Hero />

      {/* About */}
      <section id="about" className="mt-24">
        <SectionTitle title="About Travel X" subtitle="We curate transformative journeys for brands and explorers with a sustainable mindset." />
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 text-neutral-700 dark:text-neutral-300">
            <p>Travel X elevates destination experiences through partnerships that inspire conscious travel. We focus on story-driven itineraries, operational excellence, and brand alignment.</p>
            <p>Our network spans emerging eco-luxury properties, purpose-led brands, and pioneering experience creators.</p>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60" alt="Forest" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="mt-32">
        <SectionTitle title="Success Stories" subtitle="Examples of outcomes and partnerships illustrating our approach." />
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x">
          {successStories.map(s => (
            <motion.div key={s.id} className="min-w-[280px] snap-start bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 flex flex-col justify-between shadow-sm" whileHover={{ y: -4 }}>
              <div>
                <h3 className="font-semibold text-lg tracking-tight">{s.title}</h3>
                <p className="text-sm mt-3 opacity-70 leading-relaxed">{s.description}</p>
              </div>
              <div className="mt-6 text-xs uppercase tracking-wider text-brand-gold font-medium">{s.metric}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Brands */}
      <section className="mt-32">
        <SectionTitle title="Partner Brands" subtitle="A selection of aligned companies and initiatives." />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {brands.map(b => <BrandCard key={b.id} name={b.name} />)}
        </div>
      </section>

      {/* Trips */}
      <section className="mt-32">
        <SectionTitle title="Upcoming Trips" subtitle="Preview of curated destination experiences." />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {trips.map(t => <TripCard key={t.id} title={t.title} image={t.image} location={t.location} />)}
        </div>
      </section>

      {/* Placeholder Dashboard Preview */}
      <section className="mt-32">
        <SectionTitle title="Operations Preview" subtitle="Phase 2 will introduce booking and destination management." />
        <div className="grid md:grid-cols-3 gap-6">
          {['Destination Products', 'Booking Management', 'Analytics'].map(x => (
            <div key={x} className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 bg-neutral-50 dark:bg-neutral-900">
              <h4 className="font-medium tracking-tight">{x}</h4>
              <p className="text-sm mt-2 opacity-70">Interactive dashboard modules will live here in Phase 2.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
