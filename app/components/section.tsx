import type { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "../utils";

type SectionProps = PropsWithChildren<HTMLAttributes<HTMLElement>> & {
  innerContainerProps?: HTMLAttributes<HTMLElement>;
};

export const Section = ({ children, innerContainerProps: innerProps, className, ...props }: SectionProps) => {
  const { className: innerClassName, ...innerContainerProps } = innerProps ?? {};

  return (
    <section className={cn("w-full", className)} {...props}>
      <div className={cn("mx-auto p-8 lg:max-w-screen-2xl", innerClassName)} {...innerContainerProps}>
        {children}
      </div>
    </section>
  );
};
