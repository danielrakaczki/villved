import { Variants } from "motion/react";
import { Motion, type MotionProps } from "./motion";
import type { HTMLElements } from "@/app/types/elements";

type InViewMotionProps<Tag extends keyof HTMLElements> = MotionProps<Tag>;

const WHILE_IN_VIEW_VARIANTS: Variants = {
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
};

export const InViewMotion = <Tag extends keyof HTMLElements>({ children, ...props }: InViewMotionProps<Tag>) => {
  return (
    <Motion variants={WHILE_IN_VIEW_VARIANTS} whileInView="shown" initial="hidden" {...props}>
      {children}
    </Motion>
  );
};
