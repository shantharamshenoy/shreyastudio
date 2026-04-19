import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 py-5 lg:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between glass rounded-full px-6 py-3">
        <Link to="/" className="font-display text-base font-semibold tracking-tight">
          <span className="text-gradient">Shreya Shenoy</span>
          {/* <span className="text-foreground/60"> </span> */}
        </Link>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#work" className="transition hover:text-foreground">Work</a>
          <a href="#about" className="transition hover:text-foreground">About</a>
          <a href="#case-studies" className="transition hover:text-foreground">Case Studies</a>
          <a href="#contact" className="transition hover:text-foreground">Contact</a>
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-gradient-primary px-4 py-2 text-xs font-medium text-primary-foreground transition hover:shadow-glow-soft"
        >
          Let's Talk
        </a>
      </div>
    </header>
  );
}
