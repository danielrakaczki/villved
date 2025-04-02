"use client";
import type { HTMLElements } from "@/app/types/elements";
import { type HTMLMotionProps, LazyMotion, domAnimation } from "motion/react";
import * as m from "motion/react-m";
import type { ElementType, Ref } from "react";

export type MotionProps<Tag extends keyof HTMLElements> = HTMLMotionProps<Tag> & {
  as?: Tag;
  ref?: Ref<HTMLElements[Tag]>;
};

export const Motion = <Tag extends keyof HTMLElements>({ as, children, ...props }: MotionProps<Tag>) => {
  const Component = as ? (m[as as keyof typeof m] as ElementType) : m.div;

  return (
    <LazyMotion features={domAnimation} strict>
      <Component {...props}>{children}</Component>;
    </LazyMotion>
  );
};
