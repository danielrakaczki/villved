"use-client";
import { domAnimation, LazyMotion } from "motion/react";
import { PropsWithChildren } from "react";

export const MotionWrapper = ({ children }: PropsWithChildren) => {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
};
