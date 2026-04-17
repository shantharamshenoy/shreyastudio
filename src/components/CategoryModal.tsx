import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { Category } from "@/data/portfolio";
import { Lightbox } from "./Lightbox";

export function CategoryModal({
  category,
  onClose,
}: {
  category: Category | null;
  onClose: () => void;
}) {
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !lightbox) onClose();
    };
    document.body.style.overflow = category ? "hidden" : "";
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [category, onClose, lightbox]);

  return (
    <>
      <AnimatePresence>
        {category && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] overflow-y-auto bg-background/95 backdrop-blur-2xl"
          >
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto max-w-6xl px-6 py-16 lg:px-12 lg:py-24"
            >
              <button
                onClick={onClose}
                className="fixed top-6 right-6 z-10 rounded-full glass p-3 text-foreground transition hover:bg-white/10"
                aria-label="Close"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                </svg>
              </button>

              <div className="mb-12">
                <div className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground">
                  {category.number} — {category.pieces} pieces
                </div>
                <h2 className="mt-4 font-display text-5xl font-semibold lg:text-7xl">
                  <span className="text-gradient">{category.title}</span>
                </h2>
                <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                  {category.description}
                </p>
              </div>

              <div className="space-y-16">
                {category.subcategories.map((sub) => (
                  <div key={sub.title}>
                    <h3 className="mb-6 flex items-center gap-3 font-display text-xl">
                      <span className="h-px w-8 bg-primary" />
                      {sub.title}
                      <span className="text-xs text-muted-foreground">({sub.items.length})</span>
                    </h3>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                      {sub.items.map((item, i) => (
                        <motion.button
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.04 }}
                          onClick={() => setLightbox(item)}
                          className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-card transition hover:shadow-glow-soft"
                        >
                          <img
                            src={item.src}
                            alt={item.title}
                            loading="lazy"
                            onError={(e) => {
                              (e.currentTarget as HTMLImageElement).style.opacity = "0.2";
                            }}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                          <div className="absolute bottom-3 left-3 right-3 translate-y-2 text-left text-xs text-foreground opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                            {item.title}
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Lightbox
        src={lightbox?.src || null}
        title={lightbox?.title}
        onClose={() => setLightbox(null)}
      />
    </>
  );
}
