"use client";
import { HTMLMotionProps } from "motion/react";
import * as m from "motion/react-m";
import type { ElementType } from "react";
import { HTMLElements } from "../types/elements";

type MotionProps<Tag extends keyof HTMLElements> = HTMLMotionProps<Tag> & {
  as?: Tag;
};

export const Motion = <Tag extends keyof HTMLElements>({ as, children, ...props }: MotionProps<Tag>) => {
  const Component = as ? (m[as as keyof typeof m] as ElementType) : m.div;

  return <Component {...props}>{children}</Component>;
};
