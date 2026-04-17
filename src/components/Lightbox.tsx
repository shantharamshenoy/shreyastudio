import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

export function Lightbox({
  src,
  title,
  onClose,
}: {
  src: string | null;
  title?: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 p-6 backdrop-blur-xl"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 rounded-full glass p-3 text-foreground transition hover:bg-white/10"
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18" /><path d="m6 6 12 12" />
            </svg>
          </button>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] max-w-[90vw]"
          >
            <img
              src={src}
              alt={title || ""}
              className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-elevated"
            />
            {title && (
              <div className="mt-4 text-center text-sm uppercase tracking-[0.2em] text-muted-foreground">
                {title}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
