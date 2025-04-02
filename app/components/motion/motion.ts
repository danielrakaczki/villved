import type { HTMLElements } from "@/app/types/elements";
import * as motion from "motion/react-client";
import { createElement, HTMLAttributes, type Ref } from "react";

export type MotionProps<Tag extends keyof HTMLElements = "div"> = HTMLAttributes<Tag> & {
  as?: Tag;
  ref?: Ref<HTMLElements[Tag]>;
};

export const MotionComponent = <Tag extends keyof HTMLElements = "div">({ as = "div" as Tag, children, ...props }: MotionProps<Tag>) => {
  return createElement(as, props, children);
};

export const Motion = motion.create(MotionComponent);
