import SectionTitle from '../components/SectionTitle';

export default function About() {
  return (
    <div className="max-w-5xl mx-auto pt-12">
      <SectionTitle title="Founder's Vision" subtitle="Elevating travel into purposeful transformation." />
      <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
        Travel X is built on the belief that journeys can catalyze meaningful change. We focus on sustainable partnerships, immersive storytelling, and operational frameworks that empower both travelers and brands.
      </p>

      <section className="mt-16">
        <SectionTitle title="Goals & Objectives" />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Sustainable Impact', text: 'Collaborate with eco-conscious destinations and partners.' },
            { title: 'Operational Excellence', text: 'Implement scalable systems for booking & experience management.' },
            { title: 'Brand Alignment', text: 'Enable brands to integrate travel touchpoints authentically.' }
          ].map(item => (
            <div key={item.title} className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
              <h3 className="font-semibold tracking-tight mb-3">{item.title}</h3>
              <p className="text-sm opacity-70 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <SectionTitle title="Values" />
        <div className="space-y-8">
          {[
            'Integrity in partnerships and execution.',
            'Respect for natural environments and local cultures.',
            'Innovation in crafting destination experiences.',
          ].map(v => (
            <blockquote key={v} className="pl-6 border-l-2 border-brand-gold text-neutral-700 dark:text-neutral-300 italic">
              {v}
            </blockquote>
          ))}
        </div>
      </section>
    </div>
  );
}
