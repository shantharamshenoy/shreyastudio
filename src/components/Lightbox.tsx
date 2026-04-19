import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type LightboxItem = {
  src: string;
  title?: string;
};

export function Lightbox({
  items = [],
  index = 0,
  open = false,
  onClose,
}: {
  items?: { src: string; title?: string }[];
  index?: number;
  open?: boolean;
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(index);

  useEffect(() => {
    if (open) {
      setCurrentIndex(index);
    }
  }, [index, open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }

      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }

      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => Math.min(prev + 1, items.length - 1));
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [items.length, onClose, open]);

  if (!open || !items || items.length === 0) return null;

  const currentItem = items[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === items.length - 1;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4 py-6 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            onClick={onClose}
            className="absolute right-6 top-6 rounded-full glass p-3 text-white transition hover:bg-white/10"
            aria-label="Close lightbox"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>

          {!isFirst && (
            <button
              onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full glass p-3 text-white transition hover:bg-white/10"
              aria-label="Previous image"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
          )}

          {!isLast && (
            <button
              onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, items.length - 1))}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full glass p-3 text-white transition hover:bg-white/10"
              aria-label="Next image"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          )}

          <motion.div
            key={currentItem.src}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="mx-auto flex max-h-full w-full max-w-6xl flex-col items-center"
          >
            <div className="flex max-h-[82vh] w-full items-center justify-center overflow-hidden rounded-2xl">
              <img
                src={currentItem.src}
                alt={currentItem.title || "Preview"}
                className="max-h-[82vh] max-w-full rounded-2xl object-contain"
              />
            </div>

            <div className="mt-4 flex w-full max-w-4xl items-center justify-between gap-4 text-sm text-white/80">
              <div className="truncate">{currentItem.title || ""}</div>
              <div className="shrink-0">
                {currentIndex + 1} / {items.length}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}