import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { categories, type Category } from "@/data/portfolio";
import { CategoryModal } from "./CategoryModal";
import { useMemo } from "react";

function StackCard({
  category,
  index,
  total,
  onOpen,
}: {
  category: Category;
  index: number;
  total: number;
  onOpen: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Each card scales down slightly as the next stacks on top
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 - (total - index - 1) * 0.04]);
  const opacity = useTransform(scrollYProgress, [0.6, 1], [1, 0.4]);

  const topOffset = 80 + index * 24; // px

  const previewItems = useMemo(() => {
  const subs = category.subcategories;

  // Flatten all items
  const allItems = subs.flatMap((s) => s.items);

  // If total ≤ 4 → return all
  if (allItems.length <= 4) return allItems;

  const result: typeof allItems = [];

  if (subs.length === 1) {
    return subs[0].items.slice(0, 4);
  }

  if (subs.length === 2) {
    subs.forEach((s) => {
      result.push(...s.items.slice(0, 2));
    });
    return result.slice(0, 4);
  }

  if (subs.length === 3) {
    result.push(...subs[0].items.slice(0, 2));
    result.push(...subs[1].items.slice(0, 1));
    result.push(...subs[2].items.slice(0, 1));
    return result.slice(0, 4);
  }

  // 4 or more subcategories → 1 from each (max 4)
  subs.slice(0, 4).forEach((s) => {
    if (s.items.length > 0) {
      result.push(s.items[0]);
    }
  });

  return result;
}, [category.id]);

  return (
    <div ref={ref} className="relative" style={{ top: `${topOffset}px` }}>
      <motion.div
        style={{ scale, opacity }}
        className="mx-auto mb-8 max-w-6xl"
      >
        <div
          className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${category.accent} p-10 shadow-elevated lg:p-16`}
          style={{ minHeight: "auto" }}
        >
          {/* Inner dark layer */}
          <div className="absolute inset-[1px] rounded-3xl bg-card/85 backdrop-blur-xl" />

          {/* Glow */}
          <div className="glow-orb h-[400px] w-[400px] right-[-10%] top-[-10%] bg-primary/30" />

          <div className="relative z-10 flex h-full flex-col gap-10">
            <div className="w-full">
              <div className="mb-6 font-display text-sm uppercase tracking-[0.3em] text-muted-foreground">
                {category.number} / {String(total).padStart(2, "0")}
              </div>

              <h3 className="font-display text-5xl font-semibold leading-[1] tracking-tight lg:text-7xl">
                <span className="text-gradient">{category.title}</span>
              </h3>

              <p className="mt-6 text-xl text-foreground/80 lg:text-2xl">
                {category.tagline}
              </p>

              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground lg:text-lg">
                {category.description}
              </p>

              <button
                onClick={onOpen}
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-glow-soft transition hover:shadow-glow"
              >
                Explore {category.pieces} pieces
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
              {previewItems.map((item, i) => (
                <div
                  key={i}
                  className="h-[240px] sm:h-[280px] lg:h-[320px] overflow-hidden rounded-3xl border border-white/10 bg-secondary"
                >
                  <img
                    src={item.src}
                    alt=""
                    loading="lazy"
                    onError={(e) => ((e.currentTarget as HTMLImageElement).style.opacity = "0.2")}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function StackedCards() {
  const [active, setActive] = useState<Category | null>(null);

  return (
    <section id="work" className="relative px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto mb-16 max-w-6xl text-center">
        <div className="mb-4 font-display text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Selected Work
        </div>
        <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Multiple disciplines.
          <br />
          <span className="text-gradient">One design language.</span>
        </h2>
      </div>

      <div className="relative">
        {categories.map((cat, i) => (
          <StackCard
            key={cat.id}
            category={cat}
            index={i}
            total={categories.length}
            onOpen={() => setActive(cat)}
          />
        ))}
        {/* Spacer so last card has scroll runway */}
        <div className="h-8" />
      </div>

      <CategoryModal category={active} onClose={() => setActive(null)} />
    </section>
  );
}
