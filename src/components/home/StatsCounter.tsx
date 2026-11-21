import { STATS } from "@/lib/constants";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function StatsCounter() {
  return (
    <section className="py-12 border-y border-border-subtle bg-bg-dark-blue/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <div className={`font-bold text-text-primary mb-1 ${i === 0 ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl'}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
