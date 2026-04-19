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
            I've spent years designing across print, brand, and digital and honestly, I love that no two projects look the same. From packaging on a shelf to a clean interface on a screen, I'm always looking for the simplest, most intentional way to give an idea its form.
          </p>
          <p>
            I've had the chance to work with brands like Coca-Cola India, Officer's Choice, and Max Life Insurance shaping how they look and feel across different formats and audiences. These days, I'm diving deeper into UI/UX, drawn to the challenge of making things that are both visually distinct and genuinely easy to use.
          </p>
          <a
            href="/docs/Shreya_Shenoy_Resume.pdf"
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
