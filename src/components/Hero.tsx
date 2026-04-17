import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32 lg:px-12">
      {/* Glow orbs */}
      <div className="glow-orb h-[500px] w-[500px] left-[-10%] top-[10%] bg-primary/30 animate-float-slow" />
      <div
        className="glow-orb h-[600px] w-[600px] right-[-15%] top-[20%] bg-accent/25 animate-float-slow"
        style={{ animationDelay: "-4s" }}
      />
      <div className="glow-orb h-[400px] w-[400px] left-[40%] bottom-[-10%] bg-primary-deep/40 animate-pulse-glow" />

      {/* Radial gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-radial)" }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
            Available for select projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl lg:text-[5.5rem]"
          >
            Designs that shape
            <br />
            <span className="text-gradient">brands, stories</span>
            <br />
            & experiences.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            A curated portfolio by <span className="text-foreground">Shreya R Shenoy</span> —
            branding, packaging, campaigns, and interface design crafted with clarity and intent.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-glow-soft transition hover:shadow-glow"
            >
              View Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition group-hover:translate-x-1">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              href="#about"
              className="rounded-full glass px-7 py-3.5 text-sm font-medium text-foreground transition hover:bg-white/10"
            >
              About me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-16 flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            <div>
              <div className="font-display text-2xl text-foreground">50+</div>
              <div className="mt-1">Projects</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-2xl text-foreground">8+</div>
              <div className="mt-1">Years</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div className="max-w-[160px]">
              <div className="font-display text-sm text-foreground/80 normal-case tracking-normal">Coca-Cola · Officer's Choice · Max Life</div>
            </div>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute inset-0 scale-110 rounded-full bg-gradient-primary opacity-30 blur-3xl" />
          <div className="relative h-[340px] w-[340px] overflow-hidden rounded-full border border-primary/40 shadow-glow lg:h-[420px] lg:w-[420px]">
            <img
              src="https://shreya-shenoy.up.railway.app/images/shreya.jpg"
              alt="Shreya R Shenoy — Creative Designer"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full glass px-5 py-2 text-xs uppercase tracking-[0.2em] text-foreground/80 whitespace-nowrap">
            ✦ Creative Designer
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
        <div className="flex flex-col items-center gap-2">
          <span>Scroll</span>
          <div className="h-10 w-px bg-gradient-to-b from-foreground/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
