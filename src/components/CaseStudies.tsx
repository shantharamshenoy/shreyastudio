import { motion } from "framer-motion";
import { useState } from "react";
import { caseStudies } from "@/data/portfolio";
import { Lightbox } from "./Lightbox";

export function CaseStudies() {
  const [active, setActive] = useState<{ src: string; title: string } | null>(null);

  return (
    <section id="case-studies" className="relative px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <div className="mb-4 font-display text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Case Studies & Whitepapers
          </div>
          <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Detailed documents and
            <br />
            <span className="text-gradient">visual case studies.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <motion.button
              key={cs.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              onClick={() => setActive({ src: cs.src, title: cs.title })}
              className="group relative overflow-hidden rounded-2xl bg-card text-left transition hover:-translate-y-1 hover:shadow-glow-soft"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={cs.src}
                  alt={cs.title}
                  loading="lazy"
                  onError={(e) => ((e.currentTarget as HTMLImageElement).style.opacity = "0.2")}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold">{cs.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{cs.desc}</p>
              </div>
              <div className="absolute inset-0 rounded-2xl border border-primary/0 transition group-hover:border-primary/30" />
            </motion.button>
          ))}
        </div>
      </div>

      <Lightbox src={active?.src || null} title={active?.title} onClose={() => setActive(null)} />
    </section>
  );
}
