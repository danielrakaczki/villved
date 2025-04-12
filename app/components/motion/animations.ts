import type { Variants } from "motion/react";

export const WHILE_IN_VIEW_VARIANTS: Variants = {
  shown: {
    opacity: 1,
    translateY: 0,
    scale: 1,
  },
  hidden: {
    opacity: 0,
    translateY: 20,
    scale: 0.95,
  },
} as const;
