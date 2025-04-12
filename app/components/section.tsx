import type { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "../utils";
import { WHILE_IN_VIEW_VARIANTS } from "./motion/animations";
import { Motion } from "./motion/motion";

type SectionProps = PropsWithChildren<HTMLAttributes<HTMLElement>> & {
  innerContainerProps?: HTMLAttributes<HTMLElement>;
};

export const Section = ({ children, innerContainerProps: innerProps, className, ...props }: SectionProps) => {
  const { className: innerClassName, ...innerContainerProps } = innerProps ?? {};

  return (
    <section className={cn("w-full", className)} {...props}>
      <Motion.div
        variants={WHILE_IN_VIEW_VARIANTS}
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.2 }}
        className={cn("mx-auto p-8 lg:max-w-screen-2xl", innerClassName)}
        {...(innerContainerProps as object)}
      >
        {children}
      </Motion.div>
    </section>
  );
};
