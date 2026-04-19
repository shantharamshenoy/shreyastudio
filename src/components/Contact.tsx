export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24 lg:px-12 lg:py-40">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-radial)" }}
      />
      <div className="glow-orb h-[500px] w-[500px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/20 animate-pulse-glow" />

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-6 font-display text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Get in touch
        </div>
        <h2 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
          Let's create something
          <br />
          <span className="text-gradient">meaningful together.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          For project-related discussions or design requirements, feel free to reach out. I'm
          happy to connect and understand the scope of your work.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:shreyakamath4@gmail.com"
            className="rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-glow-soft transition hover:shadow-glow"
          >
            Send me an Email
          </a>
          <a
            href="https://www.behance.net/shreyakamath"
            target="_blank"
            rel="noopener"
            className="rounded-full glass px-7 py-3.5 text-sm font-medium text-foreground transition hover:bg-white/10"
          >
            Behance
          </a>
          <a
            href="https://www.linkedin.com/in/shreya-ravindra-shenoy-403889150/"
            target="_blank"
            rel="noopener"
            className="rounded-full glass px-7 py-3.5 text-sm font-medium text-foreground transition hover:bg-white/10"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <footer className="relative mx-auto mt-32 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs uppercase tracking-[0.2em] text-muted-foreground sm:flex-row">
        <div>© {new Date().getFullYear()} Shreya R Shenoy</div>
        <div>Crafted with intent ✦</div>
      </footer>
    </section>
  );
}
