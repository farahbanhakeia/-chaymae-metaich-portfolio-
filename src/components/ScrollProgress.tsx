import { motion, useScroll, useSpring } from 'framer-motion';

/** Fine barre de progression de lecture en haut de page. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[55] h-0.5 origin-left bg-gradient-to-r from-navy-500 via-emerald-500 to-gold-400"
    />
  );
}
