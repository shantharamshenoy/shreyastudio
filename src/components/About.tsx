import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="relative px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1fr_1.3fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 font-display text-sm uppercase tracking-[0.3em] text-muted-foreground">
            About
          </div>
          <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Design that moves between
            <span className="text-gradient"> print, brand, and digital.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-lg leading-relaxed text-muted-foreground"
        >
          <p>
            This portfolio is a collection of work across branding, packaging, campaigns, and
            interface design. Over the years, I've worked with brands like{" "}
            <span className="text-foreground">Coca-Cola India, Officer's Choice,</span> and{" "}
            <span className="text-foreground">Max Life Insurance</span> — shaping visuals across
            different formats and audiences.
          </p>
          <p>
            I enjoy simplifying ideas and giving them form — whether through packaging on a shelf
            or a clean, structured digital layout. Recently, my focus has expanded into UI/UX,
            where I'm exploring how design can be both intuitive and visually distinct.
          </p>
          <a
            href="https://shreya-shenoy.up.railway.app/docs/Shreya_Shenoy_Resume.pdf"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground transition hover:bg-white/10"
          >
            Download Resume
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
